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

    GetName(){
        return this.#Name
    }

    GetAge(){
        return this.#Age
    }

    _GetIsDeveloper(){
        return this._isDeveloper
    }
}

const person = new Person('Mario', 70, false)
console.log(person)
person.Gretting()
console.log(person.GetName())
console.log(person.GetAge())
console.log(person._GetIsDeveloper())

