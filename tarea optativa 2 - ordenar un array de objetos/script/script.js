// arrays:
const AUTOS = [
    {Modelo: "Suran ",
        Marca: "Volkswaggen",
        Año: 2006,
        km: 129414,
    },
    {
        Modelo: "Ka",
        Marca: "Ford",
        Año: 2020,
        km: 645,

    },
     {
        Modelo:"Dodge",
        Marca: "Toyota",
        Año: 2012,
        km: 325324,

    },
    {Modelo: "Fun",
        Marca: "Susuki",
        Año: 2009,
        km: 9414,

    }
]

function ordenar(arr) {
    let sort = prompt("¿Quiere que se ordenen los modelos de los autos por km, año o marca?")
    switch (sort){
        case "km":
        return arr.sort(compareKM);
    
        break;
        case "año":
        return arr.sort(compareAÑO);
        
        break;
        case "marca":
        return arr.sort(compareMarca);
        
        break;

    }
}

function compareAÑO(a, b) {
    if (a.Año > b.Año) {
        return 1;
    }
    if (a.Año < b.Año) {
        return -1;
    }
    return 0;
}
function compareMarca(a, b) {
    if (a.Marca > b.Marca) {
        return 1;
    }
    if (a.Marca < b.Marca) {
        return -1;
    }
    return 0;
}

function compareKM(a, b) {
    if (a.km > b.km) {
        return 1;
    }
    if (a.km < b.km) {
        return -1;
    }
    return 0;
}

const array_ordenado = ordenar(AUTOS)
console.table(array_ordenado)
document.write("lea la consola")