[[§Second Brain]] [[2021-01-14]]

---

```mermaid
graph TB;

F[Frage]
R[Recherche]

B[Bücher]
S[Skripte]
V[Vorlesungen]
P[Papers]

K(Kindle)
X(Xodo)

L[Literaturnotiz]
Z[Zettel]
T[Texte]

subgraph Evaluation
	B
	P
end

subgraph "keine Evaluation (immer relevant)"
	S
	V
end

B & P --> K & X
S ==> X

K
X

K & X --> L
X & V ==> Z

subgraph Obsidian	
	L --> Z
	Z --> T
end
Z --> F
F --> B & P
```