//store one value(variable as string)
const myString = "Hello World";
console.log(myString);

//Store multiple values (multiple strings in an array variable.)
const myArray = [myString, "a second string"];
console.log(myArray);

const myPersonArray = [
    "Henry",
    32,
    ["Program", "Hike", "Watch Movies"]

];
console.log(myPersonArray[2]); //Display Hobbies

/**
 * Javascript Objects
 * 
 * JSON - Javacript Object Notation
 */

 const myPersonObject ={ //Javascript object ()
     name:  "Henry",
     age:    32,
     hobbies:["Program", "Hike", "Watch Movies"] 
 };
 console.log("my name is " + myPersonObject.name);
 console.log("I like to" + myPersonObject.hobbies);
 console.log("I am" + myPersonObject.age + "years old");

// Output JavaScript object...
console.log( myPersonObject );
const validJSONString = JSON.stringify( myPersonObject );
// Output perfectly valid JSON string...
console.log( validJSONString ); // This can be interpreted by other programming languages / programs!
// JSON helps us communicate in a universal format/standard.

/**
 * Class 
 * 
 * Classes are like blueprints! we make a guide /define on what each person will have inside.
 */
//Start our blueprint with the "class" keyword.
class Person {
    //We can use constrructors  
    constructor(name= "", age=0, hobbies=[])
    {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;   // "this" refers to current person you are working on
    }


    //we can add methods to a class, they are like 'fuctions', "but are run frm objects instead."
    sayHello()
    {
        //Creating element.
        const helloElement = document.createElement("p");
        //Fill the text of the element(using template literal.)
        helloElement.textContent = `Hello, my name is ${this.name}!`; // similar to c# string interpolation
        //add the new element to the body of our webpage.
        document.body.appendChild(helloElement); 
    }

}

//Let's make some people!

const sarah = new Person;
console.log(sarah);
sarah.sayHello(); //call upon a method to execute.

const jia = new Person("Jia Then", 800, ["Sleep", "Cosplay"] );
console.log(jia);
jia.sayHello();

jia.height = "7'"; //we can update and add new properties for our objects(name/ age/ hobbies in this case)


