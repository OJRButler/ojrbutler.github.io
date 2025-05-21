// assets/script/portfolio.js

document.addEventListener("DOMContentLoaded", () => {
    const portfolioContainer = document.getElementById("portfolio-card-container");
  
    const portfolioEntries = [
      {
        title: "University of Canterbury Motorsport (UCM)",
        image: "./assets/img/ucm_logo.png",
        description: "Core contributor to UCM, a Formula SAE electric racing team. Focused on HV system integration, custom PCB development, and vehicle safety compliance."
      }
      // Add more entries here as needed
    ];
  
    portfolioEntries.forEach((entry) => {
      const card = document.createElement("div");
      card.className = "portfolio-card";
  
      card.innerHTML = `
        <div class="portfolio-header">
          <img src="${entry.image}" alt="${entry.title}" class="portfolio-image"/>
          <h3>${entry.title}</h3>
        </div>
        <p>${entry.description}</p>
      `;
  
      portfolioContainer.appendChild(card);
    });
  });
  