Within a set of outcomes, an outcome is Pareto dominated if there exists an alternative that everyone prefers. All other outcomes are Pareto efficient.^2 

The Mount-Reiter diagram captures these essential parts of a mechanism graphically (figure 24.1). The diagram juxtaposes what we desire and what exists. Across the top, the social choice correspondence describes the outcomes that we normatively desire. Along the bottom, we have the mangle of reality. People apply their behavioral rules to send messages or take actions. An outcome function maps those actions into outcomes. Ideally, the lower, more complicated path on the bottom produces the same outcome as the top path, that is, the desired outcome. 

Figure 24.1: The Mount-Reiter Diagram Not all mechanisms succeed. For example, if the environment consisted of people with preferences for a public good, the social choice correspondence maps their preferences to the optimal level of that good. However, as we saw in Chapter 23 , a voluntary contribution mechanism, in which people pay for as much of the public good as they desire, results in each person providing units of the public good rather than the optimal _N_ units. When the outcome produced by the mechanism does not align with our objective, we say the mechanism fails to implement the social choice 

---

correspondence. The list of properties that we would like a mechanism to satisfy varies by context. We describe five here. First, we would like the equilibrium outcome of the mechanism to agree with our social choice correspondence ( _Pareto efficiency_ ). Second, ideally participants would apply dominant strategies, that is, their best actions would not depend on the actions of others. If so, we say that the efficient outcome is _dominant strategy implementable_. Third, we would not want to have to force people to participate in the mechanism ( _voluntary participation_ ). Fourth, if the mechanism involves a transfer or payment of resources, we do not want to have to put in additional money or destroy resources ( _budget balance_ ). Later in the chapter when we analyze mechanisms for deciding on a public project, we see that this may be difficult to satisfy. Last, in many cases, we desire _truth-telling_. We would like the messages that people send to reveal their true information or their true type. Game theorists call this _incentive compatibility_. In most cases of interest, no mechanism can satisfy all of these desiderata. Thus, one contribution of mechanism design has been in demonstrating what is possible and what is not. 

---

### Majority Rule and the Kingmaker Mechanism 

The first class of environments that we consider consists of people voting on a joint action or piece of legislation. We consider three people, whom we call Uma, Vera, and Will, who want to see a movie together and must decide between an action movie, a drama, and a comedy. The same environment would apply to three members of the military deciding whether to attack their opponent, defend their position, or cede the land. In either interpretation, the environment consists of three people with preferences defined over three alternatives. We write preferences using _orderings_. The ordering _action comedy drama_ corresponds to the action movie being most preferred, followed by the comedy and then the drama. We assume the following preference orderings: 

 Uma: action comedy drama Vera: comedy drama action Will: comedy drama action 

In this example, we take the social choice correspondence to be the set of Pareto efficient choices. Given the assumed preferences, the comedy and the action movie are Pareto efficient. The drama is Pareto dominated by the comedy. We first evaluate _majority rule_ as a mechanism. In the case of a tie, we assume the choice is made randomly. If people vote sincerely, the comedy receives two votes. However, suppose that Vera and Will both believe that the other two people will be split between the drama and the action movie and each votes for the drama. Suppose also that voting is sequential. Vera votes first and selects the drama. Will votes second and does the same. Uma’s vote no longer matters, but suppose that to avoid conflict, she also votes for the drama. The three votes constitute a Nash equilibrium. No person has any incentive to change his or her vote. In this case, 

---

majority rule does not always implement a Pareto efficient outcome. 

We next consider the _kingmaker mechanism_.^3 In this mechanism, one person is randomly selected to be the kingmaker. The kingmaker then selects a “king,” who determines the group’s choice. If Will is the kingmaker, he must pick between Uma and Vera. Whomever he chooses becomes king, and that person then selects the movie. If the person selected as king acts rationally, she will select her favorite movie. Therefore, the outcome will be Pareto efficient. For this reason, the kingmaker mechanism implements Pareto efficient outcomes. The mechanism has the added advantage that if any two people have the same favorite movie, the mechanism selects that outcome. To see the logic, once again, assume that Will is the kingmaker. If Uma and Vera prefer the same movie, then that movie will be selected regardless of Will’s choice of king. If, on the other hand, Will and Uma prefer the same movie, then Will should pick Uma. 

---

### Three Auctions 

