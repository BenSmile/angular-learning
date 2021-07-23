export class AuthService {

  isAuth = false;


  // tslint:disable-next-line:typedef
  public signIn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve(true);
      }, 2000);
    });
  }

  public signout(): void {
    this.isAuth = false;
  }
}
