var sample_array = [2, -5, 10, 5, 4, -10, 0];

function process(data){
	var positions = [];
  data.forEach(function(value, i){
    data.forEach(function(other_value, j){
      if((value + other_value) === 0 && i <= j){
        positions.push([i,j]);
      }
    });
  });

  console.log("You can sum these pairs of numers and ger zero: ")
	console.log(positions);
}

process(sample_array);
