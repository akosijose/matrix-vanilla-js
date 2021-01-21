const selectA = document.getElementById("matrix-a");
const selectB = document.getElementById("matrix-b");
const menuItems = document.querySelectorAll(".menu-items");
const menuItemsB = document.querySelectorAll(".menu-itemsB");

// matrix A
selectA.addEventListener("change", (e) => {
  menuItems.forEach((item) => {
    item.classList.add("hidden-a");
  });

  if (selectA.value === "2x2") {
    menuItems[0].classList.remove("hidden-a");
    menuItems[1].classList.remove("hidden-a");
    menuItems[4].classList.remove("hidden-a");
    menuItems[5].classList.remove("hidden-a");
  } else if (selectA.value === "2x3") {
    menuItems[0].classList.remove("hidden-a");
    menuItems[1].classList.remove("hidden-a");
    menuItems[2].classList.remove("hidden-a");
    menuItems[4].classList.remove("hidden-a");
    menuItems[5].classList.remove("hidden-a");
    menuItems[6].classList.remove("hidden-a");
  } else if (selectA.value === "2x4") {
    menuItems[0].classList.remove("hidden-a");
    menuItems[1].classList.remove("hidden-a");
    menuItems[2].classList.remove("hidden-a");
    menuItems[3].classList.remove("hidden-a");
    menuItems[4].classList.remove("hidden-a");
    menuItems[5].classList.remove("hidden-a");
    menuItems[6].classList.remove("hidden-a");
    menuItems[7].classList.remove("hidden-a");
  } else if (selectA.value === "3x2") {
    menuItems[0].classList.remove("hidden-a");
    menuItems[1].classList.remove("hidden-a");
    menuItems[4].classList.remove("hidden-a");
    menuItems[5].classList.remove("hidden-a");
    menuItems[8].classList.remove("hidden-a");
    menuItems[9].classList.remove("hidden-a");
  } else if (selectA.value === "3x3") {
    menuItems[0].classList.remove("hidden-a");
    menuItems[1].classList.remove("hidden-a");
    menuItems[2].classList.remove("hidden-a");
    menuItems[4].classList.remove("hidden-a");
    menuItems[5].classList.remove("hidden-a");
    menuItems[6].classList.remove("hidden-a");
    menuItems[8].classList.remove("hidden-a");
    menuItems[9].classList.remove("hidden-a");
    menuItems[10].classList.remove("hidden-a");
  } else if (selectA.value === "3x4") {
    menuItems[0].classList.remove("hidden-a");
    menuItems[1].classList.remove("hidden-a");
    menuItems[2].classList.remove("hidden-a");
    menuItems[3].classList.remove("hidden-a");
    menuItems[4].classList.remove("hidden-a");
    menuItems[5].classList.remove("hidden-a");
    menuItems[6].classList.remove("hidden-a");
    menuItems[7].classList.remove("hidden-a");
    menuItems[8].classList.remove("hidden-a");
    menuItems[9].classList.remove("hidden-a");
    menuItems[10].classList.remove("hidden-a");
    menuItems[11].classList.remove("hidden-a");
  } else if (selectA.value === "4x2") {
    menuItems[0].classList.remove("hidden-a");
    menuItems[1].classList.remove("hidden-a");
    menuItems[4].classList.remove("hidden-a");
    menuItems[5].classList.remove("hidden-a");
    menuItems[8].classList.remove("hidden-a");
    menuItems[9].classList.remove("hidden-a");
    menuItems[12].classList.remove("hidden-a");
    menuItems[13].classList.remove("hidden-a");
  } else if (selectA.value === "4x3") {
    menuItems[0].classList.remove("hidden-a");
    menuItems[1].classList.remove("hidden-a");
    menuItems[2].classList.remove("hidden-a");
    menuItems[4].classList.remove("hidden-a");
    menuItems[5].classList.remove("hidden-a");
    menuItems[6].classList.remove("hidden-a");
    menuItems[8].classList.remove("hidden-a");
    menuItems[9].classList.remove("hidden-a");
    menuItems[10].classList.remove("hidden-a");
    menuItems[12].classList.remove("hidden-a");
    menuItems[13].classList.remove("hidden-a");
    menuItems[14].classList.remove("hidden-a");
  } else if (selectA.value === "4x4") {
    menuItems.forEach((item) => {
      item.classList.remove("hidden-a");
    });
  }
});

