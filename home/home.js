var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(selectPlanButton);
for ( var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}
toggleButton.addEventListener('click', function(){
    mobileNav.style.display = 'none';
    closeModal();
});
modalNoButton.addEventListener('click',closeModal);

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
};

toggleButton.addEventListener('click', function(){
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

 