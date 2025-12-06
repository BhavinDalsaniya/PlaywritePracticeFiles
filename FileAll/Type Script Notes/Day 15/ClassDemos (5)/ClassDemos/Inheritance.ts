// Inheritance:
//A class can reuse the properties and methods of another class.  
// Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class (parent).
// Inheritance allows you to reuse the functionality of an existing class without rewriting it.

// Method Overriding:
// A subclass/child calss can provide a specific implementation of a method that is already defined in its superclass.
// The method must have the same name, return type, and parameters.




//A ----properties + methods     (Parent class/ BaseClass/Super class)
//B extends A--- properties+methods ( Child class/ derived class/Sub class)


//Parent class
class Car
{
    name: string;
    color: string;
    model : string;

    constructor(name:string, color:string, model:string)
    {
        this.name=name;
        this.color=color;
        this.model=model;
    }

    start(){
        console.log("Car started...")
    }

    stop()
    {
        console.log("Car stopped...")
    }


    displayInformation()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`);

    }
}

//Child class - Honda
class Honda extends Car
{
    year: number;

    constructor(name:string, color:string, model:string,year: number)
    {   
        super(name,color,model);
        this.year=year;
    }

    //Method overriding
    start()
    {
        console.log("Honda started...")
    }
    
    yom()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`);
    }

}


//Child class - Maruthi

class Maruthi extends Car
{

    year: number;

    constructor(name:string, color:string, model:string,year: number)
    {   
        super(name,color,model);
        this.year=year;
    }

    //Method overriding
    start()
    {
        console.log("Maruthi started...")
    }
    
    yom()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`);
    }

}


//Usage

//Create Honda object

let honda=new Honda("Honda","Red","Honda city", 2024);

console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);

honda.start(); //Honda started...   // called child class method( overrided)
honda.displayInformation(); //Name: Honda, Color: Red, Model: Honda city     // Parent class
honda.stop(); //Car stopped...  //Parent class
honda.yom(); //Name: Honda, Color: Red, Model: Honda city, YOM: 2024    // Child class


//Create Maruthi object

let maruthi=new Maruthi("Maruthi","Blue", "Suzuki", 2023);

maruthi.start();  // child class
maruthi.displayInformation(); //Name: Maruthi, Color: Blue, Model: Suzuki
maruthi.stop();   // Parent
maruthi.yom(); //Name: Maruthi, Color: Blue, Model: Suzuki, YOM: 2023



//Parent class varaible is holding child class object

let car:Car=new Honda("Honda","Red","Honda city", 2024);

car.displayInformation();  //Name: Honda, Color: Red, Model: Honda city
car.start(); //Honda started.

//car.yom();   // Not accessible yom() defeind inside th child class but not thee in teh parent