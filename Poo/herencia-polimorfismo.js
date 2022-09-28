// Inheritance - Herencia
class People {
    Name;
    Age;

    constructor(name, age){
        this.Name = name
        this.Age = age
    }

    
    Gretting(){
        console.log(`Hello, my name is ${this.Name}, I'm ${this.Age} years old.`)
    }
}

class Developer extends People{

    Language;

    constructor(name, age, language){
        super(name, age)// se usa para llamar el constructor de la clase padre
        this.Language = language
    }

    Gretting(){ //Override - Polimorfismo -> varias formas
        super.Gretting()
        console.log(`And  I'm ${this.Language} developer.`)
    }
}

const newDev = new Developer('Mario',38, 'Javascript')
console.log(newDev)
console.log(newDev.Gretting())

