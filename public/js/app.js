
function requestMessage (res) {
    let data = res.data;
    let hour = new Date();
    let setTime = hour.toLocaleTimeString();

    const resiveChat = document.querySelector(".resive");
    if (resiveChat !==null) {
        resiveChat.remove();
    };
    const newResive = document.createElement("div");
    newResive.classList.add("resive");
    for (let sms of data) {

        const resultChat = document.querySelector(".result");
        const p = document.createElement("p");
        const time = document.createElement("span");

        p.setAttribute("id", "p-mess");
        time.setAttribute("id", "time");
        p.textContent = sms.name+ ": " + sms.message;
        p.style.color = "white"
        p.style.background = sms.color;
        time.textContent = setTime;
        newResive.appendChild(p);
        newResive.appendChild(time);
        resultChat.appendChild(newResive);    
    };
};

function toChat () {
    window.location.href = "https://cts-chat-app.herokuapp.com/chat.html";
};

function newMessage(event) {
    event.preventDefault();

    let user = localStorage.getItem("username");
    let color = localStorage.getItem("color");
    let addMessage = {
        name: user,
        message: inputMessage.value,
        color:color
    }

    const URL = "https://cts-chat-app.herokuapp.com/messages";
        axios
            .post(URL, addMessage)
            .then(requestMessage);
};

function listallname (res) {
    let users = res.data;
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
    

        label.setAttribute("id","label");
        name.setAttribute("id","name");
        
        label.textContent = user.username[0].toUpperCase();
        name.textContent = user.username;
        
        textname.appendChild(label);
        inform.appendChild(name);
        inform.appendChild(br);
        
        li.appendChild(textname);
        li.appendChild(inform);

        getul.appendChild(li);

    };
    console.log(getul)
}; 

function searchName () {
    let account = searchName.value.toLowerCase();
    let  listAccount =document.querySelectorAll("li");
    for (let name of listAccount){
        let accounName = name.after.fist.textContent.toLowerCase();
        if (accounName.indexOf(account)===-1){
            name.style.display ="none";
        }else{
            name.style.display ="";
        }
    }
    console.log(account)
}

function liststicker (res) {
    let stickerData = res.data;
    const sticker = document.querySelector(".sticker");
    
    for (let emoji of stickerData){
            console.log(emoji.icon);
            const p = document.createElement("p");
            p.setAttribute("id", "emoji");
            p.textContent = emoji.icon;
            sticker.appendChild(p)
    }
}


//get profile image from user login
function show(res ,username){
    let image = res.data;
    console.log(image)
    for(let pf of image){
        if(pf.username===username){
            let im=document.createElement('img');
            im.setAttribute("id", "yourpic")
            im.src = pf.profile;
            images.appendChild(im);
            getUsername.textContent = pf.username;
        }
        console.log(pf)

    }
}

function pfImage(){
    let user = localStorage.getItem("username");
    axios
    .get("https://cts-chat-app.herokuapp.com/login")
    .then(res => show(res, user));
};

const URL1 = "https://cts-chat-app.herokuapp.com/messages";
    axios
        .get(URL1)
        .then(requestMessage);
    
const URL2 =  "https://cts-chat-app.herokuapp.com/login";
    axios
    .get(URL2)
    .then(listallname);


const URl4 = "https://cts-chat-app.herokuapp.com/emoji"
    axios
        .get(URl4)
        .then(liststicker);


const inputMessage = document.querySelector("#messages");
const btnSitting = document.querySelector("#sitting");
const btnSend = document.querySelector("#enter");
const btnSearch =document.querySelector("#search");
const getUsername = document.querySelector("#personal");

const images = document.querySelector('.img');
btnSearch.addEventListener("keyup", searchName);
btnSend.addEventListener("click", newMessage);

pfImage();


