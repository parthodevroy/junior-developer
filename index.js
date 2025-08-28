



// reset all

let points=0;

let hearts=0;

let calls=100;

let transection=[]

const callButtons = document.querySelectorAll(".calling-btn");

callButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    const serviceName = this.getAttribute("data-name");
    const serviceNumber = this.getAttribute("data-number");

    alert(`📞 Calling ${serviceName} (${serviceNumber})`);
  });
});





// reset all

document.getElementById("clearHistoryBtn").addEventListener("click", function(){
    transection = [];              
    callsTransactions();          
});


// transjection
function callsTransactions() {
    const list = document.getElementById("callHistory");
    list.innerHTML = ""; 

    transection.forEach(t=> {
        const li = document.createElement("li");
        li.className = "  border-2 border-white bg-gray-200";
        li.textContent = `${t.name} - ${t.number} -(${t.time})`;
        list.appendChild(li);
    });
}

// copy butoon 
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    const number = this.getAttribute("data-number");
    
    navigator.clipboard.writeText(number).then(() => {
      alert(`📋 Copied: ${number}`); 
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
    points += 1;
    document.getElementById('copy-Count').textContent = points;
  });
});


// heart button
 const heartbutton= document.querySelectorAll(".heart-btn").forEach(bttn =>{
    bttn.addEventListener("click", function(){
        hearts += 1;
        document.getElementById('hearts-Count').textContent =hearts

        
    })
})
// calls button
const callcounts=document.querySelectorAll(".calling-btn").forEach(button =>{
    button.addEventListener("click", function(){
        if (calls >= 20) {
            calls -= 20;

        } else {
            alert('Insuficiant Balance');
            return;
        }
    

        document.getElementById('callas-Count').textContent = calls;


        const history={
            name:button.dataset.name,
            number:button.dataset.number,
            time:new Date().toLocaleTimeString(),
        }

        transection.push(history)

        callsTransactions();

    


       
    });
        
});



