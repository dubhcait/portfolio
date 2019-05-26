
var faq = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(panel.style)
    if (!panel.style.display){
      panel.style.display = "inline";
    } else {
        panel.style.display === none
    } 
  });
}
