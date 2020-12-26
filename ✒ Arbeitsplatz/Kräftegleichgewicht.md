#Fach-Physik  #Semester-1

---

Im **Kräftegleichgewicht** heben sich alle Kräfte $F_n$ auf einen Körper gegenseitig auf: Sie summieren sich also zu $\vec{0}$ auf.
$$
\vec{0} = \sum_{i}^{n} \vec{F_n}
$$

````python
for i in range(n):
	f_total = f_total + f(n)
if f_total == 0:
	print("im kräftegleichgewicht")
	``