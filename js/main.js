// LISTA AUTOMOBILI
let listaAutomobili = [
    { marca: 'Nissan', modello: 'Note', alimentazione: 'diesel' },
    { marca: 'Ford', modello: 'Focus', alimentazione: 'benzina'},
    { marca: 'Fiat', modello: 'Panda', alimentazione: 'elettrica'},
    { marca: 'Toyota', modello: 'Corolla', alimentazione: 'benzina'},
    { marca: 'Tesla', modello: 'Model 3', alimentazione: 'elettrica'},
    { marca: 'Volkswagen', modello: 'Golf', alimentazione: 'benzina'},
    { marca: 'Honda', modello: 'Jazz', alimentazione: 'diesel'},
    { marca: 'Chevrolet', modello: 'Camaro', alimentazione: 'diesel'},
    { marca: 'Renault', modello: 'Clio', alimentazione: 'elettrica'},
];

// CREA 3 ARRAY SEPARATI PER OGNI TIPO DI ALIMENTAZIONE
let alimentazioneDiesel = [];
let alimentazioneBenzina = [];
let alimentazioneElettrica = [];

// COLLOCA CIASCUN AUTOMOBILE NEL RISPETTIVO ARRAY
listaAutomobili.forEach(function (automobile) {
    if (automobile.alimentazione === 'diesel') {
        alimentazioneDiesel.push;
    } else if (automobile.alimentazione === 'benzina') {
        alimentazioneBenzina.push;
    } else {
        alimentazioneElettrica.push;
    }
});
