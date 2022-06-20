const BankAccount = require('./bank-account')

describe('BankAccount', () => {
  it('should be created with an initial balance of 0', () => {
    const account = new BankAccount();
    expect(account.printStatement()).toBe(0);
  });
})