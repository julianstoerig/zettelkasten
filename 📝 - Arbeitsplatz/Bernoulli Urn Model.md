Each period, a ball is randomly drawn from an urn containing G gray and W white balls. The outcome equals the ball’s color. The ball is returned to the urn prior to the next period’s draw. Let denote the proportion of gray balls. Given N draws, we can calculate the expected number of gray balls chosen, NG , and its standard deviation, σNG : 

Outcomes in the Bernoulli urn model produce streaks of predictable lengths. In an urn with equal numbers of gray and white balls, the probability of drawing a white ball equals. The probability of drawing two consecutive white balls equals times. In general, if 

a proportion _P_ of the balls in the urn are gray, the probability of drawing _N_ consecutive white balls equals _PN_. By calculating probabilities, we can assess whether a streak was likely, amazing, or so improbable that we should expect fraud. When a basketball player makes a three-point shot nine times in a row, does he have a hot hand, or should we expect a random sequence of that length? The math shows that in a ten-year career, a good three-point shooter 

would be as likely as not to make nine in a row.^5 We can make similar calculations to decide whether an investor has been lucky, good, or fraudulent. Berkshire Hathaway, the conglomerate run by Warren Buffett, outperformed the market fortytwo out of fifty years from 1965 to 2014. A dollar invested in Berkshire Hathaway in 1964 was worth over $10,000 in 2016, while a dollar invested in the S&P 500 was worth about $23. If Berkshire had a 50% chance of beating the market, it should have outperformed the market twenty-five times during that fifty-year period, with a standard deviation of 3.5 years The 

---

actual number of years Berkshire beat the market lies about four standard deviations above the mean, a one-in-a-million event. We can rule out luck. Given that Berkshire reveals its investments, we can also rule out fraud. Bernie Madoff did not reveal his investments. His proclaimed streak of successes—decades of consecutive positive returns—was so unlikely that his clients should have 

demanded transparency.^6 

---

### Random Walk Models 

Our next model, the _simple random walk model,_ builds on the Bernoulli urn model by keeping running totals of past outcomes. We set the initial value, the state of the model, to be zero. If we draw a white ball, we add 1 to the total. If we choose a gray ball, we subtract 

1. The state of the model at any time equals the sum of the previous outcomes (i.e., the total number of white balls drawn minus the number of gray balls drawn). 

---