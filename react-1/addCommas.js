function addCommas(num) {
    let numStr = num.toString();
  
    // Check for negative sign and if true, remove it
    let negative = false;
    if (numStr[0] === '-') {
      negative = true;
      numStr = numStr.slice(1); 
    }
  
    const parts = numStr.split('.');
  
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    const result = (negative ? '-' : '') + integerPart + (parts[1] ? '.' + parts[1] : '');
  
    return result;
  }
  
  module.exports = addCommas;
  