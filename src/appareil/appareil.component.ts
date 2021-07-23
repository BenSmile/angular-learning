import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexofAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  getColor(): string {
    if (this.appareilStatus === 'Allume') {
      return 'green';
    } else {
      return 'red';
    }
  }

  public onAllumerUn(): void {
    this.appareilService.allumerUn(this.indexofAppareil);
  }

  public onEteindreUn(): void {
    this.appareilService.eteindreUn(this.indexofAppareil);
  }
}
