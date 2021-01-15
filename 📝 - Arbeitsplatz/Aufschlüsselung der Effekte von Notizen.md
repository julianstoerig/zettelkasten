```mermaid
flowchart TD

Iq(Informationsquelle)
N(Notizen)
H(Hören)
I(Interpretation)
Iq --> H

subgraph Ps[Im Unterricht]
	H --> I
	I --> N
end

subgraph Pt[Wiederholen]
	
end

Ps --> Pt
```