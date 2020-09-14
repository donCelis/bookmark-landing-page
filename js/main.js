const accordion = document.querySelector(".questions .accordion");

accordion.addEventListener("click", (e) => {
  const element = e.target,
    ds = element.dataset;

  if (ds.toggle === "collapse") {
    if (element.classList.value.includes("arrow-down")) {
      element.classList.toogle("arrow-up");
    } 

    const path = accordion.getElementsByClassName("btn");
    for (const iterator of path) {
      let index = iterator.classList.value.includes("arrow-down");
      if (index === true) {
        iterator.classList.toogle("arrow-up");
      }
    }
  }
});
