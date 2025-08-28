



// reset all

let points=0;

let hearts=0;

let calls=100;

let transection=[]




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
        li.textContent = `${t.name} 
         - ${t.number} -
          (${t.time})`;
        list.appendChild(li);
    });
}


const copybutton =document.querySelectorAll(".copy-btn").forEach(btn =>{
    btn.addEventListener("click", function(){
        alert('button clicked');
        points += 1;
        document.getElementById('copy-Count').textContent = points;
        
    })
})


 const heartbutton= document.querySelectorAll(".heart-btn").forEach(bttn =>{
    bttn.addEventListener("click", function(){
        alert('heart clicked');
        hearts += 1;
        document.getElementById('hearts-Count').textContent =hearts

        
    })
})

const callcounts=document.querySelectorAll(".calling-btn").forEach(button =>{
    button.addEventListener("click", function(){
        if (calls >= 20) {
            calls -= 20;
            alert('you cost 20 balance');

        } else {
            alert('unsuficisend');
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



