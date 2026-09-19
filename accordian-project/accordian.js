const accordionTitles = document.querySelectorAll(".accordionTitle");
const accordionContents = document.querySelectorAll(".accordionContent");

accordionTitles.forEach((el, index) => {
  el.addEventListener("click", () => {
    if (accordionContents[index].classList.contains("hidden")) {
      accordionTitles[index].querySelector(".toggleIcon").textContent = "-";
      accordionContents[index].classList.remove("hidden");
    } else {
      accordionTitles[index].querySelector(".toggleIcon").textContent = "+";
      accordionContents[index].classList.add("hidden");
    }
  });
});
