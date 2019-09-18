import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('Larry Lateralus', 'password', 'lazy.lateralus@yahoo.com', 227171, 'Larry P Lateralus')).toBeTruthy();
  });
});
