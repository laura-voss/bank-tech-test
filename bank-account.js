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
    this.transactions.push({date: "21/06/2022", credit: amount, debit: "", balance: subtotal});
  }
  
  withdraw(amount) {
    const subtotal = this.balance -= amount;
    this.transactions.push({date: "21/06/2022", credit: "", debit: amount, balance: subtotal});
  }

  printStatement() {
    const output = [];
    const printOut = ["date || credit || debit || balance"];
    for(let i = 0; i < this.transactions.length; i ++){
      output.unshift(`\n21/06/2022 || ${this.valueConverter(this.transactions[i].credit)} || ${this.valueConverter(this.transactions[i].debit)} || ${this.valueConverter(this.transactions[i].balance)}`);
    }
    printOut.push(output);
    const str = printOut.flat(1).join('');
    console.log(str)
    return str;
  }

  valueConverter(amount) {
    if (amount != 0) {
      const num = parseFloat(amount).toFixed(2);
      return num;
    } else {
      return "";
    }
  }

  getDate() {
    return "22/06/2022";
  }
}
  
module.exports = BankAccount;
