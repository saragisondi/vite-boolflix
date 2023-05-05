**BoolFlix**
===

In questo esercizio iniziamo a replicare la logica che sta dietro a tantissimi siti che permettono la visione di film e telefilm.
Per fare questo, come fanno siti molto più rinomati, utilizzeremo un API che ci permette di avere un insieme di risultati congrui alla nostra ricerca.

**Milestone 0:**
Progettare la struttura del global, state sulla linea degli esercizi svolti nei giorni precedenti.

**Milestone 1:**
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
Titolo
Titolo Originale
Lingua
Voto


### **Steps:**
1) Creo i componenti principali;
2) Creo una input con una searchbar;
3) Creo un file 'store' dove inserisco il mio ApiUrl;
4) Faccio la chiamata Api;
5) Collego la chiamata Api al button;