const accordion = document.querySelector(".questions .accordion");

accordion.addEventListener("click", (e) => {
  const element = e.target,
    ds = element.dataset;

  if (ds.toggle === "collapse") {
    if (element.classList.value.includes("arrow-down")) {
      element.classList.replace("arrow-down", "arrow-up");
    } else {
      element.classList.replace("arrow-up", "arrow-down");
    }

    /* const path = accordion.getElementsByClassName("btn");
    for (const iterator of path) {
      let index = iterator.classList.value.includes("arrow-down");
      if (index === true) {
        iterator.classList.replace("arrow-down", "arrow-up");
      } else {
        iterator.classList.replace("arrow-up", "arrow-down");
      }
    } */
  }
});