// matrix B
selectB.addEventListener("change", (e) => {
  menuItemsB.forEach((item) => {
    item.classList.add("hidden");
  });

  if (selectB.value == "2x2") {
    menuItemsB[0].classList.remove("hidden");
    menuItemsB[1].classList.remove("hidden");
    menuItemsB[4].classList.remove("hidden");
    menuItemsB[5].classList.remove("hidden");
  } else if (selectB.value === "2x3") {
    menuItemsB[0].classList.remove("hidden");
    menuItemsB[1].classList.remove("hidden");
    menuItemsB[2].classList.remove("hidden");
    menuItemsB[4].classList.remove("hidden");
    menuItemsB[5].classList.remove("hidden");
    menuItemsB[6].classList.remove("hidden");
  } else if (selectB.value === "2x4") {
    menuItemsB[0].classList.remove("hidden");
    menuItemsB[1].classList.remove("hidden");
    menuItemsB[2].classList.remove("hidden");
    menuItemsB[3].classList.remove("hidden");
    menuItemsB[4].classList.remove("hidden");
    menuItemsB[5].classList.remove("hidden");
    menuItemsB[6].classList.remove("hidden");
    menuItemsB[7].classList.remove("hidden");
  } else if (selectB.value === "3x2") {
    menuItemsB[0].classList.remove("hidden");
    menuItemsB[1].classList.remove("hidden");
    menuItemsB[4].classList.remove("hidden");
    menuItemsB[5].classList.remove("hidden");
    menuItemsB[8].classList.remove("hidden");
    menuItemsB[9].classList.remove("hidden");
  } else if (selectB.value === "3x3") {
    menuItemsB[0].classList.remove("hidden");
    menuItemsB[1].classList.remove("hidden");
    menuItemsB[2].classList.remove("hidden");
    menuItemsB[4].classList.remove("hidden");
    menuItemsB[5].classList.remove("hidden");
    menuItemsB[6].classList.remove("hidden");
    menuItemsB[8].classList.remove("hidden");
    menuItemsB[9].classList.remove("hidden");
    menuItemsB[10].classList.remove("hidden");
  } else if (selectB.value === "3x4") {
    menuItemsB[0].classList.remove("hidden");
    menuItemsB[1].classList.remove("hidden");
    menuItemsB[2].classList.remove("hidden");
    menuItemsB[3].classList.remove("hidden");
    menuItemsB[4].classList.remove("hidden");
    menuItemsB[5].classList.remove("hidden");
    menuItemsB[6].classList.remove("hidden");
    menuItemsB[7].classList.remove("hidden");
    menuItemsB[8].classList.remove("hidden");
    menuItemsB[9].classList.remove("hidden");
    menuItemsB[10].classList.remove("hidden");
    menuItemsB[11].classList.remove("hidden");
  } else if (selectB.value === "4x2") {
    menuItemsB[0].classList.remove("hidden");
    menuItemsB[1].classList.remove("hidden");
    menuItemsB[4].classList.remove("hidden");
    menuItemsB[5].classList.remove("hidden");
    menuItemsB[8].classList.remove("hidden");
    menuItemsB[9].classList.remove("hidden");
    menuItemsB[12].classList.remove("hidden");
    menuItemsB[13].classList.remove("hidden");
  } else if (selectB.value === "4x3") {
    menuItemsB[0].classList.remove("hidden");
    menuItemsB[1].classList.remove("hidden");
    menuItemsB[2].classList.remove("hidden");
    menuItemsB[4].classList.remove("hidden");
    menuItemsB[5].classList.remove("hidden");
    menuItemsB[6].classList.remove("hidden");
    menuItemsB[8].classList.remove("hidden");
    menuItemsB[9].classList.remove("hidden");
    menuItemsB[10].classList.remove("hidden");
    menuItemsB[12].classList.remove("hidden");
    menuItemsB[13].classList.remove("hidden");
    menuItemsB[14].classList.remove("hidden");
  } else if (selectB.value === "4x4") {
    menuItemsB.forEach((item) => {
      item.classList.remove("hidden");
    });
  }
});
