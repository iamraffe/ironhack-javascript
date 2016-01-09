// function handle_sleep (){
//   setTimeout(function(){console.log("It's been 10 seconds")}, 10000);
// }

// sleep(10, handle_sleep);

function sleep(time, callback) {
  setTimeout(callback, time * 1000)
}

sleep(5, function(){
  console.log("It's been 5 seconds");
})
