import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.sass']
})
export class AngularComponent implements OnInit {
  title = 'Angular Interview Q/A';
  qandA: any = [
    {
      id: 0, 
      q:'What is anguler', 
      link:'whatisangular',
      a:'Angular is a front-end development frame work. Angular is developed and maintained by Google. We can create SPA (Single page application) using Angular. Example – Gmail, facebook, etc.'
    },
   
{id:1, q:'ActivatedRoute', link:'activatedroute',
a:`The ActivatedRoute is an injected router service that makes use of observables to get information about a route path and parameters. For example, ActivateRoute.url contains an observable that reports the route path or paths. Here's an example:
<pre>
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-routable',
    templateUrl: './routable.component.html',
    styleUrls: ['./routable.component.css']
})
export class Routable2Component  implements OnInit {
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.url
        .subscribe(url => console.log('The URL changed to: ' + url));
    }
}
</pre>`},

    {id:2, q:'Ahead-of-Time (AOT) compiler', link:'aot',
a:`Components and templates provided by Angular cannot be understood by the browser directly, so angular applications require a compilation process before they can run in a browser.
<p>The Angular Ahead-of-Time (AOT) compiler converts Angular HTML and TypeScript code into efficient 
JavaScript code during the build phase before the browser downloads and runs that code. Compiling 
your application during the build process provides a faster rendering in the browser.</p>
<p><b>1.	Faster rendering With AOT</b>, the browser downloads a pre-compiled version of the application. The browser loads executable code so it can render the application immediately, without waiting to compile the app first.</p>
<p><b>2.	Fewer asynchronous requests:</b> The compiler inlines external HTML templates and CSS style sheets within the application JavaScript, eliminating separate ajax requests for those source files.</p>
<p><b>3.	Smaller Angular framework download size:</b> There's no need to download the Angular compiler if the app is already compiled. The compiler is roughly half of Angular itself, so omitting it dramatically reduces the application payload.</p>
<p><b>4.	Detect template errors earlier</b> The AOT compiler detects and reports template binding errors during the build step before users can see them.</p>
<p>5.	Better security AOT compiles HTML templates and components into JavaScript files long before they are served to the client. With no templates to read and no risky client-side HTML or JavaScript evaluation, there are fewer opportunities for injection attacks.</p>`},


{id:3, q:'Async pipe', link:'asyncpipe',
a:`The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted. When a new value is emitted, the pipe marks the component to be checked for changes.
<p>The following example binds the time observable to the component's view. The observable continuously updates the view with the current time.</p>
<pre>
@Component({
  selector: 'async-observable-pipe',
  template: '&lt;div&gt;observable|async:
       Time: {{ time | async }}&lt;/div&gt;'
})
export class AsyncObservablePipeComponent {
  time = new Observable(observer => {
    setInterval(() =>observer.next(new Date().toString()), 1000)
  });
}
</pre>`},

{
  id:45,
  q:'Authentication and Authorization', link:'whatisangular',
  a:`<b>Authentication:</b> The user login credentials are passed to an authenticate API (on the server). On the server side validation of the credentials happens and a JSON Web Token (JWT) is returned. JWT is a JSON object that has some information or attributes about the current user.  Once the JWT is given to the client, the client or the user will be identified with that JWT.
  <p><b>Authorization:</b> After logging in successfully, the authenticated or genuine user does not have access to everything. The user is not authorized to access someone else’s data,  he/she is authorized to access some data.  </p>`
},

{
  id:46, 
  q:'Auth Gaurds, router gaurds', link:'whatisangular',
  a:`If you are trying to block some routes from loading based on some permissions or blocking a route based if not authenticated then we can use angular router guards`
},

{id:4, q:'Building blocks', link:'whatisangular',
a:`Components, Data binding, Dependency Injection, Directive, Metadata, Modules, Routing, Service, Templates`},


{id:5, q:'Bootstrapping module', link:'whatisangular',
a:`  Every application has at least one Angular module, the root module that you bootstrap to launch the application is called as bootstrapping module. It is commonly known as AppModule. The default structure of AppModule generated by AngularCLI would be as follows
<pre>
import { BrowserModule } from'@angular/platform-browser';
import { NgModule } from'@angular/core';
import { FormsModule } from'@angular/forms';
import { HttpClientModule } from'@angular/common/http';

import { AppComponent } from'./app.component';

/* the AppModule class with the @NgModule decorator */
@NgModule({
declarations: [
    AppComponent
],
imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
],
providers: [],
    bootstrap: [AppComponent]
})
exportclassAppModule { }
</pre>`},



{id:6, q:'Custom pipe', link:'custompipe',
a:`A pipe is a class decorated with pipe metadata @Pipe decorator, which you import from the core Angular library For example,
<p>@Pipe({name: 'myCustomPipe'})</p>
<p>The pipe class implements the PipeTransform interface's transform method that accepts an input value followed by optional parameters and returns the transformed value. The structure of pipeTransform would be as below,</p>
<pre>
interface PipeTransform {
  transform(value: any, ...args: any[]): any
}
</pre>
The @Pipe decorator allows you to define the pipe name that you'll use within template expressions. 
<p>template: {{someInputValue | myCustomPipe: someOtherValue}}</p>
<pre>
import { Pipe, PipeTransform } from ‘@angular/core’;
@Pipe({
  name: 'myCustomPipe'
})
export class customPipe implements PipeTransform {
      transform(InptValue, args) {
            ….;
           Return ….;
     }
}</pre>
`},


    {id:7, q:`Component`, link:'whatisangular',
     a:`<p>	Components are like the basic building block in an Angular application.Components are defined using the @component decorator. A component has a selector, template, style and other properties, using which it specifies the metadata required to process the component</p>
    <p>Components are the most basic building block of an UI in angular Application.  An angular application is a tree of Angular components. Angular components are a subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template</p>`},
  {
    id: 49,
    q: 'CLI', link:'whatisangular',
    a: `npm install -g @angular/cli
    <p>ng new project-name</p>
    <p>ng serve</p>
    <p>ng build my-app -c production</p>
    <p>ng add <collection> [options] eg. ng add @angular/pwa</p>
    <p>ng generate <schematic> [options]<br/>
    ng g <schematic> [options]</p><p>
    <b>To generates an app shell for running a server-side version of an app.</b><br/>
    ng generate appShell [options]<br/>
    ng g appShell [options]</p><p>
    <b>To generates a new basic app definition in the "projects" subfolder of the workspace.</b><br/>
    ng generate application <name> [options]</p><p>
    <b>Creates a new generic directive definition in the given or default project</b><br/>
    ng generate directive <name> [options]</p><p>
    <b>Generates a new, generic route guard definition in the given or default project.</b><br/>
    ng generate guard <name> [options]</p><p>
    <b>Creates a new generic interface definition in the given or default project.</b><br/>
    ng generate interface <name> <type> [options]</p><p>
    <b>Creates a new generic NgModule definition in the given or default project.</b><br/>
    ng generate module <name> [options]</p><p>
    <b>Creates a new generic pipe definition in the given or default project.</b><br/>
    ng generate pipe <name> [options]</p><p>
    <b>Creates a new, generic service definition in the given or default project.</b><br/>
    ng generate service <name> [options]</p><p>
    <b>Pass this schematic to the "run" command to create a service worker</b><br/>
    ng generate serviceWorker [options]</p><p>
    <b>Pass this schematic to the "run" command to set up server-side rendering for an app.</b><br/>
    ng generate universal [options]</p><p>
    <b>Creates a new generic web worker definition in the given or default project.</b><br/>
    ng generate webWorker <name> [options]
    </p>`
  },  
    
{id:8, q:'Chain pipes', link:'whatisangular',
a:`{{  birthday | date:'fullDate' | uppercase}} `},

{id:9, q:'Dependency Injection', link:'whatisangular',
a:`Dependency injection (DI), is an important application design pattern in which a class asks for dependencies from external sources rather than creating them itself. Angular comes with its own dependency injection framework for resolving dependencies( services or objects that a class needs to perform its function).So you can have your services depend on other services throughout your application.`},


    {id:10, q:`Decorator`, link:'whatisangular',
    a:`<p>Decorators are a design pattern that is used to separate modification or decoration of a class
     without modifying the original source code. They are just functions that can be used to add meta-data, 
     properties or functions to the thing they are attached to. It allows us to decorate classes and functions</p>
     <b>There are four main types:</b>
     <p>1.	Class decorators, e.g. @Component and @NgModule<br/>
     2.	Property decorators for properties inside classes, e.g. @Input and @Output<br/>
     3.	Method decorators for methods inside classes, e.g. @HostListener<br/>
     4.	Parameter decorators for parameters inside class constructors, e.g. @Inject</p>
     <code> <pre>
    import { NgModule, Component } from '@angular/core';
    @Component({
        selector: 'example-component',
        template: 'Woo a component!',
    })
    export class ExampleComponent {
        constructor() {
            console.log('Hey I am a component!');
        }
    }
    
    @NgModule({
          imports: [],
          declarations: [] , 
          providers: [],
          bootstrap:[appModule],
          entrycomponent:[]
      })
      export class ExampleModule {
        constructor() {
            console.log('Hey I am a module!');
        }
    }
    
    import { Component, Input, Output, EventEmitter } from '@angular/core';
    @Component({
        selector: 'example-component',
        template: 'Woo a component!'
    })
    export class ExampleComponent {
        @Input() exampleProperty: string;
        @Output()  emtFrmChild = new EventEmitter<String>;
    
        emitToParent() {
            this.emtFrmChild.emit(‘data to send’);
        }    
    }
    
    &lt;example-component (emtFrmChild) = “fromChild($event)”
      [exampleProperty]="exampleData"&gt;
    &lt;/example-component&gt;
    </pre></code>
    <p>@HostListener. This allows us to tell Angular that when an event on our host happens, we want the decorated method to be called with the event.</p>
    <p>@HostListener() function decorator to handle events of the host element in the directive class.</p>
    <p>let us start by creating a simple custom attribute directive. The directive below changes the background color of the host element:</p>
    <p><b>ng g directive appChbgcolor</b></p>
    <code><pre>
    import { Directive, ElementRef, Renderer2 } from '@angular/core';
    @Directive({
    selector: '[appChbgcolor]'
    })
    export class ChangeBgColorDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.color=’red';
        }
    ChangeBgColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
        }
    }
    &lt;div appChbgcolor&gt;
    &lt;h3&gt;{{title}}&lt;/h3&gt;
    &lt;/div&gt;
    </pre></code>
    <p>@HostBinding() Decorator
    In Angular, the @HostBinding() function decorator allows you to set the properties of the host element from the directive class.</p>
    <p>Let's say you want to change the style properties such as height, width, color, margin, border, etc., or any other internal properties of the host element in the directive class. Here, you'd need to use the @HostBinding() decorator function to access these properties on the host element and assign a value to it in directive class.</p>
    <p>The @HostBinding() decorator takes one parameter, the name of the host element property which value we want to assign in the directive.</p>
    <p>In our example, our host element is an HTML div element. If you want to set border properties of the host element, you can do that using @HostBinding() decorator as shown below:</p>
    <code><pre>
    @HostBinding('style.border') border: string;
    @HostListener('mouseover') onMouseOver() {
        this.border = '5px solid green';
    }
    </pre></code>
    <p>
    Using this code, on a mouse hover, the host element border will be set to a green, solid 5-pixel width. Therefore, using the @HostBinding decorator, you can set the properties of the host element in the directive class.
    </p>
    <pre>
    import { Component } from '@angular/core';
    import { MyService } from './my-service';
    
    @Component({
      selector: 'example-component',
      template: 'Woo a component!'
    })
    export class ExampleComponent {
            //constructor(@Inject(MyService) myService) {
      constructor(myService: MyService) {
        console.log(myService); // MyService
      }
    }
    </pre>`},
    

{id:11, q:`Data binding`, link:'whatisangular',
a:`<p>String interpolation, property binding, Event binding, two way binding</p>`},


{id:12, q:'Dynamic components', link:'whatisangular',
 a:`Dynamic components are load in runtime
<p><b>The anchor directive:</b></p> 
<p>Before you can add components you have to define an anchor point to tell angular where to 
insert components.</p>
<p>The ad banner uses a helper directive called AdDirective to mark valid insertion points in the template.</p>
<pre>
import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
    selector: '[ad-host]',
})
export class AdDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
</pre>
AdDirective injects ViewContainerRef to gain access to the view container of the element that will host the dynamically added component.
<p>In the @Directive decorator, notice the selector name, ad-host; that's what you use to apply the directive to the element. The next section shows you how.</p>
<p>The &lt;ng-template&gt; element is where you apply the directive you just made. To apply the AdDirective, recall the selector from ad.directive.ts, ad-host. Apply that to &lt;ng-template&gt; without the square brackets. Now Angular knows where to dynamically load components.</p>
<pre>
template: 
  &lt;div class="ad-banner-example"&gt;
  &lt;h3&gt;Advertisements&lt;/h3&gt;
  &lt;ng-template ad-host&gt;&lt;/ng-template&gt;
  &lt;/div&gt;
</pre>
The &lt;ng-template&gt; element is a good choice for dynamic components because it doesn't 
render any additional output.
<p>AdBannerComponent takes an array of AdItem objects as input, which ultimately comes from AdService. AdItem objects specify the type of component to load and any data to bind to the component.AdService returns the actual ads making up the ad campaign.</p>
<p>Passing an array of components to AdBannerComponent allows for a dynamic list of ads without static elements in the template.</p>
<p>With its getAds() method, AdBannerComponent cycles through the array of AdItems and loads a new component every 3 seconds by calling loadComponent().</p>
<pre>
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  interval: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnInit() {
      this.loadComponent();
      this.getAds();
  }
  
  ngOnDestroy() {
  clearInterval(this.interval);
    }
  
  loadComponent() {
  this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
  constadItem = this.ads[this.currentAdIndex];
  
  constcomponentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
  
  constviewContainerRef = this.adHost.viewContainerRef;
  viewContainerRef.clear();
  
  constcomponentRef = viewContainerRef.createComponent(componentFactory);
      (<AdComponent>componentRef.instance).data = adItem.data;
    }
  
  getAds() {
  this.interval = setInterval(() => {
  this.loadComponent();
      }, 3000);
    }
  }
 </pre>  
`},


{id:13, q:`Directives`, link:'whatisangular',
 a:`Directives are one of the core feature in Angular. They allow an Angular developer to write new application specific HTML syntax.  In actual, directives are functions that are executed by the Angular compiler when the same finds them in the DOM. Directives add behaviour to an existing DOM element or an existing component instance.
<p>Directives are of three types:</p>
<p><b>Attribute Directives:</b> Change the appearance or behavior of an element, component or another directive(ngClass and ngStyle)</p>
<pre>
&lt;some-element [ngClass]="'first second'"&gt;...&lt;/some-element&gt;
&lt;some-element [ngClass]="['first', 'second']"&gt;...&lt;/some-element&gt;
&lt;some-element [ngClass]="{'first': true, 'second': true, 'third': false}"&gt;...&lt;/some-element&gt;
&lt;some-element [ngClass]="stringExp|arrayExp|objExp"&gt;...&lt;/some-element&gt;
&lt;some-element [ngClass]="{'class1 class2 class3' : true}"&gt;...&lt;/some-element&gt;
&lt;some-element [ngStyle]="{'font-style': styleExp}"&gt;...&lt;/some-element&gt;
&lt;some-element [ngStyle]="{'max-width.px': widthExp}"&gt;...&lt;/some-element&gt;
&lt;some-element [ngStyle]="objExp"&gt;...&lt;/some-element&gt;
</pre>
<b>Component Directives:</b> {selector: ‘home-cpmponent’}
<p><b>Structural Directives:</b> Change the DOM layout by adding and removing elements. (*ngIf and *ngFor)</p>
`},

{id:14, q:'DOM', link:'whatisangular',
a:`a tree-like structure of connected nodes that represents the different elements and strings of text appearing in a markup document`},

{
  id:50,
  q: 'Entry Component', link:'whatisangular',
  a: `An entry component is any component that Angular loads imperatively, (which means you’re not referencing it in the template), by type. You specify an entry component by bootstrapping it in an NgModule, or including it in a routing definition.
  <p>To contrast the two types of components, there are components which are included in the template, which are declarative. Additionally, there are components which you load imperatively; that is, entry components.</p>
  There are two main kinds of entry components:
  <p>The bootstrapped root component.</p>
  <p>A component you specify in a route definition.</p>
  <p>A bootstrapped component is an entry component that Angular loads into the DOM during the bootstrap process (application launch). Other entry components are loaded dynamically by other means, such as with the router.</p>
  <p>A bootstrapped component is necessarily an entry component because bootstrapping is an imperative process, thus it needs to have an entry component.</p>
  <b>routed entry component</b>
  <pre>const routes: Routes = [
    {
      path: '',
      component: CustomerListComponent
    }
  ];</pre>
  A route definition refers to a component by its type with component: CustomerListComponent.
  <p>All router components must be entry components. Because this would require you to add the component in two places (router and entryComponents) the Compiler is smart enough to recognize that this is a router definition and automatically add the router component into entryComponents.</p>
  <p>
  Though the @NgModule decorator has an entryComponents array, most of the time you won't have to explicitly set any entry components because Angular adds components listed in @NgModule.bootstrap and those in route definitions to entry components automatically. Though these two mechanisms account for most entry components, if your app happens to bootstrap or dynamically load a component by type imperatively, you must add it to entryComponents explicitly.</p>
  <b>entryComponents and the compiler</b>
  <p>For production apps you want to load the smallest code possible. The code should contain only the classes that you actually need and exclude components that are never used. For this reason, the Angular compiler only generates code for components which are reachable from the entryComponents; This means that adding more references to @NgModule.declarations does not imply that they will necessarily be included in the final bundle.
  </p><p>
  In fact, many libraries declare and export components you'll never use. For example, a material design library will export all components because it doesn’t know which ones you will use. However, it is unlikely that you will use them all. For the ones you don't reference, the tree shaker drops these components from the final code package.
  </p><p>
  If a component isn't an entry component and isn't found in a template, the tree shaker will throw it away. So, it's best to add only the components that are truly entry components to help keep your app as trim as possible
  </p>`
},

{id:15, q:'Error handling', link:'whatisangular',
a:`If the request fails on the server or failed to reach the server due to network issues then HttpClient will return an error object instead of a successful response. In this case, you need to handle in the component by passing error object as a second callback to subscribe() method. Let's see how it can be handled in the component with an example,
<pre>
fetchUser() {
  this.userService.getProfile()
    .subscribe(
      (data: User) => this.userProfile = { ...data }, // success path
      error => this.error = error // error path
    );
}
</pre>
`},

{id:16, q:'Explain Authentication and Authorization', link:'whatisangular',
a:`<b>Authentication:</b> The user login credentials are passed to Authenticated API, 
which is present on the server. Post server side validation of the credentials, 
a JWT (JSON Web Token) is returned. The JWT has information or attribute regarding the 
current user. The user is then identified with the given JWT. This is called Authentication.
<p><b>Authorization:</b> After logged in successfully, different users have a different level 
of access. While some may access everything, access for other might be restricted to only some 
resources. The level of access is Authorization.</p>`},  

{
   id:47,
   q:'forRoot, forChild', link:'whatisangular',
   a:`There are two methods we can invoke using RouterModule in order to register routes.
   <p>In case we declare the top-level routes of our application, we need to use RouterModule.forRoot. This method will register the top-level routes and return the routing module that should be imported by the root module of the application.</p>
   <p>If we want to define routes in a lazy-loaded module and import the module returned by the invocation of the forRoot method, we'll get a runtime error. This is because the forRoot method will return a module with providers, which should be imported only once, by the top-level module. In order to register nested routes in a lazy-loaded module, we will need to use the forChild</p>
   `
},

{id:17, q:'HttpClient and its benefits', link:'whatisangular',
a:`Most of the Front-end applications communicate with backend services over HTTP protocol using either XMLHttpRequest interface or the fetch() API. Angular provides a simplified client HTTP API known as HttpClient which is based on top of XMLHttpRequest interface. This client is avaialble from @angular/common/http package. You can import in your root module as below,
<p>import { HttpClientModule } from '@angular/common/http';</p>
<p>The major advantages of HttpClient can be listed as below,</p>
<p>Contains testability features</p>
<p>Provides typed request and response objects</p>
<p>Intercept request and response</p>
<p>Supports Observalbe APIs</p>
<p>Supports streamlined error handling</p>
`},

{id:18, q:'HttpClient', link:'whatisangular',
a:`Angular’s HttpClient returns observables from HTTP method calls. For instance http.get(‘/api’) returns an observable. This provides several advantages over promise-based HTTP APIs:
<p>Observables do not mutate the server response (as can occur through chained .then() calls on promises). Instead, you can use a series of operators to transform values as needed.</p>
<p>HTTP requests are cancellable through the unsubscribe() method.</p>
<p>Requests can be configured to get progress event updates.</p>
<p>Failed requests can be retried easily.</p>
`},


{id:19, q:'JIT', link:'whatisangular',
a:`Just-in-Time (JIT) is a type of compilation that compiles your app in the browser at runtime. JIT compilation is the default when you run the ng build (build only) or ng serve (build and serve locally) CLI commands. i.e, the below commands used for JIT compilation,
<p>ng build, ng serve</p>`},

{id:20, q:'Lifecycle hooks', link:'whatisangular',
a:`<p>ngOnChanges: When the value of a data bound property changes, then this method is called.</p>
<p>ngOnInit: This is called whenever the initialization of the directive/component after Angular first displays the data-bound properties happens.</p>
<p>ngDoCheck: This is for the detection and to act on changes that Angular can't or won't detect on its own.</p>
<p>ngAfterContentInit: This is called in response after Angular projects external content into the component's view.</p>
<p>ngAfterContentChecked: This is called in response after Angular checks the content projected into the component.</p>
<p>ngAfterViewInit: This is called in response after Angular initializes the component's views and child views.</p>
<p>ngAfterViewChecked: This is called in response after Angular checks the component's views and child views.</p>
<p>ngOnDestroy: This is the cleanup phase just before Angular destroys the directive/component.</p>
`},

{id:21, q:'Metadata', link:'whatisangular',
a:`Metadata is used to decorate a class so that it can configure the expected behavior of the class. The metadata is represented by decorators
Class decorators, e.g. @Component and @NgModule
`},


{id:22, q:'Observables', link:'whatisangular',
a:`Observables are declarative which provide support for passing messages between publishers and subscribers in your application. They are mainly used for event handling, asynchronous programming, and handling multiple values. In this case, you define a function for publishing values, but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notifications until the function completes, or until they unsubscribe.
<p>Angular makes use of observables as an interface to handle a variety of common asynchronous operations. For example:</p>
<p>You can define custom events that send observable output data from a child to a parent component.</p>
<p>The HTTP module uses observables to handle AJAX requests and responses.</p>
<p>The Router and Forms modules use observables to listen for and respond to user-input events.</p>
</p>`},

{
  id:44,
  q: 'package.json', link:'whatisangular',
  a: `With the existence of package.json, it will be easy to manage the dependencies of the project. If we are using typescript in the angular project then we can mention the typescript package and version of typescript in package.json.`
},

{id:23, q:'PIPES',  link:'whatisangular',
a:`A pipe takes data as input and transforms it to a desired output. For example, let us take a pipe to transform a component's birthday property into a human-friendly date using date pipe.
<pre>
import { Component } from '@angular/core';
@Component({
    selector: 'app-birthday',
    template: 'Birthday is {{ birthday | date }}'
})

export class BirthdayComponent {
  birthday = new Date(1987, 6, 18); // June 18, 1987
  }  
</pre>
<b>Available pipes:</b>
<p>currency – Formats a number to the currency format</p>
<p>date – Formats a data to some specific format</p>
<p>filter – Selects a subset of items from an array</p>
<p>json – Formats an object to a JSON string</p>
<p>limitTo – Limits an array or string into a specified number of characters or elements</p>
<p>lowercase – Formats a string to lowercase</p>
<p>number – Formats a number to a string</p>
<p>orderBy – Orders an array by an expression</p>
`},

{id:24, q:'Promise and Observable', link:'whatisangular',
a:`<b>observable:</b><br/>
<p>1.Computation doesnot start untill subscription, so that they can run whenever you need the result</p>
<p>2.Provide multiple values over time</p>
<p>3.Subscribe method is used for handling data and error</p>
<p>4.Provides chaning and subscription to handle complex application</p>
<b>Promise:</b>
<p>1.Execute immediately on creation</p>
<p>2.Provides only one value over time</p>
<p>3.Push errors to the child promises</p>
<p>4.Used only .then() close</p>
`},

 
{id:25, q:`Renderer2`, link:'whatisangular',
 a:`The Renderer2 class is an abstraction provided by Angular in the form of 
a service that allows to manipulate elements of your app without having to touch the DOM directly. This is the recommended approach because it then makes it easier to develop apps that can be rendered in environments that don’t have DOM access, like on the server, 
in a web worker or on native mobile.<p><b>Methods :</b><br/>
createText() ,appendChild(), insertBefore(), removeChild(), setAttribute(),  removeAttribute() etc.
</p>`},



{id:26, q:'Router', link:'whatisangular',
a:`A service that provides navigation and URL manipulation capabilities.
<p>The Angular Router enables navigation from one view to the next as users perform application tasks</p>
<pre>
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
</pre>`},

{id:27, q:'Router outlet', link:'whatisangular',
a:`The RouterOutlet is a directive from the router library that is used like a component. It acts as a placeholder that marks the spot in the template where the router should display the components for that outlet.
<pre>&lt;router-outlet>&lt;/router-outlet&gt;
&lt;!-- Routed components go here --&gt;</pre>`},


{id:28, q:'RxJS', link:'whatisangular',
a:`RxJS is a library for composing asynchronous and callback-based code in a functional, reactive style using Observables. Many APIs such as HttpClient produce and consume RxJS Observables and also uses operators for processing observables. For example, you can import observables and operators for using HttpClient as below,
<p>import { Observable, throwError } from 'rxjs';<br/>
import { catchError, retry } from 'rxjs/operators';
</p>`},

{id:29, q:'Reactive forms', link:'whatisangular',
a:`Reactive forms have properties that use observables to monitor form control values. The FormControl properties valueChanges and statusChanges contain observables that raise change events. Subscribing to an observable form-control property is a way of triggering application logic within the component class. For example:
<pre>
import { FormGroup } from '@angular/forms';

@Component({
selector: 'my-component',
template: 'MyComponent Template'
})
export class MyComponent implements OnInit {
nameChangeLog: string[] = [];
heroForm: FormGroup;

ngOnInit() {
this.logNameChange();
  }
logNameChange() {
constnameControl = this.heroForm.get('name');
nameControl.valueChanges.forEach(
      (value: string) =>this.nameChangeLog.push(value)
    );
  }
}</pre>
`},
{id:42, q:'Routing', link:'whatisangular', a:'in view routerLink, and in ts router.navigate[path]'},
{id:30, q:'router events', link:'whatisangular',
a:`During each navigation, the Router emits navigation events through the Router.events property allowing you to track the lifecycle of the route. The sequence of router events is as below,
<pre>NavigationStart,
RouteConfigLoadStart,
RouteConfigLoadEnd,
RoutesRecognized,
GuardsCheckStart,
ChildActivationStart,
ActivationStart,
GuardsCheckEnd,
ResolveStart,
ResolveEnd,
ActivationEnd
ChildActivationEnd
NavigationEnd,
NavigationCancel,
NavigationError
Scroll
</pre>`},

{id: 31, q:'Services', link:'whatisangular',
    a:`<p>Angular services are singleton objects which get instantiated 
    only once during the lifetime of an application. They contain methods that maintain data 
    throughout the life of an application i.e. data does not refreshed and is available all 
    the time. The main objective of a service is to organize and share business logic, models, 
    or data and functions with different components of an angular application</p>
    <p>Functions provided by services can be invoked from any component of angular, like controllers
     and directives. This helps in dividing the web application into small different logical units 
     which can be reused</p><pre>
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({ // The Injectable decorator is required for dependency injection to work
// providedIn option registers the service with a specific NgModule
providedIn: 'root',  // This declares the service with the root app (AppModule)
      })
export class RepoService{}</pre>`},


{id:32, q:'Shadow dom or view encptualation', link:'whatisangular',
a:`Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which can be attached to any elements you want, in the same way as the normal DOM.
<p>To emulate the Shadow DOM and encapsulate styles, Angular provides three types of View Encapsulation. They are as follows:<p>
<pre>Emulated: 
No shadow DOM
Style encaptulation

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
  
-----------
Native:"
shadow DOM
style encaptulation

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
  })
  
---------
None:
no shadow DOM
no style encaptulation 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
  
----------
</pre>`},

{id:41, q:'Service worker', link:'whatisangular',
a:`A service worker is a script that runs in the web browser and manages caching for an application. Starting from 5.0.0 version, Angular ships with a service worker implementation. Angular service worker is designed to optimize the end user experience of using an application over a slow or unreliable network connection, while also minimizing the risks of serving outdated content.
<p>It caches an application just like installing a native application</p>
<p>A running application continues to run with the same version of all files without any incompatible files</p>
<p>When you refresh the application, it loads the latest fully cached version</p>
<p>When changes are published then it immediately updates in the background</p>
<p>Service workers saves the bandwidth by downloading the resources only when they changed.</p>
`},

{id:33, q:'Smart and Dumb Component', link:'whatisangular',
a:`<b>Smart Component:</b>
<p>Smart/parent component is responsible to interact with the server/cloud through the Service.</p>
<b>Dumb Component</b>
<p>Dumb/child component is only showing the data got from Smart component.</p>
`},

{id:34, q:`Templates `,link:'whatisangular',
a:`<p>Templates in angular are written in HTML that contains angular specific elements and attributes. This templates are combined with information coming from the model and controller which are further rendered to provide the dynamic view to the user.</p>
<p>A template is a HTML view where you can display data by binding controls to properties 	       of an Angular component. You can store your component's template in one of two places. You can define it inline using the template property, or you can define the template in a separate HTML file and link to it in the component metadata using the @Component decorator's templateUrl property. Using inline template with template syntax</p>`},

{id:43, q:'Transpiling', link:'whatisangular',
a:`Transpiling is the process of converting the typescript into javascript (using Traceur, a JS compiler). Though typescript is used to write code in the Angular applications, the code is internally transpiled into javascript.`},

{id:35, q:'Typescript', link:'whatisangular',
a:`Typescript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. Angular built entirely in Typescript and used as a primary language. You can install it globally as
<p><b>npm install -g typescript</b></p>
`},


{id:36, q:'Transmitting data between components', link:'whatisangular',
a:`<p>Angular provides an EventEmitter class that is used when publishing values from a component through the @Output() decorator. EventEmitter extends RxJS Subject, adding an emit() method so it can send arbitrary values. When you call emit(), it passes the emitted value to the next() method of any subscribed observer.</p>
<p>example<br/><zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy></p>
<pre>
@Component({
  selector: 'zippy',
  template: 
  &lt;div class="zippy"&gt;
  &lt;div (click)="toggle()"&gt;Toggle&lt;/div&gt;
  &lt;div [hidden]="!visible"&gt;
  &lt;ng-content&gt;&lt;/ng-content&gt;
  &lt;/div&gt;
  &lt;/div&gt;})
  
export class ZippyComponent {
  visible = true;
  @Output() open = new EventEmitter&lt;any&gt;();
  @Output() close = new EventEmitter&lt;any&gt;();
  
  toggle() {
  this.visible= !this.visible;
  if (this.visible) {
      this.open.emit(null);
  } else {
        this.close.emit(null);
      }
    }
  }
</pre>
`},



{id:37, q:'ng-template directive', link:'whatisangular',
a:`The ng-template directive represents an Angular template: this means that the content of this tag will contain part of a template that can be then be composed together with other templates in order to form the final component template.
<b>The ng-template directive and ngIf</b>
<p>You probably came across ng-template for the first time while implementing an if/else scenario such as for example this one:</p>
<pre>
&lt;div class="lessons-list" *ngIf="lessons else loading"&gt;
  ... 
&lt;/div&gt;

&lt;ng-template #loading&gt;
  &lt;div>Loading...&lt;/div&gt;
&lt;/ng-template&gt;

&lt;ng-template [ngIf]="lessons" [ngIfElse]="loading"&gt;
&lt;div class="lessons-list"&gt;
     ... 
&lt;/div>
&lt;/ng-template&gt;

&lt;ng-template #loading&gt;
  &lt;div&gt;Loading...&lt;/div&gt;
&lt;/ng-template&gt;
</pre>`},

{id:38, q:'The ng-container directive', link:'whatisangular',
a:`In order to avoid having to create that extra element, we can instead use ng-container directive:
<pre>
&lt;ng-container *ngIf="lessons"&gt;
  &lt;div class="lesson" *ngFor="let lesson of lessons"&gt;
    &lt;div class="lesson-detail"&gt;
            {{lesson | json}}
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/ng-container&gt;
</pre>
it can also provide a placeholder for injecting a template dynamically into the page.
<b>Dynamic Template Creation with the ngTemplateOutlet directive</b>
<p>Being able to create template references and point them to other directives such as ngIf is just the beginning.
We can also take the template itself and instantiate it anywhere on the page, using the ngTemplateOutlet directive:
</p>
<pre>
&lt;ng-container *ngTemplateOutlet="loading"&lt;&lt;/ng-container&gt;

    &lt;ng-template #loading&gt;
  &lt;div&lt;Loading...&lt;/div&gt;
&lt;/ng-template&gt;
</pre>

Ng-content:
&lt;custom-component&gt;Custom data&lt;/custom-component&gt;

@component({
    Selector:’custom-component’,
    Template:
&lt;ng-content&gt;&lt;/ng-content&gt;  // will replace with Custom data

&lt;div&gt;gjjgjgjgj&lt;/div&gt;
})`},

{
  id: 48, link:'whatisangular',
  q:'View child, view childrens content children',
  a:`
  The children element which are located inside of its template of a component are called view children 
  <p>elements which are used between the opening and closing tags of the host element of a given component are called content children
  </p>
  <p>import {ViewChild, ViewChildren, Component, AfterViewInit...} from '@angular/core';</p>
  `
},

{id:39, q:'What is the purpose of base href tag', link:'whatisangular',
a:`The routing application should add element to the index.html as the first child in the tag in order to indicate how to compose navigation URLs. If app folder is the application root then you can set the href value as below
<p>&lt;base href="/"&gt;</p>
`},


{id:40, q:'Wildcard route', link:'whatisangular',
a:`If the URL doesn't match any predefined routes then it causes the router to throw an error and crash the app. In this case, you can use wildcard route. A wildcard route has a path consisting of two asterisks to match every URL. For example, you can define PageNotFoundComponent for wildcard route as below
<p>{ path: '**', component: PageNotFoundComponent }</p>
`},

{
  id: 51,
  q:'About yourself', link:'whatisangular',
  a:`I have completed masters MCA in 2011 from Tezpur University, Assam, after that I have started my careers
  in Assam at company Carve as a UI developer. I have worked there around 3 years and after that for better 
  opportunity I have moved to Bangalore and Joined Udyogii as a senior UI developer.<p> I haved worked there for two years
  and created a recruitment platform udyogii.com, where I was using Jquery, html5, css3, bootstrap and for admin
  pannel I was using Bootstrap, Angular2, CSS3, HTML5, etc.</p><p> After completed the Project i have joined in AIRobotica
  as a senior Web Developer, where i was creating Chatbot using Angular and Vue JS. Due to some Financial problem
  they were not able to pay the employee, because of that I changed the job and joined Datafoundry
  as a consultant (senior UI develpoer).</p> I have completed two project there, GS1 and Easy Krishy.
  GS1 is a barcode provider company who provides unique barcode all over the world where I have created the UI using VueJS, VueX, Vuetify, etc. 
  Easy krishi is an Application where agents can visit each farm land and predict the particular
  fertiliser according to the farm land so that the farmer will get particular fertilizer depending on
  their land, this will increase the profit to the farmer as well as an agency which provides the fertilizer`
},

];
  


question: string;
  answer: string;
  constructor(public dialog: MatDialog, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(){
   // console.log(this.activatedRoute.paramMap.subscribe(url=> console.log(url)));
  }
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
