[[Informatik]] [[Python]]

  

**PyQt5** ist zusammen mit **kivy** und **Tkinter** eine der populärsten GUI-Bibliotheken für [[Python|Python]]. Es handelt sich dabei um eine Adaption des GUIs der bekannten **C++**-Bibliothek **Qt**.

## Implementierung

### Bibliotheken importieren

Für ein einfaches GUI muss nur ein Teil der Bibliothek, `PyQt5.QtWidgets` importiert werden, der standardmäßig zu `qtw` gekürzt wird.

```python

import PyQt5.QtWidgets as qtw

```  

### Fenster

Wir definieren hier das Fenster durch die Klasse `MainWindow`, die von `QWidget` erbt.

```python

class MainWindow(qtw.QWidget):

 def __init__(self):

 super().__init__()

```

#### Fenstertitel
```python
self.setWindowTitle("Titel")
```
#### Widgets

```python
self.show()
```
### Instanzieren von GUI Objekten

#### Diese Klasse kümmert sich um Backend GUI Zeug mit dem Ich mich nicht beschäftigen muss

```python
app = qtw.QApplication([])  
mw = MainWindow()
```
### "Fenster öffnen" durch die Backend-Klasse

```python
app.exec_()
```