const repeatString = (word, number) => {
    if (number < 0) return 'ERROR'; 
  
    let result = ''; 
    for (let i = 0; i < number; i++) {
      result += word; 
    }
    return result;
  };
  
  module.exports = repeatString;
  

// Do not edit below this line
module.exports = repeatString;
