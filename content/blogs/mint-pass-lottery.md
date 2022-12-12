---
title: 'Nosana Mint Pass Lottery'
description: At last, the Nosana Mint Pass Lottery date is set! 
img: /img/mint-pass-medium.png
createdAt: '2022-09-23'
---


The lottery will take place on Monday, September 26, 2022, at 1 PM UTC. This article will describe exactly how the lottery works, what you can do with a mint pass, and how to get your hands on one of these rarities.

What is a Mint Pass?
=====================================================
Every mint pass can be swapped one-to-one for a Burner Phone NFT in the Nosana Vending Machine. It will be completely random which phone you receive for your pass. The vending machine will be stocked with burner phones several days after the distribution of Mint Passes, but you can have a look at the machine here: nft.nosana.io

Participating in the Lottery
=====================================================
Mint passes will be distributed to users that have staked their NOS tokens. To participate, you just have to stake tokens at [https://app.nosana.io/stake](https://app.nosana.io/stake).

After staking, you will see your tier and the number of your lottery tickets on the dashboard. Staking more tokens can get you into a higher tier, giving you more tickets. The top 20 stakers are guaranteed to receive a mint pass. After that, 30 mint passes will be raffled off to the remaining ticket-holding stakers, where each staker can only win once.

A Fair Lottery
=====================================================
Nosana’s guiding principles are: *public*, *verifiable computations*, and *open source*. It is important to us that this lottery happens in a completely fair and transparent way, which unfortunately is not a common thing in the NFT space. Our lottery algorithm is open source and can be viewed here: [draw-mint-pass-lottery.ts](github.com/nosana-ci/nosana-programs/blob/main/scripts/draw-mint-pass-lottery.ts). It was built so that anyone could replicate the lottery and its results on their own device. This is roughly how it works:

* The script waits and polls the Solana blockchain for the first block after ==26-09-2022T13:00:00==
* It will make a snapshot of the state of all stakers at this point
* It will collect the hash of this block and use it to seed a pseudorandom number generator (PRNG)
* It will perform a raffle using the stake snapshot and the seeded PRNG
* A distribution file is generated for sending mint passes to the winners

Shortly after, we will publish the block height and snapshot used by the raffle. This way, anyone can verify and replicate the results at home.

By using this method for our mint pass lottery and sharing it, we are hoping to inspire other projects to adopt more fair and transparent methods for their own lotteries.
Nosana’s guiding principles are: public, verifiable computations, and open source. It is important to us that this lottery happens in a completely fair and transparent way, which unfortunately is not a common thing in the NFT space. Our lottery algorithm is open source and can be viewed here: draw-mint-pass-lottery.ts. It was built so that anyone could replicate the lottery and its results on their own device. This is roughly how it works:

 ![Nosana Burner Phone NFT Vending Machine](/img/nosana_vending_machine.png)

Burner Phone NFTs
=====================================================
Burner phones are an extremely exciting update to the Nosana Network. The NFTs not only grant access to operate a node on the Nosana Network, but they also grant access to special community channels, can be used as avatars on the network, and give network boosts to their holders. Over the weekend, further information regarding these NFTs will be provided as a lead-up to the launch, so stay tuned.

Are you ready to stake for your chance at a Nosana NFT Mint Pass? Let’s go! → [app.nosana.io/stake](https://app.nosana.io/stake)

Follow us on Twitter → [Click here](https://twitter.com/nosana_ci)

Join our Discord Server → [Click here](https://discord.gg/nosana)

Thanks for reading!

