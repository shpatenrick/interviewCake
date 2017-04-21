function TempTracker = () => {
  this.numberOfTemps = 0;
  this.max = null;
  this.min = null;
  this.totalSum = 0;
  this.mean = null;
  this.temps = [];
  for (var i = 0; i < 111; i++) {
    this.temps[i] = 0;
  }
  this.tempsMax = 0;
  this.mode = null;
};

TempTracker.prototype.insert = (temp) => {
  // records new temp
  this.numberOfTemps++;
  this.totalSum += temp;
  if (temp <= this.min || this.min === null) {
    this.min = temp;
  }
  else if (temp >= this.max || this.max === null) {
    this.max = temp;
  }
  // update mean;
  this.mean = this.totalSum/this.numberOfTemps;
  // update mode;
  this.temps[temp]++;
  if (this.temps[temp] > this.tempsMax) {
    this.tempsMax = this.temps[temp];
    this.mode = temp;
  }
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