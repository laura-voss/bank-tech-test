# Bank Tech Test

## WIP Status - on Commit 14
* current output as per below
* date currently hard-coded - WIP

```
date || credit || debit || balance
21/06/2022 ||  || 500.00 || 2500.00
21/06/2022 || 2000.00 ||  || 3000.00
21/06/2022 || 1000.00 ||  || 1000.00
```

## User Stories

```
As a customer,
so that I can save up money,
I would like to be able to deposit cash to my account.

As a customer,
so that I can spend my money,
I would like to be able to withdraw cash from my account.

As a customer,
so that I can see my balance and activity,
I would like to be able to get a bank statement of my balance and transactions.

```
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

# Task

Today, you'll practice doing a tech test.
For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.
You'll get to practice your OO design and TDD skills.
You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.


## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit