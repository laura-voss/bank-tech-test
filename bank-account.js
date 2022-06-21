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

  printStatement() {
    const output = [];
    const printOut = ["credit || debit || balance"];
    console.log("transaction", this.transactions)
    for(let i = 0; i < this.transactions.length; i ++){
      output.unshift(`\n${this.transactions[i].credit} || ${this.transactions[i].debit} || ${this.transactions[i].balance}`);
    }
    printOut.push(output);
    const str = printOut.flat(1).join('');
    return str;
  }
}
  
module.exports = BankAccount;
