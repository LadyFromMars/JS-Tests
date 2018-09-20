const Calculate = {
  sum(inputArray) {

    if(inputArray.length === 0) {
      return 0;
    } else {
    return inputArray.reduce((sum, value) => {
      return sum + value;
    })};

    if(inputArray.length === 0) {
      return 0;
    }
  }
}

module.exports = Calculate;
