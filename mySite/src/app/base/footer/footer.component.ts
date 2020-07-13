import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
  emailState = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {

    e.preventDefault();
    this.emailState = 1;
    e.preventDefault();

    emailjs.sendForm('smtp-pt.securemail.pro', 'template_1MkY8Ivk', e.target as HTMLFormElement, 'user_0ABSdgHLLMCUYiRlwAJnJ')
      .then((result: EmailJSResponseStatus) => {
        this.emailState = 3;
        console.log(result.text);
      }, (error) => {
        this.emailState = 2;
        console.log(error.text);
      });

  }
}
