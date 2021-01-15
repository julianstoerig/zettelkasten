In a linear model changes in the independent variable , x , result in linear changes in a dependent variable , y , as follows: 

### y = mx + b 

 where m equals the slope of the line and b equals the intercept , the value of the dependent variable when the independent variable equals zero. 

A _linear regression_ model finds the line that minimizes the distance to the data points. Linear regression can explain variation in 

crime, washing machine sales, and even wine prices.^1 Suppose that we have data for adults ranging in age from twenty to sixty and the distances they walk each week and find the following regression equation: 

 Miles Person i = -0.1 · age i + 12 + εi 

This regression equation tells us the _sign_ of the effect (distance decreases with age) and the _magnitude_ of that effect (each year of age reduces distance by one-tenth of a mile). In this example, the intercept has no relevance because it lies outside our data range, that is the data includes no one with an age near zero. Based on the equation, we expect a forty-year-old to walk eight miles per week and a fifty-year-old to walk seven. The data used to produce a regression will not fall exactly on the regression line. Figure 7.1 shows hypothetical data used to produce our regression line. The person represented by the gray circle, Bobbi, is age forty and walks eleven miles per day. She exceeds the model’s estimate by three miles. To make the data consistent with the model, the equation 

---

includes an _error term_ for each data point. The error term, denoted by _ε_ , equals the difference between what the model estimates and the actual value of the dependent variable. Bobbi’s _ε_ term equals +3 miles. In social and biological contexts, we do not expect perfect linear fits. Outcomes depend on many variables, and a single-variable regression, by definition, includes only one variable. Predicted values can deviate from the actual values because of these _omitted variables._ Bobbi may walk more than expected because, as a botany professor, she takes her students out for walks in the woods. The model does not include profession as a variable, which contributes to why the data in 7.1 do not lie on the line. The _ε_ term could also result from _measurement error_. Fitness data collected by smartphones will contain errors if people forget to carry their smartphone or loan their phones to others. Error can also arise from _environmental noise_ — 

people may earn extra distance for bumpy car rides to work.^2 

Figure 7.1: A Scatterplot and Regression Line The closer the regression line lies to the data, the more of the data the model explains and the larger the model’s R-squared (the percentage of variation explained). If all data lie exactly on the regression line, the R-squared equals 100%. All else equal, we prefer models with higher R-squared values. 

---