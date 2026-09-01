---
title: My First E-Commerce Business Lasted Three Weeks
pubDate: 2026-09-01T12:55:00.000Z
description: I share my very first experience as entrepreneur
author: Omar Montoya
tags:
  - experiences
lang: en
image: ../../assets/blog/my-first-e-commerce-business-lasted-three-weeks/image.png
---
In August 2026, I tried launching my first e-commerce business. It was called **Mi Libro Sorpresa**, and although I still like the idea, I think this is as far as it goes, at least as a project I’m willing to keep putting money into.

The idea was relatively simple to explain: you filled out a form about your reading preferences, and I would find a book that had a high chance of being a good fit for you. Behind the scenes, it was a little more complicated. Based on your answers, I generated a technical profile with metrics for pacing, characters, complexity, type of story, how much you needed a strong hook, and several other things. Then, once you finished the book, your feedback could change those metrics. The more you used the service, in theory, the better the recommendations should become.

The technical side took me about a week. Obviously, I kept fixing things and polishing details afterward, but getting it to work wasn’t particularly difficult. I’m a programmer, I thought. That was exactly the part where I felt most comfortable. Things got complicated once I started selling.

Mi Libro Sorpresa cost 499 pesos with shipping included. I liked that price because it was easy to understand: you went in, paid 499 pesos, and that was it. I didn’t want to advertise a book for 410 pesos and then suddenly add another 150 or 200 pesos for shipping at checkout, because that really bothers me as a customer. You feel like something costs one amount, and at the very last step it turns out to cost something else.

The problem is that those 499 pesos were never really 499 pesos. Stripe took its fee, which left me with around 475 or 477 pesos. Then I had to buy the book. I usually looked for books priced somewhere between 249 and 375 pesos; some were cheap, others not so much, but the average ended up being around 350 pesos. Out of those 477 pesos, I was already down to about 127, and I still had to ship the box.

I was lucky enough to find a SkyDropX promotion where shipping cost around 50 pesos. SkyDropX gets discounted rates from different shipping carriers, and this particular promotion lasted either one month or for the first 50 shipments, whichever came first. For my orders, shipping ended up averaging around 54 pesos depending on the destination. Take 477 pesos, subtract 350 for the book and another 54 for shipping, and you’re left with 73 pesos.

I still had to pay for the boxes, paper, printing, the letter, labels, and all those little expenses that seem insignificant individually until you multiply them by every order. When I actually did the math, I was making around 20 or 30 pesos per sale. I sold 17 orders in about two and a half weeks and, before advertising, my total profit ended up being somewhere around 300 to 350 pesos.

I think that was when I really started to understand the difference between making sales and making money. Because I did make sales. During those weeks, watching orders come in felt incredible: I prepared the boxes, chose the books, printed the letters, and knew that someone I had never met had gone to a website I built, answered my questions, and entered their card information to buy something I was personally going to prepare for them.

The problem was that I spent almost 5,000 pesos on Meta to get those people.

## CAC and the Promise of Repeat Purchases

One of the terms I repeated the most during those weeks was **CAC: Customer Acquisition Cost**. Basically, how much money you have to spend to get one person to actually buy from you. My CAC was somewhere around 250 to 300 pesos depending on the campaign and how I calculated it.

Meta showed my ads to tens of thousands of people. Around 100 people registered on the platform, and 17 of them placed an order, so roughly 17% of the people who registered ended up buying. I don’t think that number is particularly bad on its own; the problem becomes obvious when you compare it to the margin. If I make 30 pesos on an order and it costs me 250 pesos to acquire that order, I can sell a lot and get excited every time I see Stripe, but I’m still losing money.

From the beginning, my reasoning was that the first purchase didn’t necessarily need to cover the entire CAC. If acquiring Juan costs me 200 pesos and Juan buys four times over the following year, those 200 pesos can be spread across four orders, bringing the effective acquisition cost down to 50 pesos per purchase. That was one of the foundations of the idea, and Juan’s profile would also improve with every book. I would already know what he had read, what he liked, and what he hated, so every subsequent order should theoretically be better.

