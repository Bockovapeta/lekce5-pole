let testPole = [9, 8, 5, 6, 4];

testPole[2];

// vypíše nám počet hodnot v poli:
testPole.length;

// vypíše nám pole, které je na předposlením místě 
testPole[testPole.length - 2];

//připsání další hodnoty na konec pole:
testPole.push(15);

//odstranění poslední hodnoty z pole:
testPole.pop();

// přidání na začátek pole a odebrání ze začátku pole se to dělá pomocí shift a unshift
testPole.shift(3);

// vypíše nám to číslo pozice hodnoty 8 v poli
let index = testPole.indexOf(8);


//mazání hodnoty z určité pozice pole:
//toto nám vymaže hodnotu na pozici č.1:
testPole.splice(index, 1);

// mazání od hodnoty č. a počet hodnot č.:
//např. smaže nám to hodnoty od pozice č.1  a smaže to 2 hodnoty
testPole.splice(1, 2);


// vypíše nám to index + tečka + název hodnoty v poli
let poleMest = ['Praha', 'Brno', 'Ostrava'];
poleMest.forEach(function (ele, idx, arr) {
    console.log(idx + '. ' + ele)
});


// když chci, aby mi to nevypisovalo od 0 ale od 1.místa
let poleMest = ['Praha', 'Brno', 'Ostrava'];
poleMest.forEach(function (ele, idx, arr) {
    console.log((idx + 1) + '. ' + ele)
});



//druhá varianta, jak napsat funkci for each:
let poleMest = ['Praha', 'Brno', 'Ostrava'];
function vypisMestaSPoradim(ele, idx) {
    console.log(idx + '. ' + ele)
}

poleMest.forEach(vypisMestaSPoradim);






// Pro výpis do stránky můžeš použít funkci vypisText('text');
// Její kód je přiložen na konci tohoto souboru.
// Nebo můžeš pomocí console.log('text'); vypisovat do konzole prohlížeče.


// Úkol 1 - Založ nové pole se seznamem jmen (alespoň 5)
// Vypiš jeho obsah do stránky - JavaScript spojí pole automaticky do řetězce





// Úkol 2 - Vypiš třetí jméno v pořadí
// Nezapomeň, že pole se čísluje od 0






// Úkol 3 - Kolik jmen je v poli?
// Pole má vlastnost pole.length





// Úkol 4 - Vypiš znovu seznam jmen, ALE...
// Tentokrát použij cyklus .forEach() a před každé jméno přidej
// číslo indexu, na kterém se jméno nachází
// 0. Alena
// 1. Jana
// 2. Marie
// atd.





// Úkol 5 - přidej na konec pole další jméno
// pole.push()
// pole.unshift()
// Doplněný seznam jmen vypiš (jednoduše jako v příkladu 1)





// Úkol 6 - odeber z pole první a poslední jméno a vypiš
// obě jména a pak i výsledné pole
// pole.shift()
// pole.pop()










// *********************************************
function vypisText(txt) {
    document.querySelector('#vystup').innerText += txt + '\n';
}