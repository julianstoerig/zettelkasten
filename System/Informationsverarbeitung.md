```mermaid
flowchart TB;

B[Bücher]
S[Skripte]
V[Vorlesungen]
P[Papers]

K(Kindle)
X(Xodo)
OP(Online Portal)

L[Literaturnotiz]
Z[Zettel]
T[Texte]

subgraph verschiedenste Orte
	B
	P
end

subgraph Universi

B & P -->|Evaluation| K
S ==> X
V ==> OP

subgraph Konsum
	K
	X
	OP
end

K --> L
X --> L
X ==> Z
OP ==> Z

subgraph Obsidian	
	L --> Z
	Z --> T
end

```