Now that we have a basic understanding of mechanisms, we turn to the study of auctions. Most of us have some familiarity with auctions owing to the prevalence of online marketplaces like eBay. Auctions are used in other settings as well, including government contracts, used car markets, and most web advertising. We restrict attention here to a single seller and many bidders. The object could be a house, a car, tickets to a soccer game, or a piece of art. We also assume that each bidder assigns a unique value to the object to rule out ties. The Pareto efficient outcomes are those in which the object goes to the bidder with the highest value. Any other outcome will be Pareto dominated by that outcome. We now compare three types of auctions: ascending-bid, first-price, and second-price auctions. 

---

### Ascending-Bid Auctions 

In an _ascending-bid auction_ , the auctioneer calls out a price. Any bidder willing to pay that price raises her hand. The auctioneer raises the price until only one bidder remains. That bidder then pays the price at which the second-to-last bidder lowered her hand. In an ascending-bid auction, a rational bidder remains in the auction until the price reaches her value. Dropping out before the price reaches her value creates the possibility of not winning the object at a price at a good price. Remaining in the auction after the price exceeds the bidder’s value means the bidder could win the object but pay more than her value, resulting in a net loss. If all of the bidders act rationally, then the bidder with the highest value wins the object and pays a price equal to the second-highest bidder’s value. As an example, suppose that there exist three bidders with values $30, $60, and $80. When the price called out by the auctioneer exceeds $30, the first bidder exits the auction. When the price gets to $60, the second bidder exits. Therefore, the third bidder wins the auction and pays $60.^4 In a _second-price auction,_ each bidder submits a sealed bid. None of the other bidders see the amount. The object goes to the bidder who bids the largest amount. However, the bidder only pays an amount equal to the second-highest bid. The construction of the second-price auction makes telling the truth optimal. Imagine a bidder who values an object at $80 deciding how to bid in a secondprice auction. We can assume that the other bidders have already submitted their bids. The bidder must consider three possible cases: the highest other bid could be less than $80, equal to $80, or more than $80. In each case, the bidder does best by reporting her true value for the object. The logic becomes clearer when we work through an example. We will assume that the bidder’s value for the object is $80. We consider four cases for the highest submitted bids of the others: $70 (lower), $80 (equal), $85 (just above), or $90 (higher). Table 24.1 

---

shows payoffs for five bid values ranging from $65 to $95. 

 Table 24.1: Net Payoff as a Function of Various Bids Given a Value of 80 

As can be seen from the table, bidding 80 always gives at least as high a payoff as any other bid. Bidding her true value is always a best action (a _dominant strategy_ ). The same logic applies to all bidders, so all should bid their true values (the mechanism is _incentive compatible_ ). It follows that in a second-price auction, the bidder with the highest value wins the auction, and the amount paid equals the second-highest bidder’s value. In a _first-price auction,_ each participant submits a bid, and the highest bid wins, with the bidder paying an amount equal to that bid. As in a second-price auction, the bids are submitted simultaneously, so no one knows the others’ bids. A participant’s optimal bidding strategy in a first-price auction depends on the participant’s belief about the values (and therefore the likely bids) of the other bidders. We will assume that bidders do not know other bidders’ values but that they do have correct beliefs about the distribution over those values. To be specific, we assume that the bidders’ values are uniformly distributed between zero and $100 and that all of the bidders know this distribution. Bidders also know that all of the other bidders know this information as well. Using calculus, we can show that if the values of bids are uniformly distributed and if all bidders bid optimally, then with two bidders each should bid half her true value, and with _N_ bidders, each bidder should bid _N_ −1 _N_ of her value. A person in an auction with nineteen other people should therefore bid 95% of her true value. Given this bidding rule, the bidder with the highest value always wins the object. We can also show that the amount she pays equals the expected value of 

---

the second-highest bidder. Thus, the ascending-bid auction also produces an efficient outcome and the price corresponds to the 

expected value of the second-highest bidder.^5 Prior to writing down the model, many of us would have had the insight that the more bidders in the auction, the more a person should bid. Without the math, we would not have known the equilibrium bidding rule. The model gives us an exact expression for how much a person should bid. The amount increases in the bidder’s value, which implies that the bidder with the highest value will win the auction, just as in the other two auction formats. 

---

### Revenue Equivalence Theorem 

In each of the three auction formats, the bidder with the highest value wins. Therefore, all three mechanisms produce an efficient outcome. In addition, the expected amount paid by the winning bidder equals the value of the second-highest bidder. In other words, all three auctions produce the same expected revenue and allocate the object to the same person. That is remarkable. Even more remarkable, it can be shown that the winner and expected revenue are the same for any auction in which bidders act optimally, the highest bid wins the object, and a bidder with a value of zero receives no payoff. In other words, all auctions that satisfy those two conditions produce the same expected outcome, a result known as the _revenue equivalence theorem_.^6 

---