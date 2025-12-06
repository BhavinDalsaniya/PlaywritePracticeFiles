/*
/*  1. An interface in TypeScript is a way to define the structure of an object. 
    2.  It tells the compiler what properties and types an object should have. 
    3. It's like a blueprint for objects.

Abstract method: we only signature of the method ( there is no implementation)


interface InterfaceName
{
properties
abstract methods
}

1 Regular properties
2 Optional properties
3 Readonly properties & function types
4 Extending interfaces
5 Class implements interface

*/


//Example 1: Basic interface


interface Person
{
    name:string;
    age: number;
}

let student: Person= { 
    name:"john", 
    age:30
}

console.log(student.name);
console.log(student.age);
console.log(student); //{ name: 'john', age: 30 }



//Example 2: Optional Properties  (?)

interface Employee
{
    eid:number;
    ename:string;
    edepartment?:string;  // optional property

}

let emp:Employee={
eid:101,
ename:"john"
}

let emp1:Employee={
    eid:102,
    ename:"Smith",
    edepartment:"accounts"
    }
    

console.log(emp.eid,emp.ename,emp.edepartment); //101 john undefined
console.log(emp1.eid,emp1.ename,emp1.edepartment);  //102 Smith accounts


//Example 3: Readonly Properties (readonly to prevent modification) & Function type/Method

interface Book
{
    title:string;
    readonly isbn:string;

    display():void;   // abstract method
}


let b1: Book={

    title:"Learn Playwright",
    isbn:"123-ABC",

    display()
    {
        console.log(b1.isbn,b1.title);
    }
}

console.log(b1.title); //Learn Playwright
console.log(b1.isbn); //123-ABC
b1.display();

console.log("After changing values...");

b1.title="Learn TypeScript";
console.log("After changing title:",b1.title);

//b1.isbn="123-XYZ";  // Error: Cannot assign to 'isbn' because it is a read-only property



//Example 4: Extending Interfaces (Inheritance is applicable)

/*
//Parent interface
interface Animal
{
    name: string;
}

//Child interface
interface Dog extends Animal{
    color:string;
}


let mydog:Dog={
    name:"Buddy",
    color:"Black"
}

console.log(mydog.name,mydog.color); //Buddy Black

*/


//Example 5: 
// class can extends another class
// interface can extends another interface

// class can implement interface

interface Animal{
    name:string;
    sound():void;
}

class Dog implements Animal{

 name:string;  // inherited from interface Animal
 color:string; // property belongs to Dog

 constructor(name:string,color:string)
 {
  this.name=name;  
  this.color=color;  
  
 }

 sound()
 {
    console.log("bark...")
 }

}

let pet=new Dog("Tommy","Black");
console.log(pet.name);
console.log(pet.color);
pet.sound();