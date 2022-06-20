const BankAccount = require('./bank-account')

describe('BankAccount', () => {
  describe('.printStatement', () => {
    it('should be created with an initial balance of 0', () => {
      const account = new BankAccount();
      expect(account.printStatement()).toBe(0);
    });
  });

  describe('.deposit', () => {
    it('should increase the balance by the specified amount', () => {
      const account = new BankAccount();
      account.deposit(100);
      expect(account.printStatement()).toEqual(100);
    });
  });

  describe('.withdraw', () => {
    it('should decrease the balance by the specified amount', () => {
      const account = new BankAccount();
      account.deposit(200);
      account.withdraw(100);
      expect(account.printStatement()).toEqual(100);
    });
  });
});
