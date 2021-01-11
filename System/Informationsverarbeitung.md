```mermaid
graph LR;

B["Bücher"]
S["Skripte"]
V["Vorlesungen"]
P["Papers"]

E{{"Evaluation"}}
K("Kindle")

L["Literaturnotiz"]
Z["Zettel"]
T["Texte"]

subgraph verschiedenste Orte
	B & S & V & P --> E
end

subgraph Konsum
	E --> K
end

subgraph Obsidian
	K --> L
	L --> Z
	Z --> T
end
```