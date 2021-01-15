### Success = a · Skill + (1 − a ) · Luck 

 where a in [0, 1] equals the relative weight on skill. 

If we can assign relative weights to skill and luck, perhaps by using a regression if we had data, we could use the model to predict outcomes. If the manager of a team of recreational vehicle salespeople finds that success, measured in sales, has a large luck component, he would expect _regression to the mean_ : salespeople who did well this month would be likely to be about average the next month. The manager could then use the model to guide action. He might not want to match a higher salary offer from a competitor for a salesperson who had two good months in a row. If instead the regressions showed that luck played almost no role, performance in two months would be a good predictor of performance in future months. In this case, the manager would want to match an outside offer for the best salesperson. The same insight applies to CEO pay. A board of directors should not pay bonuses to CEOs who work in industries where luck determines success. An oil company’s profits depend on the market price of crude oil, a variable that lies outside the company’s control. An oil company’s board should therefore be reluctant to reward a CEO for a good year. An advertising company would be wise to do the opposite—to award a large bonus to a CEO if the company performs well. In brief, pay for skill; do not pay for luck. Better-run corporations do in fact pay less for luck.^5 Even the simplest of models, such as this one, produce subtle insights. By thinking about the equation, we see that even in a context that depends almost entirely on skill, such as running, biking, swimming, chess, or tennis, if skill differences are small, luck largely 

---

determines who wins. We might expect that in the most competitive environments, like the Olympics, skill differences are small, and thus luck matters. Mauboussin calls this the _paradox of skill_. Michael Phelps, the greatest swimmer in history, has been on both ends of the paradox. In the 2008 Olympic Games, Phelps trailed Milorad Cavic at the end of the 100-meter butterfly. Yet by a stroke of luck, Phelps touched the wall first. In the 2012 Olympic Games, Phelps led Chad le Clos at the finish, but le Clos touched first. Yes, Phelps has incredible skill, but that one win and that one loss were the products of luck. 

---

### Multiple-Variable Regression 

Multiple-variable linear regression models fit linear equations with many variables and also minimize the total distance to the data. These equations include coefficients for each independent variable. The equation below shows a hypothetical regression output for student performance on a math test as a function of hours studied (HRS), family socioeconomic status (SES), and the number of accelerated classes (AC). 

 Math Score = 21.1 + 9.2∗∗ · HRS + 0.8 · SES + 6.9∗ · AC 

According to the regression, a student’s score increases by 9.2 points for every extra hour spent studying. The coefficient has two *’s, so it is significantly different from zero at a 1% level. This implies strong correlation, though not causality. The equation also shows that a student scores almost seven points higher for each accelerated class. That coefficient is significant as well, but only at the 5% level. Family socioeconomic status (SES), a variable that takes on values from 1 (low) to 5 (high), has a coefficient that is positive but not significantly different from zero, so we can assume it probably has little causal effect. With this or any regression output, we can predict outcomes. The model predicts that a student who spends seven hours studying and takes one other accelerated class should score in the 90s. The model can also guide actions, though we must be cautious, as we cannot infer causality. The data show that students who study and take accelerated classes perform better. One reason studying more or taking those classes may not help is _selection bias_. It might be that the students who study more and those who take accelerated classes are better at math. Even though regressions cannot prove what causes patterns in data, they can rule out explanations. Take the large wealth disparity by race in the United States: in 2016, the average wealth of white families (approximately $110,000) was more than ten times that of 

---

African American and Latino families. Any number of causes might explain that gap, including institutional factors, differences in income, savings behavior, or marriage rates. Regressions support some explanations and rule out others. For example, regressions reveal no significant relationship between marital status and wealth among African Americans, so marital status cannot be a cause. Income differences, though substantial, also prove insufficient to explain the 

gap.^6 

---

### The Big Coefficient and New Realities 

As already stated, linear regression models play prominent roles in scientific research, policy analysis, and strategic decision-making, in part because they are easy to estimate and interpret. With the increased availability of data, they have become even more widely used. The phrase “In God we trust. Everyone else must bring data” is often heard in business and in the halls of government. A reliance on data—and that often means linear regression models—can steer us toward marginal actions and away from big new ideas. A business, government, or foundation that gathers data, fits a linear regression model, and finds the variable with the largest statistically significant coefficient almost cannot stop itself from adjusting that variable and taking the marginal gain. When taking an action, it is better to choose the variable with the _big coefficient_ than a variable with a small coefficient. At the same time, big-coefficient thinking builds in conservatism. It focuses attention on certain modest improvements and pulls attention away from novel policies. A second problem with big-coefficient thinking is that the magnitude of the big coefficient corresponds to the marginal effect given existing data. Often, as we see in the next chapter, effect sizes diminish as we increase the value of a variable. If so, the big coefficient becomes smaller as we try to exploit it. 

---