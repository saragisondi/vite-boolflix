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
5) Collego la chiamata Api al button  e al input con un emit;
6) Creo un componente: Card;
7) Creo le props nel figlio per valorizzarle nel genitore;
8) Faccio un ciclo for per stamparle;


**Milestone 2:**
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)

### **Steps:**
1) Collego le immagini delle bandiere a language;
2) Creo un nuovo ApiUrl per le serie tv;

**Milestone 3:**
In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. 
Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la parte finale dell’URL passata dall’API.

### **Steps:**
1) Aggiungo alle props l'elemento img per stampare le immagini di copertina;