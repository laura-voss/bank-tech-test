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
      expect(account.deposit(100)).toBe(100);
    });
  });
  
})
