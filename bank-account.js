class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  
  checkBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.transactions.push({amount: amount, type: "credit"});
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}
  
module.exports = BankAccount;
