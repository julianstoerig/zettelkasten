In learning the best from a finite set of alternatives, replicator dynamics with an infinite population converges to the entire population choosing the best alternative. 

---

### Learning in Games 

We now apply our two learning models to games.^8 Recall that in a game, a player’s payoff depends both on her own action and on the actions of the other players. The payoff from a given action, such as cooperating in the Prisoners’ Dilemma, could be high in one period and low in the next depending on the action of the other player. We begin with the _Guzzler Game,_ a two-person game in which each player must choose whether to drive an economy car or a gas guzzler. Choosing the gas guzzler always produces a payoff of 2. Choosing an economy car when the other player also chooses an economy car produces a payoff of 3—both drivers have good lines of sight, require less fuel, and have no fear of being crushed by an enormous gas guzzler. If the other player chooses a gas guzzler, a player driving the economy car must be cognizant of the other driver. To capture that effect, we assume that her payoff falls to zero. We represent these payoffs in figure 26.1. 

Figure 26.1: The Guzzler Game The Guzzler Game has two pure strategy equilibria: both players can choose economy cars or both players can choose gas guzzlers.^9 The equilibrium in which both choose the economy car produces the higher payoff. It is the efficient equilibrium. 

---

Figure 26.2: Reinforcement Learning ( _γ_ = ) Probability of Choosing Guzzler We first assume that both players use reinforcement learning. Figure 26.2 shows results from four numerical experiments with the initial weights on each action set equal to 5, an aspiration level of zero, and a learning rate ( _γ_ ) of. In all four experiments, both players 

learn to select the gas guzzler, the inefficient pure strategy equilibrium. To see why this occurs, we need only look at the payoffs. The gas guzzler always returns a payoff of 2. The economy car sometimes returns a payoff of 3 and sometimes returns a payoff of zero. By assumption, both actions will be equally represented in the initial population. Therefore, the economy car produces an average payoff of only 1.5 to the gas guzzler’s payoff of 2. More players choose the gas guzzler, and the payoff from selecting the economy car decreases further. 

Figure 26.3: Replicator Dynamics (100 Players): Probability of Choosing Guzzler Next, we apply replicator dynamics to the same game. Again we assume an initial population consisting of equal proportions of people choosing gas guzzlers and economy cars. We further assume that each player plays the game against every other player in the population. People who choose the gas guzzler receive higher payoffs, and because initially equal numbers choose each action, in 

the second period more people will choose gas guzzlers.^10 Applying the replicator equation a second time, shows that the number of players choosing gas guzzlers would again increase. Continued application of the replicator equation results in the entire population choosing guzzlers. Figure 26.3 shows results from four runs of discrete replicator dynamics with 100 players. By assuming a finite 

---

population, we introduce a small amount of randomness. The proportions adopting each action may not be exactly equal to those stated in the replicator equation. In each of the four runs, all of the players choose the gas guzzler after only seven periods. Convergence occurs quickly because both the conformity effect and the reward effect push people to choose the gas guzzler after the first period. For example, when 90% of the population chooses gas guzzlers, the payoff from choosing an economy car will be less than one-sixth of that from choosing the gas guzzler. The conformity effect amplifies the reward effect, making social learning much faster than individual learning, which took, on average, more than 100 periods to reach 99% guzzlers. In this game, both learning rules converge to choosing the gas guzzler because it has the higher payoff when both actions are equally likely. Such actions are called _risk dominant_. Both learning rules favored the risk-dominant equilibrium over the efficient equilibrium. We next construct a game in which our two learning rules converge to different equilibria. 

---

### The Generous/Spiteful Game 

Our next game, _The Generous/Spiteful Game,_ builds on a muchanalyzed question about human behavior: Do we care more about our absolute or relative payoffs? A person who would prefer a $10,000 bonus when all of his colleagues receive $15,000 bonuses over an $8,000 bonus when all of his colleagues receive only $5,000 cares more about his absolute payoff. A person who would accept less money to have the largest bonus cares more about his relative payoff. An extreme preference for relative payoffs is captured in the story of the spiteful man and the magic lamp. 

---