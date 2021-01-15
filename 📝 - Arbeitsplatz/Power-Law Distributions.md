A power-law distribution^5 defined over the interval [ xmin , ∞) can be written as follows: 

### p(x) = Cx-a 

 where the exponent a > 1 determines the length of the tail, and the constant term ensures the distribution has a total probability of one. 

The size of the power law’s exponent determines the likelihood and size of large events. When the exponent equals 2, the probability of an event is proportional to the square of its size. An event of size 100 occurs with probability proportional to , or 1 in 10,000. When the exponent increases to 3, the probability of that same event is proportional to. For exponents of 2 or less, a 

power-law distribution lacks a well-defined mean. The mean of data drawn from a power-law distribution with an exponent of 1.5 never converges. It increases without limit. Figure 6.1 shows an approximate graph of the distribution of the number of links to webpages on the World Wide Web. 

Figure 6.1: Approximate Power-Law Distribution of Webpage Links The potential for large events distinguishes power-law distributions from normal distributions, from which we practically 

---

never see large events. For a long-tailed distribution, though rare, they occur at sufficient frequency to merit attention and preparation. Even one-in-a-million events are worth considering. For example, earthquake sizes approximately satisfy a power law with exponent near two. Suppose that for a region an earthquake larger than size 9.0 on the Richter scale, the size of an earthquake that topples buildings and changes the local topography, occurs each day with a probability of one-in-a-million. Within a century, an earthquake of that 

size would occur with probability 3.5%.^6 To see the difference between the probabilities of one-in-a-million events in normal and long-tailed distributions, we can use the distribution of deaths due to terrorist attacks, which follow a powerlaw distribution with an exponent of 2.^7 A one-in-a-million event consists of nearly 800 deaths. If deaths due to terrorist attacks followed a normal distribution with mean 20 and a standard deviation of 5, a one-in-a-million event would involve fewer than 50 deaths. A power-law distribution has a precise definition. Not all longtailed distributions are power laws. Plotting a distribution on a log-log scale creates a crude test of whether the distribution is a power law. A log-log plot transforms event sizes and their probabilities to their logged values and transforms a power-law distribution into a straight 

line.^8 

Figure 6.2: Power Law (Black) vs. Lognormal (Gray) on Log-Log Scale In other words, a straight line on a log-log plot is evidence of a power law, while an initially straight line that gradually falls off is consistent with a lognormal (or an exponential) distribution. The rate at which a lognormal distribution curves downward depends on the 

variation of the variables that produce the distribution.^9 As we 

---

increase the variance in a lognormal distribution, the tail increases, 

making it closer to linear on a log-log plot.^10 The special case of power laws with exponents equal to 2 are known as _Zipf distributions_. For power laws with exponents of two, an event’s rank times its probability will equal a constant, a regularity known as _Zipf’s Law_. Words satisfy Zipf’s Law. The most common English word, _the,_ occurs 7% of the time. The second most common word, _of,_ occurs 3.5% of the time. Notice that its rank, 2, times its frequency of 3.5% equals 7%.^11 

---