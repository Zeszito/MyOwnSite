import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(function () {
      // Add the trigger class to the SVG
      document.getElementById('startSocialImg').classList.add('start');
    }, 1000);
  }

}
