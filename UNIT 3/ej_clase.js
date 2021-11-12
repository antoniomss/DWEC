var numeros = [8, 7, 27, 12, 54, 90, 56, 34, 123, 0];

//ordena de forma ascendente
numeros.sort((a, b) => a - b)

//ordena de forma descendente
numeros.sort((a, b) => b - a)

var coches = [
    { marca: 'Mercedes', modelo: 'Clase C', transmision: 'manual'},
    { marca: 'Mercedes', modelo: 'Clase A', transmision: 'manual'},
    { marca: 'Mercedes', modelo: 'Clase A', transmision: 'automatica' },
    { marca: 'Audi', modelo: 'A1', transmision: 'manual' },
    { marca: 'Audi', modelo: 'RS7', transmision: 'manual' },
    { marca: 'BMW', modelo: 'Serie D', transmision: 'manual' },
    { marca: 'BMW', modelo: 'M4', transmision: 'manual' },
    { marca: 'Renault', modelo: 'Mégane', transmision: 'manual' }
  ];

  coches.sort((a, b) => {
    if (a.marca < b.marca) {
      return -1;
    }
    else if (a.marca > b.marca) {
      return 1;
    } else {
        if (a.modelo < b.modelo){
            return -1;
        } else if (a.modelo > b.modelo){
            return 1;
        } else{
            if (a.transmision < b.transmision){
                return -1
            } else if (a.transmision > b.transmision){
                return 1
            } else {
                return 0
            };
        }
    }
  });