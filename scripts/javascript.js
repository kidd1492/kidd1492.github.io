
const titleEx = document.getElementById('titleEx');
const textContainer = document.getElementById('textContainer');
const scriptContainer = document.getElementById('scriptContainer');


function getExamples(example){
    switch(example){
        case 'variable':
            const textVariable = "<b>let, const, and var in JavaScript:</b><br/><br/>\
                                <b>let:</b>\
                                let is used to declare a mutable (changeable) variable.\
                                Variables declared with let can be reassigned new values.\
                                They have block scope, which means they are only accessible\
                                within the block<br/><br/>\
                                \
                                <b>const:</b>\
                                const is used to declare a constant (immutable) variable.\
                                Variables declared with const cannot be reassigned after their initial value.\
                                They also have block scope.\
                                Use const when you know the value won’t change throughout your code.\
                                \
                                <ul><li>Use let for variables that may change.</li>\
                                <li>Use const for constants that won’t change.</li>\
                                <li>Avoid using var due to its unpredictable behavior.</li></ul>";

            const codeExVariable = 
'<pre>\
let variable = 8\;<br/>\
const variable = 3.14\;<br/>\
var variable = "A string"\;<br/>\
</pre>';
                            
            titleEx.innerHTML = "Variable"
            textContainer.innerHTML = textVariable;
            scriptContainer.innerHTML = codeExVariable;
            break;
        
        case 'function' : 
            const textFunction = `Function Declaration:<br/><br/>
            <p>Definition: A function is a named block of code that can be called \
            (or invoked) to perform a specific action. It encapsulates a series of\ 
            statements and can take input (called parameters) and produce output (called a return value).</p><br/>
                <li>A function is an object</li>
                <li>A function is defined using the function keyword followed by a name (identifier).</li>
                <li>It can take zero or more parameters (also known as arguments).</li>
                <li>The function body contains the code to be executed when the function is called.</li><br>
                Function Call (Invocation):<br/><br/>\
                <li>To execute a function, you “call” it by using its name followed by parentheses.</li>
                <li>Pass any required arguments inside the parentheses.</li><br/><br/>
                Functions in Javascript: <br/><br/><a href="functions.html">Types of Funtions in Javascript</a>`;

            const codeExFunction = `Javascript function example:<br><br>
<pre>
function functionName(argument, argument) {
    Code to exicute;
    //\Functions can return a value using the return keyword.
    return result;
}</pre><br/>`;

            titleEx.innerHTML = "Functions"
            textContainer.innerHTML = textFunction;
            scriptContainer.innerHTML = codeExFunction;
            break;

        case 'closure':
            const textClosure  = `Closure:<br/><br/>
            A closure in JavaScript is a powerful concept that combines a function with 
            references to its surrounding state (known as the lexical environment).<br/><br/>

            <p>Definition: A closure is formed when an inner function (a function defined inside another function) 
            retains access to the variables and parameters of its outer function even after the outer function has finished executing.<br/><br/>
            Access to Outer Scope: Closures allow you to access variables from the parent scope within an inner function. 
            This is particularly useful for creating private variables and maintaining state.</p><br/><br/>

            Maintaining State:<br/>
            Closures help maintain state between events in event-driven JavaScript.
            For example, if you want to count the number of times a button is clicked on a webpage, closures are an excellent choice. You can create a counter variable within a closure, and each time the button is clicked, the counter is updated.
            This ensures that the counter remains private and isn’t affected by other scripts on the page.<br><br>
            Private Variables:<br>
            Closures allow you to create private variables by enclosing them within the closure scope.
            These variables are not accessible from outside the closure, providing encapsulation and preventing unintended modifications.
            For instance, you can use closures to create modules with private data and expose only specific functions or properties.<br><br>
            Callbacks and Asynchronous Code:<br>
            Closures are essential for handling callbacks and asynchronous operations.
            When dealing with asynchronous tasks (e.g., fetching data from a server), you can use closures to capture the necessary context and manage state.
            For example, when using setTimeout or making AJAX requests, closures ensure that the correct data is available when the callback executes.<br><br>
            Currying:<br>
            Currying is a functional programming technique where a function returns another function with some of its arguments pre-filled.
            Closures enable currying by capturing the initial arguments and allowing subsequent partial function calls.
            Curried functions are useful for creating reusable and composable code.<br><br>
            Memoization:<br>
            Memoization involves caching the results of expensive function calls to improve performance.
            Closures can store previously computed results and return them directly if the same input is encountered again.
            This optimization is commonly used in recursive algorithms or expensive computations.<br><br>
            Emulating Private Variables or Encapsulation:<br>
            JavaScript lacks true private variables, but closures allow you to emulate them.
            By enclosing data within a closure, you create a private scope accessible only to specific functions.
            This pattern is useful for creating clean APIs and preventing accidental modifications.<br><br>
            There is a lot to this make a script to use each of these<br/><br/>
            Further Reading:<br/>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" target="_blank">JavaScript/Closures</a>`;
        
            const codeExClosure = 
                `Closure example:<br><br>
<pre>
function createCounter(num) {
    let plus = num;
    let count = 0; // This variable is private to the 'createCounter' function

    return function increment() {
        count += plus; // Access the 'count' variable from the outer scope
        console.log(\`Current count: \${count}\`);
    };
}

// Create two counters
const counter1 = createCounter(2);
const counter2 = createCounter(4);

counter1(); // Outputs: "Current count: 1"
counter1(); // Outputs: "Current count: 2"

counter2(); // Outputs: "Current count: 1"
counter2(); // Outputs: "Current count: 2"

</pre>`;

            titleEx.innerHTML = "Closure"
            textContainer.innerHTML = textClosure;
            scriptContainer.innerHTML = codeExClosure;
            break;

        case 'objects':
            const textObjects = 
            `What is an Object?<br/><br/>
            An object is a composite data type that represents a collection of related data and functionality.
            It allows you to group properties (key-value pairs) and methods (functions) together.<br/><br/>
            <li>You can access object properties using dot notation or square brackets:</li>
            <li>You can add or modify properties dynamically:</li><br/><br/>
            this Keyword:<br/><br/>
            <li>Inside an object method, this refers to the object itself.</li>
            <li>It allows you to access object properties and methods from within the method.</li><br/><br/>
            <a href="objects.html">Javascript Object Ex.</a>`;

            const codeExObjects = 
                `Object Literal Syntax:<br><br>
<pre>
const person = {
    name: "Alice",
    age: 30,
    greet: function() {
      console.log(\`Hello, I'm \${this.name}!\`);
    }
  };  
</pre>`;
        
            titleEx.innerHTML = "Objects"   
            textContainer.innerHTML = textObjects ;
            scriptContainer.innerHTML = codeExObjects;
            break;



        case 'conditionals':
            const textConditionals = ` Conditionals allow you to control the flow of your program based on specific criteria. 
            They’re essential for making decisions and handling different scenarios in your code!<br/><br/>
            Conditional statements in JavaScript allow you to test a condition and execute a block of code based on the result of that test.<br><br/>
            <br/><br/>
<pre>
if (condition1) {<br/>
....// Block of code to be executed if condition1 is true<br/>
} else if (condition2) {<br/>
....// Block of code to be executed if condition1 is false and condition2 is true<br/>
} else {<br/>
....// Block of code to be executed if both condition1 and condition2 are false<br/>
}</pre>`;

            const codeExConditionals = 
`<pre>
const num = 10;
if (num < 10) {
    console.log("number is less than 10");
} 
else if (num > 10) {
    console.log("number is greater than 10");
} 
else {
    console.log("number is 10");
}</pre>`;

            titleEx.innerHTML = "Conditionals"
            textContainer.innerHTML = textConditionals;
            scriptContainer.innerHTML = codeExConditionals;
            break;

        case 'callback': 
            const textCallback = `In JavaScript, a callback function is a function that is passed as an argument 
            to another function and is executed after some operation has been completed. Callbacks allow us to write 
            asynchronous code, where we can continue to execute other code while waiting for a particular event to occur.<br/><br/>

            Here are the key points about callbacks:<br/>
            
            Definition:<br/>
            A callback is a function passed as an argument to another function.
            It is executed when the receiving function completes its task.
            Asynchronous Execution:
            Callbacks are essential for handling asynchronous operations, such as fetching data from a server, reading files, or handling user interactions.
            Instead of blocking the execution, callbacks allow other code to run while waiting for the asynchronous task to finish.<br/><br/>
            Let’s explore a simple real-world example of callbacks to demonstrate their benefits. Imagine you’re building a weather application that fetches weather data from an external API. Callbacks are commonly used in scenarios like this, where you need to handle asynchronous operations.

            Here’s how you can implement a basic weather app using callbacks:

            Fetching Weather Data (Simulated):
            Suppose you have an API endpoint that provides weather information for a specific location.
            Simulate fetching weather data using a function that accepts a callback.
            Displaying Weather Information:
            Create a function that displays the weather information on your webpage.
            This function will be called once the weather data is retrieved.<br/><br/>
            This also cover Asynchronous:<br/><br/>
            <a href="asynchronous.html"> Asynchronous Ex :</a>`;

            const codeExCallback = `
<pre>
function function1(callback){
    setTimeout(() => {console.log('Task 1');
                      callback()}, 3000);
}


function function2(){
    console.log('task 2');
    console.log('task 3');
    console.log('task 4');
}


function1(function2);
</pre>
            `;

            titleEx.innerHTML = "Callback"
            textContainer.innerHTML = textCallback;
            scriptContainer.innerHTML = codeExCallback;
            break;


        
        case 'array': 
            const textArray = `An array is a data structure that holds a collection of values (elements) 
            in a specific order. In JavaScript, arrays can contain any type of data, including strings, 
            numbers, objects, and even other arrays.<br/><br/>
            <li>Indexing: Each element in an array is assigned an index (position) starting from 0.</li><br/>
            <code>array.forEach(callback);</code><br/>
            Callback Parameters:
            <ul>
            <li>accumulator: The accumulated value.</li>
            <li>element: The current element being processed.</li>
            <li>index: The index of the current element.</li>
            <li>array: The original array being reduced.</li><br/><br/>
            <a href="array.html">Array Examples</a>
            `;

            const codeExArray = `
<pre>
let numbers = [1, 2, 3, 4, 5];

        numbers.forEach(square);
        numbers.forEach(display);

        function double(element, index, array){
          array[index] = element * 2;
        }

        function square(element, index, array){
            array[index] = Math.pow(element, 2);
        }

        function display(element){
            console.log(element)

        }
</pre>`;

            titleEx.innerHTML = "Array"
            textContainer.innerHTML = textArray;
            scriptContainer.innerHTML = codeExArray;
            break;

        case 'destructuring': 
            const textDestructuring = `Destructuring<br/><br/>
            <p>Destructuring in JavaScript is a powerful feature that allows you to unpack values from 
            arrays or objects into distinct variables.</p>

<pre>
const colors = ['red', 'green', 'blue', 'black', 'white'];

//asigning elements of an arry to a list of values
    const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
    colors.forEach((element) => console.log(element));
</pre>

            <li>Object destructuring allows you to extract values from an object’s 
                properties and assign them to variables.</li><br/>
<pre>
const person = { name: 'Alice', age: 30 };
const { name, age } = person;
console.log(name); // 'Alice'
console.log(age); // 30
</pre>
            <li>You can provide default values for variables in case the property or array element doesn’t exist.</li>
            `;

            const codeExDestructuring = `
            <h3>More about destructuring</h3>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="blank">Destructuring</a>
<pre>
// swapping values of vareables
    let a = 1;
    let b = 2;

    [a, b] = [b, a];

    //console.log(a, b);

    // swapping elements in an array
    const colors = ['red', 'green', 'blue', 'black', 'white'];

    [colors[0], colors[4]] = [colors[4], colors[0]];

    //console.log(colors);
</pre>`;

            titleEx.innerHTML = "Destructuring"
            textContainer.innerHTML = textDestructuring;
            scriptContainer.innerHTML = codeExDestructuring;
            break;

        case 'class': 
            const textClass = `Class<br/><br/>
            <p>In JavaScript, classes provide a way to create reusable templates for creating objects. 
            They encapsulate data along with methods that operate on that data. Let’s explore the key 
            aspects of classes in JavaScript:</p>
            <li>You can define a class using either a class declaration or a class expression.</li><br/>
            <h3>class declaration</h3>
<pre>
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(\`Hello, I'm \${this.name}! I need a friend\`);
    }
}

const alice = new Person("Alice", 30);
const john = new Person("John", 35);
console.log(alice.name);
console.log(alice.greet());
</pre>

            <li>a constructor is a special function used to create 
            and initialize objects. Constructors serve as blueprints for creating multiple 
            objects with similar properties and methods.</li><br/>
            Class Declaration: Used for named classes with a fixed name. Supports inheritance and strict rules.<br/><br/>
            Class Expression: from what I see it's asigning a class to a variable?? Yes it seems to be! Used for 
            anonymous classes or when redefining classes. More flexible and allows anonymous instances.
            In practice, classes are often defined using class declarations, but class expressions offer additional 
            flexibility when needed.
            `;

            const codeExClass = `
            
                        
            Ok I created these people already but it was an object what's the difference?
            <br/>Let’s compare creating an object using a constructor function (as above) with creating a class.<br/><br/>
            Both approaches serve similar purposes, but they have some key differences:<br/><br/>
            <ul>
            <li>Classes support inheritance through the extends keyword.</li>
            <li>Use classes when possible, especially for more complex scenarios.</li>
            <li>Looks like key difference is Inheritance</li>
            </ul><br/><br>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript" target="blank">More about classes in javaScript</a>
            `;

            titleEx.innerHTML = "Class"
            textContainer.innerHTML = textClass;
            scriptContainer.innerHTML = codeExClass;
            break;

        case 'inheritance': 
            const textInheritance = `Inheritance<br/><br/>
            <h3>How Inheritance Works in This Example</h3>

            <h3>Base Class (Parent Class): Animal</h3> 
            <p>The Animal class serves as the base class or parent class. It defines two properties:</p> 
            <ul> <li><strong>alive</strong>: A boolean property set to true.</li> <li>Two methods: <ul> <li><code>eat()</code>: Prints a message indicating that the animal is eating.</li> <li><code>sleep()</code>: Prints a message indicating that the animal is sleeping.</li> </ul> </li> </ul>

            <h3>Derived Classes (Child Classes): Rabbit, Fish, and Hawk</h3> 
            <p>These classes inherit from the Animal class, which means they automatically have access to its properties and methods.</p> 
            <p>Each derived class introduces its own properties (name) and methods (run(), swim(), and fly()).</p>

            <h3>Specifics of Each Derived Class:</h3> 
            <ul> <li><strong>Rabbit</strong>: <ul> <li>Inherits from Animal.</li> <li>Has an additional property <code>name</code> set to “rabbit”.</li> <li>Introduces a method <code>run()</code> that prints a message indicating that the rabbit is running.</li> </ul> </li> <li><strong>Fish</strong>: <ul> <li>Inherits from Animal.</li> <li>Has an additional property <code>name</code> set to “fish”.</li> <li>Introduces a method <code>swim()</code> that prints a message indicating that the fish is swimming.</li> </ul> </li> <li><strong>Hawk</strong>: <ul> <li>Inherits from Animal.</li> <li>Has an additional property <code>name</code> set to “hawk”.</li> <li>Introduces a method <code>fly()</code> that prints a message indicating that the hawk is flying.</li> </ul> </li> </ul>

            <h3>Creating Instances:</h3> 
            <p>We create instances of each derived class:</p> 
            <ul> <li><strong>rabbit</strong>: An instance of Rabbit.</li> <li><strong>fish</strong>: An instance of Fish.</li> <li><strong>hawk</strong>: An instance of Hawk.</li> </ul>

            <h3>Method Calls:</h3> 
            <p>We call methods on the instances:</p> 
            <ul> <li><code>rabbit.alive</code>: Accesses the <code>alive</code> property inherited from Animal. Since <code>alive</code> is true, it prints true.</li> <li><code>rabbit.eat()</code>: Calls the <code>eat()</code> method inherited from Animal, printing a message about the rabbit eating.</li> <li><code>rabbit.run()</code>: Calls the <code>run()</code> method specific to the Rabbit class, printing a message about the rabbit running.</li> </ul>

            <p>In summary, inheritance allows child classes (Rabbit, Fish, and Hawk) to inherit properties and methods from the parent class (Animal). Each child class can also introduce its own unique properties and methods. The instances of these classes can then access and use the inherited and specific properties/methods. 😊🐇🐠🦅</p>
                        `;

            const codeExInheritance = `
<pre>
inheritance allows a child class to inherit properties and 
   methods from an existing parent class*/
   
    class Animal{
        alive = true;

        eat(){
            console.log(\`This \${this.name} is eating\`);
        }

        sleep(){
            console.log(\`This \${this.name} is sleeping\`);
        }
    }

    class Rabbit extends Animal{
        name = "rabbit";
        run(){console.log(\`This \${this.name} is running\`);}
    }

    class Fish extends Animal{
        name = "fish";
        swim(){console.log(\`This \${this.name} is swimming\`);}       
    }

    class Hawk extends Animal{
        name = "hawk";
        fly(){console.log(\`This \${this.name} is flyinging\`);}
    }

    const rabbit = new Rabbit();
    const fish = new Fish();
    const hawk = new Hawk();

    console.log(rabbit.alive);
    rabbit.eat();
    rabbit.run();

</pre>`;

            titleEx.innerHTML = "Inheritance"
            textContainer.innerHTML = textInheritance;
            scriptContainer.innerHTML = codeExInheritance;
            break;
            
        case 'staticSuper': 
            const textStaticSuper = `Static:<br/><br/>
            <ul>
            <li>static members are useful when you want to store data or define methods 
            that are relevant to the entire class, rather than individual instances. </li>
            <li>You can think of static properties as class-level variables, and static methods 
            as utility methods that don’t depend on instance-specific data.</li>
            <li>Static properties and methods are accessed directly on the class <code>User.userCount</code></li>
            </ul><br/><br>
            Super:<br/><br>

            The super keyword is used to access properties on an object literal or a class’s prototype, or to invoke a superclass’s
             constructor.<br/><br/>
            It can be used in two ways:<br/><br/>
            As a “function call” (super(...args)): In the constructor body of a derived class (with extends), 
            you can call super(...args) before using this. It calls the parent class’s constructor and binds the 
            parent class’s public fields. After that, the derived class’s constructor can further access and 
            modify this.<br/><br/>
            As a “property lookup” (super.prop or super[expr]): This form allows you to access methods and properties 
            of an object literal’s or class’s prototype.
            `;

            const codeExStaticSuper = `
<pre>           
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(\`Hello, my username is \${this.username}\`)
    }

    static getUserCount(){
        console.log(User.getUserCount);
    }
}

const user1 = new User("Chris");
const user2 = new User("Bobby");
user1.sayHello();
console.log(user2.username);
console.log(User.userCount);
</pre>`;

            titleEx.innerHTML = "Static Super"
            textContainer.innerHTML = textStaticSuper;
            scriptContainer.innerHTML = codeExStaticSuper;
            break;

        case 'dom':
            const textDom = `
            console.dir(document);<br/>
            document.title = "Page Name";
            `;

            const codeExDom = `
            <h3>What is the DOM?</h3>
    <p>The Document Object Model (DOM) is a programming interface for web documents.</p>
    <p>It represents the structure and content of a document (such as an HTML or XML document) in memory, allowing programs to interact with it.</p>
    <p>The DOM views a web page as a collection of nodes and objects, which can be manipulated using programming languages like JavaScript.</p>

    <h3>Nodes and Objects:</h3>
    <p>The DOM represents the document as a tree structure.</p>
    <p>Each node in the tree corresponds to a part of the document (e.g., an HTML element, text, or attribute).</p>
    <p>Nodes are organized into a logical hierarchy, with the entire document represented as the root node.</p>
    <p>Objects in the DOM correspond to these nodes, allowing programming languages to connect to and manipulate the page.</p>

    <h3>Example:</h3>
    <p>Consider the following JavaScript code snippet:</p>
    <pre><code>const paragraphs = document.querySelectorAll("p");
    alert(paragraphs[0].nodeName);</code></pre>
    <p>In this example, <code>querySelectorAll("p")</code> returns a list of all &lt;p&gt; elements in the document.</p>
    <p>We access the first paragraph’s <code>nodeName</code> property (which is “P”) using the DOM.</p>

    <h3>Core and Extended APIs:</h3>
    <p>The DOM is built using multiple APIs that work together.</p>
    <p>The core DOM defines entities describing any document and the objects within it.</p>
    <p>Other APIs (such as the HTML DOM API and SVG API) add new features and capabilities to the DOM.</p>

    <h3>JavaScript and the DOM:</h3>
    <p>JavaScript interacts with the DOM to access and manipulate web pages.</p>
    <p>The DOM is not part of the JavaScript language itself but is a Web API used to build websites.</p>
    <p>JavaScript provides the model for web pages, allowing developers to work with HTML, SVG, and XML documents.</p>
    <p>Remember that the DOM is essential for creating dynamic and interactive web content. It enables developers to modify page structure, style, and content programmatically! 😊🌐</p>

    <p>For more detailed information, you can refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" target="_blank" rel="noopener noreferrer">MDN documentation on the DOM</a>.</p>
            `;

            titleEx.innerHTML = "DOM"
            textContainer.innerHTML = textDom;
            scriptContainer.innerHTML = codeExDom;
            break;

        case 'getElementBy':
            const textGetElementBy = `
            console.dir(document);<br/>
            document.title = "Page Name";<br/><br/>
            <ul>
            <li>getElementById() returns a single element or null</li>
            <li>getElementsByClassName() returns a collection of objects sharing that class</li>
            <li>getElementsByTagName() returns a collection of objects</li><br/><br/>
            <li>querySelector() will return the first matching element .for class #forId</li>
            <li>querySelectorAll() returns a nodelist and it has built in methods forEach()</li></ul>`;

            const codeExGetElementBy = `
<pre>
/* DOM Document Object Model
        console.dir(document)
        console.log(document.getElementById('myh1').textContent);
        let h1Elements = document.getElementsByTagName('h1');
        console.log(h1Elements[1].textContent); */
    
        // getElementById() returns a single element or null
        const myh1 = document.getElementById('myh1');
        myh1.style.backgroundColor = 'yellow';
        myh1.style.textAlign = "center";

        //getElementsByClassName() returns a collection of objects sharing that class
        //Can TypeCast toArray() or Array.from(var_name) to use forEach() 
        const fruits = document.getElementsByClassName('fruits');
        //console.log(fruits);
        fruits[0].style.backgroundColor = "yellow";

        //getElementsByTagName() returns a collection of objects
        const h4Elements = document.getElementsByTagName('h4');
        h4Elements[1].style.backgroundColor = "orange";

        //querySelector() will return the first matching element .for class #forId
        const element = document.querySelector('.fruits')
        console.log(element);

        //querySelectorAll() returns a nodelist and it has built in methods forEach()
        const fru = document.querySelectorAll('.fruits');
        fru[1].style.backgroundColor = "red";
        fru.forEach(fru => {
            fru.style.color = "blue";
        });
</pre>`;

            titleEx.innerHTML = "getElementBy-- querySelector--"
            textContainer.innerHTML = textGetElementBy;
            scriptContainer.innerHTML = codeExGetElementBy;
            break;

        case 'date':
            textDate = `
<pre>
/*let time = document.getElementById('time');    

function currentTime(){
    let date = new Date()
    time.innerHTML = date;
    second();
}

function second(){
    setTimeout(currentTime, 1000);     
}*/

const date = new Date();

const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const min  = date.getMinutes();
const sec = date.getSeconds();
const milsec = date.getMilliseconds();
const now = date.getTime();

console.log(day);    
console.log(month);
console.log(year);
console.log(hour);
console.log(min);
console.log(sec);
console.log(milsec);
console.log(now);   //1716400148167
</pre>`;
            codeExDate = ` `;

            titleEx.innerHTML = "getElementBy-- querySelector--"
            textContainer.innerHTML = textDate;
            scriptContainer.innerHTML = codeExDate;
            break;

        case 'forLoops':
            const textForLoop = `
            <h3>The for loop repeats a block of code until a specified condition evaluates to false.</h3>
<pre>
for (initialization; condition; afterthought) {
    // Code to execute
    }</pre><br/>

            <p>the for...of loop provides a concise way to iterate over elements in an array. It allows you to 
            directly access each element without using an index.</p><br/>
<pre>
const myArray = [10, 20, 30, 40, 50];

// Using for...of to iterate over elements
for (const element of myArray) {
  console.log(element);
}</pre>`;
            const codeExForLoop = `
<pre>
let n = 10;
for(let i = 0; i < n; i++){
    console.log(i);
};
</pre> `;

            titleEx.innerHTML = "for Loops"
            textContainer.innerHTML = textForLoop;
            scriptContainer.innerHTML = codeExForLoop;
            break;

        case 'whileLoops':
                const textWhileLoop = `
                <p>A while loop is a control flow statement that repeatedly executes a block of 
                code as long as a specified condition remains true. It’s useful when you want to 
                repeat an action until a certain condition is no longer met.</p>
                `;


                const codeWhileLoop = `
<pre>
let count = 1; // Initialize a counter

while (count <= 5) {
  console.log(count); // Print the current value of 'count'
  count++; // Increment the counter
}
</pre>`;
                
                titleEx.innerHTML = "while Loops"
                textContainer.innerHTML = textWhileLoop;
                scriptContainer.innerHTML = codeWhileLoop ;
                break;

            case 'eventListener':
                const texteventListener = `
                element.addEventListener("event", callback);
<pre>                
// const box = document.getElementById('box');
const box = document.querySelector("#box");
box.addEventListener('click', function(event){
    box.style.backgroundColor = "red";
});

box.addEventListener('mouseover', function(event){
    box.style.backgroundColor = "green";
});

box.addEventListener('mouseout', function(event){
    box.style.backgroundColor = "yellow";
});</pre><br/><br/>

                <a href="eventListener.html">Example view page source</a>
                `;


                const codeExeventListener = `

            <h3>Mouse Events:</h3>
            <ul>
                <li>click: Fired when an element is clicked.</li>
                <li>dblclick: Fired when an element is double-clicked.</li>
                <li>mousedown: Fired when the mouse button is pressed down on an element.</li>
                <li>mouseup: Fired when the mouse button is released after being pressed.</li>
                <li>mousemove: Fired when the mouse pointer moves over an element.</li>
                <li>mouseover: Fired when the mouse pointer enters an element.</li>
                <li>mouseout: Fired when the mouse pointer leaves an element.</li>
                <li>contextmenu: Fired when the right mouse button is clicked (context menu).</li>
            </ul>

            <h3>Keyboard Events:</h3>
            <ul>
                <li>keydown: Fired when a key is pressed down.</li>
                <li>keyup: Fired when a key is released.</li>
                <li>keypress: Fired when a key produces a character (not for all keys).</li>
            </ul>

            <h3>Form Events:</h3>
            <ul>
                <li>submit: Fired when a form is submitted.</li>
                <li>input: Fired when the value of an input field changes.</li>
                <li>change: Fired when the value of a form element (like &lt;select&gt; or &lt;input type="checkbox"&gt;) changes.</li>
            </ul>

            <h3>Window Events:</h3>
            <ul>
                <li>load: Fired when the page finishes loading.</li>
                <li>unload: Fired when the page is about to be unloaded (e.g., when navigating away).</li>
                <li>resize: Fired when the window is resized.</li>
                <li>scroll: Fired when the user scrolls the page.</li>
            </ul>

            <h3>Focus Events:</h3>
            <ul>
                <li>focus: Fired when an element receives focus (e.g., when clicked or tabbed into).</li>
                <li>blur: Fired when an element loses focus.</li>
            </ul>

            <h3>Other Events:</h3>
            <p>There are many other specialized events, such as:</p>
            <ul>
                <li>dragstart, dragend, dragover, drop (for drag-and-drop interactions).</li>
                <li>touchstart, touchmove, touchend (for touch devices).</li>
                <li>animationstart, animationend, transitionend (for CSS animations and transitions).</li>
            </ul>`;
                
                titleEx.innerHTML = "while Loops"
                textContainer.innerHTML = texteventListener;
                scriptContainer.innerHTML = codeExeventListener ;
                break;
                
            case 'json':
                const textJson = `
                <h3>What is JSON?</h3>
                <ul>
                    <li>JSON is a lightweight data interchange format.</li>
                    <li>It's text-based and easy to understand.</li>
                    <li>JSON is often used for transmitting data between a server and a web page.</li>
                    <li>The syntax of JSON is derived from JavaScript object notation, but it's text-only.</li>
                </ul>
            
                <h3>JSON Syntax Rules:</h3>
                <ul>
                    <li>Data in JSON is organized as name/value pairs.</li>
                    <li>Pairs are separated by commas.</li>
                    <li>Objects (similar to JavaScript objects) are enclosed in curly braces {}.</li>
                    <li>Arrays (similar to JavaScript arrays) are enclosed in square brackets [].</li>
                </ul>
            
                <h3>Example of JSON:</h3>
                <p>Here’s an example of a simple JSON object representing employee records:</p>
                <pre>
                    <code>
            {
              "employees": [
                { "firstName": "John", "lastName": "Doe" },
                { "firstName": "Anna", "lastName": "Smith" },
                { "firstName": "Peter", "lastName": "Jones" }
              ]
            }
                    </code>
                </pre>
                <p>In this example, the <code>employees</code> object contains an array of three employee records.</p>
            
                <h3>Converting JSON to JavaScript Objects:</h3>
                <p>JSON data can be easily converted into native JavaScript objects.</p>
                <pre>
                    <code>
            const jsonString = '{ "employees": [ ... ] }';
            const jsonObject = JSON.parse(jsonString);
                    </code>
                </pre>
            
                <h3>Using JSON in Web Applications:</h3>
                <p>Common use cases include fetching data from a server (e.g., via an API) and displaying it on a web page.</p>
                <p>You can also create JSON data dynamically in your JavaScript code.</p>
            
                <h3>Remember:</h3>
                <ul>
                    <li>JSON names (keys) must be enclosed in double quotes (" "), unlike JavaScript object keys.</li>
                    <li>JSON is language-independent; you can work with it in any programming language.</li>
                </ul>
            
                <p>JSON simplifies data exchange and is widely supported across different platforms and languages. It’s an essential part of modern web development! 😊</p>
                `;

                const codeExJson = `page section`;

                titleEx.innerHTML = "Json"
                textContainer.innerHTML = textJson;
                scriptContainer.innerHTML = codeExJson;
                break;

            case 'asyncAwait' : 
                const textAsyncAwait = `
                async Function: When you add the async keyword before a function definition, it transforms 
                the function into an asynchronous function.<br /><br/>
                Using async and await for API calls in DevOps scripts can streamline the process of handling asynchronous operations, 
                such as interacting with remote servers or services. Here’s how you can use them in a practical scenario:

                Making API Calls: When you’re working with APIs, you often need to make HTTP requests to various endpoints. 
                These requests are inherently asynchronous because they involve waiting for a response from the server.
                Handling Responses: Once the API call is made, you need to handle the response, which might involve parsing JSON data, 
                error handling, or updating the state of your application or script.
                Here’s an example of how you might use async and await in a DevOps script to make API calls:
                `;

                const codeExAsyncAwait = `
<pre>

// This is your unique API key from OpenWeather
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather data for a city
async function fetchWeather(city) {
    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}\`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

// Function to display weather data
function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = \`
        <div>City: \${data.name}</div>
        <div>Temperature: \${data.main.temp} K</div>
        <div>Weather: \${data.weather[0].main}</div>
    \`;
}

// Fetch weather data for a specific city
fetchWeather('London');
</pre>
                `;

                titleEx.innerHTML = "Async/Await"
                textContainer.innerHTML = textAsyncAwait;
                scriptContainer.innerHTML = codeExAsyncAwait;
                break;

            case 'fetch' : 
                const textFetch = `
                <h3>The Fetch Function in JavaScript</h3>
    <ul>
        <li><strong>Promise-Based:</strong> fetch returns a promise, which resolves to a Response object representing the response of the request.</li><br/>
        <li><strong>Syntax:</strong> The basic syntax of fetch is fetch(url, [options]), where url is the resource you want to fetch, and options is an object containing any custom settings that you want to apply to the request.</li><br/>
        <li><strong>GET Requests:</strong> By default, fetch makes a GET request to the specified URL. However, you can specify other methods like POST, PUT, DELETE, etc., in the options parameter.</li><br/>
        <li><strong>Handling Responses:</strong> To access the response body, you use methods like .json(), .text(), .blob(), etc., on the Response object. These methods also return promises, which resolve with the actual data.</li><br/>
        <li><strong>Error Handling:</strong> fetch only rejects a promise if the request fails due to network issues. HTTP errors like 404 or 500 do not reject the promise; instead, they are reflected in the ok status of the Response object.</li><br/>
        <li><strong>Advanced Features:</strong> The Fetch API supports advanced features like CORS, streaming responses, and aborting requests.</li>
    </ul>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="blank">Fetch API</a>`;

                const codeExFetch = `
<pre>
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  fetchData();
</pre>
                `;


                titleEx.innerHTML = "fetch"
                textContainer.innerHTML = textFetch;
                scriptContainer.innerHTML = codeExFetch ;
                break;

            case '.then' : 
            const textThen = `
            <h3>The .then() Method in JavaScript</h3>
    <ul>
        <li><strong>Syntax:</strong> The .then() method takes up to two callback functions as arguments. The first callback is executed if the promise is fulfilled, and the second is executed if the promise is rejected.</li>
        <li><strong>Chaining:</strong> .then() returns a new promise, which allows you to chain multiple .then() calls together. Each one waits for the previous promise to settle before executing.</li>
        <li><strong>Handling Values:</strong> If the promise is fulfilled, the value it's resolved with is passed to the onFulfilled callback. You can then return a value from onFulfilled, which will be wrapped in a new promise for the next .then() in the chain.</li>
        <li><strong>Error Handling:</strong> If the promise is rejected, the onRejected callback receives the reason for rejection. If you omit the onRejected callback, the rejection will be forwarded to the next .then() or .catch() for handling.</li>
    </ul>
    <h3>Example of using .then():</h3>
            `;
            const codeExThen = `
<pre>
    fetch('https://api.example.com/data')
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data => {
        console.log('Data received:', data);
        })
        .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        });
</pre>
            `;

            titleEx.innerHTML = ".then";
            textContainer.innerHTML = textThen;
            scriptContainer.innerHTML = codeExThen;
            break;
    }
}

        