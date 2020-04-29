// Change nav size on scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    this.document.querySelector("#navbar").style.padding = 0;
    this.document.querySelector('#toggle-btn').style.margin = '0.5rem';
  } else {
    this.document.querySelector("#navbar").style.padding = '0.75rem';
    this.document.querySelector('#toggle-btn').style.margin = '1rem';
  }
});

// Smooth Scrolling
$('.nav-btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash; // btn id
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 85
      },
      800 // smooth scroll speed
    )
  }
});

$(document).on("scroll", function (event) {
  const scrollPos = $(document).scrollTop() + 85;
  $('#navbar .container #nav-links ul li a').each(function () {
    let currentLink = $(this);
    let refElement = $(currentLink.attr('href'));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#navbar .container #nav-links ul li a').removeClass("active");
      currentLink.addClass("active");
    }
    else {
      currentLink.removeClass("active");
    }
  })
});

// Show items on click toggle btn
function showNavItems() {
  const btn = document.getElementById('nav-links');
  if (btn.style.display === 'block') {
    btn.style.display = 'none';
  } else {
    btn.style.display = 'block';
  }
}
