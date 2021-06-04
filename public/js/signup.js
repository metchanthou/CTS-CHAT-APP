
function signButton (event) {
    event.preventDefault();

    const getfirst = document.querySelector("#first-name").value;
    const getlast = document.querySelector("#last-name").value;
    const getemail = document.querySelector("#email").value;
    const getnewpass = document.querySelector("#newpass").value;
    const getColor = document.querySelector("#colors").value;
    let images = "img/new_account.png"

    console.log(getColor)
    
    // ____________________Condition when you create new account   
    if (getfirst==="" || getlast==="" || getemail==="" || getnewpass==="" || getColor ===""){
            confirm("Not yet to complet!")
            return false
    }
    let newUsername ={
        username: getfirst,
        password: getnewpass,
        color: getColor,
        profile: images,
    };
    let url = "https://cts-chat-app.herokuapp.com/login";
        axios
            .post(url, newUsername)
            .then(notYet)
    toChat();
    localStorage.setItem("username", getfirst);
    localStorage.setItem("color", getColor);
    localStorage.setItem("img", images)
};
function toChat () {
    window.location.href = "https://cts-chat-app.herokuapp.com/chat.html";
}

function notYet () {
    window.location.href = "https://cts-chat-app.herokuapp.com/index.html"
}

const btnNotYet = document.querySelector("#not");
const btnSign = document.querySelector("#sign-up");

btnNotYet.addEventListener("click", notYet);
btnSign.addEventListener("click", signButton);
