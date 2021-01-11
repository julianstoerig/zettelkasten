```mermaid
graph TD;

B["Bücher"]
S["Skripte"]
V["Vorlesungen"]
P["Papers"]

E{{"Evaluation"}}


L["Literaturnotiz"]
Z["Zettel"]
T["Texte"]
B & S & V & P --> E

E --> L
L --> Z
Z --> T

```