The issue is that the business lasted around three weeks, so I never had enough time to test that part. I didn’t get any repeat purchases during that period, which isn’t particularly surprising considering not even a month had passed, but testing the hypothesis meant continuing to spend money. I don’t want to put in another 5,000 pesos, then another 5,000, and then another 5,000 just to discover six months from now that maybe repeat purchases finally make the whole thing viable. (They probably wouldn’t anyway, because the price of the package was going to have to increase sooner or later.)

On top of that, the shipping promotion was going to end. An order that barely left me 20 or 30 pesos today could turn directly into a loss even before accounting for advertising.

I could raise the price, and that’s probably what I would have to do if I wanted to continue. But if I go from 499 to 600 pesos, then I have to find out how many people are still willing to buy, and acquiring those customers would probably become more expensive too. You change one variable and three others fall out of place.

I also tried a two-book package for around 900 pesos. That product made much more sense financially because I could send two books while paying for essentially one shipment. The customer saved some money compared to placing two separate orders, and I had much more room to breathe. Maybe, if I had kept going, I would have discovered that this was the actual product and selling one book at a time was simply a bad idea. Maybe, but I don’t want to keep paying to find out.

## Some Problems Can’t Be Fixed With Code

I also had two orders where I sent customers books they had already read. I consider the first one my responsibility because my system still didn’t have a good enough way for someone to share their entire reading history with me. After that happened, I added the option to share a Goodreads profile.

For anyone unfamiliar with it, Goodreads is basically something like Letterboxd, but for books. You can keep track of what you’ve read, rate books, write reviews, and maintain a reading history. I changed the flow so users could share their Goodreads profile, manually add books they had read, and contact me if they had a large personal library. I provided WhatsApp, Instagram, Facebook, and email. If you let me know, I could go over what you had already read with you and reduce the risk of sending a duplicate.

Then it happened again, but the second time was different. One customer had registered very few books, and in her answers she had mentioned an author she really liked. I found a book by that author that matched her profile very well, sent it to her, and on the same day the package arrived she messaged me to say she had already read it.

That one frustrated me quite a bit. I completely understand that a customer isn’t going to use a system exactly the way I imagined; people skip instructions, leave fields blank, and interpret things differently. But by that point there were several tools specifically designed to prevent this problem, and the information simply wasn’t provided. In this second case, I do think the responsibility was on the customer.

And again, the problem becomes financial. If you make 30 pesos on an order and compensating for a mistake costs you 100 pesos, you’ve just wiped out the profit from several orders at once. In the first case, I gave the customer a 100-peso coupon for a future purchase, and even that can be justified by thinking that if the person buys again, I don’t have to spend another 200 or 250 pesos acquiring them. The CAC gets spread across multiple orders, and everything is connected.

After the second duplicate, I changed the flow even further and added an explicit confirmation stating that the customer accepts responsibility if they fail to correctly provide the books they’ve already read. That was the last straw. The project was already difficult economically, and now I also had to design processes to protect myself from information the customer themselves could choose not to provide.

And I haven’t even talked about taxes yet. That’ll be the final course in this little adventure.

## I Built an MVP and Got an Answer

In my master’s program, we talk a lot about validating projects and building an MVP. I had many more ideas for Mi Libro Sorpresa: public profiles (which I did manage to build), book clubs, group recommendations, reading history, and several features surrounding what would essentially become a social network for readers.

I didn’t build all of that. I started by building what I needed to sell: the form, the profile, the recommendation, the payment, and the order. And it sold. Seventeen orders in three weeks obviously don’t make this a successful company, but they were enough for me to start seeing where the real problems were.

The funny thing is that before starting, I could have opened Excel and written something like this: 499-peso price, 350-peso book, 150-peso shipping, Stripe fee, advertising. I probably would have seen the problem. In fact, I did run the numbers before starting, but I justified a lot of things with future scenarios: repeat purchases, better campaigns, lower CAC, cost optimization, and higher volume.

Everything can improve later on paper. It feels very different once the money actually starts leaving your bank account.

So far, including advertising, materials, boxes I still have sitting around, and other things I bought to get started, I estimate that I lost somewhere between 4,000 and 7,000 pesos. And I still have boxes. A lot of them. In case anyone wants to buy some boxes from me.

