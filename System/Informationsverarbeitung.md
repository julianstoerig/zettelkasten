```mermaid
graph TD;

B["Bücher"]
S["Skripte"]
V["Vorlesungen"]
P["Papers"]
A["Blog-Artikel"]

E{{"Evaluation"}}

L["Literaturnotiz"]
Z["Zettel"]

B & S & V & P & A --> E

E --> L
L --> Z


```
