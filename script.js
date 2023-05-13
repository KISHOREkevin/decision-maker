
let addButton = document.getElementById("add-button");
let decisionList = document.querySelector("ul");
let decisionButton = document.getElementById("decision-button");
let decisionResult = document.getElementById("decision-result");
let clearButton = document.getElementById("clear-button");
let decisionInput = document.getElementById("decision-input");
let listOfDecisions = [];
addButton.addEventListener("click",(e)=>{
    
    let decisionInput = document.getElementById("decision-input").value;
    if(decisionInput!==""){
        listOfDecisions.push(decisionInput);
        decisionList.insertAdjacentHTML("beforeend","<li>"+decisionInput+"</li>");
    }
    
 
})
decisionButton.addEventListener("click",()=>{
    if(listOfDecisions.length===0){
        decisionResult.innerHTML="Add choices !!!"
    }else{ 

        let randomValue = Math.floor(Math.random()*listOfDecisions.length);
        decisionResult.innerHTML = "Decision : "+listOfDecisions[randomValue];
       


    }
   
})
clearButton.addEventListener("click",()=>{
    listOfDecisions.splice(0,listOfDecisions.length);
    decisionInput.value="";
    decisionList.innerHTML=null;
    decisionResult.innerHTML=null;

})
