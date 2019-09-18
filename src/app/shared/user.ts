
/**
 * README: Don't save username/password here!
 *  Check in localStorage for username
 */
export class User {
  referralCode: string;
  username: string;
  password: string;
  realName: string;
  email: string;
  refferedCode: string;
  role: string;
  token: string;

  constructor(username, password, email, refCode, realname) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.referralCode = refCode;
    this.realName = realname;
  }

  getToken(): string {
    return this.token;
  }
}
