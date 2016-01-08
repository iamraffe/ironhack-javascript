var numbers = '80:70:90:100';

function averageColon(data){
  return data.split(':').reduce(function(memo, b){
    return parseInt(memo) + parseInt(b) / data.split(':').length
  }, 0);
  // console.log(array_of_numbers);
}

console.log(averageColon(numbers));
