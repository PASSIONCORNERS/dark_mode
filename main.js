const darkMode = document.querySelector("#switch");

darkMode.addEventListener("change", () => {
  document.body.classList.toggle("darkmode");
  // console.log("test");
});
