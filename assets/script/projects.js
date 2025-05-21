document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      {
        title: "EV Inverter Development",
        description: "Designed and built a high-voltage inverter for Formula SAE with CAN telemetry and thermal protection.",
      },
      {
        title: "Track Limit Detection System",
        description: "Implemented YOLOv8 segmentation to identify track violations in F1 datasets using OpenCV.",
      },
      {
        title: "Torque Vectoring Controller",
        description: "Developed and tuned a closed-loop torque vectoring system based on a bicycle model for dynamic stability.",
      },
    ];
  
    const grid = document.getElementById("projects-grid");
  
    projects.forEach(({ title, description }) => {
      const card = document.createElement("div");
      card.className = "project-card";
  
      const h3 = document.createElement("h3");
      h3.textContent = title;
  
      const p = document.createElement("p");
      p.textContent = description;
  
      card.appendChild(h3);
      card.appendChild(p);
      grid.appendChild(card);
    });
  });
  