```mermaid
graph TD;

B["Bücher"]
S["Skripte"]
V["Vorlesungen"]
P["Papers"]

E{{"Evaluation"}}
K{{"Konsum"}}

L["Literaturnotiz"]
Z["Zettel"]
T["Texte"]

subgraph verschiedenste Orte
	B & S & V & P --> E
end

subgraph Obsidian
	E --> K
	K --> L
	L --> Z
	Z --> T
end
```
