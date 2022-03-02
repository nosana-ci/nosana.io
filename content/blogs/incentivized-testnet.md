---
title: 'Nosana Incentivized Testnet'
description: Technical details of the Nosana Incentivized Testnet program
img: /img/testnet.png
createdAt: '2022-02-16'
---
The Testnet program is designed to put Nosana's CI features and tools to the test before they go live on Mainnet. Projects that participate in the Incentivized Testnet program will be able to acquire NOS tokens. A total of 5,000,000 NOS tokens are available for giveaway to participants in the Testnet Program.

This post will provide an overview of the decentralized technical architecture that Nosana is developing in order to realize the Incentivized Testnet. The Testnet Architecture consists of *4 main components:*

![](https://miro.medium.com/max/1314/1*nScrluOImXBYBNyElsD2KA.png)

Components
==========

Nosana Frontend
---------------

The Nosana Frontend will be responsible for displaying job data from the Nosana Backend and the Solana blockchain, as well as maintaining the Solana Wallet connections. These connections can be used to create new Nosana Accounts on the Solana blockchain, fund these accounts and set up new pipelines.

Nosana Backend
--------------

The project balances and repositories will be tracked by the Nosana Backend. It will set up a webhook in GitHub for each repository that will trigger a new job being posted to the Solana blockchain on every new commit for that repository.

Solana Smart Contracts
----------------------

On the Solana blockchain, Nosana will have several programs that interact with one another. This is the Incentivized Testnet's decentralized foundation. It will include a smart contract that will track Nosana Accounts and their NOS balances. These balances can then be used to post jobs to another smart contract.

Nosana Nodes
------------

The Nosana Nodes will poll the blockchain for new jobs. They can claim a free job and make a reservation for it. After running the job, the output result will be submitted back to the smart contract and can be picked up and displayed by the Nosana Frontend. After completing a job, nodes can claim their NOS rewards from their Nosana Account balances. Pipeline seconds and resource capacity are used to calculate rewards.

![](https://miro.medium.com/max/1274/1*ebJ3oBsFFeC8WL9T3-sBgg.png)

GitHub OAuth
------------

Testing will be one of the first types of jobs that projects will be able to run for their Github repositories. Projects can authorize the *Nosana Platform App *to access their public Github repositories.

![](https://miro.medium.com/max/1070/1*RiRPeJnV8vx2k3fXC6k3xQ.png)

![](https://miro.medium.com/max/1400/1*DnSl2g4VTu2Prf9o21atyA.png)

After authorizing Nosana, you can select the repository you want the Nosana Backend to automatically check for new commits. A new webhook endpoint will be added to your repository. This webhook will trigger a new job to run a pipeline on the code of every new commit. As long as you have enough balance in your Nosana Account (selected open-source projects are eligible to get NOS for free), Nosana Nodes can run these jobs for you. The results can also be viewed in the Nosana Frontend.

![](https://miro.medium.com/max/1400/1*bUkNNPB-5v960IoV-a2x6w.png)

Preview of a pipeline running on the Nosana Incentivized Testnet

Pre-register now open for Open source projects
----------------------------------------------

The use of the Nosana network by open-source software projects is incentivized. In other words, participants will be rewarded with tokens for running pipelines. This is how it works. Each participant will receive a limited amount of Testnet tokens. These tokens can only be used to run Nosana pipelines. A project gets incentivized with Mainnet tokens for each pipeline they run in Testnet with their free Testnet tokens. Because the address on Testnet differs from the actual NOS token on Mainnet, the Mainnet tokens will be distributed via Airdrop to participants' registered Mainnet addresses.

Projects can [pre-register now](https://docs.google.com/forms/d/e/1FAIpQLSfZ8lKQv_2L5ngsFhCfGO39EzQCuUEs7RFwQICf32zr7xAbQQ/viewform)!

---

You can learn more about the Incentivized Testnet on <https://nosana.io/platform>

Thanks for reading!