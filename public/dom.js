
var faq = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (!panel.style.display || panel.style.display == "none"){
      panel.style.display = "flex";
    } else {
        panel.style.display = "none";
    } 
  });
}

const projectDisplay = document.getElementsByClassName(
  "project-header__button"
);

const svg = document.getElementById("body");
const list = document.getElementsByClassName("mobile")[0]

console.log(list);

for (let i = 0; i < projectDisplay.length; i++) {
  projectDisplay[i].addEventListener("click", () => {
    if (i == 0) {
      svg.style.display = "block";
      list.style.display = "none";
    }
    if (i == 1) {
      svg.style.display = "none";
      list.style.display = "inline";
    }
  });
}
