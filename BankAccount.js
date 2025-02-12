const bankAccount = {
    owner: "Alice",
    balance: 500,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}`);
            return true;
        } else {
            console.log(`Withdrawal of ${amount} unsuccessful: Insufficient funds`);
            return false;
        }
    },
    printBalance: function() {
        console.log(`Final balance: ${this.balance}`);
    }
};


bankAccount.deposit(200);
bankAccount.withdraw(1000);
bankAccount.printBalance();
 