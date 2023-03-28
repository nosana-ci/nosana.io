---
title: 'Multisig Should Be the Standard Within Solana Program Development'
description: With Nosana, developers can easily create, test, and deploy smart contracts with multisig functionality.
img: /img/multisig_solana.png
createdAt: '2023-03-28'
---
Solana is a revolutionary blockchain platform that enables developers to create smart contracts (programs) that can run various applications and protocols. One of the features of Solana programs is that they are upgradeable by default, meaning that they can be modified or replaced by the program authority - the owner of the private key that can perform such an upgrade. 

This gives developers more flexibility and control over their programs but also introduces some challenges and risks. For example, how can developers ensure that their program authority key is safe and secure? How can they coordinate and agree on program upgrades with their team members or stakeholders? How can they avoid errors or vulnerabilities in their new program code that might affect their users or funds? When developers use multisig, many of these challenges and risks can be eliminated.

The increasing use of multisig in Solana projects is a bullish sign for the ecosystem as a whole. It indicates that projects are taking security and accountability seriously and are committed to building a robust and trustworthy ecosystem for stakeholders. As more Solana projects adopt multisig and other security mechanisms, it will help build confidence and trust in the ecosystem, driving further growth and adoption.

However, while multisig is an essential component of smart contract security, it can still be complex and time-consuming to implement with every deployment. We believe that's the reason we’re still seeing a lot of smart contracts with single-signed contracts. This is baffling in its own right since the risk of suffering enormous financial losses and/or damage to the reputation of a project is at stake. 

We offer a solution to this problem with our new SPL (Solana Program Library) multisig tool. It's a tool for developers to streamline their development process and build, test, and (re)deploy any smart contracts with multisig on Solana. Our engine allows developers to create and run decentralized CI/CD pipelines that are powered by the Nosana network. Now, developers can use multisig to increase the security and reliability of their smart contracts by requiring multiple approvals from different parties before execution.


### Multisig for Solana Programs
Multisig stands for multi-signature, which is a technique that requires multiple signatures or approvals from different parties before executing a transaction or action. By using multisig for your Solana programs, you can protect your program authority key by dividing it among multiple trusted parties (such as team members, investors, auditors, etc.). You can also speed up your program upgrade process by making proposals and having your multisig signers vote on them, avoiding a single point of failure by not relying on one person or device, and making your program upgrade history visible and verifiable online, which increases accountability and transparency.

Not all Solana programs use multisig. This exposes them to various pitfalls that could jeopardize their reputation, credibility, and sustainability. Some of these pitfalls are:

* Single point of failure: If a program uses a single-signature wallet or a centralized custodian for its funds, it creates a single point of failure that could be exploited by hackers or insiders. For example, if the private key to the wallet is lost or stolen, or if the custodian goes rogue or gets hacked, the program could lose access to its funds permanently. Multisig guards against fraud, insider trading, and other illicit activities that can harm the project and its stakeholders. 
* Human error: Without another set of eyes inspecting the transaction before it’s sent, there could be catastrophic consequences. For example, if the signer accidentally sends funds to the wrong address or approves a malicious transaction without verifying it properly. Multisig eliminates these situations by having many signers verify the legitimacy and correctness of a transaction before it executes.
* Lack of flexibility: If a program does not use multisig wallets with advanced features such as token vesting, payroll, scheduling, automation, governance, and more, it could limit its ability to grow and adapt to changing needs and opportunities. For example, a project may choose to implement a 3-of-5 multisig for large transactions, or a 2-of-2 multisig for smaller transactions. Multisig provides the flexibility that allows projects to balance security with usability and convenience.   

### How to Use Multisig for Your Solana Programs
We, like many others in the Solana Ecosystem, are big fans of the [Squads Protocol](https://squads.so). We think it's the best way to use multisig for your Solana programs. Nosana has chosen Squads as its multisig partner for Solana smart contract development because of Squads features that give teams and secure individuals full control over their programs and tokens. Being open-source, Squads is reliable and transparent, with an amazing interface to make setting up your multisig as easy as possible.

### Introducing Squads 
The beauty of Squads is that it supports any type of transaction that can be encoded as an instruction data buffer. This includes transferring tokens, creating accounts, invoking other programs, etc. It has an open-source web interface that allows users to create multisig accounts, add or remove signers, propose transactions, review transactions, sign transactions, and execute transactions. 

The Squads Protocol has excellent security features, such as:

* A threshold mechanism that allows users to set different levels of approval for different types of transactions
* A recovery mechanism that allows users to restore access to their multisig account if they lose their private keys
* A delegation mechanism that allows users to delegate their signing power to another account temporarily

Squads simplifies the user experience by allowing users to sign transactions with their existing wallets. They also have interoperability and composability covered; its users can interact with any Solana program or protocol. And with the Squads Multisig Program Library (SMPL), a collection of programs for the creation and management of multisig wallets on Solana, they've set a new standard for Solana multisig.

#### SMPL includes:
* Squads V3 on-chain program: a robust multisig wallet program that supports cross-program invocations (CPI), which allow multisig accounts to interact with other programs on Solana. It also supports custom quorum thresholds, member roles, transaction labels, notifications, analytics, and more. 
* Roles: a program that acts as a proxy and allows users to grant permissions or create limitations for keys added as signers on the multisig account. For example, Roles can allow a signer to approve only certain types of transactions or up to a certain amount of funds. Roles can also revoke or expire permissions based on time or conditions.
* Program manager: a program that provides a convenient way to save upgrade instructions for any program managed by a Squad, where members of the multisig can easily keep track of their programs and upgrade buffers.

SMPL is designed to be modular, extensible, and interoperable with any Solana program or wallet that supports SPL token accounts. SMPL is also open-source and audited by reputable security firms. 


### Nosana’s Multisig Flow
Our new multisig flow is a feature that allows developers to easily integrate multisig into their smart contract development workflow. As developers working on the Solana blockchain, we know how important it is to ensure the security of your code during the deployment process. That's why we've built multisig support to provide Solana devs with a secure and efficient way to manage their Solana multisig deployments as easily as a Git push. With our help, you can streamline your process and feel more secure about every new update that you're pushing to the chain. You’ll only have to set up your multisig pipeline once, and every (re)deploy will be easier. Not only does this save you valuable time and resources, but most of all, it ensures you never risk the security of your code. With Nosana’s intuitive interface and tooling, developers can easily input all the necessary parameters for multisig, test the features of the smart contract, and deploy the contract to the Solana network.


#### What Nosana’s Flow Means for Smart Contract development
With Nosana, developers can easily create, test, and deploy smart contracts with multisig functionality. With our engine, developers can:

* Analyze their program code and run integration tests to catch bugs and mistakes early on, on each code change. 

* Automatically deploy their program to a mainnet clone and to Solana’s Devnet to verify that things work as expected.

* Deploy their programs securely to Solana mainnet using a multisig upgrade. This is a seamless experience as our tools integrate directly with Squads program library.


### Best Practices for Using Multisig
There are some general best practices to keep in mind when implementing multisig into your Solana programs. The first one is setting up a reasonable threshold and number of signers. You should set up a threshold and signers that balance security and convenience. For example, if you have five signers, you can set the threshold to three or four to prevent any single signer from having too much power or any two signers from colluding. At the same time, you should avoid having too many or too few signers, as that can increase the risk of losing access or compromising the account. 

Another major best practice is to keep your private keys safe. The private keys are essential for providing signatures for the multisig account. We can’t stress this enough, you should keep your private keys safe and secure from hackers, thieves, and accidents. You can use hardware wallets, cold storage, or encrypted backups to store your private keys offline. 

Make sure you review transactions carefully before signing a transaction from a multisig account. You should check the source, destination, amount, and data of the transaction, as well as any attached programs in the instructions, to make sure it is legitimate and authorized. You should also communicate with other signers and verify their identities before providing your signatures. 

As your needs and circumstances change over time, you may want to update your threshold and signers for your multisig account. For example, you may want to add new signers if you onboard new team members or partners; remove old signers if they leave or lose trust; change the threshold if you want more or less security; etc.

Last but not least, manage your program upgrades with multisig. Otherwise, anyone who has access to your upgrade authority key can modify your program maliciously or accidentally. 


#### Multisig is a Vital Tool
Multisig is a vital tool for any Solana developer who wants to secure their programs and simplify their upgrade process. Nosana and Squads are revolutionizing smart contract development by making it easier, faster, and safer for developers to create and deploy any smart contract with multisig on Solana. By leveraging Nosana’s decentralized CI engine and Squads’ expert network, developers can build trustless applications without compromising on quality or security. Try it out today and see how it can improve your workflow and security!

Are you interested in automating your workflow with multisig? 

Go to [app.nosana.io](https://app.nosana.io) and experience how our engine can improve your workflow and security!
