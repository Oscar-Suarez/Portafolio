const engButton = document.getElementById("eng-button");
const espButton = document.getElementById("esp-button");

engButton.addEventListener("click", () => {
    engButton.classList.add("active");
    espButton.classList.remove("active");
    document.cookie = "language=en";
    location.href="eng/index.html"
    console.log(engButton)
  });
  

espButton.addEventListener("click", () => {
  engButton.classList.remove("active");
  espButton.classList.add("active");
  location.href="../index.html"
  console.log(espButton)
});

