//what is four loko modal
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
  console.log(modal);

  modal.style.display = "block";
  const scrollY = window.scrollY;
  const scrollTo = scrollY - 1.4 * window.innerHeight; // 15% of the window height

  // Use the `scrollTo` method with options to create a smooth scroll animation
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  //   const screenSize = window.innerWidth; // Get the current screen width
  //   if (screenSize <= 600) {
  //     // If the screen width is 600 pixels or less, scroll to the top
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Center the modal when the window is resized
window.addEventListener("resize", () => {
  if (modal.style.display === "block") {
    modal.style.display = "none";
    modal.style.display = "block";
  }
});

//disclaimer modal
const openModalButton_2 = document.getElementById("openModal_two");
const closeModalButton_2 = document.getElementById("closeModal_2");
const modal_2 = document.getElementById("modal_two");

openModalButton_2.addEventListener("click", (event) => {
  modal_2.style.display = "block";
  const scrollY = window.scrollY;
  const scrollTo = scrollY - 1.4 * window.innerHeight; // 15% of the window height

  // Use the `scrollTo` method with options to create a smooth scroll animation
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  //   const screenSize = window.innerWidth; // Get the current screen width
  //   if (screenSize <= 600) {
  //     // If the screen width is 600 pixels or less, scroll to the top
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
});

closeModalButton_2.addEventListener("click", () => {
  modal_2.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal_2.style.display = "none";
  }
});

// Center the modal when the window is resized
window.addEventListener("resize", () => {
  if (modal.style.display === "block") {
    modal.style.display = "none";
    modal.style.display = "block";
  }
});

//draggaable box 1
dragElement(document.getElementById("modal"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//draggaable box 1
dragElement(document.getElementById("modal_two"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
