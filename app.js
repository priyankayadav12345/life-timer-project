const isDOBOpen = false;


const settingIconEL = document.getElementById("settingIcon");
const settingcontentEL = document.getElementById("settingcontent");

const toggleDateofBirthSelector = () => {
    if (isDOBOpen) {
        settingcontentEL.classList.add("hide");


    }
    else {
        settingcontentEL.classList.remove("hide");

    }
    isDOBOpen = !isDOBOpen;

    console.log("toggle", isDOBOpen);



};
settingIconEL.addEventListener('click', toggleDateofBirthSelector);





