N individuals, each of whom has a type A or B , are randomly arranged on an M -byM checkerboard with room for open spaces. Each person i has a tolerance threshold , Ti , and relocates to a random new location if the percentage of the people of her same type on the eight neighboring squares falls below her threshold. 

If individuals have an average threshold near 50%, the model produces segregation, as shown in figure 19.5. Segregation arises because the individuals consider only their local neighborhoods, which have at most eight occupants. Almost any random initial configuration includes some people surrounded by others of the opposite type. If individuals move into regions with more individuals of their same type, they can cause relocations by people of the other type. As the relocations accumulate, segregation occurs. We need not walk through the logic again as to why threshold diversity exacerbates these effects. 

Figure 19.5: Configuration After Relocations in Schelling’s Segregation Model That tolerant people can produce segregated residential patterns serves as the foundational insight of Thomas Schelling’s seminal book _Micromotives and Macrobehavior_ : what occurs at the macro level need not align directly to the micro level motivations of individuals. 

---

### Threshold Models with Negative Feedbacks 

Our next model, the _ping-pong model,_ assumes threshold-based behavior that produces negative feedbacks. Recall that negative feedbacks can stabilize a system or, as we saw in the predator-prey model, produce cycles. The model assumes a finite number of entities, which could be people or mechanical, biological, or chemical devices. In each period, each entity takes either a positive (+1) or a negative (-1) action. In the first period, each agent chooses a random action. The initial state equals the sum of the actions. All subsequent states of the system equal the previous period’s state plus the average of all actions and a random term. Each entity has a threshold, drawn from a distribution, and chooses the action that reduces the absolute value of the state if the absolute value exceeds its threshold. Put simply, if the state’s value exceeds an entity’s threshold (either negatively or positively), the entity does what it can to reduce the magnitude of the state. 

---