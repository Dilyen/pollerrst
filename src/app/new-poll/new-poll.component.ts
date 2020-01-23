import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './user';
import { SendmailService } from './sendmail.service';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {
  creatorsForm = new FormGroup({
    email: new FormControl(''),
    questions: new FormControl(''),
    options: new FormControl
  });

  user = {
    email: "isaac.agyen@turntabl.io"
  }
  userObservable: Observable<User>


  constructor(private sendmail: SendmailService) { }

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

}
