import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-kannada',
  templateUrl: './kannada.component.html',
  styleUrls: ['./kannada.component.sass']
})
export class KannadaComponent implements OnInit {
  
  question;
  answer;
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
  }
  qandA: any = [
    {
      id:1,
      link:'present-indefinite',
      q: 'Present Indefinite Tense',
      a:`<h3>Present Indefinite Tense</h3>
      The present indefinite tense, also known as simple present tense, denotes a stative or habitual or eternally true action.
      <br/>
      Generally simple present tense is used to indicate an action which happens – always, regularly, every day, daily, normally, generally, usually, occasionally, sometimes, often, rarely, frequently, nowadays, naturally, seldom, constantly, never, every a week, every year, once a year, on a week, at times, at present, now and then, or all the time. 
      <br/> 
      <table width="100%" border="1" cellpadding="2">
        <th>English</th>
        <th>Kannada</th>
        <tr>
            <td>I usually wake up at 6.00 AM.</td>
            <td>Nanu yabagallu 6AM gay yeddlu thini</td>
        </tr>
        <tr>
            <td>The Sun raises in the east.</td>
            <td>Suriya purbadalli uttutaday</td>
        </tr>
        <tr>
            <td>I used to go to office by Bike</td>
            <td>Nannu office gay bike aali hoggutiday </td>
        </tr>
        <tr>
            <td>I am good in Mathematics</td>
            <td>Nanu maths aali chennagidini?
            Chennagidini - own<br/>
            Chennagidare - For others
            </td>
        </tr>
        <tr>
            <td>What is your name?</td>
            <td>Nimma/Ninna hesaru yenu?<br/>
            Nimma/Ninna - Your<br/>
            Hesaru - Name<br/>
            Yenu - What
            </td>
        </tr>
        <tr>
            <td>My name is Dilip</td>
            <td>
            Nanna hesaru Dilip<br/>
            Nanna - My<br/>
            Nannadu/Nandu - Mine<br/>
            Idu Nannadu - It's Mine
            </td>
        </tr>
      </table>
      `
    },
    {
      id:2,
      link:'present-continuous',
      q:'Present Continuous Tense',
      a:`<h3>Present Continuous Tense</h3>
      The present progressive is used to indicate the ongoing time (now). However, the stative verbs do not usually take the form of present progressive even though they refer to the present time.
      <br/>
      Now, continually, perpetually, at this moment, at the moment, right now, This season, this year, forever, etc. are usually the signs of a verb to take present progressive tense. However, these signs are not necessary all the time for a verb to present progressive tense.
      <table width="100%" border="1" cellpadding="2">
      <tr>
        <th>English</th>
        <th>Kannada</th>
      </tr>
      <tr>
        <td colspan="2">
          Word + ini, word + thaidni, word + idini, word + edare,  etc.
        </td>
      </tr>
      <tr>
        <td>I am going to Office.</td>
        <td>Nannu Office gay hoguthaidini.<br/>
        Hogi/Hogu - Go<br/>
        Hoguthaidni - Going
        </td>
      </tr>
      <tr>
        <td>I am having food</td>
        <td>Oota marthaidini<br/>
            having/doing=>marthaidini(for myself/ like kelsa  marthaidini(I am working)), 
            marthaidhiya(asking/ like kelsa marthaidhiya? (Are you working?),  etc)
            Watching TV<br/>
            Seeing/watchind=>Northaidhini(for myself/ like tv  Northaidhini(watchung tv)), 
            northaidhiya(asking/ like tv nodthaidhiya (r u watching tv?) etc)
        </td>
      </tr>
      <tr>
        <td>He is comming(On the way)</td>
        <td>Avaru borthaidini<br/>
        For asking (bortha+edare) Are you comming? 
        <br/>
        
        </td>
      </tr>
      </table>  
      `
    },
    {
      id:2,
      link:'past',
      q:'Past Tense',
      a:`<h3>Past Tense</h3>
      <table width="100%" border="1" cellpadding="2">
      <tr>
        <th>English</th>
        <th>Kannada</th>
      </tr>
      <tr>
        <td colspan="2" align="center">
          Word + day (bonday, marday etc), word + diya (mardiya, bondiya), word + dini (bondidini)   etc.
        </td>
      </tr>
      <tr>
        <td>I had food.</td>
        <td>Nanu oota marday.<br/>
        For asking, oota mardiya? <br/>
        Marday/Maridila
        </td>
      </tr>
      <tr>
        <td>I reached home.</td>
        <td>
            Mane inda bonday (already reached)
            Mane inda bondidini. - Office inda bondidini etc
        </td>
      </tr>
      </table>
      `
    }
  ];
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
