- JavaScript is a dynamic, weakly typed programming language which is compiled at runtime, and it can be executed as a part of web-page as well.
- JavaScript skips the extra page reloads and makes the webpage more dynamic.
- JavaScript is compiled by V-8 engine to run JavaScript anywhere called Node.js, because Node.js can be executed on any machine often used to build web backends.
	- parse code
	- compile to machine code
	- execute machine code
		- on a single thread

- Dynamic + Weakly Typed Programming Language
	- code is executed at runtime and can change at runtime.
	- Data Types are pre-assumed and are not set in stone but can be changed.
	
	- example
		- let foo = 2; //foo is now a number
		- foo = 'bar'; //foo is now a string
		- foo = true; //foo is now a boolean


Java Vs JavaScript
	- Java cannot run in the browser, it is strongly object oriented.
	- JavaScript is flexible, weakly type and can run inside the browser.
		- client side (browser)
		- server side (Node.js)

Points to Ponder:
	- best practise is to add the script tag for JavaScript at the end of the page, i.e; at the end of the body tag.
		- but meanwhile we can also add the script tag for javaScript right after the css link in the head section.
		- using the defer keyword
			- it will load the javaScript file earlier but only execute after the HTML file is completely rendered.
			- it will take care of the order in which script tags are being called.
			- likewise
			- <script src = "assets/scripts/vendor.js" defer><//script>
	- only add semicolon to the single line statements only, there is no need to add semi-colon after the function body.
		- using the async keyword
			- async keyword is used when we have a standalone javascript file.
	- Best practices is to seperate out the JavaScript files.
		- for example;
			- separating out the selected child files
				- document.getElementById("#h1")
			- separating out the logical code files.
Scoping in JavaScript
	- Global Scope
		- a function can access any globally declared variable
	- Local Scope
	
Truthy and Falsy concept:
	- Only consider the following scnerios
		- 0 -> False
		- "" -> False
		- null, undefined, nan -> False
		
		- any number other than 0 (including -ve) = True
		- any other non-empty string = True
		- {}, [] & all other objects or arrays = True
	
let vs const vs var
	- let and const are follows the order of flow, while the var doesn't
	
	- let and const are the block scope while var is the global and function scope.
	- var is a globally scope even inside the function*/block as well
		- console.log(name);
		- var name = "sohaib";
		- output = undefined
		
		- var name1 = "sohaib"
		- var name2 = "hadia"
		- this also works as well
		
	- let is a block*/function scope. (ES-6 adapted)
	- and we have to declare the variable before its usage, otherwise it will give an error
		- console.log(name);
		- let name = "sohaib"
		- output = error //because we have to declare the let before the console.log
		
		- let name1 = "sohaib"
		- let name2 = "hadia"
		- this won't works at all
	- const (ES-6 adapted)
		- the variable once declared using the const, it cannot be changed afterwards
		- if we have declared an object using const, we can change the value that particular object, but ultimately we cannot change the assigned object.
			- example
			- const objPerson = {name: "sohaib"}
			- objPerson.name = "hadia" //it will work
	
Null vs Undefined vs NaN
	- undefined
		- default value of uninitialized variable
		- we shouldn't assign undefined as a value manually
	- null
		- never assumed by default
		- you can assign this is a value if you want to 'reset' / 'clear' a variable
			- null == undefined //true
			- null === undefined //false
	- NaN
		- it is also a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number.
		- it is the only value that is not equal to itself.

Data Types
	- Booleans
		- 1 of 2 possible values, either true or false.
		- important for conditional code and situations where you only have 2 options
	- objects
		- important for grouped data/related data, helps us with organizing data
		- example
			- {name: 'max', age: 30}
	- arrays
		- javaScript arrays are resizeable and can have mix of different data types
	- Numbers
		- important for calculations.
		- 2, -3, 22.584
	- Strings (text)
		- stay consistent with the commas throughout the project
			- either use "" or ''
			- or we can use the template literals
				- `anything ${any_declared_variable} is treated as string`
		- "hi", empty string ""
	- We can initialize any variable as a value of another variable.
		- let tempNumber = 0;
		- let firstNumber = tempNumber;
Converting Data Types:
	- parseInt is a built-in function used to convert a value into integer.
		- example
			- the output is showing 029, so we can use parseInt(number), it will display 29 then.
	- similar is the parseFloat as well.

Conditional Statements
	- if else statements
	- switch statements
		- switch(expression){
			case expression1:
				do this
			break;
			case expression2:
				do this
			break;
			default:
				do this
		}
	- ternary operator
		- condition? experssion1: expression2
		
loop and iterations
	- for loop
	- while loop
		- there are labeled statements as well
			- example
			- markloop: while(true){doSomething()};
	- for-in loop
		- more precisely for the objects
		- it return the object properties, instead of object values
		- example
		- const object = { a: 1, b: 2, c: 3 };

		for (const property in object) {
  		console.log(`${property}: ${object[property]}`);
		}
		
		- incase of arrays, it will return the indexes along with the values.
	- for-of loop
		- it will return the values over each index/property.
		- it cannot be applied to the object, because it is not iteratable.
	
