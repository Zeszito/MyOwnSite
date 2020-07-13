import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {

    if(this.inViewport()){

      document.getElementById('startSocialImg').classList.add('start');
    }
    else{

      document.getElementById('startSocialImg').classList.remove('start');
    }
  }



   inViewport() {

    var el = document.getElementById('startSocialImg');
    var r, html;

    if ( !el || 1 !== el.nodeType ) { return false; }
    html = document.documentElement;
    r = el.getBoundingClientRect();

    return ( !!r
      && r.bottom >= 0
      && r.right >= 0
      && r.top <= html.clientHeight
      && r.left <= html.clientWidth
    );

}
}
