The **Shapley value** uniquely satisfies the following axioms: 

**Zero property:** If a player’s added value equals zero for any coalition, the player’s value equals zero. 

**Fairness/Symmetry:** If two players have the same added value for any coalition, then those players have the same value. 

**Full allocation:** The sum of the values of the players equals the total value of the game, _V_ ( _N_ ). 

**Additivity:** Given two games defined over the same set of players with the value functions _V_ and , the value of a player in the game ( _V_ + ) equals the sum of that player’s values in _V_ and. 

---

### Shapley Values and the Alternative Uses Test 

We now apply Shapley values to a cooperative game based on the _alternative uses test_. In the test, each person must come up with novel uses of a common object, such as a brick. The test measures a person’s creativity based on the number of uses or categories of uses that she generates. When we calculate Shapley values, we find that they produce an intuitive scoring rule. Imagine three players, Arun, Betty, and Carlos, who each think up alternative uses for blockchain, a distributed ledger technology, shown in figure 9.1. Arun and Carlos each think of six ideas, giving each a creativity score of 6, and Betty thinks of seven, making her score 7. The group’s total creativity equals 9, as there are nine unique ideas. To compute the Shapley values, we could write down all six possible orders in which the group could form, give individuals credit only for unique ideas added to the group, and then average over all six cases. Or we can notice that when we are computing Shapley values, the probability of someone getting credit for an idea equals 1 divided by the number of people who propose the idea. Anyone who proposes a unique idea always receives full credit. In the figure, we denote those ideas, such as Arun’s idea of art transactions, in **bold** font. If two people think of an idea, each has a one-in-two chance of joining the group first. Similarly, if all three people think of an idea, each has a one-in-three chance of joining first. It follows that allocating credit equally among people who thought of an idea produces Shapley values. Thus, it is the unique way to assign values that satisfies the four axioms. These values show that Arun, though he did not have the most ideas, adds the most value.^2 

---

Figure 9.1: Shapley Values and the Alternative Uses Test 

---

### The Shapley-Shubik Index 

We next apply Shapley values to a class of voting games. In a voting game, each player (representing a political party or official) controls a fixed number of seats or votes, and a majority of those seats or votes are necessary for taking an action. In voting games, the Shapley value is referred to as the _Shapley-Shubik index of power_.^3 By calculating the index, we find there does not exist a direct translation between the percentage of seats (votes) a party controls and its power. To compute power indices, we consider all possible orderings of parties being added to a coalition. If a party joins the coalition and creates a strict majority, the party’s added value equals 1. In those cases, the party is said to be _pivotal_. Otherwise, the party adds no value. Consider a parliament with 101 seats allocated across four political parties as follows: party _A_ controls 40 seats, party _B_ controls 39 seats, and parties _C_ and _D_ each control 11 seats. In this example, party _A_ cannot be pivotal if it arrives first or last. If party _A_ arrives second or third, it is always pivotal. Therefore, it has a power index of. If party _B_ arrives first or last, it also adds no value. If _B_ arrives 

second, it is pivotal only if party _A_ arrived first. If party _B_ arrives third, the only way that it can be pivotal is if party _A_ arrives last. Each of those combinations of events also occurs with probability. Therefore, party _B_ ’s power index equals. Parties _C_ and _D_ are 

pivotal in a similar set of cases as party _B_. Neither can be pivotal if it arrives first. Each is pivotal if it arrives second only if party _A_ arrived first. Each is also pivotal if it arrives third when party _A_ arrives last. Thus, each of those parties also has a power index of. 

 Figure 9.2: The Disconnect Between Seats and Power 

---

