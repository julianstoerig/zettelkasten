Assume each node has 100 clique friends ( C ), all of whom are friends with one another, and 20 random friends ( R ), who have no friends in common with the node. 

 Degree one: C + R = 120 

 Degree two: CR + RC + RR = 2000 + 2000 + 400 = 4400 

 Degree three: CRC + CRR + RCR + RRC + RRR = 328,000 

 Degree four: 17, 360,000^13 

 Degree five: > 1 billion 

 Degree six: > 20 billion 

By assuming no overlap in the friends of the random friends, the model implicitly assumes an infinite population. An actual social network will have overlap in friends as the degree increases. In a network that includes overlap and other realistic features such as heterogeneity in the number of friends, the values will differ from those calculated above. The relative magnitudes of the number of neighbors of each degree will remain similar. A person will have many more neighbors of degree three (friends of friends of friends) than of degree two (friends of friends). The large number of friends of degree three, over a quarter million in our example, can be consequential. Unlike a person’s clique friends, a person’s friends of degree three tend to live in different cities, attend different schools, and have different information. They are more diverse. They are also near enough for trust to be established: a friend of a friend of a friend could be your 

---

roommate’s mother’s coworker, or your sister’s boyfriend’s aunt. The number of friends of degree three, their diversity, and their relative proximity make them an important asset. They can provide new information and job opportunities. These are the people most likely to help a person find a job, facilitate a move to a new city, or become a life or business partner. 

---

### Network Robustness 

Our last implication of network structure evaluates the _robustness_ of network properties, or how close the network is to node (or edge) failure. The most essential property of a network is whether it remains connected. We can use models to calculate the probability that a network remains connected as a function of the number of nodes removed. We could also ask what happens to average path length as nodes are removed. Applied to an airline network, an analysis of path length robustness would tell us how many extra flights would be needed if an airport were to shut down due to weather or a power failure. Here, we consider the question of how the size of the largest connected component of the network, the _giant component,_ changes as nodes randomly fail. Figure 10.4 shows the size of the giant component for a large random network and a large small-world network. In the random network, the size of the giant component falls linearly at first. At a critical value where the probability of an edge equals 1 divided by the number of nodes, the size of the largest component falls to an arbitrarily small proportion of the original network size. The small-world network shows no such abrupt change. A majority of connections exist within the geographic clusters. Each cluster can withstand the failure of multiple nodes. This feature combined with the random links prevents the entire network from collapsing. 

---

Figure 10.4: Size of the Giant Component (G) as a Function of Node Failure From figure 10.4 we can infer that sparse networks that lack local clustering are susceptible to failure. We can apply that insight to the power grid. It lacks the long leaps and the tight clusters that make the small-world network robust. In a power grid, the failure of a node or a link cannot be overcome by other links in a cluster or by a long connection to a working node far away. Local failures can cascade 

through the network.^14 In contrast, the internet, which has a longtailed degree distribution, is robust to random node failure. The degree distribution implies that the vast majority of nodes have few connections. Even if they fail, the network remains connected. Up to now, we have assumed random node failure. We can also consider strategic node removal. Networks with long tails, like the internet, now become non-robust. Strategic removal of the nodes of highest degree destroys the network. The logic can be seen by considering the hub-and-spoke network. When nodes are removed randomly, the network remains connected unless the hub node is removed, a low-probability event. Strategic removal, wiping out the hub, disconnects the network in one step. With some networks, such as terrorist networks and drug supply networks, we might want to disconnect a network. If those networks are sparse, like the power grid, or have a long-tailed degree distribution, they can be disconnected through strategic node removal. For the terrorist network, this would entail arresting the 

---

most connected members. If those networks resemble small worlds, they will be robust, even to the strategic removal of nodes. Attempts to cut off any geographic segment of the network will fail because of the random reconnections that connect the segment to the rest of the network. 

---

### Summary 

When we build network models of people, we often do so to capture social influences, where the success, behavior, information, or beliefs of a person in the network influence the success, behavior, information, or beliefs of their friends. Behavior can be contextual or intrinsic; so too can a person’s value or contribution to a collective enterprise. A person’s value or contribution could be due to properties of that person, such as her brilliance, her effort level, or her good fortune. A person’s success could also be due to his network of friends and colleagues. This is an age-old question: Does success depend on what you know or whom you know? Imagine a group of scientists working together in a research lab. They share advice, ideas, and knowledge. The number of academic papers, patents, or scientific breakthroughs produced by a scientist depends on what she knows, but it can also be influenced by whom she knows, on her interactions with other scientists. By thinking in terms of contextual features (friendship networks) as well as intrinsic attributes (individual abilities), we can determine how much of a scientist’s success to attribute to each. Investment firms that hire away superstar fund managers based on the belief that investment success depends mostly on talent have not had very promising results. Empirical evidence shows that top investors also depend on networks of colleagues who provide them with specific types of information.^15 That specific finding can be viewed within the lens of a much larger literature (some of which is model-based) showing how a person’s position in an organization influences success. Success still correlates with ability. A business idea that makes its investors millions was probably a good one. A scientist who publishes hundreds of papers and receives numerous awards has high ability. At the same time, those best positioned in the network make the largest contributions. We can measure a person’s position using betweenness and other measures of centrality. The people 

---

who occupy high-betweenness positions in a network fill what Ron Burt calls _structural holes_ between communities, which we can 

identify using algorithms.^16 Access to information and ideas from multiple communities gives people who fill structural holes power and influence. Filling a structural hole requires certain talents and abilities. A person cannot just jump in and fill any hole. She must build trust and understanding within each community. And she must be conversant in the knowledge base of each community. We can apply nearly identical logic to assess the value of firms and assign power to countries. We can see a firm’s value as intrinsic and take a balance sheet perspective by looking at assets and liabilities. We can also look at the context in which the firm operates, such as its position in the supply chain. Similarly, the power of a country depends on its resources and its alliances. For both firms and countries, intrinsic attributes and connectedness correlate. Those who occupy powerful positions in the network also possess important attributes. Our analysis as well as most of the literature considers the node as the unit of analysis. The edges can be critical as well. Taking an even broader perspective, the network itself may be an appropriate unit of analysis. For example, teacher networks that allow ideas and information to flow between classrooms can improve educational outcomes, and so a well-connected administrator can effectively coordinate curriculum reform. Similarly, a second-grade teacher knows a lot of information about the students from his class who are going on to third grade; that information could help the third-grade teacher. A mathematics teacher knows what concepts students have yet to grasp; that information could help the science teacher structure her lessons. Good schools, therefore, have strong faculty networks. This is just one example of how network models can improve our thinking.^17 

---

---