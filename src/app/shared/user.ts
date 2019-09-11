
export class User {
    referralCode: string;
    username: string;
    realName: string;
    email: string;
    password: string;
    refferedCode: string;
    role: string;
    token: string;

  constructor(name, pass, email, ref, realname) {
    this.username = name;
    this.password = pass;
    this.email = email;
    this.refferedCode = ref;
    this.realName = realname;
  }

  getToken(): string {
    return this.token;
  }
}
