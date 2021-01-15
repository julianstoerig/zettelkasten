Period 1: I 1 = 20, 000 = P broad · N POP 

 Period 2: I 2 = 36, 000 = 20, 000 + P broad · ( N POP − 20, 000) 

 Solution:^2 P broad = 0.2 and N POP = 100, 000 

We should not have a great deal of confidence in any estimate based on two data points. The model leaves out any number of realworld features. People might be hearing by word of mouth as well as through media, some people may have bought multiple pairs, or advertising may have targeted likely buyers. Including these features would change the estimates. Caveats aside, the model provides a rough estimate. The firm should not expect to sell exactly 2 million pairs, but it should be confident that they will sell more than 100,000 pairs. As more data arrives, the estimate can be improved. If week three’s sales equals 13,000 pairs (the amount the model predicts), then the firm can place more confidence in the initial prediction. 

---

### The Diffusion Model 

Most diseases as well as information about many products, ideas, and breakthroughs spread by word of mouth. The _diffusion model_ captures such processes. It assumes that when one person adopts a technology or catches a disease, that person has some probability of passing it on to those with whom she comes in contact. In the case of a disease, choice pays no role. The probability a person catches the disease depends on factors such as genetics, the virulence of the disease, and even the temperature. Malaria will spread much faster during a hot, wet season than during a cold, dry one. The spread of a technology involves a choice on the part of the adopters, so technologies that are more useful will be adopted with a higher probability. We do not explicitly consider choice in the model, however. Therefore, the hipness of the Apple Watch plays the same role as the virulence of a flu strain. We again emphasize the spread of information, so we will refer to people as informed or uninformed. New people become informed if they meet an informed person and the information spreads between them. These are two distinct events that vary by context. People in cities may have higher contact probabilities than rural people, and information with high salience—say, news that aliens have landed— has a higher sharing probability than news of the reintroduction of pretzel M&M’s. Thus, we write the _diffusion probability_ as the product of a _contact probability_ and a _sharing probability_. We can write the model in terms of the diffusion probability, but when we estimate or apply the model, we must keep track of the two probabilities independently. The diffusion model assumes _random mixing_ , that is, that any two people in the relevant population are equally likely to make contact. This assumption should raise a red flag. It may be an accurate assumption for a model of disease spread in a preschool where children interact with high frequency. It is problematic to apply it to a city-level population. People do not randomly mix. People live and 

---

work in neighborhoods; they belong to work teams, families, and social groups. Their interactions are primarily within those groups. Remember, though, an assumption need not be accurate to be part of a useful model. We proceed with the assumption but keep an open mind toward changing it. 

---