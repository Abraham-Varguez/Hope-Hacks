//NAV BAR VISIBILITY----------------------------------------------------------------------------

const openNav = function () {
  document.querySelector(".sidebar-none").classList.add("sidebar"); //adds sidebar class, which expands navbar
  document.querySelector(".sidebar-none").classList.remove("sidebar-none"); //removes sidebar-none class which removes navbar
  document.querySelector(".nav-logo").classList.add("hide");
};

const closeNav = function () {
  document.querySelector(".sidebar").classList.add("sidebar-none");
  document.querySelector(".sidebar").classList.remove("sidebar");
  document.querySelector(".nav-logo").classList.remove("hide");
};

document.querySelector(".nav-logo").addEventListener("click", openNav);
document.querySelector(".nav-close").addEventListener("click", closeNav);
document.querySelector(".top-view").addEventListener("click", closeNav);

//Page Transition ----------------------------------------------------------------------------
const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the target section's ID
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Scroll to the target section with smooth behavior
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
