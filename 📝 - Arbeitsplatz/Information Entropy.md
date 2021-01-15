Given a probability distribution ( p 1 , p 2 ,... pN ), the information entropy , H 2 , equals: 

 Note: the subscript 2 denotes the use of the base 2 logarithm. 

At first, the mathematical representation complicates more than it clarifies. Working through an example makes the formula more intuitive. Imagine that families who first have a girl stop having children, and that families who first have a boy have two more children. Half of all families will have a single girl. The half will be split evenly among four outcomes: three boys, two boys followed by a girl, a boy followed by two girls, and a boy followed by a girl followed by another boy. Each of those four outcomes occurs with probability. 

Information entropy equals the expected number of questions we must ask to learn the family’s children. We would first ask if the first child is a girl. With probability the answer is yes, and we need not ask more questions. Thus, half of the time, we ask one question. We can write this as. If the answer is no, we must ask two more 

questions for a total of three questions. Each of those four cases occurs with probability , so each contributes × 3 to information entropy. We write each as. Information entropy equals 2, 

the sum of the five terms.^3 Notation and logarithms aside, the intuition should be clear: information entropy corresponds to the expected number of yes-or-no questions. If we have to ask a lot of questions, the distribution is uncertain. Knowing the outcome reveals information. 

---

### Axiomatic Foundations of Entropy 

---