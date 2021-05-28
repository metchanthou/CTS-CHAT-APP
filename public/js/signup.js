
function signButton (event) {
    event.preventDefault();

    const getfirst = document.querySelector("#first-name").value;
    const getlast = document.querySelector("#last-name").value;
    const getemail = document.querySelector("#email").value;
    const getnewpass = document.querySelector("#newpass").value;
   
    if (getfirst==="" || getlast==="" || getemail==="" || getnewpass===""){
            confirm("Not yet to complet!")
            return false
    }
    toChat();
};
function toChat () {
    window.location.href = "http://localhost:5000/chat.html"
}

function notYet () {
    window.location.href = "http://localhost:5000/index.html"
}

const btnNotYet = document.querySelector("#not");
const btnSign = document.querySelector("#sign-up");

btnNotYet.addEventListener("click", notYet);
btnSign.addEventListener("click", signButton);
