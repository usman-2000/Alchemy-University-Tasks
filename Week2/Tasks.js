// Transaction Output

class TXO {
  constructor(owner, amount) {
    this.owner = owner;
    this.amount = amount;
    this.spent = false;
  }
  spend() {
    this.spent = true;
  }
}

module.exports = TXO;

// 2: Spent TXOs

class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }
  execute() {
    const spentUTXOs = this.inputUTXOs.some((x) => x.spent);
    if (spentUTXOs) {
      throw new Error("Cant send the transactions again");
    }

    const sumInput = this.inputUTXOs.reduce((partialSum, a) => {
      return partialSum + a.amount;
    }, 0);
    const sumOutput = this.outputUTXOs.reduce((partialSum, a) => {
      return partialSum + a.amount;
    }, 0);

    if (sumInput < sumOutput) {
      throw new Error("Input is not equal to output");
    }
  }
}

module.exports = Transaction;

// 3: Sufficient Amount

class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }
  execute() {
    const spentUTXOs = this.inputUTXOs.some((x) => x.spent);
    if (spentUTXOs) {
      throw new Error("Cant send the transactions again");
    }

    const sumInput = this.inputUTXOs.reduce((partialSum, a) => {
      return partialSum + a.amount;
    }, 0);
    const sumOutput = this.outputUTXOs.reduce((partialSum, a) => {
      return partialSum + a.amount;
    }, 0);

    if (sumInput < sumOutput) {
      throw new Error("Input is not equal to output");
    }
  }
}

module.exports = Transaction;
