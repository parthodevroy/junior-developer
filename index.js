
let points=0;

let hearts=0;

let calls=100;

let callhistory=[];

// chart update


// reset all


const copybutton =document.querySelectorAll(".copy-btn").forEach(btn =>{
    btn.addEventListener("click", ()=>{
        alert('button clicked');
        points += 1;
        document.getElementById('copy-Count').textContent = points;
        
    })
})


 const heartbutton= document.querySelectorAll(".heart-btn").forEach(bttn =>{
    bttn.addEventListener("click", ()=>{
        alert('heart clicked');
        hearts += 1;
        document.getElementById('hearts-Count').textContent =hearts

        
    })
})

const callcounts=document.querySelectorAll(".calling-btn").forEach(button =>{
    button.addEventListener("click", ()=>{
        if (calls >= 20) {
            calls -= 20;
            alert('you cost 20 balance');

            // ✅ Call history save
            let history = {
                name: button.getAttribute("data-name"),   // button এ data-name দাও
                number: button.getAttribute("data-number"), // button এ data-number দাও
                time: new Date().toLocaleTimeString()
            };
            callHistory.push(history);

            // ✅ Show in UI
            let li = document.createElement("li");
            li.textContent = `${history.name} (${history.number}) - ${history.time}`;
            document.getElementById("callHistory").appendChild(li);

        } else {
            alert('unsuficisend');
        }

        document.getElementById('callas-Count').textContent = calls;
    });
});


document.getElementById("clearHistoryBtn").addEventListener("click", ()=>{
    callHistory = [];
    document.getElementById("callHistory").innerHTML = "";
});



