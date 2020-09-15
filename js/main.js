const selector = document.querySelector.bind(document);

const accordion = selector(".questions .accordion");

accordion.addEventListener("click", (e) => {
  const element = e.target,
    ds = element.dataset;

  if (ds.toggle === "collapse") {
    const current = accordion.querySelector(".btn.active");

    current && current !== element && current.classList.toggle("active");

    element.classList.contains("btn") && element.classList.toggle("active");
  }
});
