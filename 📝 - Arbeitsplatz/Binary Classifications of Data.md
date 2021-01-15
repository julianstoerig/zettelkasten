In an era of Big Data, organizations use algorithms informed by models to classify their data. A political party might want to learn who votes, an airline might want to learn the attributes of their frequent flyers, and an event organizer might want to learn about the event’s attendees. In each case, the organization classifies people into two sets: those who buy, contribute, or enroll are labeled as _positives_ (+’s) and those who are not are labeled as _negatives_ (-’s). Classification models apply _algorithms_ to partition the people into categories based on attributes such as a person’s age, income, education level, or hours spent on the internet. Different algorithms imply different underlying models of the relationship between attributes and outcomes. Applying multiple algorithms—using many models—will produce an even better classification. 

**Linear classifications:** In figure M1, positives (+) represent voters and negatives (-) represent nonvoters. A linear function of a person’s age and education level can be used classify whether or not a person votes. The data show that more educated people are more likely to vote and that older people are more likely to vote. In this example, a straight line classifies 

nearly perfectly.^7 

 Figure M1: Using a Linear Model to Classify Voting Behavior 

**Nonlinear classifications:** In figure M2, positives (+) represent 

---

frequent flyers, consumers who fly more than 10,000 miles per year, and negatives (-) represent all other customers of an airline. People of middle age and higher income are more likely to fly. To classify these data requires a nonlinear model, which could be estimated using _deep-learning_ algorithms, such as neural networks. Neural networks include more variables so that they can fit almost any curve. 

 Figure M2: Using a Nonlinear Model to Classify Frequent Flyers 

**Forests of decision trees:** In figure M3, positives (+) represent people who attended a science fiction convention based on their age and the hours per week they spend on the internet. Here we classify the data using three _decision trees_. Decision trees make classifications based on sets of conditions on the attributes. The figure shows three trees: 

 Tree 1: If (age < 30) and (internet hours per week in [15, 25]) 

 Tree 2: If (age in [20, 45]) and (internet hours per week > 30) 

 Tree 3: If (age > 40) and (internet hours per week < 20) 

Figure M3: A Forest of Decision Trees Classifying Conference Attendees The collection of trees are called a _forest_. Machine learning algorithms create trees randomly on a training set and then 

---

keep those that classify accurately on the testing set and on a training set. 

---