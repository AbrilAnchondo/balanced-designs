const nav = document.querySelector("#navbar");
let scrolled = false;

window.onscroll = function () {
  if (document.body.scrollTop > 100) {
    nav.classList.remove("top");
    if (!scrolled) {
      nav.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      nav.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    nav.classList.add("top");
    scrolled = false;
  }
};
