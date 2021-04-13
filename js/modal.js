// About modal
const aboutLink = document.querySelector(".about");
const aboutModal = document.querySelector(".about-modal");
const close = document.querySelector(".close");
const movieLink = document.querySelector(".movie");
const aboutMovie = document.querySelector(".about-movie");
const movieClose = document.querySelector(".movie-close");
const honeyLink = document.querySelector(".honey");
const aboutHoney = document.querySelector(".about-honey");
const honeyClose = document.querySelector(".honey-close");

aboutLink.addEventListener("click", function () {
  aboutModal.classList.remove("d-none");
});

close.addEventListener("click", function () {
  aboutModal.classList.add("d-none");
});


movieLink.addEventListener("click", function () {
    aboutMovie.classList.remove("d-none");
  });
  
  movieClose.addEventListener("click", function () {
    aboutMovie.classList.add("d-none");
  });

  honeyLink.addEventListener("click", function () {
    aboutHoney.classList.remove("d-none");
  });
  
  honeyClose.addEventListener("click", function () {
    aboutHoney.classList.add("d-none");
  });