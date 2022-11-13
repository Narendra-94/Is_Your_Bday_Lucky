const dateOfBirth = document.querySelector("#birth-date");
const luckyNo = document.querySelector("#lucky-number");
const checkNumBtn = document.querySelector("#check-number");
const outputBox = document.querySelector("#output");

function compareValues(sum,luckyNo){
    if(sum % luckyNo===0){
        outputBox.innerText="Your birthday is Lucky!!🤩";
    }else{
        outputBox.innerText= "Hey, It's just a game !!🙃";
    }

}

function checkDateOfBirthIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if( sum && dob )
    compareValues(sum,luckyNo.value)
    else
    outputBox.innerText = "please enter both the field!!";
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length; i++){
        sum= sum + Number(dob.charAt(i));
    }
    return sum;
}

checkNumBtn.addEventListener('click',checkDateOfBirthIsLucky)