
const titleEx = document.getElementById('titleEx');
const textContainer = document.getElementById('textContainer');
const scriptContainer = document.getElementById('scriptContainer');


function getExamples(example){
    switch(example){
        case 'variable':
            const textVariable = `
            <li>Unlike languages like C# or Java, Python does not require explicit 
            variable declaration. You can create a variable by simply assigning a value to it.</li>

            <li>Variables do not need to be declared with a specific type.
            You can even change a variable’s type after it has been set:</li>

            <h3>Casting<h3>

            <li>Variables do not need to be declared with a specific type.
            You can even change a variable’s type after it has been set:</li><br/>

<pre>
    x = str(3)    # x will be '3'
    y = int(3)    # y will be 3
    z = float(3)  # z will be 3.0
</pre>

            <li>You can use the type() function to determine a variable’s data type:</li>

<pre>
    x = 10;
    print(type(x)) # Output: <class 'int'>

</pre>`;

            const codeExVariable = 
`<pre>
x = 10
y = 20
z = x + y
</pre>`
                            
            titleEx.innerHTML = "Variable"
            textContainer.innerHTML = textVariable;
            scriptContainer.innerHTML = codeExVariable;
            break;
        
        case 'function' : 
            const textFunction = `
            <h3>Python Functions</h3>
            <li>The def keyword indicates the start of a function definition.</li>
            <li>The colon (:) indicates the start of the function body.</li>
            <li>Python functions are dynamically typed. You don’t need to declare the data type of function parameters or return values.</li>
            <h3>Variable-Length Arguments:</h3>
            <li>Functions can accept a variable number of arguments using *args (for positional arguments) and **kwargs (for keyword arguments).</li>
            <pre>
    def print_args(*args):
        for arg in args:
            print(arg)

    </pre>
            <h3>Lambda Functions (Anonymous Functions):</h3>
            <li>You can create small, anonymous functions using the lambda keyword.</li>
            <pre>add = lambda x, y: x + y</pre>
            `;

            const codeExFunction = `Python function example:<br><br>
<pre>
def function_name(argument, argument):
    indented code to be exicuted
    return x
</pre><br/>`;

            titleEx.innerHTML = "Functions"
            textContainer.innerHTML = textFunction;
            scriptContainer.innerHTML = codeExFunction;
            break;

        case 'dataTypes':
            const textDataTypes  = `
            <h3>Numeric Types:</h3>
    <ul>
        <li><strong>Integers (\`int\`):</strong> Represent whole numbers (e.g., 5, -10).</li>
        <li><strong>Floating-Point Numbers (\`float\`):</strong> Represent decimal numbers (e.g., 3.14, -0.5).</li>
        <li><strong>Complex Numbers (\`complex\`):</strong> Represent numbers with both real and imaginary parts (e.g., 2 + 3j).</li>
    </ul>

    <h3>Text Type:</h3>
    <p><strong>Strings (\`str\`):</strong> Represent sequences of characters (e.g., "Hello, World!").</p>

    <h3>Sequence Types:</h3>
    <ul>
        <li><strong>Lists (\`list\`):</strong> Ordered collections of items (e.g., [1, 2, 3]).</li>
        <li><strong>Tuples (\`tuple\`):</strong> Immutable ordered collections (e.g., (1, 2, 3)).</li>
        <li><strong>Ranges (\`range\`):</strong> Represents a sequence of numbers (e.g., range(5)).</li>
    </ul>

    <h3>Mapping Type:</h3>
    <p><strong>Dictionaries (\`dict\`):</strong> Key-value pairs (e.g., {"name": "John", "age": 30}).</p>

    <h3>Set Types:</h3>
    <ul>
        <li><strong>Sets (\`set\`):</strong> Unordered collections of unique elements (e.g., {1, 2, 3}).</li>
        <li><strong>Frozen Sets (\`frozenset\`):</strong> Immutable sets (e.g., frozenset({1, 2, 3})).</li>
    </ul>

    <h3>Boolean Type:</h3>
    <p><strong>Booleans (\`bool\`):</strong> Represent truth values (True or False).</p>

    <h3>Binary Types:</h3>
    <ul>
        <li><strong>Bytes (\`bytes\`):</strong> Immutable sequences of bytes (e.g., b"hello").</li>
        <li><strong>Byte Arrays (\`bytearray\`):</strong> Mutable sequences of bytes.</li>
        <li><strong>Memory Views (\`memoryview\`):</strong> Provide a view of memory as an array of bytes.</li>
    </ul>

    <h3>None Type:</h3>
    <p><strong>NoneType (\`None\`):</strong> Represents the absence of a value (similar to null).</p>

    <h3>Getting the Data Type</h3>
    <p>You can use the <code>type()</code> function to determine the data type of any object. For example:</p>
    <pre><code>x = 5
print(type(x))  # Output: &lt;class 'int'&gt;</code></pre>

    <h3>Setting the Data Type</h3>
    <p>In Python, the data type is set when you assign a value to a variable. For instance:</p>
    <pre><code>x = "Hello World"  # assigns a string value to x
x = 20  # assigns an integer value to x
x = 20.5  # assigns a floating-point value to x</code></pre>

    <h3>Constructor Functions (Specifying Data Type)</h3>
    <p>If you want to explicitly specify the data type, you can use constructor functions:</p>
    <pre><code>x = str("Hello World")  # String
x = int(20)  # Integer
x = float(20.5)  # Float
x = complex(1j)  # Complex
# ... and so on for other types</code></pre>
            `;
        
            const codeExDataTypes = 
                ``;

            titleEx.innerHTML = "Data Types in Python"
            textContainer.innerHTML = textDataTypes;
            scriptContainer.innerHTML = codeExDataTypes;
            break;

        case 'objects':
            const textObjects = `
            <h3>In Object-Oriented Programming (OOP), objects are the central concept around which the programming model is built.</h3>
<p>Here’s a breakdown of objects in OOP:</p>

<h3>Objects</h3>
<ul>
  <li><strong>Definition:</strong> Objects are instances of classes that represent entities with attributes and behaviors. They are the basic run-time entities in an object-oriented system.</li>
  <li><strong>Attributes:</strong> Also known as properties, these are the data stored inside an object. They define the state of the object.</li>
  <li><strong>Behaviors:</strong> Defined by methods within the class, behaviors are the actions that an object can perform.</li>
  <li><strong>Identity:</strong> Each object has a unique identity, which allows objects to interact with each other within a system.</li>
</ul>

<h3>Classes</h3>
<ul>
  <li><strong>Blueprints:</strong> Classes are the templates or blueprints for creating objects. They define the attributes and methods that their objects will have.</li>
  <li><strong>Abstraction:</strong> Classes often represent broad categories, like Car or Dog, and they encapsulate all the details that are common to the objects of that type.</li>
</ul>

<h3>Instances</h3>
<ul>
  <li><strong>Specificity:</strong> While a class is a broad template, an instance is a specific object created from a class. It has concrete values for the properties defined by its class.</li>
  <li><strong>Example:</strong> If Car is a class, then myCar could be an instance of the Car class with specific attributes like color, brand, and model.</li>
</ul>

<h3>Class-Object Relationship</h3>
<ul>
  <li><strong>Instantiation:</strong> The process of creating an object from a class is called instantiation. When you instantiate a class, you get an object that has its own attributes and methods.</li>
  <li><strong>Reuse:</strong> Classes can be reused to create multiple objects. Each object is independent and can have different attribute values, but they share the structure and behavior defined by their class.</li>
</ul>

<h3>Key Principles of OOP Related to Objects</h3>
<ul>
  <li><strong>Encapsulation:</strong> Objects encapsulate data and methods. This means that the internal state of an object is protected from outside interference and misuse.</li>
  <li><strong>Inheritance:</strong> Objects can inherit attributes and behaviors from other objects, allowing for code reuse and the creation of a hierarchy.</li>
  <li><strong>Polymorphism:</strong> Objects can take on many forms. An object can be treated as an instance of its parent class rather than its actual class.</li>
</ul>

<h3>Example in Python</h3>
<pre>
<code>
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

# Creating a new Car object
my_car = Car('Tesla', 'Model S', 2020)
</code>
</pre>

<p>Objects are fundamental to OOP as they are the entities that hold data and exhibit behavior. They allow programmers to create modular and reusable code, which can lead to more efficient and manageable software development.</p>

            `;

            const codeExObjects = 
                ``;
        
            titleEx.innerHTML = "Objects"   
            textContainer.innerHTML = textObjects ;
            scriptContainer.innerHTML = codeExObjects;
            break;



        case 'conditionals':
            const textConditionals = ` Conditionals allow you to control the flow of your program based on specific criteria. 
            They’re essential for making decisions and handling different scenarios in your code!<br/><br/>
            Conditional statements in Python allow you to test a condition and execute a block of code based on the result of that test.<br><br/>
            <br/><br/>
<pre>
if condition:
    # code to execute if condition is true
elif another_condition:
    # code to execute if another_condition is true
else:
    # code to execute if none of the above conditions are true
}</pre>`;

            const codeExConditionals = 
`<pre>
const num = 10;
x = 10
y = 20

if x > y:
    print("x is greater than y")
elif x < y:
    print("x is less than y")
else:
    print("x and y are equal")

}</pre>`;

            titleEx.innerHTML = "Conditionals"
            textContainer.innerHTML = textConditionals;
            scriptContainer.innerHTML = codeExConditionals;
            break;

        
        case 'array': 
            const textArray = `
            <h3>In Python, arrays are a collection of items stored at contiguous memory locations, and they are used to store multiple values of the same type under a single variable name.</h3>
<p>Here’s what you need to know about arrays in Python:</p>

<h3>Python Lists as Arrays</h3>
<ul>
  <li>Python does not have built-in support for arrays like some other languages, but you can use lists to achieve similar functionality.</li><br>
</ul>

<h3>Creating Arrays</h3>
<ul>
  <li>You can create arrays in Python by importing the array module from the standard library. This allows you to create a typed array that contains elements of the specified type.</li><br>
</ul>

<h3>Accessing Elements</h3>
<ul>
  <li>You can access array elements using their index number. In Python, indices start at 0.</li><br>
</ul>

<h3>Adding Elements</h3>
<ul>
  <li>Use the append() method to add an element to the end of an array, or the insert() method to add an element at a specific index.</li><br>
</ul>

<h3>Removing Elements</h3>
<ul>
  <li>The pop() method removes an element at a specified index, while the remove() method removes the first occurrence of a specified value.</li><br>
</ul>

<h3>Array Operations</h3>
<ul>
  <li>You can perform operations like looping through elements, finding the length of an array using len(), and sorting the elements.</li><br>
</ul>

<h3>NumPy Arrays</h3>
<ul>
  <li>For more advanced array operations, especially for numerical data, the NumPy library is commonly used. NumPy arrays are optimized for numerical computations and support a wide range of mathematical operations.</li><br>
</ul>
            `;

            const codeExArray = `
<pre>
import array as arr

# Create an array of integers
numbers = arr.array('i', [1, 2, 3, 4, 5])

# Access elements
print(numbers[0])  # Output: 1

# Add elements
numbers.append(6)
numbers.insert(2, 99)

# Remove elements
numbers.pop()
numbers.remove(99)

# Get array length
print(len(numbers))  # Output: 5

# Loop through the array
for number in numbers:
    print(number)

</pre>`;

            titleEx.innerHTML = "Array"
            textContainer.innerHTML = textArray;
            scriptContainer.innerHTML = codeExArray;
            break;

        

        case 'class': 
            const textClass = `Class<br/><br/>
            <p>In Python, classes are like blueprints for creating objects. A class defines a set of attributes and
            methods that will characterize any object created from the class.</p>


            <h3>Here’s a simple breakdown of the concepts:</h3>

            <li>Class: A user-defined prototype for an object that defines a set of attributes and methods for the object. 
            It’s like a blueprint for creating instances (objects).</li>
            <li>Object: An instance of a class. It’s a specific realization of the class with actual values, representing an 
            entity with state and behavior.</li>
            <li>Attribute: A variable that belongs to an object or class. It represents the state or characteristics of an object.</li>
            <li>Method: A function that is defined inside a class and can be called on objects. It represents the behavior or 
            capabilities of an object.</li>
            `;

            const codeExClass = `
            <h3>The __init__ method in Python</h3>
<p>
  Often referred to as the initializer or constructor, is a special instance method that gets called automatically when a new instance of a class is created. Its primary role is to initialize the instance’s state by setting the attributes with the values passed to the class constructor.
</p>

<h3>Here’s a detailed explanation of the __init__ method:</h3>
<ul>
  <li><strong>Initialization:</strong> When you create a new object, __init__ sets up the initial state of the object by assigning the values of the object’s properties. This is where you will typically see attributes (variables associated with the object) being set.</li>
  <li><strong>Self Parameter:</strong> The first parameter of the __init__ method is always self, which represents the instance of the class. Through self, you can access the attributes and methods of the class in Python.</li>
  <li><strong>Parameters:</strong> After self, you can add as many additional parameters as you need to pass values when creating a new object. These parameters are often used to set the initial values for the object’s attributes.</li>
  <li><strong>Constructors:</strong> Unlike constructors in some other languages, __init__ doesn’t actually create the object; it’s merely responsible for initializing the object after it’s been created.</li>
</ul>

<h3>Here’s an example of a class with an __init__ method:</h3>
<pre>
<code>
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

# Creating a new Car object
my_car = Car('Tesla', 'Model S', 2020)
</code>
</pre>

<h3>Key Points:</h3>
<ul>
  <li>The __init__ method is automatically invoked when a new object is created.</li>
  <li>It’s used to assign values to the object’s attributes.</li>
  <li>The self parameter is a reference to the current instance of the class and is used to access variables that belong to the class.</li>
  <li>It’s important to note that while __init__ is similar to constructors in other object-oriented languages, in Python, the actual object creation is handled by the __new__ method, which is called before __init__.</li>
</ul>

            `;
            
                        
          

            titleEx.innerHTML = "Class"
            textContainer.innerHTML = textClass;
            scriptContainer.innerHTML = codeExClass;
            break;


        case 'date':
            textDate = `
            from datetime import datetime

            <li>Get the current date and time
            current_date_time = datetime.now()
            print("Current date and time:", current_date_time)</li>

            <li>Create a specific date
            specific_date = datetime(2020, 5, 17)
            print("Specific date:", specific_date)</li>

            <li>Format the date
            formatted_date = current_date_time.strftime("%B %d, %Y")
            print("Formatted date:", formatted_date)</li>
            `;

            codeExDate = `
<pre>from datetime import datetime

# Get the current date and time
current_date_time = datetime.now()
print("Current date and time:", current_date_time)

# Create a specific date
specific_date = datetime(2020, 5, 17)
print("Specific date:", specific_date)

# Format the date
formatted_date = current_date_time.strftime("%B %d, %Y")
print("Formatted date:", formatted_date)
</pre>
            `;

            titleEx.innerHTML = "getElementBy-- querySelector--"
            textContainer.innerHTML = textDate;
            scriptContainer.innerHTML = codeExDate;
            break;

        case 'forLoops':
            const textForLoop = `
            <h3>The for loop repeats a block of code until a specified condition evaluates to false.</h3>
            <p>A for loop in Python is used to iterate over a sequence, such as a list, tuple, dictionary, 
            set, or string. This type of loop is known as definite iteration because it executes a predetermined 
            number of times, corresponding to the number of elements in the sequence.</p><br/>
<pre>
for item in sequence:
    # code to execute for each item
</pre><br/>
            `;

            const codeExForLoop = `


<pre>
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
</pre> `;

            titleEx.innerHTML = "for Loops"
            textContainer.innerHTML = textForLoop;
            scriptContainer.innerHTML = codeExForLoop;
            break;

        case 'whileLoops':
                const textWhileLoop = `
                <p>In Python, a while loop is used for indefinite iteration, which means it will continue to 
                execute as long as a specified condition is True. Here’s the basic structure of a while loop:</p>

                <p>The condition is a Boolean expression that is evaluated before each iteration of the loop. 
                If the condition is True, the code block within the loop is executed. After the block is executed, 
                the condition is evaluated again, and this process repeats until the condition becomes False</p><br/>
                <li>Ensure the condition eventually becomes False to avoid an infinite loop.</li>
                <li>The condition is checked before the code block is executed, so if the condition is False initially, the code block will not run at all.</li>
                <li>You can use break to exit the loop prematurely, and continue to skip to the next iteration without finishing the current one.</li>
                <li>An else clause can be added to run a block of code once after the loop ends naturally (i.e., the condition becomes False), but it will 
                not execute if the loop is terminated with a break statement.</li>

                `;


                const codeWhileLoop = `
<pre>
counter = 0
while counter < 5:
    print("Counter is at:", counter)
    counter += 1 
</pre>`;
                
                titleEx.innerHTML = "while Loops"
                textContainer.innerHTML = textWhileLoop;
                scriptContainer.innerHTML = codeWhileLoop ;
                break;

    }
}

        