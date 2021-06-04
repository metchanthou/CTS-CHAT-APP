

// ________________________________Get message from file messageData.json_______________________//
// ---------------------------------------------???---------------------------------------------//
function requestMessage(res) {
    let data = res.data;
    console.log(data)



    // -----get div receive -----
    const resiveChat = document.querySelector(".resive");
    if (resiveChat !== null) {
        resiveChat.remove();
    };

    // ------Create new div & class= receive
    const newResive = document.createElement("div");
    newResive.classList.add("resive");
    
    for (let sms of data) {
        const resultChat = document.querySelector(".result");
        const p = document.createElement("p");
        const time = document.createElement("span");
        p.setAttribute("id", "p-mess");
        time.setAttribute("id", "time");
        p.textContent = sms.name + ": " + sms.message;
        p.style.background = sms.color;
        p.style.color = "white"
        time.textContent = sms.time;
        newResive.appendChild(p);
        newResive.appendChild(time);
        resultChat.appendChild(newResive);
        console.log(sms.name)
    };
    
};

// _____________________Catch user from locallstorage add to file messageData.json____________________//
// -----------------------------------------------???-------------------------------------------------//
function sendMessage(event) {
    event.preventDefault();

    let getSound = document.querySelector("#myAudio");
    getSound.play();
    let user = localStorage.getItem("username");
    let color = localStorage.getItem("color");

    // -----Set time-----
    let hour = new Date();
    let setTime = hour.toLocaleTimeString();
    let addMessage = {
        name: user,
        message: inputMessage.value,
        color: color,
        time: setTime
    }
    const URL = "http://localhost:5000/messages";
    axios
        .post(URL, addMessage)
        .then(res =>{
            requestMessage(res);
        });
};

// ______________________List Username in chat_________________//
// --------------------------???---------------------------//
function listallname(res) {
    let users = res.data;
    const getul = document.querySelector("ul");

    for (let user of users) {
        const li = document.createElement("li");
        const textname = document.createElement('div');
        const inform = document.createElement('div');
        const br = document.createElement("br")

        textname.classList.add("textname");
        textname.style.background = user.color;
        inform.classList.add("inform");

        const label = document.createElement("span");
        const name = document.createElement("span");

        label.setAttribute("id", "label");
        name.setAttribute("id", "name");

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

// _____________________Get Data file login from Server______________//
// ---------------------------???-----------------------------------//
function show(res, username) {
    let image = res.data;
    console.log(image)
    for (let pf of image) {
        if (pf.username === username) {
            let im = document.createElement('img');
            im.setAttribute("id", "yourpic")
            im.src = pf.profile;
            images.appendChild(im);
            getUsername.textContent = pf.username;
        };
    };
};

// ______________________Catch user in locallstorage__________________//
// ----------------------------???-----------------------------------//
function imagesData() {
    let user = localStorage.getItem("username");
    axios
        .get(URL2)
        .then(res => show(res, user));
};


// _______________________Emoji * sticker________________//
//-----------------------------???----------------------//
let emojiButton = document.getElementById("liststicker");
const picker = new EmojiButton();
picker.on("emoji", emoji => {
    document.querySelector("#messages").value += emoji;
});
emojiButton.addEventListener("click", () => {
        picker.togglePicker(emojiButton);
    });


// _______________________Search * User login______________//
// ----------------------------???-------------------------//
const btnSearch = document.querySelector("#search");
btnSearch.addEventListener("keyup", function(event){
    let text = search.value.toLowerCase();
    let items = document.querySelectorAll("li")
    for (let name of items) {
      let account =name.children[1].textContent.toLocaleLowerCase();
      if (account.indexOf(text)=== -1){
          name.style.display = "none";
      }else {
          name.style.display = "block";
          name.style.display = "flex";
      };
    };
});

function toChat() {
    window.location.href = "http://localhost:5000/chat.html";
};

const URL1 = "http://localhost:5000/messages";
axios
    .get(URL1)
    .then(requestMessage);

const URL2 = "http://localhost:5000/login";
axios
    .get(URL2)
    .then(listallname);


const inputMessage = document.querySelector("#messages");
const btnSend = document.querySelector("#enter");
const getUsername = document.querySelector("#personal");
const btnStyle = document.querySelector(".send");
const images = document.querySelector(".img");


btnSend.addEventListener("click", sendMessage);
imagesData();


