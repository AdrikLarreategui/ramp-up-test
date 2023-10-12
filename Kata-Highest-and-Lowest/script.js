function highAndLow(numbers) {
    const newArray = []
    const numeros = numbers.split(' ').map(function(cosas){
      newArray.push(cosas)
    });  
  return Math.max(...newArray) + ' ' + Math.min(...newArray)
}
