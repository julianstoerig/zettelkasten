```mermaid
flowchart TD

Iq(Informationsquelle)
N(Notizen)
H(Hören)
I(Interpretation)
I2
Iq --> H

subgraph Ps[Im Unterricht]
	H --> I
	I --> N
end

subgraph Pt[Wiederholen]
	N -->|lesen| 
end

Ps --> Pt
```