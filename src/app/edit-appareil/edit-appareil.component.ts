import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppareilService} from '../../services/appareil.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  public defaultStatus = 'Eteint';

  constructor(private appService: AppareilService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public onSubmit(f: NgForm): void {
    const name = f.value.name;
    const status = f.value.status;
    this.appService.addAppareil(name, status);
    this.router.navigate(['/appareils']);
  }
}