- the return keyword exits the function, while break keyword exits the loop.

Primitive vs reference values
	- all the data types like string, number, boolean are primitive type values.
		- it uses to store values as copy in some other address in the memory.
	- while the arrays and objects are reference type values
		- it stores the value using the pointer to the original value.

arrays vs objects
	- we should be using objects if we want the element name to be string,
		or we should be using arrays if we want the element name to be numbers.
		
		- Mutable is a type of variable that can be changed. In JavaScript, only
			objects and arrays are mutable, not primitive values. A mutable object is an
				object whose state can be modified after it is created. Immutables are the
					objects whose state cannot be changed once the object is created.

arrays
	- arrays are a special type of objects, and they are really flexible
Array methods
	- splice() vs slice()
		- slice makes a copy of the original array, and then performs the operations on it.
		- while splice changes the content of the original array
	- find() vs findIndex()
		- findIndex() will return the index of the first item that passes the test
		- whereas find() will return the first item itself that passes the test. 
			- both will give undefined if none of the test passes.
	- filter()
		- creates a copy of an array for each index that passes the test case. It iterates over each index of the array.
		- example
			- var numbers = [1, 2, 3, 4];
			const newNumbers = numbers.filter(functions (num){
				return num > 10;
			});
	- some()
		- check over each index, that passes the test and return the boolean value. find() returns the index value itself.
	- reduce()
		- it always returns a single value.
		- it will simply compress the array and evaluates the final result.
			- for example
			- find the sum of all elements of array,
			- subtract all the numbers of an array,
			- round of all the numbers of the array and find the sum.

			- example
				- let newNumber = numbers.reduce(accumulator, currrentItem){
					return accumulator + currrentItem;
				}
	- bind()
		- With the bind() method, an object can borrow a method from another object.
	
Objects
	- they are great for grouping data together, that are inter-related or have some relations.
	- const logEntry = {
		//values can be anything, either integer, string etc
		operation: 'ADD',
		prevResult: initialResult,
		number: enteredNumber,
		result: currentResult
	};
	- accessing object data
		//using dot(.) notation to access any value of the object
		- console.log(logEntry.operation)

	- we can also use the function prototype for declaring multiple objects having the same properties, but different values.
	- we can also create objects of the type objects
		- example
			- const objPerson = object.create(Person)

	- two objects with different names are not equal, even having the same properties.
		- fruit == objFruit //false
		- fruit === objFruit //false

	- but if let const fruit = objFruit;
		- fruit == objFruit //true
		- fruit === objFruit //true
		
Arrow functions
	- () => {}
	- it removes the keyword of "function"
		
function declaration vs expression
	- declaration means to write it globally
		- hoisting works
	- expression means to assign it some variable
		- hoisting doesnt works here
		- const x  = function(){
				return 2*3;
			}
	
Function vs Methods
	- a function inside an object is a method, or a function attached to any property of an object is a method.

Functions (code on demand) - is also typically a type of an object
	- calling nested functions tempFun()(10);
	- function hoisting is same as variable hoisting
	- try to make as many functions as we can to make the code more generic and useful, as it is the best practices as well.
	- a function should be having only one return statement
	- we need to call a function in order to execute it.
	- even we can assign the resultant value of the function to any other variable.
		- const newVariable = add(1,3);
	- function greetUser(name){
		alert(`hi ${name}`);
	}
	- example 1:
		- function add(firstNumber, secondNumber){
			const result = firstNumber + secondNumber;
			return result;
		}
	- example 2: (executing functions indirectly)
		- function add(){
			//currentResult is declared globally
			//userInput.value is coming from the vendor.js(separate js file) where we have used the document.getElementById
			const result = currentResult + userInput.value;
			return result;
		}
	- Rest Parameters
		- function multiply(multiplier, ...theArgs) {
  			return theArgs.map((x) => multiplier * x);
		}

		const arr = multiply(2, 1, 2, 3);
		console.log(arr); // [2, 4, 6]

callback / callback function
	- it is a type of function that is being passed as an argument to another function
		- function multiply(){
			return 4*3;
		}
		function addition(multiply){
			return multiply()+3;
		}

higher-order-function
	- it is a function that can accept other functions as Parameters or can return the functions as well.

IIFE (immediately invoked function expression)
	- self executing anonymous functions
	- benefit is that it prevents global javascript scope.
		- example
		- (function (){
			//body
		})();
		- (()=>{
			// body
		})();
		- (async ()=>{
			//body
		})();

"Use Strict mode"
	- makes it restricted to redeclare the variable using var

