import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('Itachiark','Hello1029','email@email.com','ref123','ME ME')).toBeTruthy();
  });
});
