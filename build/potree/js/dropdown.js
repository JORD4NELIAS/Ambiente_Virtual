// var coll = document.getElementsByClassName("p_collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }
document.addEventListener('DOMContentLoaded', function() {
  var coll = document.getElementsByClassName("p_collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
              content.style.display = "none";
          } else {
              content.style.display = "block";
          }
      });
  }

  // Fechar o dropdown se clicar fora dele
  window.addEventListener('click', function(event) {
      if (!event.target.matches('.p_collapsible')) {
          var dropdowns = document.getElementsByClassName("p_content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.style.display === "block") {
                  openDropdown.style.display = "none";
                  openDropdown.previousElementSibling.classList.remove("active");
              }
          }
      }
  });
});
