```mermaid
flowchart TD

Iq(Informationsquelle)
N(Notizen)
H(Hören)
I(Interpretation)
Iq --> H

subgraph Ps[Proze<br>ss]
	H --> I
	I --> N
end

subgraph Pt[Produkt]
	
end

Ps --> Pt
```