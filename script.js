function factor(num) {
  if (num < 0) 
        return 'not applicable';
  else if (num == 0 || 1) 
      return 1;
  else {
      return (num * factor(num - 1));
  }
}
console.log(factor(5));