The example reveals a possible disconnect between the percentage of seats a party controls and its power. Parties _A_ and _B_ control almost identical numbers of seats, but _A_ has three times the power of party _B_ , which has no more power than party _C_ or party _D_. Similar allocations of seats occur often in real-world parliamentary systems. As a result, parties with few seats can often control substantial power. Israel’s parliament, the Knesset, has 120 seats. In 2014, a coalition led by the Likud party had 43 seats. The opposition coalition had 59 seats (just shy of a majority), and an Orthodox coalition held eighteen seats. All three parties have the same Shapley-Shubik index. This does not mean that the small Orthodox parties have the same power in practice—all models are wrong. It does suggest that the Orthodox parties had more influence than would be anticipated from their seat count. An even more stunning disconnect between seats and power occurred with the Nassau County Board of Supervisors in New York in the mid-1960s. At that time, the board consisted of six members, and each controlled votes proportional to the population of the districts she represented, as shown in figure 9.3. A majority vote required 58 or more of the 115 votes. Notice that any two of the three largest districts constituted a majority. It follows that the votes of the other three districts could never be pivotal. The other district representatives therefore had no power. The North Hempstead representative controlled 21 votes, more than 18% of the total yet could not influence a voting outcome. 

Figure 9.3: Votes but No Power The Shapley-Shubik index of power can be applied to any situation with unequal allocations of seats or votes, such as the European Union or the Electoral College. That does not mean that it is necessarily an appropriate measure in all cases. The fifty states 

---

can be arranged in 50! (3 _×_ 1064 ) different orders. Given regional correlations in voter preferences, not all coalitions are possible. Mississippi may not be likely to form a coalition with New York. To make a more useful measure of power we would need to privilege some coalitions over others or rule out some coalitions altogether. Later in the book, we describe Myerson values, which allow us to do the latter, to rule out some coalitions. 

---

### Summary 

An individual’s Shapley value corresponds to her average added contribution to coalitions as they form. It is a measure of added value. In voting games, Shapley value can also be interpreted as a measure of power. It may not always be the best measure of power. An individual’s LOTB value may be the better measure of power in situations where a group has already formed, as that measures how much each individual could extract through a threat to leave, assuming that threat is credible. In those cases, the coalition wants to reduce LOTB values. Creating a coalition with a high value but low LOTB values can be accomplished by increasing the coalition size. Adding extras makes existing members expendable and drives their LOTB values to zero. We see this in practice. Employers hire excess workers to reduce worker power. Manufacturing firms rely on multiple competing suppliers of intermediate goods. Governments award contracts to keep multiple contractors in business. The same intuition applies to the creation of coalitions in legislatures. Congressional lobbyists and party leaders want to pass legislation (an outcome of value) but restrict the power of individual representatives and senators.^4 If a lobbyist makes contributions to the minimal number of representatives and senators necessary to win a vote, then each representative and senator has an enormous LOTB value. Any could switch his or her vote and flip the outcome of the bill. The lobbyist can reduce their LOTB values by buying a supermajority of representatives and senators. The same logic implies that a party that holds a slim majority may be difficult to lead. Every member has a large LOTB value. Within a strong majority, no representative or senator has much power. If we broaden our perspective and contemplate power in the modern connected world, we find it useful to apply both LOTB values and Shapley values. The power of an individual, organization, corporation, government, or terrorist group depends partly on how 

---

much damage it could do by deviating from a cooperative regime (LOTB value). A sophisticated computer hacker, a person capable of destroying a substantial amount of wealth, has enormous power. This holds even though the hacker lacks the ability to add value. In thinking about the value of corporations or other multinational organizations, Shapley value may be a better measure. In these cases, exit may not be a viable option. An energy company participates in an energy generation game, an energy distribution game, a real estate game, an environmental game, an employment game, and so on. The company’s total added value equals the sum of its added values across the various domains. Thinking of power and value through the lens of cooperative game theory provides powerful, basic insights. It also points to where we should look next. In politics and business, not all coalitions are plausible. The model assumes that they are. A richer model would take into account the connectedness of the world. Consulting companies and financial firms buy software from tech companies. Tech companies and consulting companies invest and borrow through financial firms. And financial firms and tech companies hire consultants. Within those webs, each actor adds value and wields power. To calculate power in these settings requires models of networks, where we turn next. 

---