Each of N players chooses to be generous G or spiteful S. 

### Payoff( G , NG ) = 1 + 2 · NG 

### Payoff( S , NG ) = 2 + 2 · NG 

If we apply reinforcement learning in the Generous/Spiteful Game, the players learn to be generous. To see why, suppose that the players have almost converged to an equilibrium, with _NG_ of the 

players choosing to be generous. A spiteful player earns a payoff of 2 + 2 · _NG_. This will be his aspiration level. If he chooses _G_ , which 

occurs with small probability, he earns a payoff of 1 + 2 · ( _NG_ + 1) = 3 

+ 2 · _NG_ , which is above his aspiration level. He will become more 

likely to be generous. By continuing to apply this logic, we see that all players will learn to be generous. If we apply replicator dynamics, the population learns to be spiteful. This can be seen by referring to the replicator equation. In every period, players who choose to be spiteful earn higher payoffs than players who choose to be generous. Therefore, the proportion of players choosing to be spiteful increases in each period. These findings highlight a key difference between individual and social learning. Individual learning leads people to choose the better action, so people learn a dominant action if one exists. Social learning leads people to choose actions that perform well relative to other actions. In most cases, those actions would also produce higher payoffs. That is not the case in the Generous/Spiteful Game, where the spiteful action has a higher average payoff, while the generous action is dominant. Notice that our analysis arrives at the rather paradoxical finding that if people learn individually, they learn to act more generously than if they learn socially. That occurs 

---

because in social learning the players copy the actions of players who perform relatively well. We might now take a moment to consider an earlier comment: that we can think of replicator dynamics as an adaptive rule or as the selection of fixed rules. If we assume the latter, then our model says that selection could favor spiteful types. Selection need not produce cooperation. This result runs counter to what we found when studying the repeated Prisoners’ Dilemma, where repetition led to cooperation. In that case, we considered repeated games and allowed for more sophisticated strategies. 

---

### Combining Learning Models 

We have seen how individual and social learning both find the best solution among a fixed set of alternatives, but that when applied to games, they can produce different outcomes. This lack of agreement is a strength. Imagine a giant set consisting of all possible games. Imagine a second set consisting of all learning models. We could apply every learning model in the second set to every game in the first set and evaluate their performance. We can then partition the set of all games into two sets: those in which the learning rule produces the efficient outcome and those in which it does not. We could also look to experimental data and evaluate each learning rule as a predictor of actual behavior. That exercise would undoubtedly reveal contingencies. Each learning rule would result in efficient outcomes for some games but not for others. Each learning rule would also vary in the contexts in which it accurately describes behavior. Hence, we advocate many models. In this chapter, we covered two canonical models. Each includes only a few moving parts. Our goal was to provide a gentle introduction to a large and exciting literature. By adding more details to either learning model, we would better fit experimental and empirical data. Recall that in the reinforcement learning model, individuals add or subtract weight to an alternative or action depending on whether its reward (payoff) exceeds the aspiration level. Individuals do not add weight to actions not taken: we do not increase the probability of taking some action that would have given a high payoff had we taken it. That assumption may not make sense in all cases. Consider the case of an employee who decides not to take his cell phone on vacation. While he is away his boss calls with an important question. The employee misses the call and is passed up for a promotion. In the reinforcement learning model, the employee would not attach more weight to bringing his phone on vacation in the future. The _Roth-Erev learning model_ amends the standard model so that 

---

alternatives that are not chosen also receive weight based on their hypothetical payoffs. In the example, the employee would attach more weight to bringing his phone. This modification creates a _belief-based learning_ rule. The amount of the increase in weight for the alternatives not chosen is determined by an experimentation parameter. The higher the experimentation parameter, the more individuals take into account the effect of others’ actions and the more they increase the weights on those actions. Roth and Erev also discount the past to take into account that other players are learning as well and their strategies 

likely change.^14 These additional assumptions make intuitive sense and have empirical support, but they do not fit all cases. If we go back to our example of the parent making pancakes, the first assumption implies that after the parent makes banana pancakes, additional weight is added to the alternative of making apple pancakes and that weight is proportional to the payoff from apple pancakes. Such an assumption makes sense only if the parent knows the payoff from apple pancakes. That would be true only if people can see or intuit the payoffs of unchosen actions. A model by Camerer and Ho creates a functional form that admits both reinforcement learning and belief-based learning as special cases. A parameter that can be fitted to data allows a determination of the relative strength of each type of learning rule.^15 The ability to combine models was one motivation for mastering many models. That said, combining models necessarily leads to a better fit because of the increase in parameters. Even taking into account the parameter increase, Camerer and Ho’s model produces better predictions and deeper explanations. Modeling learning creates several challenges. Learning rules that work well in one setting may not capture other situations as well. Furthermore, what people learn to do can depend on their initial beliefs, so two people may learn differently in the same setting and the same person may learn differently in different settings. Even if we could construct an accurate learning model, we again confront the 

---

_exploitability principle_ : if a model explained how people learned, then others could apply that model to anticipate (and in some cases exploit) that knowledge. It is then likely that people would learn not to be exploited, and our original learning model would no longer be accurate. We encountered this phenomenon earlier when discussing the Lucas critique and in our analysis of the efficient market hypothesis. We cannot necessarily conclude that because people learn that they optimize. We can assume learning will winnow out poor actions in favor of better ones. 

---