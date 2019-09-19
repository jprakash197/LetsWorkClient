import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('Username', 'hm123456789T', 'email@email.com', 'refCode', 'Huvra Mehta')).toBeTruthy();
  });
});
