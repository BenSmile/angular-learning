import {Component, OnInit} from '@angular/core';
import {AppareilService} from '../../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  refresh = false;

  appareilSubscription: Subscription;
  appareils: any[];

  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 2000);
    }
  );

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (apps: any[]) => {
        this.appareils = apps;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  public onAllumer(): void {
    this.appareilService.toutAllumer();
  }

  public onEteindre(): void {
    this.appareilService.toutEteindre();
  }

  public onSave(): void {
    this.refresh = true;
    this.appareilService.saveAppareilsToServer();
    this.refresh = false;
  }

  public onFetch(): void {
    this.refresh = true;
    this.appareilService.getAppareilsToServer();
    this.appareilService.emitAppareilSubject();

    this.refresh = false;
  }

}
