console.log("Creando mi propio objeto");

const MyObject = {
  MyName: "Mario Avendaño",
  MyAge: CalculateMyAge(new Date(1984, 11, 22)),
  IsDeveloper: true,
  BornDate: new Date(1984, 11, 22),
  FavoriteBook: {
    Title: "La Divina Comedia",
    Author: "Dante Alighieri",
    PublishDate: new Date(1321, 0, 1),
    PublishUrl: "https://www.culturagenial.com/es/divina-comedia/",
  },
};

function CalculateMyAge(date) {
  const birthDay = new Date(date);
  const currentDate = new Date();

  const bornYear = birthDay.getFullYear();
  const bornMonth = birthDay.getMonth();
  const bornDay = birthDay.getDate();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let resultYear = currentYear - bornYear;
  if (currentMonth < bornMonth) {
    resultYear = resultYear - 1;
  } else {
    if (currentDay < bornDay) {
      resultYear = resultYear - 1;
    }
  }

  return resultYear;
}

console.log(MyObject.MyName);
console.log(MyObject.MyAge);
console.log(MyObject.IsDeveloper);
console.log(MyObject.BornDate);
console.log(MyObject.FavoriteBook.Author);
console.log(MyObject.FavoriteBook.Title);
console.log(MyObject.FavoriteBook.PublishDate);
console.log(MyObject.FavoriteBook.PublishUrl);

//switch
let nota = 4;

switch (nota) {
  case 5:
    console.log("Excelente.... ");
    break;
  case 4:
    console.log("buen trabajo");
    break;
  case 3:
    console.log("trabajo aceptable");
    break;
  case 2:
    console.log("mucho por mejorar");
    break;
  case 1:
    console.log("no estudiaste");
    break;
  default:
    console.log("nota invalida");
    break;
}

//Comparaciones

//Igualdad
let a = 5;
let b = "5";
console.log(typeof a);
console.log(typeof b);

if (a == b) {
  console.log("5 es igual a 5"); // igualdad debil - solo compara el valor
}

if (a === b) {
  console.log("5 es muy igual a 5"); // igualdad fuerte - compara el valor y el tipo
}

//Desigualdad
let c = 4;
let d = "4";
console.log(typeof c);
console.log(typeof d);

if (c != d) {
  console.log("4 es diferente a 4"); // desigualdad debil - solo compara el valor
}

if (c !== d) {
  console.log("4 es muy diferente a 4"); // desigualdad fuerte - compara el valor y el tipo
}

//Bucles for
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let lista = [1, 4, 6, 8, 9, 2, 5, 7, 3];
for (let index = 0; index < lista.length; index++) {
  const element = lista[index];
  console.log(element);
}

//for of
for (let valor of lista) {
  console.log(valor);
}

//foreach
lista.forEach((valor) => {
  console.log(valor);
});

let persona = {
  name: "Mario",
  apellido: "Avendano",
  edad: 37,
  IsDeveloper: true,
};

//for in
for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}

//bucles while - do while
let i = 0;
let max = 10;
while (i <= max) {
  console.log(i);
  i++;
}

i = 0;
//bucles do - while
do {
  console.log(i);
  i++;
} while (i < max);

//Casos especificos break - continue
for (let i = 0; i <= 10; i++) {
  if (i == 3) {
    continue;
  }

  console.log(i);

  if (i == 5) {
    break;
  }
}

//Labels - etiquetas
let decenas = 0;
let unidades = 0;

bucleDecenas: while (decenas <=9 ) {
  bucleUnidades: while (unidades <= 9) {
    console.log(`El numero actual es ${decenas} ${unidades}`);
    unidades++;
    if(unidades === 10){
      unidades = 0;
      break; bucleUnidades
    }
    if (decenas === 2){
      console.log(`El numero actual es ${decenas} ${unidades}`);
      break; bucleDecenas
    }
  }
  decenas++;
}
