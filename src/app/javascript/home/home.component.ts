import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from '../../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title="Javascript Interview Q/A";

  qandA: any = [
    {
      id:2,
      link:'abc',
      q: 'bind(), apply(), call()',
      a:`<b>bind()</b><br/>The <b>bind()</b> method creates a new function that, when called, has its this keyword set to the provided value.
      <pre>
      var a = {
        k1: 5 
      };     
      var b = function(c,d){               
          return(this.k1 + c + d);
      }
      console.log(b.call(a, 3,2));    
      console.log(b.apply(a, [3,2]));       
      var g = b.bind(a);
      console.log(g(3,2));
      -----------------------------

      this.x = 9;    // this refers to global "window" object here in the browser
      var module = {
        x: 81,
        getX: function() { return this.x; }
      };

      module.getX(); // 81

      var retrieveX = module.getX;
      retrieveX();   
      // returns 9 - The function gets invoked at the global scope

      // Create a new function with 'this' bound to module
      // New programmers might confuse the
      // global var x with module's property x
      var boundGetX = retrieveX.bind(module);
      boundGetX(); // 81


      var a = {
          firstname: 'fname',
          lastname: 'lname ',
          getFullName: function() {
              var fullname = this.firstname + ' ' + this.lastname;
              return fullname;
          }
      };
    
      var b = function() {
          console.log(this.getFullName());
      };
    
      var c = b.bind(a); // creates new object and binds a. 'this' of a === a now
    
      c(); // 'fname lname '
      </pre>
      <b>call()</b>
      The call() method calls a function with a given this value and arguments provided individually.<br/>
      <pre>
      function Product(name, price) {
        this.name = name;
        this.price = price;
      }
      
      function Food(name, price) {
        Product.call(this, name, price);
        this.category = 'food';
      }
      
      console.log(new Food('cheese', 5).name);
      // expected output: "cheese"
      function.call(thisArg, arg1, arg2, ...)
      </pre>
      <b>apply()</b><br/>
      The apply() method calls a function with a given this value (same as call), and arguments provided as an array <br/>
      function.apply(thisArg, [argsArray])<br/><br/>
      Difference between call, apply and bind is bind return a function with bounded object, call and apply execute with object as parameter,
      `
    },
    {id: 0, q:'Closure',link:'clouser',
     a:`A closure is the combination of a function and the lexical environment within which that function was declared.
     <br/><pre>
     function a() {
      var v = 'Closure';
      function b() {
        alert(v);
      }
      return b;
    }
    
    var myFunc = a();
    myFunc();
     </pre>
     This environment consists of any local variables that were in-scope at the time the closure
      was created. In this case, myFunc is a reference to the instance of the function 
      b() created when a() is run. The instance of b() maintains a reference to its
       lexical environment, within which the variable v exists.
        For this reason, when myFunc is invoked, the variable v remains available 
        for use and "Clouser" is passed to alert.<br/><br/>

        var r = a => b => c => d => a+b+c+d;<br/>
     
        console.log(r(1)(2)(3)(4));
     `},

     {
        id:3,
        q: 'Event Bubbling',
        link:'event-bubbling',
        a:`Event Bubbling is the event starts from the deepest element or target element to its parents, then all its ancestors which are on the way to bottom to top. At present, all the modern browsers have event bubbling as the default way of event flow.
        <pre>
    &lt;div id="parent"&gt;
        &lt;button id="child"&gt;Child&lt;/button&gt;
    &lt;/div&gt;
  
    &lt;script&gt;
    var parent = document.querySelector('#parent');
    &lt;!-- Add click event on parent div --&gt;
      parent.addEventListener('click', function(){
        console.log("Parent clicked");
      });
    var child = document.querySelector('#child');
    &lt;!-- Add click event on child button --&gt;
      child.addEventListener('click', function(){
        console.log("Child clicked");
      });
  &lt;/script&gt;</pre>`
     },  
    {
      id:5,
      q:'Hoisted',
      link:'hoisted',
      a:`<p>Variable and function declarations are physically moved to the top of your code, 
      but this is not in fact what happens. Instead, the variable and function declarations 
      are put into memory during the compile phase, but stay exactly where you typed them in 
      your code.</p>
      <p>One of the advantages of JavaScript putting function declarations into memory before 
      it executes any code segment is that it allows you to use a function before you declare 
      it in your code.</p>
      <pre>
      function catName(name) {
        console.log("My cat's name is " + name);
      }
      
      catName("Tigger");
      ----------------------------
      catName("Chloe");
      function catName(name) {
        console.log("My cat's name is " + name);
      }
      </pre>
      <p>Even though we call the function in our code first, before the function is written, the code still works. This is because of how context execution works in JavaScript.</p>
      <p>Hoisting works well with other data types and variables. The variables can be initialized and used before they are declared.</p>
      <p>JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined. For example:</p>
      <pre>
      console.log(num); // Returns undefined 
      var num;
      num = 6;
      </pre>
      <p>If you declare the variable after it is used, but initialize it beforehand, it will return the value:</p>
      <pre>
      num = 6;
      console.log(num); // returns 6
      var num;
      ----------------------------
      //Example 1 - Does not hoist
      var x = 1; // Initialize x
      console.log(x + " " + y); // '1 undefined'
      var y = 2; // Initialize y
      //This will not work as JavaScript only hoists declarations

      //Example 2 - Hoists
      var num1 = 3; //Declare and initialize num1
      num2 = 4; //Initialize num2
      console.log(num1 + " " + num2); //'3 4'
      var num2; //Declare num2 for hoisting

      //Example 3 - Hoists
      a = 'Cran'; //Initialize a
      b = 'berry'; //Initialize b
      console.log(a + "" + b); // 'Cranberry'
      var a, b; //Declare both a & b for hoisting
      </pre>
      <b>Only declarations are hoisted</b><br/>
      `
    },
    {
      id:1, 
      q:'Lexical Scope',
      link: 'lexical-scope',
      a:`Veriable defined outside of a scope (upper scope) will be automatically available inside of the scope`
    },
    {
      id:6,
      q:'Prototypes',
      link:'prototype',
      a:`All JavaScript objects inherit properties and methods from a prototype.<br/>
      We can not add a new property to an existing object constructor:<br/>
      <p>Person.nationality = "English";</p>
      To add a new property to a constructor, you must add it to the constructor function:<br/>
      <pre>
      function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
        this.nationality = "English";
      }</pre>
      <b>Prototype Inheritance</b><br/>
      <p>All JavaScript objects inherit properties and methods from a prototype:</p>

      <p>Date objects inherit from Date.prototype</p>
      <p>Array objects inherit from Array.prototype</p>
      <p>Person objects inherit from Person.prototype</p>
      <p>The Object.prototype is on the top of the prototype inheritance chain:</p>
      <p>Date objects, Array objects, and Person objects inherit from Object.prototype.</p>
      The JavaScript prototype property allows you to add new properties to object constructors:
      <pre>
      function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
      }
      
      Person.prototype.nationality = "English";
      </pre>
      The JavaScript prototype property also allows you to add new methods, properties to objects constructors:
      <pre>
      function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
      }
      
      Person.prototype.name = function() {
        return this.firstName + " " + this.lastName;
      };
      </pre>
      `
    },
    {
      id:7,
      q:'Map',
      link:'map',
      a:`<b>Map</b>
<p>Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.</p>   
<p><b>Methods and properties are:</b></p>
<ol>
<li>new Map() - Creates the map.</li>
<li>map.set(key, value) - Stores the value by key.</li>
<li>map.get(key) - Returns the value by key. undefined if key doen not exists in the Map.</li>
<li>map.has(key) - Returns true if key exists, flase otherwise.</li>
<li>map.delete(key) - Removes the value by key.</li>
<li>map.clear() - Removes everything from the map.</li>
<li>map.size - Returns the current element size.</li>
<li>map.keys() - Return an iterable for keys.</li>
<li>map.values() - Returns an iterable for values.</li>
<li>map.entries() - Returns an iterable for entries [key, value], its use by default in for..of</li>
</ol>
<pre>
var map = new Map();
map.set('1', 'string'); //a string key
map.set(1, 'num1'); // a num key
map.set(true, 'boolean'); // a boolean key

console.log(map.get('1')); // string
console.log(map.get(1)); // num1
console.log(map.get(true)) // boolean
</pre>

<p>As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.</p>
<p>Map can also use objects as keys.</p>
<pre>
var obj = {name:'Dilip'};
var map = new Map();
map.set(obj, 123);
console.log(map.get(obj)); //123
</pre>
<p><b>How Map compares keys</b></p>
<p>To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.</p>
<p>This algorithm can’t be changed or customized.</p>
<p><b>Chaining</b></p>
<p>Every map.set call returns the map itself, so we can "chain" the calls:</p>
<pre>
map.set('1', 'str1').set(1, 'num1').set(true, 'boolean');
-------------------------
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry[0], entry[1]); // cucumber,500 (and so on)
}
</pre>
<p>The insertion order is used</p>
<p>The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.</p>
<p>Besides that, Map has a built-in forEach method, similar to Array:</p>
<pre>
recipeMap.forEach((value, key, map) =>{
  console.log(key, value);
});
</pre>
<p><b>Object.entries: Map from Object</b></p>
<p>When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:</p>
<pre>
// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

alert( map.get('1') ); // str1
</pre>
<p>If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.</p>
<pre>
let obj = {
  name: "John",
  age: 30
};
let map = new Map(Object.entries(obj));
alert( map.get('name') ); // John
</pre>
<p>Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.</p>
<p><b>Object.fromEntries: Object from Map</b></p>
<p>We’ve just seen how to create Map from a plain object with Object.entries(obj).</p>
<p>There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:</p>
<pre>
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
// now prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2
</pre>
<p>We can use Object.fromEntries to get an plain object from Map.</p>
<p>
E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.</p>
<pre>
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries()); // make a plain object (*)
// done!
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2
</pre>
<p>A call to map.entries() returns an array of key/value pairs, exactly in the right format for Object.fromEntries.
<br/>
We could also make line (*) shorter:</p>
<b>let obj = Object.fromEntries(map); // omit .entries()</b>
<p>That’s the same, because Object.fromEntries expects an iterable object as the argument. Not necessarily an array. And the standard iteration for map returns same key/value pairs as map.entries(). So we get a plain object with same key/values as the map.</p>
`},
{
  id:8,
  q:'Set',
  link:'set',
  a:`<p>A Set is a special type collection - "set of values" (without keys), where each value may occur only once.</p>
  <p>Its main methods are:</p>
  <ul>
<li>new Set(iterable) - creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.</li>
<li>set.add(value) - adds a value, returns the set itself.</li>  
<li>set.delete(value) - removes the value, returns true if value existed at the moment of the call, otherwise false.</li>
<li>set.has(value) - returns true if the value exists in the set, otherwise false.</li>
<li>set.clear() - removes everything from the set.</li>
<li>set.size - is the elements count.</li>
<li>set.keys() - returns an iterable object for values,</li>
<li>set.values() - same as set.keys(), for compatibility with Map,</li>
<li>set.entries() - returns an iterable object for entries [value, value], exists for compatibility with Map.</li>
</ul>
<p>The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.
</p><p>
For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.
</p><p>
Set is just the right thing for that:</p>
<pre>
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
</pre>
<p>The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find. But the performance would be much worse,
 because this method walks through the whole array checking every element. Set is much better optimized internally for uniqueness checks.</p>
 
  `
},
{
  id:9,
  q:'Array',
  link:'array',
  a:`-------------`
}
  ];

  ngOnInit() {
  }

  question: string;
  answer: string;
  constructor(public dialog: MatDialog) {}
  openDialog(id): void {
    this.qandA.forEach(d =>{
      if(d.id == id){
        this.question = d.q;
        this.answer = d.a;
      }
    });
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '850px',
      data: {question: this.question, answer: this.answer}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.question = result;
    });
  }
}
