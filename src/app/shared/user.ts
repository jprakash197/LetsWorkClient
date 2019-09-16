
/**
 * README: Don't save username/password here!
 *  Check in localStorage for username
 */
export class User {
  referralCode: string;
  realName: string;
  email: string;
  refferedCode: string;
  role: string;
  token: string;

  constructor(email, refCode, realname) {
    this.email = email;
    this.referralCode = refCode;
    this.realName = realname;
  }

  getToken(): string {
    return this.token;
  }
}
