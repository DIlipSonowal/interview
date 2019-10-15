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
    {id: 0, q:'Closure',
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
      a:`Veriable defined outside of a scope (upper scope) will be automatically available inside of the scope`
    },


    {
      id:6,
      q:'Prototypes',
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
