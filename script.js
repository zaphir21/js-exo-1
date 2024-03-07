const menuTriggerNode = document.querySelector(".menu-trigger")

menuTriggerNode.addEventListener("click", () => {const menuNode = document.querySelector(".menu")
    menuNode.style.display = `${menuNode.style.display === "block" ? "none" : "block"}`
    menuNode.style.opacity = `${menuNode.style.display === "block" ? "0" : "1"}`
   })