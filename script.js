// script.js

// I used (https://www.w3schools.com/js/js_htmldom_document.asp) and (https://www.w3schools.com/js/js_events.asp) for this section

// DOM Ready
window.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a");
    const currentUrl = window.location.pathname;
  
    // Highlight current page link
    links.forEach(link => {
      if (link.getAttribute("href") === currentUrl.split("/").pop()) {
        link.classList.add("active");
      }
    });
  
    // Dark mode toggle
    const toggle = document.createElement("button");
    toggle.textContent = "Toggle Dark Mode";
    toggle.style.position = "fixed";
    toggle.style.bottom = "10px";
    toggle.style.right = "10px";
    toggle.style.padding = "10px";
    toggle.style.zIndex = "1000";
    document.body.appendChild(toggle);
  
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });
  });
  