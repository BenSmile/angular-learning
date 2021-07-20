import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  appareilName = 'Machine a laver';
  appareilStatus = 'Eteint';

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

}
