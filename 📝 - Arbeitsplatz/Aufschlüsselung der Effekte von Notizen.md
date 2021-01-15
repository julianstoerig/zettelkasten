```mermaid
flowchart TB

Iq(Informationsquelle)
N(Notizen)
H(Hören)
I(Interpretation)
A(Anwendung)
N2(Notizen)
I2(Interpretation)
A2(Anwendung)
Iq --> H

subgraph Ps[Im Unterricht]
	H --> I
	I --> N
end

subgraph Pt[Wiederholen]
	N2 -->|lesen| I2
	A2
end

Ps ==> Pt
```