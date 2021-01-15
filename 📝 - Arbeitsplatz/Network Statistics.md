Degree: The number of neighbors (also the number of edges) of a node. 

 Path length: The minimum number of edges that must be traversed to get from one node to another. 

 Betweenness: The number of paths of minimal length connecting two other nodes that pass through a node. 

 Clustering coefficient : The percentage of a node’s pairs of neighbors that are also connected by a edge. 

Path length, the minimal distance between two nodes, varies inversely with degree. As we add edges, we shorten the average length between nodes. In an airline flight network, path length corresponds to the number of flights, on average, a person needs to take to get from one city in the network to another. Given a choice between two airlines, all else equal (namely, prices), a traveler would prefer the one with lower average path length. Average path length also correlates with information loss. Information that passes through several people is more likely to suffer distortion than information passed between only two people. The nodes on minimal paths play critical roles in networks. If information takes the shortest route, then it goes through the nodes on a minimal path. A node’s _betweenness_ score equals the percentage of minimal paths that go through a node. In a social network, people with high betweenness scores know more information and wield more power. The final statistic, the _clustering coefficient,_ equals the proportion of a node’s pairs of neighbors who are also neighbors of one another. For example, a person with 10 friends has 45 pairs of friends. If 15 of those 45 pairs are themselves friends, then the 

---

person’s clustering coefficient equals. If all 45 friendships existed, 

then the person’s clustering coefficient would equal 1, the maximal possible value. The clustering coefficient for the entire network equals the average of the clustering coefficients of the individual nodes. 

Figure 10.1: A Hub-and-Spoke Network and a Geographic Network Figure 10.1 shows two networks with thirteen nodes: a hub-andspoke network and a geographic network. In the _hub-and-spoke network,_ the hub has degree 12 and all other nodes have degree 1, for an average degree of less than 2. The degree distribution is unequal. The hub has a distance of 1 to every node. All other nodes have a distance of 1 to the hub and a distance of 2 to the other nodes. It follows that average path length is also less than 2. The hub, which lies on every minimal path between any two other nodes, has a betweenness score of 1. The spoke nodes do not lie on any minimal paths connecting other nodes, so they have a betweenness of 0. Finally, in the hub-and-spoke network, no nodes connected to a node are connected to one another. Therefore, the network has a clustering coefficient of zero. In the _geographic network,_ each node is connected to the two nodes to its right and its left, so the average degree equals 4. Each node is distance 1 from four nodes, distance 2 from four nodes, and distance 3 from four nodes. So the average distance equals exactly 

---

2. The degree and distance distributions for this graph are _degenerate_ —every node has the same degree and the same average distance. It can be shown that the betweenness of each 

node equals.^2 Each node has four neighbors, creating six pairs. Of those six pairs, exactly three are connected: the two nodes to the immediate left and right are each connected to an outer node and to each other. Therefore, the clustering coefficient equals. 

An alternative method for capturing clustering is to partition the nodes into _communities_. In a junior high friendship network, the communities might correspond to teenagers interested in the arts, athletics, or science. Or they could be defined by race and gender. A network of political alliances might partition into regional or ideological allies. Multiple methods exist for determining communities. One approach sequentially removes edges with the highest betweenness, as edges with high betweenness are more likely to connect distinct clusters. Other approaches take the number of communities as given and seek an optimal partitioning given an objective function such as minimizing the number of edges between the communities or maximizing the proportion of edges within communities.^3 We can use community detection algorithms to ask questions of network data. Studies show that people may reside in _online bubbles_. That is, we may belong to communities of people who get their news from similar sources. If so, that has implications for social cohesion. Prior to the creation of the internet, that may have been true as well, but demonstrating it with data would have been hard. Now data scientists can scrape the web to identify the news sources that people frequent and tell us that, yes, in fact we do live in bubbles to an extent. Models provide the formal definitions of communities. Data tells us the strength of those communities. Using judgment we can make wise inferences based on what the data say. 

---

### Common Network Structures 

In analyzing networks, we encounter a problem of variety. A handful of network statistics are incapable of pinning down the specific network structure: one can construct billions of distinct networks with ten nodes and an average degree of 2. An alternative approach to characterizing a network is to test whether its statistical measures differ significantly from those of a common network structure. For example, a scholar might gather data on judicial citations and put it in network form by drawing an edge when one judge cites another judge’s opinions. The graph of that network may appear to possess interesting structures and clusters. We can test whether a network is random by comparing the network’s statistics to those of a random network that has the same number of nodes and edges. A _random network_ clustering coefficient equals the probability of a random edge because two neighbors of a node are no more likely to contain an edge than any other randomly chosen node. 

---