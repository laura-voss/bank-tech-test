class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  
  checkBalance() {
    return this.balance;
  }

  deposit(amount) {
    const subtotal = this.balance += amount;
    this.transactions.push({credit: amount, debit: "", balance: subtotal});
  }
  
  withdraw(amount) {
    const subtotal = this.balance -= amount;
    this.transactions.push({credit: "", debit: amount, balance: subtotal});
  }
}
  
module.exports = BankAccount;
