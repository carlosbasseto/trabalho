document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const textoEscondido = document.querySelector('.texto-escondido');
  
    logo.addEventListener('click', function() {
      textoEscondido.style.display = 'block';
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const texto = document.getElementById('texto');
    
    setTimeout(function() {
      texto.classList.remove('mostrar');
    }, 70);
  });


  // Get all modal buttons
var modalBtns = document.querySelectorAll('.openModalBtn');

// Loop through modal buttons and add click event listener
modalBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var modalId = this.getAttribute('data-modal-target');
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

// Get all close buttons
var closeBtns = document.querySelectorAll('.close');

// Loop through close buttons and add click event listener
closeBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var modal = this.parentElement.parentElement;
    modal.style.display = 'none';
  });
});


