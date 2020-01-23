import { Component, OnInit, Renderer2, ElementRef, Directive } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {User} from 'src/app/new-poll/user';
import {SendmailService} from 'src/app/new-poll/sendmail.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})

// @Directive({
//   selector: '[options]'
// })
export class NewPollComponent implements OnInit {

  creatorsForm = new FormGroup({
    email: new FormControl(''),
    questions: new FormControl(''),
    options: new FormControl
  });

  user = {
    email: process.env.USER_EMAIL
  }
  

  constructor(private renderer: Renderer2, private el: ElementRef, private sendmail: SendmailService) { }
  userObservable: Observable<User>

  ngOnInit() {
  }

  onSubmit() {
    
    this.user.email = this.creatorsForm.value.email;
    console.log(this.user);

    this.sendmail.sendmail(this.user).subscribe()
  }

  newOptionbtn(){
  
    // const option = this.renderer.createElement('div');
    // const div = this.renderer.createElement('div');
    // const span = this.renderer.createElement('span');
    // const input = this.renderer.createElement('input'); 

    // this.renderer.appendChild(div, span);
    // console.log("div", div);

    // this.renderer.appendChild(option, div);

    // console.log("option", div);

  }

  // <div class="input-group mb-3">

  //               <div class="input-group-prepend">
  //                 <span class="input-group-text" id="inputGroup-sizing-default">Option 1</span>
  //               </div>

  //               <input type="text" class="form-control w-25" aria-label="Default">
  // </div>


}
