```mermaid
flowchart TB

Iq(Informationsquelle)
N(Notizen)
H(Hören)
I(Interpretation)
I2(Interpretation)
Iq --> H

subgraph Ps[Im Unterricht]
	H --> I
	I --> N
end

subgraph Pt[Wiederholen]
	N -->|lesen| I2
end
```