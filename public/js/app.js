

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
    event.preventDefault();

    const getfirst = document.querySelector("#first-name").value;
    const getlast = document.querySelector("#last-name").value;
    const getemail = document.querySelector("#email").value;
    const getnewpass = document.querySelector("#newpass").value;
    const getpersonal = document.querySelector("#personal");
    getpersonal.textContent = getfirst;
    

    if (getfirst==="" || getlast==="" || getemail==="" || getnewpass===""){
            confirm("Not yet to complet!")
            return false
    }
    getpart3.style.display = "block";
    getpart2.style.display = "none";
};

function requestMessage (res) {

    let data = res.data;

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

function checkUser(res, username, password) {
    let usernameData = res.data;

    for (let name of usernameData) {
        if (name.username === username && name.password ===password) {
            getpart1.style.display = "none";
            getpart3.style.display = "block";
            
        }else {
            getText.textContent = "Username Not Found! Try again.";
            getText.style.color = "red";
        };
    };
};


function nextButton (event) {
    event.preventDefault();
    
    const getpersonal = document.querySelector("#personal");
    getpersonal.textContent = getusername.value;
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#yourpassword").value;

    const URL = "https://cts-chat-app.herokuapp.com/login"
    axios
        .get(URL)
        .then(res =>checkUser (res, username, password));
    
};

function newMessage(event) {
    event.preventDefault();
    let number = 7; 
    let addMessage = {
        id: number,
        name: getusername.value,
        message: inputMessage.value,
    }

    const URL = "https://cts-chat-app.herokuapp.com/messages";
        axios
            .post(URL, addMessage)
            .then(requestMessage);
};

function listallname (res) {
    let users = res.data;
    console.log(users)
    const getul = document.querySelector("ul");

    for (let user of users){
        const li = document.createElement("li");
        const textname = document.createElement('div');
        const inform= document.createElement('div');
        const br = document.createElement("br")

        textname.classList.add("textname");
        textname.style.background = user.color;
        inform.classList.add("inform");

        const label=document.createElement("span");
        const name=document.createElement("span");
        const mess=document.createElement("span");

        label.setAttribute("id","label");
        name.setAttribute("id","name");
        mess.setAttribute("id", "mess");

        label.textContent = user.name[0].toUpperCase();
        name.textContent = user.name;
        mess.textContent = user.message;

        textname.appendChild(label);
        inform.appendChild(name);
        inform.appendChild(br);
        inform.appendChild(mess);

        li.appendChild(textname);
        li.appendChild(inform);

        getul.appendChild(li);
    };
    console.log(getul)
};

function searchname () {
    let nameSkye = searchname.value.toLowerCase();
    let  allSkyeName  =document.querySelectorAll("li");

    for (let name of allSkyeName){
        let lisname = name.firstChild.textContent.toLowerCase();
        if (lisname.indexOf(nameSkye)===-1){
            name.style.display ="none";
        }else{
            name.style.display ="";
        }
    }
    console.log(nameSkye)
};



const URL = "https://cts-chat-app.herokuapp.com/messages";
    axios
        .get(URL)
        .then(requestMessage);
    
const url =  "https://cts-chat-app.herokuapp.com/messages";
    axios
    .get(url)
    .then(listallname);




const getpart1 = document.querySelector(".part1");
const getpart2 = document.querySelector(".part2");
const getpart3 = document.querySelector(".part3");
const inputMessage = document.querySelector("#messages");
const getText = document.querySelector("#text");
const getusername = document.querySelector("#username");
const getpassword = document.querySelector("#yourpassword");

const btnCreate = document.querySelector("#create");
const btnNotYet = document.querySelector("#not");
const btnSend = document.querySelector("#enter");
const btnSign = document.querySelector("#sign-up");
const btnNext = document.querySelector("#next");
const searchBook =document.querySelector("#search");


btnCreate.addEventListener("click", closePart1);
btnNotYet.addEventListener("click", notYet);
btnSend.addEventListener("click", newMessage);
btnSign.addEventListener("click", signButton);
btnNext.addEventListener("click", nextButton);
searchBook.addEventListener('keyup', searchname);


