document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        alert("Form submitted!");
    });
});