I have enough boxes now to serve as a physical reminder of my first practical lesson in business administration.

I also still have to deal with the tax side because I never even got around to changing my tax status with the RFC. I spent time reading about tax regimes, invoicing, taxes, and everything else, but by the time I got to that part, I was already asking myself why I wanted to add another layer of problems to a business that barely made any money before taxes.

I know a company can’t stop every time a problem appears. If something breaks, you fix it; then something else comes up, and you fix that too. I assume that anyone who manages to build a large company has gone through hundreds of situations like this. The question I had to ask myself was whether it was worth continuing to solve them for this particular project.

In my case, I don’t want to invest more money trying to prove that I can make a product profitable when it currently isn’t.

## The Competition Didn’t Give Me Many Answers Either

During those weeks, I also spent time looking at what other companies were doing. Tribu sells similar products and has options around 500 pesos, although shipping is charged separately. I have absolutely no information about their internal numbers, and I have no idea whether they’re doing well or badly. After doing my own calculations, I’m simply curious about how they make the numbers work. I assume that selling cheaper books and charging shipping separately gives them a huge amount of breathing room.

I also bought a product from Tinta, Gandhi’s service, to try the experience myself (that’s where the review I wrote of Vaim came from). My experience with their customer support was terrible. I tried contacting them through several channels and, when they finally responded, I felt like they were annoyed to have to deal with me, almost as if they were doing me a favor. After that experience, I would never buy from Gandhi online again.

That made me think one of my differentiators could be customer support. I actually talked to customers personally. If there was a problem, I solved it. If I needed to go through more books, I did it, and if I had doubts about a recommendation, I searched again. I liked doing that, but it brings me right back to the same question: how much personalized service can you offer on a sale that ultimately earns you 30 pesos?

## I’m Leaving It as a Zombie

I don’t want to shut down Mi Libro Sorpresa. The website will stay online, and if someone finds it organically and buys something, I’ll fulfill the order. Once the shipping promotion ends, I’ll probably have to adjust the prices because I won’t be able to absorb that cost in the same way.

What I have decided is that I’m not putting another peso into advertising, and I don’t want to keep making posts every day just to feed an Instagram account while hoping to get a sale every once in a while.

During these weeks, I also discovered something I wasn’t expecting: I liked e-commerce. I liked preparing the packages, choosing what went inside them, and wondering what the person would think when they opened the box. When someone told me they were enjoying the book I had chosen for them, it felt really good.

Thinking about it, I actually liked that kind of thing as a kid too. I used to play at preparing things, and I even enjoyed pretending I was making hamburgers to sell. There’s something about preparing a physical product, arranging everything, and handing it to someone that I genuinely find fun.

I’m also starting to enjoy reading again after many years. When I was around 15, I used to skip classes (anyone who has known me for years already knows this very well) just to go read by myself. I had mostly lost that habit, and this project helped me recover some of it, so stopping does make me sad.

It was my first business venture and it lasted almost no time at all, about three weeks. It sounds almost ridiculous to write that, but continuing for another six months just so I can say “I didn’t give up” seems like an even more ridiculous reason to lose money.

Now I’m going back to **Chip**, a personal finance app I had already developed and put on hold. It’s a project I’m more interested in and, after spending three weeks buying boxes, checking book prices, comparing Amazon with bookstores, printing things, and calculating shipping costs to different states, I’m extremely grateful that it’s a digital product.

That doesn’t mean Chip is going to work either. Maybe nobody wants to pay for it. Maybe I spend money on advertising again and discover that its CAC is terrible too. Maybe a few months from now I’ll be writing another post explaining why that project didn’t work either. The difference is that now I’m going into it with a few thousand pesos less in my pocket and a lot more information than I had three weeks ago.

I already knew the theory behind MVPs, I knew what CAC meant, and I knew perfectly well that revenue wasn’t the same thing as profit. I had read all of that many times. Now I know what it feels like to watch a 499-peso sale come in, split that money between Stripe, Amazon, a shipping company, Meta, and packaging materials, and discover that you have thirty pesos left at the end.

I think I paid to learn. And I still have Mexico’s tax authorities left to deal with.
