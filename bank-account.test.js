const BankAccount = require('./bank-account');
const timekeeper = require('timekeeper');

describe('BankAccount', () => {
  beforeEach(() => {
    account = new BankAccount();
    timekeeper.freeze(new Date('2022-06-21'));
  });

  afterEach(() => {
    timekeeper.reset();
  });
  
  it('should be created with an initial balance of 0', () => {
    expect(account.checkBalance()).toBe(0);
  });
  
  describe('.deposit', () => {
    it('should increase the balance by the specified amount', () => {
      account.deposit(100);
      expect(account.checkBalance()).toEqual(100);
    });
  });

  describe('.withdraw', () => {
    it('should decrease the balance by the specified amount', () => {
      account.deposit(200);
      account.withdraw(100);
      expect(account.checkBalance()).toEqual(100);
    });
  });

  describe('.transactions', () => {
    it('should create a record of each deposit transaction and add to the array', () => {
      account.deposit(100);
      expect(account.transactions).toContainEqual({"date": "21/06/2022", "credit": 100.00, "debit": "", "balance": 100.00});
    });
    
    it('should create a record of each withdraw transaction and add to the array', () => {
      account.deposit(100);
      account.withdraw(50);
      expect(account.transactions).toContainEqual({"date": "21/06/2022", "credit": 100.00, "debit": "", "balance": 100.00}, {"credit": "", "debit": 50.00, "balance": 50.00});
    });
  });  
  
  describe('printStatement', () => {
    it('should return a string with transaction information for each transaction', () => {
      account.deposit(1000);
      account.deposit(2000);
      account.withdraw(500);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n21/06/2022 ||  || 500.00 || 2500.00\n21/06/2022 || 2000.00 ||  || 3000.00\n21/06/2022 || 1000.00 ||  || 1000.00");
    });
  });

  describe('.valueConverter', () => {
    it('should return a number with 2 digits after the decimal point', () => {
      expect(account.valueConverter(1)).toBe('1.00');
    });
  });

  describe('getDate', () => {
    it('should return teh current Date' , () => {
      expect(account.getDate()).toBe("21/06/2022");
    });
  });
});
 