
export class User {
  referralCode: string;
  username: string;
  realName: string;
  email: string;
  password: string;
  refferedCode: string;
  role: string;
  token: string;

  constructor(username, password, email, role, token, refCode, realname) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
    this.token = token;
    this.referralCode = refCode;
    this.realName = realname;
  }

  getToken(): string {
    return this.token;
  }
}
