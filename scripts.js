 

$(document).ready(function () {
  const navbarHeight = $('.navbar').outerHeight();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $('.navbar').addClass('solid');
      $('.back-to-top').addClass('visible');
    } else {
      $('.navbar').removeClass('solid');
      $('.back-to-top').removeClass('visible');
    }
  });

  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();  
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navbarHeight  
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  
  $('.gallery-image').on('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = $(this).attr('href');
    const targetElement = $(targetId);
    if (targetElement.length) {
      $('html, body').animate({
        scrollTop: targetElement.offset().top - navbarHeight  
      }, 800); 

 
      displayItem(targetElement.data('name'), targetElement.data('price'), targetElement.data('description'), this);
    }
  });
 
  function displayItem(name, price, description, image) {
    document.getElementById('itemName').innerText = name;
    document.getElementById('itemPrice').innerText = price;
    document.getElementById('itemDescription').innerText = description;

 
    image.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
 
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("solid", window.scrollY > 0);
});