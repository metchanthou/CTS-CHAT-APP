
function nextButton (event) {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#yourpassword").value;

    const URL = "http://localhost:5000/login"
    axios
        .get(URL)
        .then(res => checkUser(res, username, password));
   
};

function checkUser(res, username, password) {
    let usernameData = res.data;
    const getText = document.querySelector("#text");
    const getAudio = document.querySelector("#myAudio");
    let isCheck = false;

    for (let name of usernameData) {
        if (name.username === username && name.password ===password && !isCheck) {
            window.location.href = "http://localhost:5000/chat.html";
            localStorage.setItem("username", name.username);
            localStorage.setItem("color", name.color);
            isCheck = true
        };

    if (!isCheck){
        getText.textContent = "Username Not Found! Try again.";
        getText.style.color = "red";
        getAudio.play();
        
        };
    };
};


function signUp (event) {
    event.preventDefault();
    window.location.href = "http://localhost:5000/signup.html";
};

const btnNext = document.querySelector("#next");
const btnCreate = document.querySelector("#create");

btnCreate.addEventListener("click", signUp);
btnNext.addEventListener("click", nextButton);

