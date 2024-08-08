let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorebox=document.querySelector("#userscore");
const compscorebox=document.querySelector("#compscore");

const gencompchoice = () =>{
    let options =["rock", "paper", "scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw! Play again";
    msg.style.backgroundColor="#081b31";
};

const showwinner=(userwin,userchoiceid,compchoice)=>{
    if(userwin){
        userScore++;
        userscorebox.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You win! Your ${userchoiceid} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compscorebox.innerText=compScore;
    console.log("you lose!")
    msg.innerText=`You lost! ${compchoice} beats your ${userchoiceid}`;
    msg.style.backgroundColor="red";
    }
};

const playgame= (userchoiceid)=>{
    console.log("user choice = ",userchoiceid);
    const compchoice=gencompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoiceid === compchoice){
        drawgame();
    } else{
        let userwin=true;
        if(userchoiceid==="rock"){
            userwin = compchoice==="paper" ? false : true;
        }else if(userchoiceid==="paper"){
            userwin = compchoice==="scissor"? false: true;
        } else{
            userwin = compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoiceid,compchoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoiceid=choice.getAttribute("id")
        //console.log("choice was clicked",userchoiceid);
        playgame(userchoiceid);
    });
});