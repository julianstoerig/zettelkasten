The above class of entropy measures uniquely satisfies the following four axioms: 

 Symmetric, continuous function: H ( σ ( )) = H ( ) for any σ that permutes the probabilities. 

 Maximization: H ( ) is maximized at pi = for all N. 

 Zero Property: H (1, 0, 0,..., 0) = 0. 

 Decomposability: If 

 where and 

To arrive at a general expression for entropy, we take an axiomatic approach. Claude Shannon imposed four conditions on his measure. The first three are easy to understand. It needed to be continuous and symmetric, maximized when outcomes occur with equal probability, and equal zero for certain outcomes. The fourth condition (decomposability) requires that the entropy of a probability distribution defined over _n_ categories each with _m_ subcategories equals the entropy of the distribution over the categories plus the sum of the entropies of each of the subcategories. This is a natural assumption for products of distributions. For example, in the case where outcomes are the product of two independent events, the 

---

assumption implies that the information content of the joint event equals the sum of the information contents of each event separately. Shannon then proved that a general class of _entropy measures_ uniquely satisfies those axioms. As was the case for the axioms that characterize Shapley values, the contribution of these axioms resides less in their existence than in their reasonableness. A clever mathematician can always construct axioms that uniquely define a function. The first two axioms are difficult to question. We might quibble with the arbitrariness of setting the uncertainty of a known distribution at zero, but it is an appropriate benchmark. Another possibility would be to assign 1 as 

the uncertainty of a known distribution.^4 The decomposability axiom, though complicated to explain, is also difficult to challenge. The uncertainty of two combined random events should equal the sum of the uncertainties of each event. Overall, the axioms are more than defensible. They are, in fact, hard to dispute. 

---

### Using Entropy to Distinguish Classes of Outcomes 

We now show how the entropy measure can help us to categorize empirical data and model output within Wolfram’s four classes: _equilibrium, cyclic (periodic), random,_ and _complex_.^5 In Wolfram’s classification, a pencil resting on a desk is in equilibrium. The planets orbiting the sun are in a cycle. A sequence of coin flips is random, so are (approximately) stock prices on the New York Stock Exchange, as we shall learn in the next chapter. Finally, the neuronal firings in a person’s brain are complex; they do not fire randomly, nor do they fire in a fixed pattern. Figure 12.2 represents these four categories graphically. Equilibrium outcomes have no uncertainty, and therefore, have an entropy equal to zero. Cyclic (or periodic) processes have low entropy that does not change with time, and perfectly random processes have maximal entropy. Complexity has intermediate entropy—it lies between ordered and random. While entropy gives us a definitive answer in the two extreme cases, equilibrium and random, it does not for cyclic and complex outcomes. We will have to use other measures to distinguish those cases. 

Figure 12.2: Wolfram’s Four Classes To classify a time series of data, we calculate the information entropy across subsequences of different lengths. Suppose that a man keeps track of the type of hat he wears each day—either a beret ( _B_ ) or a fedora ( _F_ ). His choices over a year create a binary time series of 365 events. We can first calculate the entropy of sequences of length 1, that is, we calculate the entropy over the probability of wearing each type of hat. If we find that he is equally 

---

likely to wear each type of hat, the entropy over sequences of length 1 equals 1. We can therefore rule out equilibrium, as he changes his choices, but any of the other three categories are possible. To determine the category, we next compute the entropy of sequences of length 2 through 6. If all have maximal entropy, then we can rule out a simple cycle. Suppose that as we consider longer sequences the entropy increases slowly until it reaches a maximum of 8. In other words, no matter how long the subsequence, the entropy never exceeds 8. An entropy of 8 is equivalent to an equal distribution across 256 outcomes. That cannot be a simple cycle. It is more representative of a complex sequence containing structure and patterns. We cannot say for sure that the time series is complex. It might be that the person is trying to be random, yet fails. 

---

### Maximal Entropy and Distributional Assumptions 

Many of the situations that we model include uncertainty, and, as modelers, we must make assumptions about those distributions. As a rule, we want to avoid making ad hoc assumptions. It may be that we have some understanding of the process that produces the distribution. If so, we can often derive the statistical structure produced by that process using our logic-structure-function approach. For example, suppose that we want to make an assumption about the distribution of the total value of the items up for auction at an estate sale. The total value equals the sum of the values of the individual items. We can therefore invoke the central limit theorem and assume a normal distribution. We might also assume a normal distribution for the possible values of a house, as the house’s value depends on its attributes: the number of bedrooms, bathrooms, and the size of the lot. A normal distribution may not make sense for the possible values for a piece of art or a rare manuscript. In those cases, we may have little understanding of the process that determines value. One approach is to assume a distribution with maximal uncertainty, that is, the maximal entropy distribution. The shape of the maximal entropy distribution depends on the constraints. As we have already seen, if we assume a minimal and maximal value, the _uniform distribution_ maximizes entropy. Many social science models in textbooks and journals assume uniform distributions. We might question that assumption on the grounds that few distributions in the real world are uniform. However, a _principle of indifference_ —if we know nothing other than the range or set of possibilities—can justify the uniform distribution. In some cases, we may know the mean of the distribution and also know that all values must be positive. Given those constraints, the maximal entropy distribution must have a long tail, and as we spread the distribution across more values, we must balance high 

---

values with many low-value outcomes. It can be shown that the entropy-maximizing distribution will be an _exponential distribution_. Thus, if we are writing a model that assumes distribution of website hits or market shares, in the absence of data an exponential distribution is a natural assumption. Finally, if we fix the mean and the variance (and allow negative values), then the maximal entropy distribution is the normal distribution. The logic here is similar to the previous case. To create more uncertainty, we create extreme values. Here we can balance positive and negative values and not change the mean. However, doing so increases the variance, so we must add more values near the mean, resulting in a bell curve. We can interpret these maximal entropy distributions within the logic-structure-function framework. If we thought that in a given social, biological, or physical context a micro-level process was maximizing entropy, then we should expect one of these distributions. Alternatively, we might assume a micro-level process and be able to show that entropy increases. If so, one of these distributions would emerge. 

---