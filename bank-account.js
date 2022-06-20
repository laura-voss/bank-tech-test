class BankAccount {
  constructor() {
    this.balance = 0;
  }
  
  printStatement() {
    return this.balance;
  }
}
  
module.exports = BankAccount;