var yourscore =document.getElementById('yourscore')
var compscore =document.getElementById('compscore')
const rockbutton =document.getElementById('rock')
const paperbutton =document.getElementById('paper')
const scissorsbutton =document.getElementById('scissors')
const lastdiv =document.getElementById('lastdiv')
const result =document.getElementById('result')
const playagain =document.getElementById('playagain')
var ourhand =document.getElementById('ourhand')
var comphand =document.getElementById('comphand')

const img=[
    "paper-hand.png",
    "rock-hand.png",
    "scissors-hand.png" 
]

var userscore=0;
var comscore=0;
let status=10;
 

var rammimg=0;
var comprandom=0;

function randomimg(){
    // var ourrandom = Math.floor(Math.random()*3);
    comprandom = Math.floor(Math.random()*3);
   
    var ramimg = img[rammimg]
    
    ourhand.innerHTML = `<img src="./assets/${ramimg}"
    id="img${rammimg}">`
    

    var comimg = img[comprandom]
    comphand.innerHTML = `<img src="./assets/${comimg}"
    id="img${comprandom}">`

    if(rammimg==2&&comprandom==0){
        userscore++;
        yourscore.innerHTML=userscore;
    }
    else if(rammimg==2&&comprandom==1){
        comscore++;
        compscore.innerHTML=comscore;
    }
    else if(rammimg==1&&comprandom==0){
        comscore++;
        compscore.innerHTML=comscore;
    }
    else if(rammimg==1&&comprandom==2){
        userscore++;
        yourscore.innerHTML=userscore;
    }
    else if(rammimg==0&&comprandom==1){
        userscore++;
        yourscore.innerHTML=userscore;
    }
    else if(rammimg==0&&comprandom==2){
        comscore++;
        compscore.innerHTML=comscore;
    }

if(userscore==10||comscore==10){
    document.getElementById('options').style.display = 'none'
    lastdiv.style.display="block";
    if(userscore>comscore){
        result.innerHTML="You Won The Game"
    }
    else if(userscore<comscore){
        result.innerHTML="You Lost This Game"
    }
if(userscore==10||comscore==10){
   
}
   
}

if(userscore==10||comscore==10){
    status++}



}

console.log(yourscore.innerText)
rockbutton.addEventListener("click",()=>{
    rammimg=1;
    randomimg()
    
})

paperbutton.addEventListener("click",()=>{
    rammimg=0;
    randomimg()
})

scissorsbutton.addEventListener("click",()=>{
    rammimg=2;
    randomimg()
})


playagain.addEventListener('click',()=>{
    location.href='index.html'
})
