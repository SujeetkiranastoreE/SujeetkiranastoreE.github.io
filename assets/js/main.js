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

// initializing count as 0
let count = 0;

// when menu is clicked in mobile
 function dropMenu(){
    count = count + 1;
    if(count % 2 === 0){
     document.querySelector('.icon').innerHTML = "&#9776;";
    }else{
      document.querySelector('.icon').innerHTML = "&#9932;";
    }
 }

 // main menu
let mainMenu = document.getElementById('menu').addEventListener("click", dropMenu);

 let dropDownClick = {
    handleEvent(event) {
      if(event.currentTarget.classList.contains('dropdown-menu')){
        if(event.currentTarget.querySelector('span').innerHTML === '+'){
          event.currentTarget.querySelector('span').innerHTML = '-'
        }else{
          event.currentTarget.querySelector('span').innerHTML = '+'
        }
      }
    }
  };

// dropdown menu
let dropDownMenu = document.querySelectorAll('.dropdown-menu');
for(let i=0; i<dropDownMenu.length; i++){
  dropDownMenu[i].addEventListener("click",dropDownClick);
}

