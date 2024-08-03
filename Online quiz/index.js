let data = [
    {
        Q: "Q : Which of the following is a markup language?",
        a:  "HTML",
        b:  "CSS",
        c:  "JavaScript",
        d:  "PHP",
        ans: "ans1"
    },
    {
        Q: "Q : JS is used for?",
        a:  "Frontend",
        b:  "Animation",
        c:  "Backend",
        d:  "Dynamically update content",
        ans: "ans4"
    },
    {
        Q: "Q : Which of the following is not a JavaScript data type ?",
        a:  "Undefined",
        b:  "Number",
        c:  "Float",
        d:  "String",
        ans: "ans3"
    },
    {
        Q: "Q : Which of the following is a JavaScript framework?",
        a:  "Django",
        b:  "Flask",
        c:  "Angular",
        d:  "Larvel",
        ans: "ans3"
    },
    {
        Q: "Q : Which HTML attribute is used to define inline styles?",
        a:  "style",
        b:  "class",
        c:  "font",
        d:  "styles",
        ans: "ans1"
    },
    {
        Q: "Q : Which CSS property is used to change the text color?",
        a:  "font-color",
        b:  "text-color",
        c:  "color",
        d:  "text-style",
        ans: "ans3"
    },
    {
        Q: "Q : Which HTTP method is used to request data from a specified resource?",
        a:  "POST",
        b:  "GET",
        c:  "PUT",
        d:  "DELETE",
        ans: "ans2"
    },
    {
        Q: "Q : Which property is used to change the background color in CSS?",
        a:  "bgcolor",
        b:  "color",
        c:  "background-color",
        d:  "bg-color",
        ans: "ans3"
    },
    {
        Q: "Q : Which protocol is used by web browsers to communicate with web servers?",
        a:  "FTTP",
        b:  "SMTP",
        c:  "SSH",
        d:  "HTTP",
        ans: "ans4"
    },
    {
        Q: "Q : In JavaScript, which symbol is used for comments?",
        a:  "//",
        b:  "**",
        c:  "#",
        d:  "<>",
        ans: "ans1"
    },
]

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let answers = document.querySelectorAll(".options");
let num = 0;
let score = 0;
let myscore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");
    

question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;

function checkAns(){
    let ans;
    answers.forEach((curElement)=>{
        if(curElement.checked){
            ans = curElement.id;
            console.log(ans);
            
        }
   })
   return ans;
}

function disSelect(){
    answers.forEach((curElement)=>{
        curElement.checked=false;
       })

}

function next(){
   
    let checkedAns = checkAns();
    if(checkedAns == data[num].ans){
        score++;
    }
    num++;
    disSelect();

    if(num < data.length){
        question.innerHTML=data[num].Q;
        option1.innerHTML=data[num].a;
        option2.innerHTML=data[num].b;
        option3.innerHTML=data[num].c;
        option4.innerHTML=data[num].d;
       }else{
              myscore.innerHTML= `You Scored ${score}/${data.length} <br/><br/>
              <button onclick="location.reload()">Play Again</button>`;

              nextBtn.style.display="none";
              document.querySelector(".btn").style.backgroundColor="lightBlue";
             
            }
}