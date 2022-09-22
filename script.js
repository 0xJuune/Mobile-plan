const ratePlanArea = document.getElementById('dataPlanContainer')
const formArea = document.getElementById('formArea')
const loginButton = document.getElementById('logo')
let hideState = 0


const hideBoxes = () => {
    console.log('yeehaw')
    if (!hideState) {
        ratePlanArea.style.display = 'none'
        formArea.style.display = 'inline'
        hideState = 1
    }
    else {
        ratePlanArea.style.display = 'inline'
        formArea.style.display = 'none'
        hideState = 0
    }
}

loginButton.addEventListener("click", hideBoxes)

// switch (plan) {
//     case 'basic':
//         let;
//         break;
//     case 'power':
//         let;
//         break;
//     case 'unlimited':
//         let;
//         break;
// }