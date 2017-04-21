function TempTracker = () => {
  this.temps = [];
  this.len = 0;
  this.max = null;
  this.min = null;
  this.mean = null;
  this.mode = null;
};

TempTracker.prototype.insert = (temp) => {
  // records new temp
  if (temp <= min) {
    this.temps.unshift(temp);
    this.min = temp;
  }
  else if (temp >= max) {
    this.temps.push(temp);
    this.max = temp;
  }
  else {
    while (i < this.temps.length) {
      if (temp <= this.temps[i + 1] && temp >= this.temps[i]) {
        this.temps.splice(i, 0, temp);
        i = Infinity;

      }
    }
  }
  // update mean;
  this.mean = ((this.mean * (this.temps.length - 1)) + temp) / (this.temps.length);
};
TempTracker.prototype.getMax = () => {
  // return highest temp so far
  return this.max;
};
TempTracker.prototype.getMin = () => {
  // return min;
  return this.min;
};
TempTracker.prototype.getMean = () => {
  // return mean
  return this.mean;
};
TempTracker.prototype.getMode = () => {
  // return mode
  return this.mode;
}