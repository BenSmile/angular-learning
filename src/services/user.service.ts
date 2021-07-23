import {User} from '../models/user.model';
import {Subject} from 'rxjs';


export class UserService {

  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'smith@emial.com',
      drinkPreference: 'Coca',
      hobbies: [
        'coder', 'degustation du cafe'
      ]
    }
  ];

  public userSubject = new Subject<User[]>();

  public emitUsers(): void {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }


}
