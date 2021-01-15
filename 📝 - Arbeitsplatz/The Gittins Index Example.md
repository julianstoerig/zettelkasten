To show how to compute Gittins indices, we consider the following example with two alternatives. Alternative _A_ produces a certain reward in {0, 80} with 0 and 80 equally likely. Alternative _B_ produces a certain reward in {0, 60, 120} with each equally likely. We assume that the decision-maker wants to maximize reward over ten periods. 

**Alternative A:** With probability the reward equals 0, so alternative _B_ , which has an expected reward of 60, will be chosen in all remaining periods. This produces an expected reward of 540 (9 times 60). With probability the reward equals 

80. The optimal choice in the second period even with this outcome is to choose alternative _B_ in the second period. With probability , _B_ produces a reward of 120, so the total payoff equals 1,160 (80 plus 9 times 120). With probability , _B_ produces a reward of 60. In that case, alternative _A_ is optimal choice in all subsequent periods generating a total payoff equal to 780 (60 plus 9 times 80). Finally, with probability , _B_ produces a reward of 0. In this case as well, alternative _A_ is optimal choice in all subsequent periods. The total payoff will 720 (9 times 80).     Combing all three possibilities, it follows that the Gittins index in period one for alternative _A_ equals the following: 

**Alternative B:** With probability the reward equals 120. If that occurs, the optimal choice in all future periods will also be _B_. Over ten periods the total reward will equal 1,200. If the reward equals zero, then the optimal choice in all future periods will be alternative _A_ , which has an expected reward of 40. The expected total reward will equal 360 (9 times 40). If the reward equals 60, then the decision-maker could choose alternative _B_ 

---

in all future periods, for a total return of 600. However, if she chooses _A_ in the second period, half of the time it will always produce a reward of 80, for a total return of 780 (60 plus 9 times 80). The other half of the time it produces a reward of zero, and the optimal choice in all subsequent periods will be _B_ , which produces a reward of 60, resulting in a total reward of 540 (9 times 60). It follows that the expected reward from making optimal choices after choosing _A_ in the second period equals 660 ( ). 

Combing all the possibilities, it follows that the Gittins index in period one for alternative _B_ equals the following: 

Given these calculations, alternative _B_ is the optimal first period choice. The optimal long run choice depends upon what is learned in the first period. If alternative _B_ produces an outcome of 120, we stick with _B_ forever. The analysis shows that when taking an action, we care more about the probability that an alternative will be the best than about its expected reward. Moreover, if an alternative produces a very high reward, we should be more likely to select it in the future. In contrast, if it produces an average reward, even a reward above the expected reward of another alternative, we may be less likely to stick with the alternative. That is particularly true in early periods, where we want to look for high-reward alternatives. These insights hold across the many applications discussed. Provided there are not risks or high costs associated with actions, the model tells us to explore potentially high-reward actions even if they are low probability. 

---

### Summary 

A key takeaway from this book is that by learning models a person can make better decisions. We can see that in stark relief by comparing what people should do in the bandit problem with what people actually do. Most people do not try to estimate a Gittins index when confronted with a bandit problem. They fail to do so, in part, because they do not keep data. Only recently, for example, have doctors begun to keep data on the efficacy of the many procedures —the efficacy of the various types of artificial joints or, say, the advantages of stents. Without that data, a doctor cannot determine which action has the highest expected payoff. Doctors, and everyone else, need data to apply the lessons produced by the model. So if you wanted to learn whether taking a walk before dinner or after dinner resulted in better sleep patterns, you would need to keep track of how well you had slept, and by using a sophisticated heuristic, you could learn which probably works best. That may seem like a lot of effort. And it is, but less so now. New technology enables us to gather data on sleep patterns, pulse rate, weight, and even mood. Most of us will not gather the necessary data and compute Gittins indices for life choices like when to exercise. The point is only that we could, and if we did, we would see improvement in life choices— in our sleep patterns and general health. Psychologist Seth Roberts performed self-study for twelve years and found that standing at least eight hours a day improved his sleep (though he slept less) and that standing along with getting morning light reduced his upper respiratory infections.^5 We may lack his dedication to selfexperimentation. By not keeping data and comparing outcomes, we may go through life skipping breakfast when we would have been better off having grapefruit. On high-stakes business, policy, and medical decisions where data are easier to gather, applying bandit models is common practice. Businesses, policy makers, and nonprofits experiment with 

---

alternatives and then exploit those that perform best. In practice, the alternatives may not remain fixed. A government mailer to increase participation in a farm subsidy program may be altered from year to year—say, swapping out a picture of a man with a picture of a 

woman.^6 This type of continued experimentation can be captured by the models we take up in the next chapter: rugged-landscape models. 

---

---