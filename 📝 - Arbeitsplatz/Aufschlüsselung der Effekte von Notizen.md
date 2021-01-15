```mermaid
flowchart LR

I(Informationsquelle)
N(Notizen)
H[Hören]

I --> H

subgraph Ps[Prozess]
	H
	N
end

subgraph Pt[Produkt]
	
end

Ps --> Pt
```