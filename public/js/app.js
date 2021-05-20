


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


const getpart1 = document.querySelector(".part1");
const getpart2 = document.querySelector(".part2");
const getusername = document.querySelector("#username");

const btnCreate = document.querySelector("#create");
const btnNotYet = document.querySelector("#not");

btnCreate.addEventListener("click", closePart1);
btnNotYet.addEventListener("click", notYet);
