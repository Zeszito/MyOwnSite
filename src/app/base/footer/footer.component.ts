import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { CountApiService } from 'src/app/count-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
  emailState = 0;

  visitas: string ="A contar a visitas";

  pathTo: CountApiService;
  constructor(countService: CountApiService) {
    this.pathTo = countService;
    this.fetchNumber();
  }

  ngOnInit(): void {
  }

  fetchNumber() {
    this.pathTo.doGetCount().subscribe(
      (data) => {
        this.visitas = data['value'];
      }
    );
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
