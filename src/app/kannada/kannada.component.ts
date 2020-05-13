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
      id:3,
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
        Marday/Maridila<br/>
        Oota aita? -> aitu/agila - thin-thini
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
    },
    {
      id:4,
      link:'future',
      q:'Future Tense',
      a:`<h3>Future Tense</h3>
      <table width="100%" border="1" cellpadding="2">
      <tr>
        <th>English</th>
        <th>Kannada</th>
      </tr>
      <tr>
        <td colspan="2" align="center">
          Word + thini (borthini, marthini, thin-thini etc)
        </td>
      </tr> 
      <tr>
        <td>I will come</td>
        <td>Nanu borthini
        <br/>
        I will do - Nanu marthini<br/>
        Oota aita? - aitu/agila - thin thini
        </td>                        
      </tr>
      <tr>
        <td>I will go to office</td>
        <td>Nanu office gay hogthini</td>
      </tr>
      </table>`
    },
    {
      id:5,
      link:'opposite',
      q:'Opposite word',
      a:`<h3>Opposite word</h3>
      <table width="100%"  cellpadding="2">
        <tr>
          <td valign="top">
            <table width="100%" border="1">
                <tr>
                   <td>I (Nanu)</td>
                   <td>You(Ninu/Nivu)</td>
                </tr>
                <tr>
                   <td>He (Avanu/Avaru)</td>
                   <td>She(Avalu/Avaru)</td>
                </tr>
                <tr>
                   <td>Come (Ba/Banni)</td>
                   <td>Go(Hogu/Hogi)</td>
                </tr>
                <tr>
                   <td>They (Avaru)</td>
                   <td>We(Navu)</td>
                </tr>
                <tr>
                   <td>Day (Dina)</td>
                   <td>Night(Ratri)</td>
                </tr>
                <tr>
                   <td>Speed (Bega)</td>
                   <td>Slow(Mela)</td>
                </tr>
                <tr>
                   <td>Hot (Bisi)</td>
                   <td>Cold(Thanna)</td>
                </tr>
                <tr>
                   <td>Sister (tnaggi)</td>
                   <td>Brother(Aanna)</td>
                </tr>
                <tr>
                   <td>Mother(Aamma/Thaayi)</td>
                   <td>Father(Aappa/thandhe)</td>
                </tr>
                <tr>
                  <td>Right (Balagade)</td>
                  <td>Left(Edagade)</td>
                </tr>
                <tr>
                  <td>My/Mine (Nanna/Nannadu)</td>
                  <td>Your(Ninna/Nimma)</td>
                </tr>
                <tr>
                  <td>Our (Namma)</td>
                  <td>Their(Aavaru)</td>
                </tr>
                <tr>
                  <td>Here (Elli)</td>
                  <td>There(Aali)</td>
                </tr>
                <tr>
                  <td>This/These (Edu/Evu)</td>
                  <td>That/Those(Aadu/Aastu)</td>
                </tr>
                
            </table>
          </td>
          <td valign="top">
          <table width="100%" border="1">
              <tr>
                <td>Today (Ebbatoo)</td>
                <td>Yesterday (Ninne) Tomorrow (Naale)</td>
              </tr>
              <tr>
                <td>Front (Munday)</td>
                <td>Back (Hinday)</td>
              </tr>
              <tr>
                <td>Door (Bagilu/Kadda)</td>
                <td>Window (Kitaki)</td>
              </tr>
              <tr>
                <td>Give (Koro/kori)</td>
                <td>Take (Togoli)</td>
              </tr>
              <tr>
                <td>Pull (Aeli)</td>
                <td>Push (Talu)</td>
              </tr>
              <tr>
                <td>Sit (Khootko/khootkoli)</td>
                <td>Stand (Nindko/nindkolli)</td>
              </tr>
              <tr>
                <td>See (Noori)</td>
                <td>Donot see (Nore beri)</td>
              </tr>
              <tr>
                <td>Open (Teggi)</td>
                <td>Close(Moocchu)</td>
              </tr>
              <tr>
                <td>Big (Dordoo)</td>
                <td>Small(Chikku)</td>
              </tr>
              <tr>
                <td>Up (Mele)</td>
                <td>Down(Kelage)</td>
              </tr>
              <tr>
                <td>Out (Horage/aache)</td>
                <td>In(Olage)</td>
              </tr>
              <tr>
                <td>Now (Ebaga/Ega)</td>
                <td>Then/ After(Aamele)</td>
              </tr>
              <tr>
                <td>Done (Aagiday)</td>
                <td>Did not(Aagila)</td>
              </tr>
          </table>
          </td>
        </tr>
      </table>
      `
    },
    {
      id:6,
      q:'Common words',
      link:'comnwrds',
      a:`
      <table width="100%" border="1" cellpadding="2">
      <tr>
        <th>English</th>
        <th>Kannada</th>
        <th>English</th>
        <th>Kannada</th>
      </tr>
      <tr>
        <td>Coconut</td>
        <td>Tenginakaie</td>
        <td>Banana</td>
        <td>Balehannu</td>
      </tr>
      <tr>
        <td>Milk (put milk)</td>
        <td>Halu (halu Hako/Haki)</td>
        <td>Aagarbotti</td>
        <td>Uddinakaddi</td>
      </tr>
      <tr>
        <td>Rice</td>
        <td>Hakki</td>
        <td>Water</td>
        <td>Niru</td>
      </tr>
      <tr>
        <td>Turmarik</td>
        <td>Haricina</td>
        <td>Soil</td>
        <td>Mannu</td>
      </tr>
      <tr>
        <td>House</td>
        <td>Mane</td>
        <td>Finger</td>
        <td>Berelu</td>
      </tr>
      <tr>
        <td>Oil</td>
        <td>Enne</td>
        <td>Floor</td>
        <td>Nela</td>
      </tr>
      <tr>
        <td>Plate</td>
        <td>Thatte</td>
        <td>Wash</td>
        <td>Toli (tolitaidare/tolitare/toledru)</td>
      </tr>
      <tr>
        <td>Plate</td>
        <td>Thatte</td>
        <td>And</td>
        <td>Matte</td>
      </tr>
      <tr>
        <td>Hand</td>
        <td>Kaye</td>
        <td>Foot</td>
        <td>Kalu</td>
      </tr>
      <tr>
        <td>Eye</td>
        <td>Kannu</td>
        <td>Stomach</td>
        <td>Otte</td>
      </tr>
      <tr>
        <td>Ear</td>
        <td>Kibi</td>
        <td>Nose</td>
        <td>Moogu</td>
      </tr>
      <tr>
        <td>Mouth</td>
        <td>Baye</td>
        <td>Tooth</td>
        <td>Hallu</td>
      </tr>
      <tr>
        <td>Tongue</td>
        <td>Nalige</td>
        <td>Hair</td>
        <td>Hoodalu</td>
      </tr>
      <tr>
        <td>Why</td>
        <td>Yakke</td>
        <td>When</td>
        <td>Yabaga</td>
      </tr>
      <tr>
        <td>Enough</td>
        <td>Saaku</td>
        <td>Want</td>
        <td>Beku</td>
      </tr>
      <tr>
        <td>Common</td>
        <td>Normal</td>
        <td>Memorize (Keep in mind)</td>
        <td>Nenapu (Nenapinalli itko)</td>
      </tr>
      <tr>
        <td>Or</td>
        <td>Authowa</td>
        <td>What</td>
        <td>Yenu</td>
      </tr>
      <tr>
        <td>Means</td>
        <td>Artho</td>
        <td>Understand</td>
        <td>Artho agutiday</td>
      </tr>
      <tr>
        <td>Is it?</td>
        <td>Howda?</td>
        <td>Yes/It is</td>
        <td>Howdu</td>
      </tr>
      <tr>
        <td>Let him/her go</td>
        <td>kalsu</td>
        <td>It</td>
        <td>Adu</td>
      </tr>
      <tr>
        <td>Came</td>
        <td>Baandha(male) /Bandhlu(female)</td>
        <td>Will come</td>
        <td>Baaruthare</td>
      </tr>
      <tr>
        <td>Walk</td>
        <td>Nadee/Nadi</td>
        <td>Eat</td>
        <td>Thinnu</td>
      </tr>
      <tr>
        <td>Drink</td>
        <td>Kudee</td>
        <td>Run</td>
        <td>Oodu</td>
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
