```mermaid
flowchart LR

IQ(Informationsquelle)
N(Notizen)
H[Hören]
I --> H

subgraph Ps[Prozess]
	H --> In
	N
end

subgraph Pt[Produkt]
	
end

Ps --> Pt
```