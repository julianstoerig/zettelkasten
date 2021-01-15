Each of N players proposes a level of support in {0, 1,... 100} in each period. The player closest to of the average level of support wins a prize in that period. 

The game can be used to explain reductions in state government spending for social programs such as support for the indigent. No governor or state legislature wants to appear heartless. Yet none wants to offer lavish programs that attract indigent populations from neighboring states. Each state wants to offer some funding, but less than the average. The same incentives exist for countries choosing environmental regulations or tax rates. Countries prefer to be less restrictive on environmental policies and have lower than average taxes in order to attract business. Whether the Race to the Bottom Game attains an equilibrium depends on the behavioral rules of the players. If, for example, players choose random levels of support, then outcomes will be random. Random levels would not make sense given the game’s payoff structure. Here we assume the following behavioral rule that 

aligns with experimental findings.^1 In the first period, we assume that every player chooses a random level of support less than 50. Thereafter, each player chooses a level at least 1 less than of the previous period’s average. If that number is less than zero, then each player chooses zero. It is straightforward to show that the maximum level of support from any player satisfies the conditions for a Lyapunov function. The maximum level of support has a minimum at zero. And in each period the maximum level of support falls by at least 1 given that levels of support take integer values. Thus, at some point, everyone proposes zero support. The players have raced to the bottom. In this example, the model produces an undesirable result. To prevent a 

---

race to the bottom requires changing the game. To increase support for the indigent, a federation could shift to federal funding or impose 

a floor on spending.^2 As an aside, suppose that we allow players to choose any real number in the interval between zero and 100 rather than integer values. If in each round, players chooses a level of support equal to of the previous mean, the average level of support will decrease over time but it will never attain the equilibrium of zero. As in Xeno’s paradox, the process would get closer and closer to zero but never reach it. Thus, we must assume a minimal decrease ( _A_ ) to ensure an equilibrium. 

---

### Equilibrium in the Local Majority Model 

We now return to the local majority model. We define our Lyapunov function to be the _total disagreement_ in the population: the sum over all cells of the number of neighboring cells in the opposite state. To prove the model attains an equilibrium, we must show that if a cell changes its state, then total disagreement falls by at least a fixed amount. The algebra is not too complicated. First, if a cell changes its state, it must have been in a minority relative to its neighbors. We know that at least five of its neighbors were in the opposite state and at most three were in the same state. Therefore, when the cell switches states, the number of cells that disagree with the cell decreases by at least 2 (see figure 16.1). To calculate the change in total disagreement, we must add in the changes to total disagreement contributed by neighboring cells. The five or more cells that now agree with the cell’s state have lower disagreement (by 1 each) and the three or fewer cells that previously agreed now have higher disagreement (by 1 each). Therefore, total disagreement across all neighboring cells falls by at least 4. 

Figure 16.1: Total Disagreement Falls by 4 in Local Majority Model We have therefore proven that even though some cells may have more disagreement, total disagreement satisfies the conditions for a Lyapunov function. The local majority model must, therefore, converge to an equilibrium—not just sometimes or most of the time, but all of the time. We also know the rate of convergence. Any time that a cell changes its state, total disagreement falls by at least 4. It follows that a configuration with total disagreement of 100 must reach an equilibrium within 25 periods. More generally, a configuration with total disagreement of _D_ must reach equilibrium in 

---

 periods. As noted in Chapter 15 , the equilibrium reached will 

almost always be an inefficient pattern of splotches that includes frustrated cells. 

---

### Self-Organization: New York and Disney World 

Our next application uses Lyapunov functions to prove the existence of an equilibrium in the _self-organizing activities model_. The model consists of a population of individuals and a set of activities that each individual can do during the day. The key assumption of the model will be that each person prefers less-crowded activities. Fewer people means less wait for the machines at the gym and a shorter line at the bakery or coffee shop. This model was motivated by a quote by Thomas Schelling from _Micromotives and Macrobehavior_ in which he describes amazement at how cities self-organize—how traffic patterns, the flow of pedestrians, the number of people in parks and restaurants, and store inventories all reach appropriate levels with little central planning. How does the corner store always have four bottles of pure maple syrup from Cedarville, Michigan? How come the bakery runs out of fresh rye bread each day about twenty minutes before closing time? This order emerges even though the city’s diverse actors—the tourists, store owners, residents, and delivery people—have limited information about the entire city. 

---