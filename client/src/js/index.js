// All required elements
const bars = document.querySelector(".bars");
const close = document.querySelector(".close");
const header = document.querySelector("header");
const navigation = document.querySelector(".navigation");

// Mobile Menu Responsive
// ==== Toggle
bars.addEventListener("click", () => {
  bars.style.display = "none";
  close.style.display = "flex";
  navigation.classList.add("curtain");
  header.style.height = "100vh";
  header.style.alignItems = "flex-start";
  header.style.paddingTop = "20px";
});
close.addEventListener("click", () => {
  close.style.display = "none";
  bars.style.display = "flex";
  navigation.classList.remove("curtain");
  header.style.height = "72px";
});
