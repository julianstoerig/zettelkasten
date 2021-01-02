Dieses **Stylesheet** beinhaltet die Richtlinien für Formatierung innerhalb meines Zettelkastens.
Die Einhaltung dieser sorgt nicht nur für ein einheitliches Aussehen in meiner Webpräsenz, sondern erhöht auch meine Arbeitsgeschwindigkeit, da eine Vielzahl der Entscheidungen zum Stil eines jeden Dokumentes schon im Vorhinein feststehen.

## MathJax

Einheitlichkeit ist besonders für das Verständnis mathematischer, physikalischer und chemischer Gleichungen relevant.

### Integrale integrieren

Treten Integrale von Integralen auf, so wird das äußerste Integral in normaler Größe gelassen, die Integralsymbole jedes weiteren Integrals seiner Position entsprechend um jeweils einen Grad verkleinert. Die Reihenfolge der Tags sieht dabei so aus:

`\normalsize` (äußerstes Integral, implizit)

`\small` (1. Integral, ab hier explizit)

`\Tiny` (3. Integral)

`\tiny` (4. Integral und folgende)

Dies gilt allerdings nur für die Integralsymbole, der Rest der Symbole, auch innerhalb der inneren Integrale, bleibt weiterhin `\normalsize`. Um dies zu erreichen wird ein ``

Beispiel [[✒ Arbeitsplatz/Kräftegleichgewicht|Kräftegleichgewicht]]:

```MathJax
\int \left( \small \int \normalsize a(t) \mathrm{d}t \right) \mathrm{d}t
```

