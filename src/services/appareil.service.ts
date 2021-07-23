import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine a laver',
      status: 'Allume'
    },
    {
      id: 2,
      name: 'Televiseur',
      status: 'Eteint'
    },
    {
      id: 3,
      name: 'Machine a ecrire',
      status: 'Eteint'
    },
    {
      id: 4,
      name: 'Machine a vapeur',
      status: 'Allume'
    }
  ];

  constructor(private httpClient: HttpClient) {

  }

  emitAppareilSubject(): void {
    this.appareilSubject.next(this.appareils.slice());
  }

  toutAllumer(): void {
    for (let a of this.appareils) {
      a.status = 'Allume';
    }
    this.emitAppareilSubject();
  }

  toutEteindre(): void {
    for (let a of this.appareils) {
      a.status = 'Eteint';
    }
    this.emitAppareilSubject();
  }

  allumerUn(index: number): void {
    this.appareils[index].status = 'Allume';
    this.emitAppareilSubject();

  }

  eteindreUn(index: number): void {
    this.appareils[index].status = 'Eteint';
    this.emitAppareilSubject();
  }

  public getAppareilById(id: number): any {
    const appareil = this.appareils.find(
      (a) => {
        return a.id === id;
      }
    );
    this.emitAppareilSubject();
    return appareil;
  }

  public addAppareil(name: string, status: string): void {
    const newAppareil = {
      id: 0,
      name: '',
      status: ''
    };
    newAppareil.name = name;
    newAppareil.status = status;
    newAppareil.id = this.appareils[this.appareils.length - 1].id;
    this.appareils.push(newAppareil);
    this.emitAppareilSubject();
  }

  public saveAppareilsToServer() {
    this.httpClient.put('https://http-client-demo-a58e9-default-rtdb.firebaseio.com/appareils.json', this.appareils)
      .subscribe(() => {
        console.log('Enregistrement reussi');
      }, (errr: any) => {
        console.log('Erreur de suavegarde');
      });
  }

  public getAppareilsToServer(): void {
    this.httpClient.get<any[]>('https://http-client-demo-a58e9-default-rtdb.firebaseio.com/appareils.json')
      .subscribe((response) => {
        console.log(response);
        this.appareils = response;
        this.emitAppareilSubject();
      }, (errr: any) => {
        console.log('Erreur de chargement');
      });
  }
}
