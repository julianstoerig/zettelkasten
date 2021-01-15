A collection of alternatives { A , B , C , D ,..., N } have associated rewards { π ( A ), π ( B ), π ( C ), π ( D ),..., π ( N )}. The actions of a population at time t can be written as a probability distribution across the N alternatives: ( Pt ( A ), Pt ( B ),..., Pt ( N )). The probability distribution changes according to the replicator equation : 

 where equals the average reward in period t. 

Consider a community in which parents choose between apple, banana, and chocolate chip pancakes. Assume that that all of their children have identical preferences and that the three types of pancakes produce rewards of 20, 10, and 5. If initially 10% of parents make apple, 70% make banana, and 20% make chocolate chip, the average reward equals 10. Applying replicator dynamics, the probabilities of choosing each of the three alternatives in period two are as shown in the table below: 

### The Replicator Equation 

Applying the replicator equation, in the next period twice as many parents make apple pancakes. This occurs because the reward for apple pancakes equals double the average reward. Half as many parents make chocolate chip pancakes because that reward equals half of the average reward. Finally, the proportion of parents making 

---

banana pancakes, which produce exactly the average reward, does not change. Combining all of these changes, we can show that the average reward increases to 11.5. As noted above, replicator dynamics includes a conformity effect (more popular alternatives are more likely to be copied) as well as a reward effect. In the long run, the reward effect dominates, because high-reward alternatives always grow in proportion to lower-reward alternatives. In replicator dynamics, the average reward performs a function similar to that of the aspiration level in reinforcement learning when the aspiration level adjusts to equal the average reward. The only difference is that in replicator dynamics, we calculate the average reward for a population. In reinforcement learning, the aspiration level equals an individual’s average reward. That distinction matters insofar as a population provides a larger sample. Thus, replicator dynamics produce less path dependence than reinforcement learning. In our construction of replicator dynamics, we assume that every alternative exists in the initial population. Given that the highestreward alternative always has a higher-than-average reward and its proportion increases in every period, (eventually) replicator dynamics 

converge to the entire population choosing the best alternative.^7 Thus, in a setting of learning the best alternative, both individual and social learning converge to the alternative with the highest reward. That will not be true in games. 

---