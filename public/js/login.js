function nextButton (event) {
    event.preventDefault();
    
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#yourpassword").value;

    const URL = "https://cts-chat-app.herokuapp.com/login"
    axios
        .get(URL)
        .then(res => checkUser(res, username, password));
   
};

function checkUser(res, username, password) {
    let usernameData = res.data;
    const getText = document.querySelector("#text");
    let isCheck = false;
    for (let name of usernameData) {
        if (name.username === username && name.password ===password && !isCheck) {
            window.location.href = "https://cts-chat-app.herokuapp.com/chat.html";
            localStorage.setItem("username", name.username);
            localStorage.setItem("color", name.color);
            isCheck = true
        };

    if (!isCheck){
        getText.textContent = "Username Not Found! Try again.";
        getText.style.color = "red";
    };
    };
};

function signUp (event) {
    event.preventDefault();
    window.location.href = "https://cts-chat-app.herokuapp.com/signup.html";
};

const btnNext = document.querySelector("#next");
const btnCreate = document.querySelector("#create");

btnCreate.addEventListener("click", signUp);
btnNext.addEventListener("click", nextButton);

