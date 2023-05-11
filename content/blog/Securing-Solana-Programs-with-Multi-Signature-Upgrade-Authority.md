---
title: 'Securing Solana Programs with Multi-signature Upgrade Authority'
description: A comprehensive guide for enhancing Solana program security
img: /img/upgrade_authority.png
createdAt: '2023-05-11'
---
Are you looking to set up a multi-signature upgrade authority for your Solana programs? Look no further! This tutorial will guide you through the process and help you set up an automated deployment pipeline for program upgrades.

By the end of this tutorial, you will have a production-ready deployment flow that is suited for any type of organization. You will learn how to configure a multi-signature program using Squads, set up a Nosana pipeline to build and test your code, and use Nosana to verify your build artifact and only deploy when needed. You will also learn how to review and execute program upgrades on Squads.

But first, let’s talk about why you might want to use a multi-signature upgrade authority. Programs deployed on the Solana blockchain can be updated by an upgrade authority. Most programs use a single key upgrade authority, which means that one keypair is allowed to update the on-chain code. While this is convenient during development, it exposes big security risks. If your key gets leaked, an adversary can gain full control over your program and the funds that are managed by it. A multi-signature removes these security concerns and is more convenient at the same time.

Before we begin, make sure you have the following prerequisites: a Solana program already deployed on the Solana mainnet, access to the current upgrade authority of your program, and the Solana Tool Suite installed on your machine.

## Step 1: Creating a Deployment Key for Solana Programs

When setting up a multi-signature upgrade authority for your Solana programs, the first step is to create a deployment key. This key will be used to initiate deployments, and it must have enough SOL balance to pay for the deployment.

**To create a deployment key, follow these steps:**

1. Open your command line interface and enter the following command: `solana-keygen new --no-bip39-passphrase -s -o ci.json`. This command will generate a new keypair and store the private key in the `ci.json` file.
    
2. To get the address of the new keypair, enter the following command: `solana address -k ci.json`. This will output the public address of the new keypair.
    
3. Copy the public address of the new keypair, as you will need it in a later step.
    

It is recommended that you create a new keypair specifically for the deployment key. Since this key is stored inside the CI/CD platform, its privileges and funds should be kept to a minimum.

## Step 2: Setting Up a Squad for Solana Program Upgrades

After creating a deployment key for your Solana programs, the next step is to set up a squad. A squad is a group of signers who will collectively approve program upgrades. Each member of the squad has their own private key, and program upgrades will only be executed if a specified number of signers approve the upgrade.

**To set up a squad, follow these steps:**

