class BankAccount {
  constructor() {
    this.balance = 0;
  }
  
  printStatement() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}
  
module.exports = BankAccount;