- Map Function
	- What map function does is that it takes each of the index and performs any operations on it.
	- syntax
		- let arr1 = [2, 3, 4, 5];
		- function sqrtFun(num){
			return num*num;
		}
		- console.log(arr.map(sqrtFun()); //output: 4, 9, 16, 25

	- JSX example:
	emojiPedia.maps(<Entry />)

	function Entry (emohiTerm){
		retrun <Entry
			key = {emojiPedia.id}
			emoji = {emojiPedia.emoji}
			name = {emojiPedia.name}
			description = {emojiPedia.meaning}
	}

- Nested functions and colsures
	- basically nested functions are its self colsures, because they inherit the variables and methods of its parent function as well as the scope of the parent function as well.
	- In short, a function is a combination of functions bundled together. In JavaScript, a colsure in created every time a new function is created.
	- if there are multiple variables of the same name, then the value of the most nearest one will be selected.
	
Trailing Commas:
	- rest operator should always be at the last parameter.
	- trailing commas cannot be empty
		- like (, ,)
		- there should be atleast one value.
	- trailing commas are not allowed in JSON.
		- JSON.parse('{"foo" : 1, ');

Nullish Coalescing Operator
	- leftExpr ?? rightExpr
		- if leftExpr is any falsy value it will display the rightExpr, otherwise leftExpr will be displayed.

Optional Chaining Operator
	- obj.value ?. prop
	- it is same like . chaining operator, except that instead of causing an erro if a reference is nullish, the expression simply short-circuit with a return value of undefined.

Spread vs Rest Operator
	- both have the same syntax (...).
	- Spread help us expand an iterable such as an array where multiple arguments are needed.
		- var var_name = [...iterable]
		- var array3 = [...array1, ...array2];

	- Rest is the opposite of the Spread
	- it compresses them
		- for example
		- in a function where when we require to pass arguments but are not sure how many we have to pass, the rest parameter makes it easier
			- but there should be only one rest parameter.
			- function function_name(...arguments){
				statements;
			}

Object Destructuring
	- Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables.
	- Object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables.

	- names used in the object destructuring should be unique

	var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
	};

	// Destructuring the object into variables without 
	// assigning default values 
	var { firstname, lastname, country } = employee;
	console.log("Without setting default values")
	console.log( firstname, lastname, country);

	// Destructuring the object into variables by 
	// assigning default values 
	var { firstname = 'default firstname', 
	      lastname = 'default lastname', 
	      country = 'default country' } = employee;
	console.log("\n After setting default values")
	console.log( firstname, lastname, country);

	- example
		- let a, b, rest;
		- [a, b] = [10, 20];

		- console.log(a); // Expected output: 10

		- console.log(b); // Expected output: 20

		- [a, b, ...rest] = [10, 20, 30, 40, 50]; //rest parameters are used.

		- console.log(rest); // Expected output: Array [30, 40, 50]

	- example
		- const cars = [
				{
					model: "honda civic",
					colorByPopularity: ["black", "silver"],
					speedStats: {
						topSpeed: 140,
						zeroToSixty: 8.5
					}
				},
				{
					model: "Tesla Model 3",
					colorByPopularity: ["red", "white"],
					speedStats: {
						topSpeed: 150,
						zeroToSixty: 3.2
					}
				}
			];
		- and in the new file, using object destructuring
			step 1 - const [honda, tesla] = cars;
			step 2 - further destructuring the honda and tesla object properties:
			const {
				speedState: { topSpeed: hondaTopSpeed //this is the renaming}
			} = honda
			const {
				speedState: { topSpeed: teslaTopSpeed //this is the renaming}
			} = tesla;

			step 3 - further destructuring by the popularity of color
				- const {colorByPopularity: [hondaTopColor]} = honda;
				- const {colorByPopularity: [teslaTopColor]} = tesla;

CallBack Hell
	- The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”.

Event Loop
	- because JS is the sigle threaded language, the secret behind the asynchronous programming.
	- Preserved function calls in CallBack Queue -> unless the Call Stack is not empty.

Promises

	- You typically use a promise to manage situations where you must wait for the outcome of an operation. For example, uploading files to the server and awaiting the response of an API call, or just asking the user to choose a file from their computer.

	- "I Promise a Result"
	- Producing code is code that can take some time
	- consuming code is code that must wait for the result

	- a promise is a javascript object that links producing code and consuming code.

	- a promise can be:
		- fulfilled //a result value
		- rejected //an error object
		- pending //undefined
	- 2 properties
		- state
		- result

	- We must use the promise method to handle promises.
	- promise.then() takes 2 arguments, a callback for success and another for faliure
		- promise.then(
			function(value) {myDisplayer(value);},
			function(error) {myDisplayer(error);}
		)

- Async and Await makes promises easier to write
	- for example
		- async keyword before a function makes the function return a promise.
		- async function myFunction() {
		  	return "Hello";
		}
		myFunction().then(
		  function(value) {myDisplayer(value);},
		  function(error) {myDisplayer(error);}
		);

	- awaits makes the function pause the execution and wait for it a resolved promise before it continues.



			
We should keep in mind the concept of the separation of concerns
	- classList.add/remove/toggle
	- document.queryselector
	- document.getElementById
	- .getAttribute will give us back the 
	
- innerHTML vs textContent
	- innerHTML contains the html tags as well along with the text insie.
	- textContent only brings out the text part only
			
Document Object Model (DOM):
	- It is the HTML skeleton.
	
