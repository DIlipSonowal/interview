import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {DialogComponent} from '../../dialog/dialog.component';

@Component({
  selector: 'app-css',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title="CSS Interview Q/A";

  ngOnInit() {
  }

  qandA: any = [
    {
      id:0, 
      q:'block, inline, inline-block',
      a:`<b>block</b><br/>
      A block element always starts on a new line, and fills up the horizontal space left and right on the web page, 
      Some examples of block elements are < div > and < p > tags<br/>
      display:block
      <br/><br/>

      <b>inline</b><br/>
      Inline elements don’t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are < span > , < strong >, and < img > tags.<br/>
      You can add space (padding, margin) to the left and right on an inline element, but you cannot add height to the top or bottom padding or margin of an inline element.<br/>
      display:inline
      <br/><br/>
      <b>inline-block</b><br/>
      Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides.<br/>
      display:inline-block
      >`
    },

    {
      id:1,
      q:'Absolute, relative, static, fixed, sticky',
      a:`<b>position: static;</b><br/>
      An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:<br/>
      <pre>
      div.static {
        position: static;
        border: 3px solid #73AD21;
      }
      </pre><br/>
      <b>position:relative</b><br/>
      An element with position: relative; is positioned relative to its normal position.<br/>
      Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.<br/>
      <pre>
      div.relative {
        position: relative;
        left: 30px;
        border: 3px solid #73AD21;
      }
      </pre><br/>
      <b>position:fixed</b><br/>
      An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.<br/><br/>
      <b>position: absolute;</b><br/>
      An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).<br/>
      However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.<br/><br/>
      <b>position:sticky</b><br/>
      An element with position: sticky; is positioned based on the user's scroll position.<br/>
      <pre>
      div.sticky {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        background-color: green;
        border: 2px solid #4CAF50;
      }</pre>
      `
    },

    {
      id:5,
      q:'Box Model',
      a:`The total width of an element should be calculated like this:
      <p>
      Total element width = width + left padding + right padding + left border + right border + left margin + right margin
      </p></p>
      The total height of an element should be calculated like this:
      </p></p>
      Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin</p>
      `
    },

    {
      id:6,
      q:'Box Sizing',
      a:`The CSS box-sizing property allows us to include the padding and border in an element's total width and height.<br/>
      <p>If you set box-sizing: border-box; on an element padding and border are included in the width and height:</p>
 <pre>
 box-sizing: border-box;
 </pre>`
    },

    {
      id:2,
      q:'Combinators',
      a:`A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.<br/>
      There are four different combinators in CSS:
<pre>
descendant selector (space)
child selector (>)
adjacent sibling selector (+)
general sibling selector (~)
</pre>
<b>Descendant Selector</b><br/>
The descendant selector matches all elements that are descendants of a specified element.<br/>
The following example selects all < p > elements inside < div > elements: <br/>
<pre>
div p{
  background-color: yellow;
}
</pre><br/>
<b>Child Selector</b><br/>
The child selector selects all elements that are the children of a specified element.<br/>

The following example selects all < p > elements that are children of a < div > element:<br/>
<pre>
div > p {
  background-color: yellow;
}
</pre><br/>
<b>Adjacent Sibling Selector</b><br/>
The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.
<br/>
Sibling elements must have the same parent element, and "adjacent" means "immediately following".
<br/>
The following example selects all < p > elements that are placed immediately after < div > elements:
<pre>
div + p {
  background-color: yellow;
}
</pre><br/>
<b>General Sibling Selector</b><br/>
The general sibling selector selects all elements that are siblings of a specified element.
<br/>
The following example selects all < p > elements that are siblings of < div > elements: 
<pre>
div ~ p {
  background-color: yellow;
}
</pre>
`
    },

    {
      id:7,
      q:'Flexbox Layout Module',
      a:`The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.
      <p>To start using the Flexbox model, you need to first define a flex container.</p>
      <p>The flex container becomes flexible by setting the display property to flex:</p>
      <pre>
      .flex-container {
        display: flex;
      }
      </pre>
      <p>The flex container properties are:</p>
      <pre>
      flex-direction : column, column-reverse, row, row-reverse
      flex-wrap : wrap, nowrap, wrap-revers
      flex-flow : row wrap, column nowrap, etc
      justify-content : center, flex-start, flex-end, space-around, space-between
      align-items : center, flex-start, flex-end, stretch, baseline
      align-content : space-between, space-around, stretch, center, flex-start, flex-end, 
      </pre>
      <b>flex-direction: column</b>: The column value stacks the flex items vertically (from top to bottom)<br/>
      <pre>
      .flex-container {
        display: flex;
        flex-direction: column;
      }
      </pre><br/>
      The column-reverse value stacks the flex items vertically (but from bottom to top):
      <pre>
      .flex-container {
        display: flex;
        flex-direction: column-reverse;
      }
      </pre>
      The row value stacks the flex items horizontally (from left to right):
      <pre>
      .flex-container {
        display: flex;
        flex-direction: row;
      }
      </pre>
      The row-reverse value stacks the flex items horizontally (but from right to left):
      <pre>
      .flex-container {
        display: flex;
        flex-direction: row-reverse;
      }
      </pre>
      <br/><b>flex-wrap</b><br/>
      The flex-wrap property specifies whether the flex items should wrap or not.<br/>
      The wrap value specifies that the flex items will wrap if necessary:
      <pre>
      .flex-container {
        display: flex;
        flex-wrap: wrap;
      }
      </pre>
      The nowrap value specifies that the flex items will not wrap (this is default):
      <pre>
      .flex-container {
        display: flex;
        flex-wrap: nowrap;
      }
      </pre>
      The wrap-reverse value specifies that the flexible items will wrap if necessary, in reverse order:
      <pre>
      .flex-container {
        display: flex;
        flex-wrap: wrap-reverse;
      }
      </pre>
      <br/><b>flex-flow : </b>The flex-flow property is a shorthand property for setting both the flex-direction and flex-wrap properties.
      <pre>
      .flex-container {
        display: flex;
        flex-flow: row wrap;
      }
      </pre><br/>
      <b>justify-content : </b> The justify-content property is used to align the flex items:
      The center value aligns the flex items at the center of the container:
      <pre>
      .flex-container {
        display: flex;
        justify-content: center;
      }
      </pre>
      The flex-start value aligns the flex items at the beginning of the container (this is default):
      <pre>
      .flex-container {
        display: flex;
        justify-content: flex-start;
      }
      </pre>
      The flex-end value aligns the flex items at the end of the container:
      <pre>
      .flex-container {
        display: flex;
        justify-content: flex-end;
      }
      </pre>
      The space-around value displays the flex items with space before, between, and after the lines:
      <pre>
      .flex-container {
        display: flex;
        justify-content: space-around;
      }
      </pre>
      The space-between value displays the flex items with space between the lines:
      <pre>
      .flex-container {
        display: flex;
        justify-content: space-between;
      }
      </pre><br/>
      <b>align-items : </b>The align-items property is used to align the flex items vertically.<br/>
      The center value aligns the flex items in the middle of the container:
      <pre>
      .flex-container {
        display: flex;
        height: 200px;
        align-items: center;
      }
      </pre>
      The flex-start value aligns the flex items at the top of the container:
      <pre>
      .flex-container {
        display: flex;
        height: 200px;
        align-items: flex-start;
      }
      </pre>
      The flex-end value aligns the flex items at the bottom of the container:
      <pre>
      .flex-container {
        display: flex;
        height: 200px;
        align-items: flex-end;
      }
     </pre> 
     The stretch value stretches the flex items to fill the container (this is default):
     <pre>
     .flex-container {
      display: flex;
      height: 200px;
      align-items: stretch;
    }
    </pre>
    The baseline value aligns the flex items such as their baselines aligns:
    <pre>
    .flex-container {
      display: flex;
      height: 200px;
      align-items: baseline;
    }
    </pre>
    <br/><b>align-content : </b> The align-content property is used to align the flex lines.<br/>
    The space-between value displays the flex lines with equal space between them:
    <pre>
    .flex-container {
      display: flex;
      height: 600px;
      flex-wrap: wrap;
      align-content: space-between;
    }
    </pre>
    The space-around value displays the flex lines with space before, between, and after them:
    <pre>
    .flex-container {
      display: flex;
      height: 600px;
      flex-wrap: wrap;
      align-content: space-around;
    }
    </pre>
    The stretch value stretches the flex lines to take up the remaining space (this is default):
    <pre>
    .flex-container {
      display: flex;
      height: 600px;
      flex-wrap: wrap;
      align-content: stretch;
    }
    </pre>
    The center value displays display the flex lines in the middle of the container:
    <pre>
    .flex-container {
      display: flex;
      height: 600px;
      flex-wrap: wrap;
      align-content: center;
    }
    </pre>
    The flex-start value displays the flex lines at the start of the container:
    <pre>
    .flex-container {
      display: flex;
      height: 600px;
      flex-wrap: wrap;
      align-content: flex-start;
    }
    </pre>
    The flex-end value displays the flex lines at the end of the container: 
    <pre>
    .flex-container {
      display: flex;
      height: 600px;
      flex-wrap: wrap;
      align-content: flex-end;
    }
    </pre>
    <b>Child Elements (Items)</b><br/>
    The flex item properties are:
    <pre>
    order
    flex-grow
    flex-shrink
    flex-basis
    flex
    align-self
    </pre>
    The order property specifies the order of the flex items. The order property can change the order of the flex items:
    <pre>
    < div class="flex-container" >
      < div style="order: 3" >1< /div >
      < div style="order: 2" >2< /div >
      < div style="order: 4" >3< /div >
      < div style="order: 1" >4< /div >
    < / div >
    </pre>
    The flex-grow property specifies how much a flex item will grow relative to the rest of the flex items.
    <br/>The value must be a number, default value is 0.<br/>
    Make the third flex item grow eight times faster than the other flex items:
    <pre>
    < div class="flex-container" >
      < div style="flex-grow: 1" >1< /div >
      < div style="flex-grow: 1" >2< /div >
      < div style="flex-grow: 8" >3< /div >
    < / div >
    </pre>
    The flex-shrink property specifies how much a flex item will shrink relative to the rest of the flex items.
    <br/>The value must be a number, default value is 1.<br/>
    Do not let the third flex item shrink as much as the other flex items:<br/>
    <pre>
    < div class="flex-container" >
        < div>1< /div >
        < div>2< /div >
        < div style="flex-shrink: 0" >3< /div >
        < div>4< /div >
    < /div >    
    </pre>
    The <b>flex-basis</b> property specifies the initial length of a flex item.<br>
    Set the initial length of the third flex item to 200 pixels:<br/>
    It works with align-items:stretch
    <pre>
    < div class="flex-container">
        < div>1< /div>
        < div>2< /div>
        < div style="flex-basis: 200px">3< /div>
        < div>4< /div>
    < /div >    
    </pre>
    The <b>flex</b> property is the shorthand property for flex-grow, flex-shrink and flex-basis properties<br/>
    Make the third flex item not growable (0), not shrinkable (0), and with an initial length of 200 pixels:<br/>
    <pre>
    < div class="flex-container">
      < div>1< /div>
      < div>2< /div>
      < div style="flex: 0 0 200px">3< /div>
      < div>4< /div>
    < /div>
    </pre>
    The <b>align-self</b> property specifies the alignment for the selected item inside the flexible container.<br/>
    The <b>align-self</b> property overrides the default alignment set by the containers <b>align-item</b> property.
    <pre>
    < div class="flex-container">
      < div>1< /div>
      < div>2< /div>
      < div style="align-self: center">3< /div>
      < div>4< /div>
    < /div>
    </pre>
    Align the second flex item at the top of the container, and the third flex item at the bottom of the container:
    <pre>
    < div class="flex-container">
      < div>1< /div>
      < div style="align-self: flex-start">2< /div>
      < div style="align-self: flex-end">3< /div>
    < /div>
    </pre>
    `
    },

    {
      id:10,
      q:'Font size',
      a:`The font-size property sets the size of the text.<br/>
      The font-size value can be an absolute, or relative size.<br/>
      <b>Absolute size:</b><br/>
     
      <p>Sets the text to a specified size</p>
      <p>Does not allow a user to change the text size in all browsers (bad for accessibility reasons)
      </p><p>Absolute size is useful when the physical size of the output is known</p>
      <b>Relative size:</b><br/>

      <p>Sets the size relative to surrounding elements</p>
      <p>Allows a user to change the text size in browsers</p>
      <b>Set Font Size With Pixels</b><br/>
      Setting the text size with pixels gives you full control over the text size:
      <pre>
      h1 {
        font-size: 40px;
      }
      </pre>
      <b>Set Font Size With Em</b><br/>
      To allow users to resize the text (in the browser menu)<br/>
      1em is equal to the current font size. The default text size in browsers is 16px.
      So, the default size of 1em is 16px.<br/>
      <pre>
      h1 {
        font-size: 2.5em; /* 40px/16=2.5em */
      }
      </pre>
      with the em size, it is possible to adjust the text size in all browsers.<br/>
      The solution that works in all browsers, is to set a default font-size in percent for the < body > element:      
      <pre>
      body {
        font-size: 100%;
      }
      
      h1 {
        font-size: 2.5em;
      }
      
      </pre>
      <b>Responsive Font Size</b><br/>
      The text size can be set with a vw unit, which means the "viewport width".<br/>
      That way the text size will follow the size of the browser window:<br/>
      Viewport is the browser window size. 1vw = 1% of viewport width (1vh = 1% of viewport height). If the viewport is 50cm wide, 1vw is 0.5cm.<br/>

      `
    },

    {
      id:9,
      q:'Media Querie',
      a:`Media queries are useful when you want to modify your site or app depending on a 
      device's general type (such as print vs. screen) or specific characteristics and 
      parameters (such as screen resolution or browser viewport width).<br/>
      Media queries are used for the following:<br/>
      <p>To conditionally apply styles with the CSS @media and @import at-rules.</p>
      <p>To target specific media for the < style >, < link >, < source >, and other HTML elements with the media= attribute.</p>
      <p>To test and monitor media states using the Window.matchMedia() and MediaQueryList.addListener() JavaScript methods.</p>
      <pre>
      @media screen and (min-width: 480px) {
        #leftsidebar {width: 200px; float: left;}
        #main {margin-left: 216px;}
      }
      </pre>
      <br/>
      A media query is composed of an optional media type and any number of media feature expressions. Multiple queries can be combined in various ways by using logical operators. Media queries are case-insensitive.
      <br/><b>Media types</b><br/>
      Media types describe the general category of a device. Except when using the not or only logical operators, the media type is optional and the all type will be implied.
      <b>all</b><br/>
      Suitable for all devices.<br/>
      <b>print</b><br/>
      Intended for paged material and documents viewed on a screen in print preview mode.
      <br/><b>screen</b><br/>
      Intended primarily for screens.<br/>
      <b>speech</b><br/>
      Intended for speech synthesizers.
      `
    },
  
    {
        id: 8,
        q:'Perfect Centering',
        a:` Set both the justify-content and align-items properties to center, and the flex item will be perfectly centered:
        <pre>
        .flex-container {
          display: flex;
          height: 300px;
          justify-content: center;
          align-items: center;
        }
        </pre>
        OR<br/>
        <pre>
        .outerDiv{
          height:300px;
          width:500px;
          position:relative;
        }

        .innerDiv{
          position:absolute;
          top:50%;
          left:50%;
          transform: translate(-50%, -50%)
        }
        </pre>
        `
    },

    {
      id:3,
      q:'Pseudo-classes',
      a:`A pseudo-class is used to define a special state of an element.<br/>
      For example, it can be used to:<br/>
<pre>
Style an element when a user mouses over it
Style visited and unvisited links differently
Style an element when it gets focus

selector:pseudo-class {
  property:value;
}

/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
</pre><br/>
<b>:first-child pseudo-class</b><br/>
The :first-child pseudo-class matches a specified element that is the first child of another element.
<pre>
p:first-child {
  color: blue;
}
</pre>
In the following example, the selector matches the first < i > element in all < p > elements:
<pre>
p i:first-child {
  color:red
}
</pre>
`
    },

    {
      id:4,
      q:'Pseudo Elements',
      a:`
      <pre>
Selector        Example         Example description
::after         p::after        Insert content after every < p > element
::before        p::before       Insert content before every < p > element
::first-letter  p::first-letter	Selects the first letter of every < p > element
::first-line    p::first-line   Selects the first line of every < p > element
::selection     p::selection    Selects the portion of an element that is selected by a user

::first-letter {
  css declarations;
}

</pre>`
    },

    {
      id:14,
      q:'Shadow-dom',
      a:`<p>This article assumes you are already familiar with the concept of the DOM (Document Object Model) — a tree-like structure of connected nodes that represents the different elements and strings of text appearing in a markup document (usually an HTML document in the case of web documents). As an example, consider the following HTML fragment:</p>
      <p>Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which can be attached to any elements you want, in the same way as the normal DOM.</p>

<pre>There are some bits of shadow DOM terminology to be aware of:

Shadow host: The regular DOM node that the shadow DOM is attached to.
Shadow tree: The DOM tree inside the shadow DOM.
Shadow boundary: the place where the shadow DOM ends, and the regular DOM begins.
Shadow root: The root node of the shadow tree.</pre>
      `
    },

    {
     id:11,
     q:'Specificity',
     a:`Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.<br/>
     When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element.Specificity only applies when the same element is targeted by multiple declarations
<p>If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out.</p>
<p>Think of specificity as a score/rank that determines which style declarations are ultimately applied to an element.</p>
<p>The universal selector (*) has low specificity, while ID selectors are highly specific! </p>
<p>Inline styles - An inline style is attached directly to the element to be styled. Example: < h1 style="color: red;" >red text< /h1 ></p>
<pre>
The following list of selector types increases by specificity:

1. Type selectors (e.g., h1) and pseudo-elements (e.g., ::before).
2. Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"]) and 
   pseudo-classes (e.g., :hover).
3. ID selectors (e.g., #example).

When an !important rule is used on a style declaration, this declaration overrides any other 
declarations. 

Universal selector (*), combinators (+, >, ~, ' ', ||) and negation pseudo-class (:not()) 
have no effect on specificity. (The selectors declared inside :not() do, however.)
</pre>

<br/> Example<br/>

<pre>
background color will be green to the following div, it will pick last one
< div class="bgclass" id="myid"> First Line </ div >  
--------------------     
div {
  background-color:red;
}

div {
  background-color:green;
}
--------------------
background color will be red to the above div, it will pick the specific one
--------------------
div.bgclass{
  background-color:red;
}
div {
  background-color:green;
}
--------------------
background color will be green to the above div, it will pick the more specific one
--------------------
div.bgclass{
  background-color:red;
}
div#myid {
  background-color:green;
}
</pre>
` 
    },
    {
      id:12,
      q:'Visibility:hidden, display:none',
      a:`<p><b>display:none</b> - is used to hide an element from the DOM without deleting it. it will not occupy any space in the DOM</p>
      <p><b>visibility:hidden</b> - is also used to hide an element from the DOM without deleting it, but it will occupy the space in the DOM</p>.
      `
    },
    {
      id:13,
      q:'object-fit',
      a:`The CSS object-fit property is used to specify how an < img > or < video > should be resized to fit its container.<br/>
      This property tells the content to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible".<br/>
      The object-fit property can have the following values:<br/>
      <ul>
        <li><b>fill -</b> This is default. The replaced content is sized to fill the element's content box. If necessary, the object will be stretched or squished to fit</li>
        <li><b>contain -</b> The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box</li>
        <li><b>cover -</b> The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. The object will be clipped to fit</li>
        <li><b>none -</b> The replaced content is not resized</li>
        <li><b>scale-down -</b> The content is sized as if none or contain were specified (would result in a smaller concrete object size)</li>
      </ul>`
    },
    {
      id:14,
      q:'Transforms',
      a:`<b>CSS 2D Transforms Methods</b><br/>
      With the CSS transform property you can use the following 2D transformation methods:<br/>
      <ul>
      <li>translate()</li>
      <li>rotate()</li>
      <li>scaleX()</li>
      <li>scaleY()</li>
      <li>scale()</li>
      <li>skewX()</li>
      <li>skewY()</li>
      <li>skew()</li>
      <li>matrix()</li>
      </ul>
      The translate() method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).<br/>
      The following example moves the < div> element 50 pixels to the right, and 100 pixels down from its current position:<br/>
      <pre>
      div {
        transform: translate(50px, 100px);
      }</pre>
      <b>The rotate() Method</b><br/>
      The rotate() method rotates an element clockwise or counter-clockwise according to a given degree.<br/>
      The following example rotates the < div> element clockwise with 20 degrees:<br/>
      <pre>
      div {
        transform: rotate(20deg);
      }</pre>
      Using negative values will rotate the element counter-clockwise.<br/>
      The following example rotates the < div> element counter-clockwise with 20 degrees:
      <pre>
      div {
        transform: rotate(-20deg);
      }</pre>
      <b>The scale() Method</b>
      The scale() method increases or decreases the size of an element (according to the parameters given for the width and height).<br/>
      The following example increases the < div> element to be two times of its original width, and three times of its original height:<br/>
      <pre>
      div {
        transform: scale(2, 3);
      }</pre>
      The following example decreases the < div> element to be half of its original width and height: <br/>
      <pre>div {
        transform: scale(0.5, 0.5);
      }</pre>
      <b>The scaleX() Method</b>
      
      `
    }
  ];

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
