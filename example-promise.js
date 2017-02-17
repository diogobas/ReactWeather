// function getTempCallback (location, callback) {
//   callback(undefined, 5);
//   callback('City not found');
// }
//
// getTempCallback ('Winnipeg', function (err, temp) {
//   if (err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function (){
//       resolve(6);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise ('Winnipeg').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise error', err);
// });

//Challenge Area
function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number'){
          resolve(a+b);
        }else{
          reject('a and b need to be numbers!');
        }
    });
}

addPromise(2, 2).then(function (sum) {
  console.log('The sum is: ', sum);
}, function (err){
  console.log('Promise error: ',err);
});

addPromise('a', 2).then(function (sum) {
  console.log('The sum is: ', sum);
}, function (err){
  console.log('Promise error',err);
});
