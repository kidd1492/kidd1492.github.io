
const titleEx = document.getElementById('titleEx');
const textContainer = document.getElementById('textContainer');
const scriptContainer = document.getElementById('scriptContainer');


function getExamples(example){
    switch(example){
case 'variable':
    const textVariable = `
        <h3>Python Variables</h3><br/>

        <ul>
            <li>A variable is a name that refers to a value stored in memory.</li>
            <li>You create a variable by assigning a value using the <code>=</code> operator.</li>
            <li>Python does not require you to declare variables before using them.</li>
            <li>Variables can be reassigned to new values at any time.</li>
            <li>Variable names are case‑sensitive and must follow Python naming rules.</li></br>
        </ul>

        <h3>Variable Naming Rules</h3><br/>
        <ul>
            <li>Must start with a letter or underscore.</li>
            <li>Cannot start with a number.</li>
            <li>Can contain letters, numbers, and underscores.</li>
            <li>Should be descriptive (good practice).</li>
        </ul><br/>

        <h3>Assigning Values</h3>
        <pre><code>
x = 10
name = "Alice"
is_active = True
        </code></pre>

        <h3>Reassigning Variables</h3>
        <pre><code>
x = 10
x = 20   # now x refers to a new value
        </code></pre>

        <h3>Multiple Assignment</h3>
        <pre><code>
a, b, c = 1, 2, 3
        </code></pre>

        <h3>Swapping Values (Pythonic)</h3>
        <pre><code>
x = 5
y = 10
x, y = y, x
        </code></pre>
    `;

    const codeExVariable = `
<pre><code>
# Basic variable usage
message = "Hello"
count = 3

# Reassignment
count = count + 1

# Multiple assignment
x, y = 10, 20

# Swapping
x, y = y, x
</code></pre>
    `;

    titleEx.innerHTML = "Variables";
    textContainer.innerHTML = textVariable;
    scriptContainer.innerHTML = codeExVariable;
    break;



case 'dataTypes':
    const textDataTypes = `
        <h3>Python Data Types</h3><br/>

        <p>Python automatically assigns a data type based on the value you store in a variable.  
        Data types describe the kind of data a value represents.</p><br/>

        <h3>Common Built‑In Types</h3><br/>

        <strong>Numeric Types</strong><br/>
        <ul>
            <li><code>int</code> – whole numbers (10, -5)</li>
            <li><code>float</code> – decimal numbers (3.14, -0.5)</li>
            <li><code>complex</code> – numbers with real + imaginary parts (2 + 3j)</li>
        </ul><br/>

        <strong>Text Type</strong><br/>
        <ul>
            <li><code>str</code> – text values ("Hello")</li>
        </ul><br/>

        <strong>Sequence Types</strong><br/>
        <ul>
            <li><code>list</code> – ordered, changeable collection</li>
            <li><code>tuple</code> – ordered, unchangeable collection</li>
            <li><code>range</code> – sequence of numbers</li>
        </ul><br/>

        <strong>Mapping Type</strong><br/>
        <ul>
            <li><code>dict</code> – key/value pairs</li>
        </ul><br/>

        <strong>Set Types</strong><br/>
        <ul>
            <li><code>set</code> – unordered collection of unique items</li>
            <li><code>frozenset</code> – immutable set</li>
        </ul><br/>

        <strong>Boolean Type</strong><br/>
        <ul>
            <li><code>bool</code> – True or False</li>
        </ul><br/>

        <strong>None Type</strong><br/>
        <ul>
            <li><code>None</code> – represents “no value”</li>
        </ul><br/>

        <h3>Checking a Data Type</h3><br/>
        <pre><code>
x = 10
print(type(x))   # <class 'int'>
        </code></pre><br/>
    `;

    const codeExDataTypes = `
<pre><code>
# Examples of different data types
a = 10            # int
b = 3.14          # float
c = "Hello"       # str
d = [1, 2, 3]     # list
e = (1, 2, 3)     # tuple
f = {"name": "Sam", "age": 30}  # dict
g = {1, 2, 3}     # set
h = True          # bool
i = None          # NoneType
</code></pre>
    `;

    titleEx.innerHTML = "Data Types";
    textContainer.innerHTML = textDataTypes;
    scriptContainer.innerHTML = codeExDataTypes;
    break;


case 'conditionals':
    const textConditionals = `
        <h3>Python Conditionals</h3><br/>

        <p>Conditionals let your program make decisions based on whether a condition is True or False.</p><br/>

        <pre><code>
if condition:
    # code runs if condition is True
elif another_condition:
    # runs if previous conditions were False
else:
    # runs if none of the above were True
        </code></pre><br/>

        <h3>Comparison Operators</h3><br/>
        <ul>
            <li><code>==</code> equal to</li>
            <li><code>!=</code> not equal</li>
            <li><code>&gt;</code> greater than</li>
            <li><code>&lt;</code> less than</li>
            <li><code>&gt;=</code> greater or equal</li>
            <li><code>&lt;=</code> less or equal</li>
        </ul><br/>
    `;

    const codeExConditionals = `
<pre><code>
x = 10
y = 20

if x > y:
    print("x is greater")
elif x < y:
    print("x is smaller")
else:
    print("x and y are equal")
</code></pre>
    `;

    titleEx.innerHTML = "Conditionals";
    textContainer.innerHTML = textConditionals;
    scriptContainer.innerHTML = codeExConditionals;
    break;


case 'forLoops':
    const textForLoop = `
        <h3>Python For Loops</h3><br/>

        <p>A <strong>for loop</strong> iterates over each item in a sequence such as a list, tuple, string, or range.</p><br/>

        <pre><code>
for item in sequence:
    # code runs for each item
        </code></pre><br/>

        <h3>Common Uses</h3><br/>
        <ul>
            <li>Loop through lists</li>
            <li>Loop through strings</li>
            <li>Loop using <code>range()</code></li>
        </ul><br/>
    `;

    const codeExForLoop = `
<pre><code>
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

# Using range()
for i in range(5):
    print(i)
</code></pre>
    `;

    titleEx.innerHTML = "For Loops";
    textContainer.innerHTML = textForLoop;
    scriptContainer.innerHTML = codeExForLoop;
    break;


case 'whileLoops':
    const textWhileLoop = `
        <h3>Python While Loops</h3><br/>

        <p>A <strong>while loop</strong> repeats as long as its condition remains True.</p><br/>

        <pre><code>
while condition:
    # code runs repeatedly
        </code></pre><br/>

        <h3>Important Notes</h3><br/>
        <ul>
            <li>Make sure the condition eventually becomes False.</li>
            <li>Use <code>break</code> to exit early.</li>
            <li>Use <code>continue</code> to skip to the next iteration.</li>
        </ul><br/>
    `;

    const codeWhileLoop = `
<pre><code>
counter = 0

while counter < 5:
    print("Counter:", counter)
    counter += 1

# Using break
i = 0
while True:
    if i == 3:
        break
    print(i)
    i += 1
</code></pre>
    `;

    titleEx.innerHTML = "While Loops";
    textContainer.innerHTML = textWhileLoop;
    scriptContainer.innerHTML = codeWhileLoop;
    break;



case 'function':
    const textFunction = `
        <h3>Python Functions</h3><br/>

        <p>A function is a reusable block of code that performs a specific task.  
        Functions help keep your code organized, readable, and efficient.</p><br/>

        <h3>Defining a Function</h3><br/>
        <pre><code>
def greet(name):
    print("Hello,", name)
        </code></pre><br/>

        <h3>Returning Values</h3><br/>
        <pre><code>
def add(a, b):
    return a + b
        </code></pre><br/>

        <h3>Parameters vs Arguments</h3><br/>
        <ul>
            <li><strong>Parameters</strong> are the variable names in the function definition.</li>
            <li><strong>Arguments</strong> are the actual values you pass when calling the function.</li>
        </ul><br/>

        <h3>Default Parameters</h3><br/>
        <pre><code>
def greet(name="Guest"):
    print("Hello,", name)
        </code></pre><br/>

        <h3>*args and **kwargs</h3><br/>
        <p>Used when you don’t know how many arguments will be passed.</p><br/>

        <pre><code>
def show_args(*args):
    print(args)

def show_kwargs(**kwargs):
    print(kwargs)
        </code></pre><br/>

        <h3>Lambda (Anonymous) Functions</h3><br/>
        <pre><code>
square = lambda x: x * x
        </code></pre><br/>
    `;

    const codeExFunction = `
<pre><code>
def multiply(a, b):
    return a * b

result = multiply(4, 5)
print(result)
</code></pre>
    `;

    titleEx.innerHTML = "Functions";
    textContainer.innerHTML = textFunction;
    scriptContainer.innerHTML = codeExFunction;
    break;


 case 'objects':
    const textObjects = `
        <h3>Python Objects</h3><br/>

        <p>Everything in Python is an <strong>object</strong>.  
        Numbers, strings, lists, functions — all of them are objects with properties and behaviors.</p><br/>

        <p>Objects are created from <strong>classes</strong>, which act as blueprints.  
        A class defines what an object is and what it can do.</p><br/>

        <h3>Key Ideas</h3><br/>
        <ul>
            <li><strong>Object</strong> — a specific instance created from a class.</li>
            <li><strong>Attributes</strong> — data stored inside an object.</li>
            <li><strong>Methods</strong> — functions that belong to an object.</li>
            <li><strong>Class</strong> — a blueprint that defines attributes and methods.</li>
        </ul><br/>

        <p>Understanding objects is the foundation for learning classes, which is the next step.</p><br/>

        <h3>Example: Built‑in Objects</h3><br/>
        <pre><code>
name = "Alice"
print(name.upper())   # upper() is a method of string objects
        </code></pre><br/>

        <p>Now that you understand what an object is, you’re ready to learn how to create your own using classes.</p><br/>
    `;

    const codeExObjects = `
<pre><code>
x = 42
print(x.bit_length())   # method of int objects
</code></pre>
    `;

    titleEx.innerHTML = "Objects";
    textContainer.innerHTML = textObjects;
    scriptContainer.innerHTML = codeExObjects;
    break;


case 'class':
    const textClass = `
        <h3>Python Classes</h3><br/>

        <p>A class is a blueprint for creating objects.  
        It defines the attributes (data) and methods (behavior) that the objects will have.</p><br/>

        <h3>Key Terms</h3><br/>
        <ul>
            <li><strong>Class</strong> — the blueprint.</li>
            <li><strong>Object / Instance</strong> — a specific example created from the class.</li>
            <li><strong>Attribute</strong> — a variable that belongs to an object.</li>
            <li><strong>Method</strong> — a function defined inside a class.</li>
        </ul><br/>

        <h3>The __init__ Method</h3><br/>
        <p><code>__init__</code> runs automatically when you create a new object.  
        It initializes the object’s attributes.</p><br/>

        <h3>Example Class with Attributes and Methods</h3><br/>

        <pre><code>
class Dog:
    def __init__(self, name, age):
        self.name = name      # attribute
        self.age = age        # attribute

    def speak(self):
        return f"{self.name} says woof!"
        </code></pre><br/>

        <p>Creating an object:</p><br/>

        <pre><code>
my_dog = Dog("Buddy", 3)
print(my_dog.speak())
        </code></pre><br/>

        <p>This example shows how classes let you bundle data and behavior together.</p><br/>
    `;

    const codeExClass = `
<pre><code>
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def full_name(self):
        return f"{self.make} {self.model}"

my_car = Car("Tesla", "Model 3")
print(my_car.full_name())
</code></pre>
    `;

    titleEx.innerHTML = "Classes";
    textContainer.innerHTML = textClass;
    scriptContainer.innerHTML = codeExClass;
    break;


case 'date':
    const textDate = `
        <h3>Date & Time in Python</h3><br/>

        <p>Python provides the <code>datetime</code> module for working with dates and times.</p><br/>

        <h3>Importing datetime</h3>
        <pre><code>
from datetime import datetime
        </code></pre><br/>

        <h3>Get the Current Date & Time</h3>
        <pre><code>
now = datetime.now()
print(now)
        </code></pre><br/>

        <h3>Create a Specific Date</h3>
        <pre><code>
birthday = datetime(1995, 7, 12)
print(birthday)
        </code></pre><br/>

        <h3>Formatting Dates</h3>
        <p>Use <code>strftime()</code> to format dates into readable strings.</p><br/>

        <pre><code>
formatted = now.strftime("%B %d, %Y")
print(formatted)   # Example: "February 04, 2026"
        </code></pre><br/>
    `;

    const codeExDate = `
<pre><code>
from datetime import datetime

now = datetime.now()
print("Now:", now)

specific = datetime(2020, 5, 17)
print("Specific:", specific)

print(now.strftime("%A, %B %d"))
</code></pre>
    `;

    titleEx.innerHTML = "Date Object";
    textContainer.innerHTML = textDate;
    scriptContainer.innerHTML = codeExDate;
    break;


case 'listComprehension':
    const textListComp = `
        <h3>List Comprehension</h3><br/>

        <p>List comprehension is a concise way to create lists.  
        It replaces a multi‑line <code>for</code> loop with a single readable expression.</p><br/>

        <h3>Traditional Loop → List Comprehension</h3><br/>

        <strong>Normal loop:</strong>
        <pre><code>
numbers = []
for i in range(5):
    numbers.append(i * 2)
        </code></pre><br/>

        <strong>List comprehension:</strong>
        <pre><code>
numbers = [i * 2 for i in range(5)]
        </code></pre><br/>

        <h3>With Conditions</h3>
        <pre><code>
evens = [n for n in range(20) if n % 2 == 0]
        </code></pre><br/>

        <h3>Transforming Strings</h3>
        <pre><code>
words = ["apple", "banana", "cherry"]
upper_words = [w.upper() for w in words]
        </code></pre><br/>
    `;

    const codeExListComp = `
<pre><code>
nums = [i for i in range(10)]
squares = [x*x for x in nums]
evens = [n for n in nums if n % 2 == 0]

print(nums)
print(squares)
print(evens)
</code></pre>
    `;

    titleEx.innerHTML = "List Comprehension";
    textContainer.innerHTML = textListComp;
    scriptContainer.innerHTML = codeExListComp;
    break;


case 'dictionaries':
    const textDict = `
        <h3>Dictionaries</h3><br/>

        <p>A dictionary stores data as <strong>key–value</strong> pairs.</p><br/>

        <pre><code>
person = {
    "name": "Alice",
    "age": 25
}
        </code></pre><br/>

        <h3>Accessing Values</h3>
        <pre><code>
print(person["name"])
print(person.get("age"))
        </code></pre><br/>

        <h3>Adding / Updating</h3>
        <pre><code>
person["city"] = "New York"
person["age"] = 26
        </code></pre><br/>

        <h3>Looping Through a Dictionary</h3>
        <pre><code>
for key, value in person.items():
    print(key, value)
        </code></pre><br/>

        <h3>Dictionary Comprehension</h3>
        <p>Just like list comprehension, but creates a dictionary.</p><br/>

        <strong>Example: Square numbers</strong>
        <pre><code>
squares = {n: n*n for n in range(5)}
        </code></pre><br/>

        <strong>Filtering with comprehension</strong>
        <pre><code>
even_squares = {n: n*n for n in range(10) if n % 2 == 0}
        </code></pre><br/>
    `;

    const codeExDict = `
<pre><code>
person = {"name": "Sam", "age": 30}

for k, v in person.items():
    print(k, v)

squares = {n: n*n for n in range(6)}
print(squares)
</code></pre>
    `;

    titleEx.innerHTML = "Dictionaries";
    textContainer.innerHTML = textDict;
    scriptContainer.innerHTML = codeExDict;
    break;


case 'fileHandling':
    const textFile = `
        <h3>File Handling in Python</h3><br/>

        <p>Python uses the <code>open()</code> function to work with files.</p><br/>

        <h3>Opening a File</h3>
        <pre><code>
file = open("data.txt", "r")   # r = read
content = file.read()
file.close()
        </code></pre><br/>

        <h3>Using "with" (recommended)</h3>
        <p>Automatically closes the file for you.</p><br/>

        <pre><code>
with open("data.txt", "r") as f:
    content = f.read()
        </code></pre><br/>

        <h3>Writing to a File</h3>
        <pre><code>
with open("output.txt", "w") as f:
    f.write("Hello World")
        </code></pre><br/>

        <h3>Appending</h3>
        <pre><code>
with open("log.txt", "a") as f:
    f.write("New entry\\n")
        </code></pre><br/>
    `;

    const codeExFile = `
<pre><code>
with open("example.txt", "w") as f:
    f.write("Line 1")

with open("example.txt", "r") as f:
    print(f.read())
</code></pre>
    `;

    titleEx.innerHTML = "File Handling";
    textContainer.innerHTML = textFile;
    scriptContainer.innerHTML = codeExFile;
    break;


case 'exceptions':
    const textExceptions = `
        <h3>Exceptions</h3><br/>

        <p>Exceptions occur when something goes wrong in your program.  
        Use <code>try</code> and <code>except</code> to handle errors safely.</p><br/>

        <h3>Basic Example</h3>
        <pre><code>
try:
    x = 10 / 0
except ZeroDivisionError:
    print("You cannot divide by zero!")
        </code></pre><br/>

        <h3>Multiple Exceptions</h3>
        <pre><code>
try:
    num = int("abc")
except ValueError:
    print("Not a number")
except Exception as e:
    print("Other error:", e)
        </code></pre><br/>

        <h3>Finally Block</h3>
        <p>Runs no matter what.</p><br/>

        <pre><code>
try:
    f = open("data.txt")
except FileNotFoundError:
    print("File missing")
finally:
    print("Done")
        </code></pre><br/>
    `;

    const codeExExceptions = `
<pre><code>
try:
    value = int("42a")
except ValueError:
    print("Conversion failed")
</code></pre>
    `;

    titleEx.innerHTML = "Exceptions";
    textContainer.innerHTML = textExceptions;
    scriptContainer.innerHTML = codeExExceptions;
    break;


case 'virtualEnv':
    const textVirtualEnv = `
        <h3>Python Virtual Environments</h3><br/>

        <p>A virtual environment is an isolated Python workspace.  
        It keeps your project’s packages separate from your system Python installation.</p><br/>

        <h3>Why Use a Virtual Environment?</h3><br/>
        <ul>
            <li>Different projects can use different package versions.</li>
            <li>Prevents conflicts with system‑wide Python packages.</li>
            <li>Makes projects portable and easier to manage.</li>
        </ul><br/>

        <h3>Create a Virtual Environment</h3><br/>

        <strong>Windows:</strong>
        <pre><code>
python -m venv myenv
        </code></pre><br/>

        <strong>Linux / macOS:</strong>
        <pre><code>
python3 -m venv myenv
        </code></pre><br/>

        <h3>Activate the Environment</h3><br/>

        <strong>Windows:</strong>
        <pre><code>
myenv\\Scripts\\activate
        </code></pre><br/>

        <strong>Linux / macOS:</strong>
        <pre><code>
source myenv/bin/activate
        </code></pre><br/>

        <h3>Deactivate the Environment</h3>
        <pre><code>
deactivate
        </code></pre><br/>

        <h3>Install Packages Inside the Environment</h3>
        <pre><code>
pip install requests
        </code></pre><br/>

        <p>Virtual environments are essential for clean, organized Python development.</p><br/>
    `;

    const codeExVirtualEnv = `
<pre><code>
# Create
python -m venv env

# Activate (Windows)
env\\Scripts\\activate

# Activate (Linux)
source env/bin/activate

# Install packages
pip install flask
</code></pre>
    `;

    titleEx.innerHTML = "Virtual Environments";
    textContainer.innerHTML = textVirtualEnv;
    scriptContainer.innerHTML = codeExVirtualEnv;
    break;


case 'decorators':
    const textDecorators = `
        <h3>Python Decorators</h3><br/>

        <p>A decorator is a function that takes another function and adds extra behavior  
        without modifying the original function’s code.</p><br/>

        <h3>Why Use Decorators?</h3><br/>
        <ul>
            <li>Logging</li>
            <li>Authentication</li>
            <li>Timing function execution</li>
            <li>Reusable wrappers around functions</li>
        </ul><br/>

        <h3>Basic Decorator Structure</h3>
        <pre><code>
def my_decorator(func):
    def wrapper():
        print("Before function runs")
        func()
        print("After function runs")
    return wrapper
        </code></pre><br/>

        <h3>Applying a Decorator</h3>
        <pre><code>
@my_decorator
def greet():
    print("Hello!")

greet()
        </code></pre><br/>

        <h3>Decorator with Arguments</h3>
        <pre><code>
def repeat(times):
    def decorator(func):
        def wrapper():
            for _ in range(times):
                func()
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    print("Hi!")
        </code></pre><br/>

        <p>Decorators are a powerful tool for writing clean, reusable, and expressive Python code.</p><br/>
    `;

    const codeExDecorators = `
<pre><code>
def log(func):
    def wrapper():
        print("Calling:", func.__name__)
        func()
    return wrapper

@log
def hello():
    print("Hello world")

hello()
</code></pre>
    `;

    titleEx.innerHTML = "Decorators";
    textContainer.innerHTML = textDecorators;
    scriptContainer.innerHTML = codeExDecorators;
    break;


 
    }
}

        