1. Open your browser and navigate to the Squads application at [https://v3.squads.so](https://v3.squads.so). Log in with your wallet and click on “Create Squad”.
    
2. Enter a name and description for your Squad.
    
3. In the next screen, add a new owner and fill in the deployment key from Step 1.
    
4. Add any other members that you would like to be part of the initial multisig owners.
    
5. Set the threshold to at least 2. This is recommended because the deployment key added as a second signer is considered a “hot key” and should not be able to authorize program upgrades alone.
    
6. Review the settings and create your Squad.
    
7. On the dashboard screen, you will see your Squad address. Save this address somewhere as you will need it later on.
    

## Step 3: Changing the Upgrade Authority for Solana Programs

After setting up a squad for your Solana programs, the next step is to change the upgrade authority of your program to the squad’s public key. This will authorize your squad to make updates to your Solana program.

**To change the upgrade authority, follow these steps:**

1. Navigate to “Developers -> Programs” inside the Squads navigation menu.
    
2. Click on “Add new program” and enter your program’s address.
    
3. Follow the instructions to change the upgrade authority.
    
4. Your Squad is now authorized to make updates to your Solana program, and the program has been added to your Squad UI.
    
5. Click on the program in the Programs list to bring you to the Upgrades page.
    
6. Copy the Squad Program address from the address bar of your browser. This is the address that is in the last component of the URL.
    
7. The URL will look like this: [https://v3.squads.so/developers/programs/&lt;ABCDEFG...12345&gt;/&lt;12345...ABCDEFG&gt;](https://v3.squads.so/developers/programs/<ABCDEFG...12345>/<12345...ABCDEFG>). Copy the last piece of URL after the / and keep it safe, as you will need it later.
    

## Step 4: Configuring the Nosana Pipeline for Solana Program Deployment

Nosana is a deployment tool that allows you to automate the deployment process for Solana programs. In this step, we will set up a pipeline that builds and tests our program, verifies the build artifact, and deploys the multisig buffer if needed.

**To configure the Nosana pipeline, follow these steps:**

1. Create a `.nosana-ci.yml` file in the root directory of your project.
    
2. Add the following contents to the file, making sure to fill in the four values at the top of the file:
    

```plaintext
global:
  image: projectserum/build:v0.27.0
  environment:
    PROGRAM_ID: ...  # Fill in your program's address
    SQUADS_AUTHORITY_PUBKEY: ... # Fill in your deployment key from Step 1
    SQUADS_MULTISIG_PUBKEY: ... # Fill in your Squad address from Step 2
    SQUADS_PROGRAM_PUBKEY: ... # Fill in your Squad program address from Step 3
    # Leave the following unchanged:
    PRIVATE_KEY_PATH: /root/.config/solana/id.json
    SOLANA_URL: mainnet-beta

  # Trigger pipeline on these branches:
  trigger:
    push:
      branches: '*'

jobs:
  # If you use a different build tool than Anchor, this should be customized
  - name: build
    commands:
      - anchor build
    artifacts:
      - name: programs
        path: target

# Uncomment this if you want to add Anchor test step
#  - name: test
#    secrets:
#      - TEST_KEY
#    commands:
#      - echo "${TEST_KEY}" > "${PRIVATE_KEY_PATH}"
#      - npm ci
#      - anchor test
#    resources:
#      - name: programs
#        path: .

  - name: deliver
    image: nosana/solana:v1.0.16
    secrets:
      - SQUADS_KEY
    commands:
      - solana config set --url "${SOLANA_URL}"
      - REMOTE_HASH="$(solana-verify get-program-hash "${PROGRAM_ID}")"
      - echo "On chain hash is ${REMOTE_HASH}"
      - LOCAL_HASH="$(solana-verify get-executable-hash "target/deploy/${PROGRAM_NAME}.so")"
      - echo "Compiled hash is ${LOCAL_HASH}"
      - |
        if [ "${REMOTE_HASH}" = "${LOCAL_HASH}" ]
        then
          echo Programs are equal, deployment cancelled
          exit 0
        else
          echo Continue deployment
        fi
      - echo "${SQUADS_KEY}" > "${PRIVATE_KEY_PATH}"
      - BUFFER_ACCOUNT="$(solana program write-buffer "target/deploy/${PROGRAM_NAME}.so" | cut -d ' ' -f2)"
      - if [ -z "${BUFFER_ACCOUNT}" ]; then exit 1; else echo "Buffer account is ${BUFFER_ACCOUNT}"; fi
      - solana program set-buffer-authority "${BUFFER_ACCOUNT}" --new-buffer-authority "${SQUADS_AUTHORITY_PUBKEY}"
      - |
        nosana-cli create-program-upgrade            \
          --name        upgradeProgram               \
          --private-key "${PRIVATE_KEY_PATH}"        \
          --buffer      "${BUFFER_ACCOUNT}"          \
          --spill       "$(solana address)"          \
          --network     "${SOLANA_URL}"              \
          --multisig    "${SQUADS_MULTISIG_PUBKEY}"  \
          --program     "${SQUADS_PROGRAM_PUBKEY}"   \
          --authority   "${SQUADS_AUTHORITY_PUBKEY}" \
          --approve
    resources:
      - name: programs
        path: .
```

#### This pipeline defines 3 steps:

1. The build step, where the pipeline compiles your code into an `.so` file using the `projectserum/build:v0.27.0` Docker image. You should change both the image and the build commands to fit your project.
    
2. The test step, where the pipeline tests your program before deployment. If any tests fail, the deployment will not continue. This step has been commented out in the example, but it is recommended to run your tests here.
    
3. The deployment step, where the pipeline creates a new buffer for your program and proposes it to your Squad. You will have to pay SOL as rent for the new buffer using the deployment key. The pipeline checks if the compiled code is different from the on-chain code to avoid deploying unnecessary buffers.
    

Note that this step does not change anything in your actual program; it only proposes an update in your Squad.

### Configuring Your Project for Solana Program Deployment with Nosana

After setting up a Nosana pipeline for your Solana program deployment, the next step is configuring your project in Nosana. This allows you to add your repository and install the Nosana app.

**To configure your project in Nosana, follow these steps:**

1. Open your browser and go to [https://app.nosana.io](https://app.nosana.io).
    
2. Click on “Log in with GitHub”.
    
3. Add your program’s GitHub repository and install the Nosana app.
    
4. Click “Add Selected” to add the repository to Nosana.
    

After completing these steps, you should be able to see your repository listed in the “Pipelines” section of Nosana.

![Listed Repositories](https://docs.nosana.io/assets/nosanarepo-ea64faa9.png)

### Adding the Deployment Private Key as a Secret to Nosana

After configuring your project in Nosana for Solana program deployment, the next step is to add the deployment private key as a secret to your Nosana project. This allows your pipeline to access the key and use it for deployments.

**To add the deployment private key as a secret to your Nosana project, follow these steps:**

1. In Nosana, navigate to “Manage -&gt; Secrets -&gt; New Secret”.
    
2. For the secret’s name, enter `SQUADS_KEY`.
    
3. For the secret value, paste the content of your `ci.json` file from Step 1.
    

After completing these steps, your pipeline will have access to the deployment private key and will be able to use it for deployments.

![New Secret](https://docs.nosana.io/assets/addsecret-9bc98274.png)

## Step 5: Deploying Your Solana Program with a Multi-Signature Upgrade Authority

With everything set up and ready, it’s time to deploy your Solana program using the new multi-signature upgrade authority and automated deployment pipeline. We will use a Nosana pipeline to build the program and prepare the buffer, and then use Squads to authorize the actual program upgrade.

**To deploy your Solana program, follow these steps:**

1. Make sure you have enough SOL balance in your deployment wallet to pay for the rent of the buffer. If not, transfer some SOL to it.
    
2. Trigger the pipeline by pushing changes to your code repository. The pipeline will automatically build and test your code, verify the build artifact, and initialize the buffer only if it’s necessary.
    
3. When the pipeline finishes, a transaction will await approval in your squad.
    
4. Once the Squads transaction is approved and executed, the program upgrade is finished.
    

Congratulations! You have successfully deployed your Solana program using a multi-signature upgrade authority and an automated deployment pipeline.

Note that the buffer rent can get quite expensive for larger programs, but you will receive the rent back once the upgrade is successful or canceled. Over time, your deployment account will only consume small amounts of SOL for transaction fees.

If you want to abort a multisig deployment created by this pipeline, you can remove the transaction in the Squads interface. However, this does not free the buffer or send the rent back to your deployment key. To close the buffer accounts after canceling the deployment in Squads, use the following command: `solana -k ci.json -u m program close --buffers`.

## Wrapping up: Multi-signature upgrade authority for Solana programs

In this tutorial, you learned how to set up a multi-signature upgrade authority for your Solana programs and how to use an automated deployment pipeline to streamline the deployment process. By using a multi-signature authority, you have greatly reduced the risk of a security breach, and by automating the deployment process, you have minimized the risk of human error.

By implementing these best practices, you can ensure that your Solana programs are always up-to-date and secure, and increase trust for your users. We hope this tutorial has been helpful, and we look forward to seeing your Solana programs in action!

If you’re interested in learning more about this topic, be sure to take a look at the documentation for both [Nosana](https://docs.nosana.io/) and [Squads](https://docs.squads.so/squads-docs/). Have questions or need to chat with support? Head over to our [Discord server](https://discord.gg/nosana)!