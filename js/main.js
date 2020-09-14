const accordion = document.querySelector(".questions .accordion");

accordion.addEventListener("click", (e) => {
  const element = e.target,
    ds = element.dataset;

  if (ds.toggle === "collapse") {
    
    const current = accordion.querySelector(".btn.active");
    if (current && current !== element) {
      current.classList.toggle("active");
    }

    if (element.classList.contains("btn")) {
      element.classList.toggle("active");
    }
  }
});
