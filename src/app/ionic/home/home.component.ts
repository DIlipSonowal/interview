import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from '../../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'Ionic Interview Q/A';
  qandA: any = [
    {
      id:15,
      href:'ionic',
      q: 'Create some pages without lazy loading.',
      a:'That case we dnt have to create module to the particular page instead we directly register in app module'
    },
    {
        id:0,
        url:'ionic',
        q:'CLI',
        a:`
<pre>
1. Base href: ng serve -o --base-href /subdirname
2. npm install -g cordova ionic (install cordova and ionic)
   npm install -g ionic (install ionic)
   npm install -g ionic@latest
   npm install -g cordova (install cordova )
   
3. ionic start templateName blank --type=angular/ionic
   ionic start myApp blank (blank template)
   ionic start myApp tabs (template with readymade tabs)
   ionic start myApp sidemenu (templates with ready made side menu)

4. ionic cordova build <platform> [options]
   <platform>=>android, ios
   [options] => 

5. ionic cordova platform add android

6. ionic cordova run [< platform >] [options]
   Run an Ionic project on a connected device

       options ->
         --device ->Deploy build to a device
         --emulator -> Deploy build to an emulator
---------------->ionic capacitor<-------------------
1. ionic capacitor add <platform> [options]
2. ionic capacitor copy [<platform>] [options]
3. ionic capacitor open <platform> [options]
4. ionic capacitor run <platform> [options] 
   ionic capacitor run android -l
</pre>
        `
    },

    {
      id:7,
      href:'ionic',
      q:'config.xml',
      a:`<p>
      config.xml is a global configuration file that controls many aspects of a cordova application's behavior. This platform-agnostic XML file is arranged based on the W3C's Packaged Web Apps (Widgets) specification, and extended to specify core Cordova API features, plugins, and platform-specific settings.</p>
      <p>For projects created with the Ionic CLI, this file can be found in the top-level directory. It contains vital information about the project like the package name, version, author’s information and a lot of permissions and specifications as well.</p>
      `
    },

    {
      id:5,
      href:'ionic',
      q:'compare ionic and cordova',
      a:`<p>Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies - HTML5, CSS3, and JavaScript for cross-platform development. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's capabilities such as sensors, data, network status, etc.</p>
      <p>Ionic on the other hand is a web framework with some additional tools and services that lets you build a responsive mobile app using web technologies like HTML, CSS and JS. Once the web is done, it is packaged into a native app for supported platforms like Android, iOS and Windows using Apache Cordova. So, in short, Ionic uses Apache Cordova to create apps with the help of web technologies for various mobile operating systems.</p>`
    },

    {
      id:9,
      href:'ionic',
      q:'cordova plugin',
      a:`Cordova wraps native Code (Swift, Objective-C, Java) into a Javascript interface which acts as a bridge to our code.
      <p>Through this bridge we can then call native plugins directly from our Javascript code without every seeing our touching the native languages</p>
      <p>With Ionic we could either use the Cordova plugins directly or, what is recommended, use a package called Ionic Native.</p>
      <p>This package allows us to use the plugins more easily and comfortable with Angular</p>
      `
    },
    
    {
      id:17,
      href:'ionic',
      q:'Data sharing among the component',
      a:`services and input and output methods .u can even share the data using modal controller and activated method in angular`
    },

    {
      id:14,
      href:'ionic',
      q:'Difference ionic 3 & 4',
      a:`routing is diffrent in ionic 3 we used navController and push pop methods, in ionic 4 we use angular 4 router method in order to navigate page to page pr a componnets 
      <p>new concepts are  progress bar and skeleton text.</p>
      <pre>
angular 3 :
1. based on angular 2
2. it will not use angular cli
3. uses own routing sysytem
------------------------
ionic 4:

1. based on angular 7
2. used angular cli
3. uses angular routing system

</pre>      
      `
    },

    {
      id:8,
      href:'ionic',
      q:'infinite scroll',
      a:`<p>ion-infinite-scroll component is very useful component. It allows to load data into the app (typically in a list) as the users scrolls the page. The most common use case is where the app loads more content to display to the user as the user keeps scrolling the page. This concept is used widely nowadays in almost all modern apps.</p>
      <p>The Infinite Scroll allows us to perform an action when the user scrolls a specified distance from the bottom or top of the page. The expression assigned to the infinite event is called when the user scrolls to the specified distance. When this expression has finished its tasks, it should call the complete() method on the infinite scroll instance.</p>`
    },

    {
      id:6,
      href:'ionic',
      q:'ionic components',
      a:`<p><b>ion-datetime : </b> datepicker with set of option to select</p>
      <p><b>ion-action-sheet : </b> Action sheets display a set of options with the ability to confirm or cancel an action</p>
      <p><b>ion-list : </b> The list component is used to display rows of information, such as a contact list, playlist, or menu. It can display cards, list items and more. Lists are also very customizable and match the design of the native Android and iOS lists by default.</p>
      <p><b>ion-card : </b> Card components are a great way to display important pieces of content, and are quickly emerging as a core design pattern for apps. Cards can contain images, buttons, text and more. Cards can also be used standalone, in a list or in a grid.</p>
      <p><b>ion-grid : </b> Grid is a powerful mobile-first system for building custom layouts. The Grid component can be used to ensure your app looks great on any device. It is heavily influenced by Bootstrap's grid system.</p>
      <p><b>ion-input : </b> Inputs allow users to enter data into a UI. They typically appear in forms and dialogs. They should always be wrapped with an ion-item.</p>
      <p><b>ion-button : </b> Buttons are an essential way to interact with and navigate through an app, and should clearly communicate what action will occur after the user taps them. Buttons are highly customizable with color, shape and size being fully customizable. We support round buttons, FAB buttons, outline buttons and more!</p>`
    },

    {
      id:1,
      href:'ionic',
      q:'Ionic Framwork',
      a:`Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps (hybrid app) using web technologies (HTML, CSS, and JavaScript).
      `
    },

    {
      id:13,
      href:'ionic',
      q:'ionic-prepare and ionic build',
      a:`ionic prepare < platform > copies all files from the www folder into the target platform's www folder.
      <p>ionic build < platform > also does this, but also builds the app's source code so that it can be run on a simulator/emulator or a device.</p>
      `
    },
    
    {
       id:10,
       href:'ionic',
       q:'ionic-nativ',
       a:`<p>add Ionic Native to your app</p>
       <p>npm install @ionic-native/core@4 --save</p>
       Note that Ionic Native core package is included by default with every Ionic app.
       <p>Install the Ionic Native package for each plugin you want to add.</p>
       <p>For example, if you want to install the Camera plugin, you will need to run the following command:
       <br/>
       npm install @ionic-native/camera@4 --save
       <br/>
       Then install the plugin using Cordova or Ionic CLI.<br/>
       <b>ionic cordova plugin add cordova-plugin-camera</b><br/>
       All package names are documented on the plugin’s documentation. It is recommended to follow the installation instructions on each plugin’s documentation, as some plugins require additional steps to fully install.
       </p>
       <p>After installing a plugin's package, add it to your app’s NgModule.<br/>
       import { Camera } from '@ionic-native/camera';
       </p>
       `
    },

    {
      id:3,
      href:'ionic',
      q:'Lifecycle hook',
      a:`<b>ngOnInit : </b> Initialize your component and load data from services that don't need refreshing on each subsequent visit.
      <p><b>ionViewWillEnter : </b> Since ionViewWillEnter is called every time the view is navigated to (regardless if initialized or not), it's a good method to load data from services. However, if your data comes back during the animation, it can start lots of DOM manipulation, which can cause some janky animations.</p>
      <p><b>ionViewDidEnter : </b> If you see performance problems from using ionViewWillEnter when loading data, you can do your data calls in ionViewDidEnter instead. This event won't fire until after the page is visible by the user, however, so you might want to use either a loading indicator or a skeleton screen, so content doesn't flash in un-naturally after the transition is complete.</p>
      <p><b>ionViewWillLeave : </b> Can be used for cleanup, like unsubscribing from observables. Since ngOnDestroy might not fire when you navigate from the current page, put your cleanup code here if you don't want it active while the screen is not in view.</p>
      <p><b>ionViewDidLeave : </b> When this event fires, you know the new page has fully transitioned in, so any logic you might not normally do when the view is visible can go here.</p>
      <p><b>ngOnDestroy : </b> Cleanup logic for your pages that you don't want to clean up in ionViewWillLeave.</p>
      `
    },

    {
      id:2,
      href:'ionic',
      q:'Lazy loading',
      a:`<p>Lazy loading is a general concept where we only load things as we need them. In Ionic 3, we would use the @IonicPage decorator to lazy load our pages, and now with Ionic 4 we lazy load our Angular components with Angular routing. The idea behind lazy loading pages is that we don’t need to load every page in the application as soon as the application is launched.</p>
      <p>Lazy loading web components in Ionic 4 takes this a step further. In Ionic 4, every Ionic component that we use is a web component. Each of these web components will be lazily loaded only when they are accessed in the application.</p>
      <p>This means that the code for <ion-button> or <ion-card> will only be loaded when it is accessed in the application, even each <ion-icon> is loaded individually rather than having to load the entire icon library. This isn’t even something we need to set up, it is just the way it works by default.</p>
      `
    },

    {
      id:16,
      href:'ionic',
      q:'Meta tags',
      a:`A service that can be used to get and add meta tags.
      <p>Angular provides Meta and Title services for set and get dynamic HTML meta tags and page title.</p>
      <p>A service that can be used to get and set the page title of a current HTML document. This service can be used to set and get the current page title value. In title service available methods are setTitle() and getTitle()</p>
      <p>Using Title service import @angular/platform-browser into your component for set and get page title.</p>
      <p>Meta tag service that can be used to get and add meta tags of current active route. Available methods for meta tags. Tags are charset, content, httpEquiv, id, itemprop, name, property, scheme, url</p>
<pre>addTag()
addTags()
getTag()
getTags()
updateTag()
removeTag()
removeTagElement()</pre>
`
    },

    {
      id:11,
      href:'ionic',
      q:'Navigation between component',
      a:`In the previous versions of Ionic, we used the NavController class to perform push-pop style navigation within the app. In Ionic 4, the NavController is still there with bare minimum features but it does not allow a lot of advanced yet useful requirements. So the recommended way of Navigation in Ionic 4 is to use the Angular Router. 
     <p>
      We simple define a route for each page in the app in the Routing module file (generally names a (app-routing.module.ts) and then we can use the routerLink directive or the navigate method of the Router class.
      </p>`
    },

    {
      id:12,
      href:'ionic',
      q: 'Run app in browser',
      a:'ionic serve -l'
    },

    {
      id:4,
      href:'ionic',
      q:'Sharing Data',
      a:`We can also use Angular Services to share data between multiple pages. 
      An Angular service is a singleton and thus does not get destroyed when the user loads and 
      unloads components within the app. Therefore, the data can be set from one component and 
      it can be retrieved from another component. This is what we need to pass data from one 
      component to another during navigation.`
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
