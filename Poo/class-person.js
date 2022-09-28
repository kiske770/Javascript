class Person {
    Name;
    Age;
    isDeveloper;

    constructor(name, age, isDeveloper){
        this.Name = name
        this.Age = age
        this.isDeveloper = isDeveloper
    }

    Gretting(){
        console.log(`Hello, my name is ${this.Name}, and I'm ${this.Age} years old.`)
    }
}

const newPerson = new Person('Mario', 37,true)
console.log(newPerson)
newPerson.Gretting()

//instanceof -> funciona similar que typeof, pero para clases
console.log(typeof newPerson)
console.log(newPerson instanceof Person) //se usa mucho para el tema de herencias
