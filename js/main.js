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
        alimentazioneDiesel.push(automobile);
    } else if (automobile.alimentazione === 'benzina') {
        alimentazioneBenzina.push(automobile);
    } else {
        alimentazioneElettrica.push(automobile);
    }
    console.log(automobile)
});

// STAMPA SEPARATAMENTE I 3 ARRAY
console.log('Alimentate a diesel', alimentazioneDiesel);

console.log('Alimentate a benzina', alimentazioneBenzina);

console.log('Automobili elettriche', alimentazioneElettrica);


// HTML
stampaLista(alimentazioneDiesel,'lista1');
stampaLista(alimentazioneBenzina,'lista2');
stampaLista(alimentazioneElettrica,'lista3');

function stampaLista(array, idLista){
    let listaHtml = '';
    for (let i = 0; i < array.length; i++) {
        let automobile = array[i]
        listaHtml += `<li>${automobile.marca} ${automobile.modello}</li>`;
    }
    document.getElementById(idLista).innerHTML = listaHtml;
}