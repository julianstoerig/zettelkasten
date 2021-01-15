```mermaid
flowchart TD

Iq(Informationsquelle)
N(Notizen)
H(Hören)
I(Interpretation)
Iq --> H

subgraph Ps[Prozess]
	H --> I
	I --> N
end

subgraph Pt[Produkt]
	
end

Ps --> Pt
```