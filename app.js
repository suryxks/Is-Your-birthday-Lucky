let dob = document.querySelector("#dob");
let luckNumber = document.querySelector("#lucky-no");
let checkButton = document.querySelector("#check-btn");
let container = document.querySelector(".container")
let message = document.createElement("p");
let privMsg = document.querySelector("#privacy");
let closeBtn = document.querySelector("#close");
console.log(privMsg, closeBtn);

const sumOfDigits = doB => {
    let dob = Number(doB);

    let sum = 0;
    while (dob > 0) {
        sum = sum + dob % 10;
        dob = Math.trunc(dob / 10);
    }

    return sum;
}
const checkLukyNumber = (dob, luckNumber) => {
    let doB = dob;

    doB = doB.replaceAll("-", "");
    let sum = sumOfDigits(doB);
    if (sum % luckNumber === 0) {
        message.remove();
        message.innerText = "You are Lucky👏"
        container.appendChild(message);
    } else {
        message.remove()
        message.innerText = "Go Work Until you Become Lucky"
        container.appendChild(message);
    }

}
const checkHandler = () => {
    if (dob.value === "" || luckNumber.value === "") {
        message.innerText = "Enter a valid date or luky number";
        container.appendChild(message);
    } else {
        message.remove();
        checkLukyNumber(dob.value, luckNumber.value);
    }
}
checkButton.addEventListener("click", checkHandler);
closeBtn.addEventListener("click", function () {
    privMsg.style.display = "none";
});