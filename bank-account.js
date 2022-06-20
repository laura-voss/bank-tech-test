class BankAccount {
  constructor() {
    this.balance = 0;
  }
  
  printStatement() {
    return this.balance;
  }

  deposit() {
    return 100
  }
}
  
module.exports = BankAccount;