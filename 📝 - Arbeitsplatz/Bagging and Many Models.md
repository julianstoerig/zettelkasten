Often we fit a model to a sample from an existing data set and then test that same model against the remainder of the data. Other times we fit a model to existing data and use that model to predict future data. This type of modeling creates a tension: the more parameters we include in our model, the better we can fit data and the more we risk overfitting. Good fit does not imply a good model. Physicist Freeman Dyson tells of Enrico Fermi’s reaction to a piece of Dyson’s research that had exceptional model fit. “In desperation I asked Fermi whether he was not impressed by the agreement between our calculated numbers and his measured numbers. He replied, ‘How many arbitrary parameters did you use for your calculations?’ I thought for a moment about our cut-off procedures and said, ‘Four.’ He said, ‘I remember my friend Johnny von Neumann used to say, with four parameters I can fit an elephant, and with five I can make 

him wiggle his trunk.’ With that, the conversation was over.”^16 The estimates used to “wiggle the trunk” often include higher-order terms: squares, cubes, and fourth powers. This introduces a risk of large errors, because higher-order terms amplify. While 10 is twice as large as 5, 10^4 is 16 times as large 

as 5^4. The figure below shows an example of overfitting. 

Overfitting and Out-of-Sample Error The graph on the left shows (hypothetical) sales data from a company that manufactures industrial 3-D printers as a function of the number of site visits made (on average) per month by their sales team. The graph on the left shows a nonlinear best 

---

fit that includes nonlinear terms up to the fifth power. The graph on the right shows that the model predicts sales of 100 printers if sales visits reach 30. That cannot be correct if customers buy at most one 3-D printer. By overfitting, the model makes a huge error out of the sample. To prevent overfitting, we could avoid higher-order terms. A more sophisticated solution known as _bootstrap aggregation_ or _bagging_ constructs many models. To bootstrap a data set, we create multiple data sets of equal size by randomly drawing data points from the original data. The points are drawn with replacement—after we draw a data point, we put it back in the “bag” so that we might draw it again. This technique produces a collection of data sets of equal size, each of which contains multiple copies of some data points and no copies of others. We then fit (nonlinear) models to each data set, resulting in 

multiple models.^17 We can then plot all the models on the same set of axes, creating a _spaghetti graph_ (see below). The dark line shows the average of the different models. 

Bootstrapping and a Spaghetti Graph Bagging will capture robust nonlinear effects, as they will be evident in multiple random samples of the data, while avoiding fitting idiosyncratic patterns in any single data set. By building diversity through random samples and then averaging the many models, bagging applies the logic that underpins the diversity prediction theorem. It creates diverse models, and as we know, the average of those models will be more accurate than the models themselves. 

---