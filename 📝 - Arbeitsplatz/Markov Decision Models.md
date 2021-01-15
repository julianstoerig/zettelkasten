A _Markov decision model_ amends a Markov model by including actions. An action generates a reward, which is conditional on the state and also affects the transition probabilities between states. Given the effect of an action on transition probabilities, the optimal action does not always maximize the immediate reward. As an example, we consider students who have a choice between two actions: surfing the internet and studying. Surfing the internet always produces the same payoff. Studying produces a high payoff when the student is engaged and a low payoff when the student is bored. To add in the effect of actions on transition probabilities, we assume that a bored student who surfs the internet remains in the bored state and that an engaged student who surfs the internet becomes bored half of the time. A student who studies has a 75% chance of being mentally engaged in the next period regardless of her present state: 

**Actions:** _surf the internet (U), study (S)_ 

**States:** _bored (B), mentally engaged (E)_ 

**Reward Structure** 

**Transition Mapping** 

---

A solution to a Markov decision problem consists of an action to be taken in each state. Myopic best response behavior, which we encountered earlier, selects the rewardmaximizing action in each state. In the example, that corresponds to surfing when bored and studying when mentally engaged. The myopic solution results in the student falling into the bored state. Once that occurs, she chooses to surf the internet and remains bored in all remaining periods. Thus, her long-run average reward equals 6. The always-study solution puts her in the engaged state 75% of the time and in the bored state 25% of the time, producing an average return of 7. This solution produces a higher average payoff because she is more often in the mentally engaged state. As seen in this example, framing a choice as a Markov decision problem can produce better actions. By taking into account the consequences of an action on our state, we choose more wisely: Sleeping late produces a higher immediate reward than getting up early and exercising. Buying an expensive coffee produces a higher reward than making our own cup. Yet, in the long run we may be happier exercising and saving money on coffee. Did we need a model for this? We might have instead turned to Proverbs 21:17: “Whoever loves pleasure will be a poor man; he who loves wine and oil will not be rich.” That may be true, but had we turned to Ecclesiastes 8:15: “And I commend joy, for man has nothing better under the sun but to eat and drink and be joyful,” we would have found an opposite proverb. By embedding our choices within a Markov decision framework, we can use logic to decide which commonsensical advice makes sense in a given setting. 

---