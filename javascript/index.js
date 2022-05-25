// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync 

/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks

getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
       }, (error) => console.log(error));
     }, (error) => console.log(error));  
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
// ...
obtainInstruction('steak',0) // no logro hacer que haga un loop por las instrucciones
  .then( (step0) => document.querySelector("#steak").innerHTML += `<li>${step0}</li>`) //  me suma el label Steak cada vez
  .then( (step1) => document.querySelector("#steak").innerHTML += `<li>${step1}</li>`)
  .then( (step2) => document.querySelector("#steak").innerHTML += `<li>${step2}</li>`)
  .then( (step3) => document.querySelector("#steak").innerHTML += `<li>${step3}</li>`)
  .then( (step4) => document.querySelector("#steak").innerHTML += `<li>${step4}</li>`)
  .then( (step5) => document.querySelector("#steak").innerHTML += `<li>${step5}</li>`)
  .then( (step6) => document.querySelector("#steak").innerHTML += `<li>${step6}</li>`)
 
  // .catch()
/*
obtainInstruction(0)
  .then(() => obtainInstruction(1) )
  .then(() => obtainInstruction(2) )
  .then(() => obtainInstruction(3) )
  .then(() => obtainInstruction(4) )
  .catch((error) => console.log(error));

*/
// Iteration 3 using async/await

async function makeBroccoli(){
  try{
  const response1 = await obtainInstruction("broccoli",0)
  const response2 = await obtainInstruction("broccoli",1) 
  const response3 = await obtainInstruction("broccoli",2) 
  const response4 = await obtainInstruction("broccoli",3) 
  const response5 = await obtainInstruction("broccoli",4) 
  //console.log("broccoli is ready!")
}catch (err) {
  // Handle error or a rejected Promise
  console.log("Something went wrong!", error);
}
}

// Bonus 2 - Promise all
