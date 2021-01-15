```mermaid
flowchart TB

Iq(Informationsquelle)
N(Notizen)
H(Hören)
I(Interpretation)
A(Anwendung / Aufgaben)
N2(Notizen)
I2(Interpretation)
A2(Anwendung / Aufgaben)
Iq --> H

Na{Nachschlagen} ==> N2

subgraph Ps[Im Unterricht]
	H --> I
	A --> I
	I --> N
end

subgraph Pt[Wiederholen]
	N2 -->|lesen| I2
	I2 -->|üben| A2
	I2 -->|verbessern| N2
	A2 -->|verstehen| I2
end

Ps ==> N2
```

## Einfachheit / Schwierigkeit der verschiedenen Stufen bei verschiedenen Mitteln

|                                        |       Digital       |        Digital         |        Digital        |    Analog     |
| --------------------------------------:|:-------------------:|:----------------------:|:---------------------:|:-------------:|
|                                Eingabe |      Tastatur       | Tastatur + Handschrift |      Handschrift      |  Handschrift  |
|                              Beispiele |       Remnote       |        OneNote         | Goodnotes, Notability | Hefte, Ordner |
|                             ---------- |     ----------      |       ----------       |      ----------       |     ----------     |
|                             Lesbarkeit |       ⭐⭐⭐        |      ⭐⭐                  |         ⭐⭐          |      ⭐       |
| Wie einfach ist es richtig zu arbeiten |       ⭐⭐⭐        |        ⭐⭐                |        ⭐⭐⭐         |      ⭐       |
|         Einbinden verschiedener Medien |       ⭐⭐⭐        |         ⭐⭐⭐               |         ⭐⭐          |      ⭐       |
|             Wissen rekontextualisieren |       ⭐⭐⭐        |        ⭐⭐                |         ⭐⭐          |     ⭐⭐      |
|                              Ablenkung |        ⭐         |          ⭐              |          ⭐           |    ⭐⭐⭐     |
|                           Wiederholung |       ⭐⭐⭐        |     ⭐                   |          ⭐           |      ⭐       |
|                   Wiederholung (+Anki) | ⭐⭐⭐(nicht nötig) |       ⭐⭐                 |         ⭐⭐          |     ⭐⭐      |
|                   Arbeitserleichterung |       ⭐⭐⭐        |          ⭐⭐              |         ⭐⭐          |      ⭐       |
