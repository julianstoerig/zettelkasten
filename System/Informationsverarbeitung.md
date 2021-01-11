```mermaid
graph T;

B["Bücher"]
S["Skripte"]
V["Vorlesungen"]
P["Papers"]

K("Kindle")
X("Xodo")

L["Literaturnotiz"]
Z["Zettel"]
T["Texte"]

subgraph verschiedenste Orte
	B
	P
	S
	V
end

B & P -->|Evaluation| K

subgraph Konsum
	K
	X
end

K --> L
X --> L

subgraph Obsidian	
	L --> Z
	Z --> T
end
```