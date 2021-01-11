```mermaid
graph TD;

B["Bücher"]
S["Skripte"]
V["Vorlesungen"]


B & S & V & P["Papers"] & -->T{{"Triage"}};
 -->T;
P["Papers"] -->T;
A["Blog-Artikel"] -->T;


```
