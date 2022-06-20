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

  withdrawal(amount) {
    this.balance -= amount;
  }
}
  
module.exports = BankAccount;