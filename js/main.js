// Change nav size on scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    this.document.querySelector("#navbar").style.padding = 0;
  } else {
    this.document.querySelector("#navbar").style.padding = '0.75rem';
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
  $('#navbar .container ul li a').each(function () {
    let currentLink = $(this);
    let refElement = $(currentLink.attr('href'));
    console.log(scrollPos);
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#navbar .container ul li a').removeClass("active");
      currentLink.addClass("active");
    }
    else {
      currentLink.removeClass("active");
    }
  })
});
