//Getter -> metodos que nos permiten obtener atributos o metodos privados o protegidos
//Setter -> metodos que nos cambiar el valor de alguno de los atributos privados o protegidos


class Person {
    //Private -> # variables privadas
    #Name;
    #Age;


    //Protected -> _
    _isDeveloper;
    constructor(name, age, isDeveloper){
        this.#Name = name
        this.#Age = age
        this._isDeveloper = isDeveloper
    }

    Gretting(){
        console.log(`Hello, my name is ${this.Name}, and I'm ${this.Age} years old.`)
    }

    //Getter --> acceder de forma controlada a un atributo privado o protegido
    GetName(){
        return this.#Name
    }

    //Getter
    GetAge(){
        return this.#Age
    }

    _GetIsDeveloper(){
        return this._isDeveloper
    }

    SetAge(newAge){
        this.#Age = newAge
    }
}

const person = new Person('Mario',38, true)
let edad = person.GetAge()
console.log(edad)

person.SetAge(42)
edad = person.GetAge()
console.log(edad)
console.log(person.GetAge())