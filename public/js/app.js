

function closePart1(event) {
    event.preventDefault();

    getpart1.style.display = "none";
    getpart2.style.display = "block";
};

function notYet (event) {
    event.preventDefault();

    getpart1.style.display = "block";
    getpart1.style.display = "flex";
    getpart2.style.display = "none";
    
};

function signButton (event) {
    getpart3.style.display = "block";
    getpart2.style.display = "none";
};

function requestMessage (res) {

    let data = res.data;
    console.log(data)
    const resiveChat = document.querySelector(".resive");
    
    if (resiveChat !==null) {
        resiveChat.remove();
    };

    const newResive = document.createElement("div");
    newResive.classList.add("resive");

    for (let sms of data) {
        const resultChat = document.querySelector(".result");
        const p = document.createElement("p");
        p.textContent = sms.name+ ": " + sms.message;
        newResive.appendChild(p);
        resultChat.appendChild(newResive);
        
        
    }
};

// function nextButton (event) {
//     event.preventDefault();

//     let querry = GET_LOGIN_REQUEST + '?username=' + getusername.value + '&password=' + getpassword.value;
//     axios
//         .get(querry).then((res) => {
//             let isCheck= res.data;
//             if (isCheck){
//                 getpart1.style.display = "none";
//                 getpart3.style.display = "block";
//             }
//             getText.textContent ="Your name cannot found!";
//             getText.style.color ="red";
//         }) 
// };

function newMessage(event) {
    const inputMessage = document.querySelector("#messages");
    let number = 7;

    let addMessage = {
        id: number,
        name: getusername.value,
        message: inputMessage.value,
    }

    const URL = "http://localhost:5000/messages";
    axios
        .post(URL, addMessage)
        .then(requestMessage);
};

const URL = "http://localhost:5000/messages";
axios
    .get(URL)
    .then(requestMessage);

const IP = "192.168.43.154";
const PORT = 5000;
const GET_LOGIN_REQUEST = "http://" + IP + ":" + PORT + "/login";

const getpart1 = document.querySelector(".part1");
const getpart2 = document.querySelector(".part2");
const getpart3 = document.querySelector(".part3");
const getText = document.querySelector("#text");
const getusername = document.querySelector("#username");
const getpassword = document.querySelector("#yourpassword");

const btnCreate = document.querySelector("#create");
const btnNotYet = document.querySelector("#not");
const btnSend = document.querySelector("#enter");
const btnSign = document.querySelector("#sign-up");
// const btnNext = document.querySelector("#next");

btnCreate.addEventListener("click", closePart1);
btnNotYet.addEventListener("click", notYet);
btnSend.addEventListener("click", newMessage);
btnSign.addEventListener("click", signButton);
// btnNext.addEventListener("click", nextButton);
