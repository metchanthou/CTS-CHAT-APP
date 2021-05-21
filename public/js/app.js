


function closePart1(event) {
    event.preventDefault();

    getpart1.style.display = "none";
    getpart2.style.display = "block";
}

function notYet (event) {
    event.preventDefault();

    getpart1.style.display = "block";
    getpart1.style.display = "flex";
    getpart2.style.display = "none";
    
}

function signbutton (event) {
    const getpart3 = document.querySelector(".part3");
    getpart3.style.display = "block";
    getpart2.style.display = "none";

}

function requestMessage (res) {
    let data = res.data;
    console.log(data)
    const resiveChat = document.querySelector(".resive");

    const newResive = document.createElement("div")
    newResive.classList.add("resive");

    for (let sms of data) {
        const p = document.createElement("p");
        p.textContent = sms.name+ ": " + sms.message;
        resiveChat.appendChild(p);
    }
}

function newMessage(event) {
    const inputMessage = document.querySelector("#messages").value;
    let names = "Your name"
    let number = 0

    let addMessage = {
        id: number,
        name: names,
        message: inputMessage,
    }

    const URL = "http://localhost:5000/messages";
    axios
        .post(URL, addMessage)
        .then(requestMessage);

}

const URL = "http://localhost:5000/messages";
axios
    .get(URL)
    .then(requestMessage);


const getpart1 = document.querySelector(".part1");
const getpart2 = document.querySelector(".part2");
const getusername = document.querySelector("#username");

const btnCreate = document.querySelector("#create");
const btnNotYet = document.querySelector("#not");
const btnSend = document.querySelector("#enter");
const btnSign = document.querySelector("#sign-up");
const btnNext = document.querySelector("#next");


btnCreate.addEventListener("click", closePart1);
btnNotYet.addEventListener("click", notYet);
btnSend.addEventListener("click", newMessage);
btnSign.addEventListener("click", signbutton);
btnNext.addEventListener("click", nextButton);
