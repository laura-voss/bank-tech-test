const BankAccount = require('./bank-account')

describe('BankAccount', () => {
  it('should be created with an initial balance of 0', () => {
    const account = new BankAccount();
    expect(account.checkBalance()).toBe(0);
  });

  describe('.deposit', () => {
    it('should increase the balance by the specified amount', () => {
      const account = new BankAccount();
      account.deposit(100);
      expect(account.checkBalance()).toEqual(100);
    });
  });

  describe('.withdraw', () => {
    it('should decrease the balance by the specified amount', () => {
      const account = new BankAccount();
      account.deposit(200);
      account.withdraw(100);
      expect(account.checkBalance()).toEqual(100);
    });
  });

  describe('.transactions', () => {
    it('should create a record of each deposit transaction and add to the array', () => {
      const account = new BankAccount();
      account.deposit(100);
      expect(account.transactions).toContainEqual({"credit": 100, "debit": "", "balance": 100});
    });
    
    it('should create a record of each withdraw transaction and add to the array', () => {
      const account = new BankAccount();
      account.deposit(100);
      account.withdraw(50);
      expect(account.transactions).toContainEqual({"credit": 100, "debit": "", "balance": 100}, {"credit": "", "debit": 50, "balance": 50});
    });
  });  
  
  describe('printStatement', () => {
    it('should return a string with transaction information for each transaction', () => {
      const account = new BankAccount();
      account.deposit(100);
      account.withdraw(50);
      expect(account.printStatement()).toEqual("credit || debit || balance\n || 50 || 50\n100 ||  || 100");
    });
  });

  describe('.valueConverter', () => {
    it('should return a number with 2 digits after the decimal point', () => {
      const account = new BankAccount();
      expect(account.valueConverter(1)).toBe('1.00');
    });
  });
});
 