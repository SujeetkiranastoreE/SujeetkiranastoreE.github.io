/*
Author : Zlancers
URI : https://zlancers.in
*/

function closeModal(n) {
    let modalToClose = "modal" + n;
    let c = document.getElementById(modalToClose);
    c.style.display ="none";
}

function openModal(i){
    let modalElementToView = "modal" + i;
    let modalLinkElement = "modalLink" + i;
    let modalElement = document.getElementById(modalElementToView);
    let modalLinkBtn = document.getElementById(modalLinkElement);
    let modalElement2 = document.getElementById(modalElementToView);
    modalElement2.style.display = "block";
} // end of test function

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target.className === "modal"){
        event.target.style.display = "none";
    }
}

var count = 0;
function dropMenu() {
  count = count + 1;
  if (count % 2 === 0) {
    document.querySelector('.icon').innerHTML = "&#9776;";
  } else {
    document.querySelector('.icon').innerHTML = "&#9932;";
  }
}

var mainMenu = document.getElementById('menu').addEventListener("click", dropMenu);

let falseCheckboxes = [];
let falseCounter = 0;
let dropDownClick = {
  handleEvent(event) {
    if (event.currentTarget.classList.contains('dropdown-menu')) {

      // if element is not open yet
      if (event.currentTarget.querySelector('span').innerHTML === '+') {

         event.currentTarget.querySelector('span').innerHTML = '-'

        // if its not a sub menu
        if (!event.currentTarget.classList.contains('sub-menu')) {

          falseCheckboxes.push(event.currentTarget.htmlFor);

          falseCounter = falseCounter + 1;

          // if even falseCounter, then try to close the previous falseCheckbox
          if (falseCounter % 2 == 0) {

            let falseCheckboxesLength = falseCheckboxes.length;
            let lastfalseCheckbox = falseCheckboxes[falseCheckboxesLength - 2];

            let checkBox = document.getElementById(lastfalseCheckbox);
            checkBox.checked = false;


            let labels = document.querySelector('label[for=' + lastfalseCheckbox + ']');
            labels.querySelector('span').innerHTML = '+';
            falseCounter = 1;
            for (let i = 0; i < falseCheckboxes.length; i++) {
              if (falseCheckboxes[i] === lastfalseCheckbox) {
                falseCheckboxes.splice(i, 1);
              }
            }
          }
        } else {
          // if its a sub menu
          let falseCheckboxesLength = falseCheckboxes.length;
          let lastfalseCheckbox = falseCheckboxes[falseCheckboxesLength - 1];

          // get the parent menu
          let labels = document.querySelector('label[for=' + lastfalseCheckbox + ']');
          labels.querySelector('span').innerHTML = '-';

        }
      }
      else {
        // if element is closed
         event.currentTarget.querySelector('span').innerHTML = '+';
         falseCounter = 0;
      }
    }
  }
};

let dropDownMenu = document.querySelectorAll('.dropdown-menu');
for (let i = 0; i < dropDownMenu.length; i++) {
  dropDownMenu[i].addEventListener("click", dropDownClick);
}
