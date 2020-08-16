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