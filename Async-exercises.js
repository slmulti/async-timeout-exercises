/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
    // testMe(); *************** partnah will log first because sayHowdy isnt called until the setTimeout has finished.***********************
  // what order should these log out? Howdy or Partnah first?
  
  
  /* CHALLENGE 2 */
  
  function delayedGreet() {
    // ADD CODE HERE
    setTimeout(() => console.log('welcome'),3000)
  }
  // Uncomment the following line to check your work!
  // delayedGreet();
   // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  
  function helloGoodbye() {
    // ADD CODE HERE
    // should log: hello // should also log (after 2 seconds): good bye
  console.log('hello')
  setTimeout(() => console.log('good bye'), 2000)
  }
  // Uncomment the following line to check your work!
  helloGoodbye();
  
  
  /* CHALLENGE 4 */
  
  function brokenRecord() {
    // ADD CODE HERE
    // should log (every second): hi again

  }
  // Uncomment the following line to check your work!
 // brokenRecord(); 

  
  /* CHALLENGE 5 */
  
  function limitedRepeat() {
    // ADD CODE HERE
    // Add interval and store id returned by setTimeout that will be passed into clearInterval
    
    // Add a timer that activates on the 5th second to stop the interval set above
    setTimeout(() => {
      clearInterval(fiveSecInterval)
      console.log('Adios!')
    }, 5000)
  }
  // Uncomment the following line to check your work!
//   limitedRepeat();
   // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
  
  function everyXsecsForYsecs() {
    // ADD CODE HERE
  }
  // Uncomment the following lines to check your work!
  // function theEnd() {
  //   console.log('This is the end!');
  // }
  // everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
  
  /* CHALLENGE 7 */
  
  function delayCounter(target, wait) {
  
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const countLogger = delayCounter(3, 1000)
  // countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3
  
  /* CHALLENGE 8 */
  
  function promised (val) {
    // ADD CODE HERE
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const createPromise = promised('wait for it...');
  // createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds
  
  /* CHALLENGE 9 */
  
  class SecondClock {
    constructor(cb) {
      // ADD CODE HERE
    }
    // ADD METHODS HERE
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const clock = new SecondClock((val) => { console.log(val) });
  // console.log("Started Clock.");
  // clock.start();
  // setTimeout(() => {
  //     clock.reset();
  //     console.log("Stopped Clock after 6 seconds.");
  // }, 6000);
  
  /* CHALLENGE 10 */
  
  function debounce(callback, interval) {
    // ADD CODE HERE
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // function giveHi() { return 'hi'; }
  // const giveHiSometimes = debounce(giveHi, 3000);
  // console.log(giveHiSometimes()); // -> 'hi'
  // setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'