const UCMFeatureHTML = `
  <section class="ucm-feature">
    <h2>UC Motorsport – Electrical Team</h2>
    <img class="ucm-logo" src="./assets/img/ucm-logo.png" alt="UC Motorsport Logo" />

    <div class="ucm-subprojects">
      <div class="subproject">
        <img src="./assets/img/inverter.jpg" alt="Inverter system" />
        <p><b>HV Inverter System:</b> Designed PCBs, integrated connectors, and implemented safety features for our custom enclosure.</p>
      </div>
      <div class="subproject">
        <img src="./assets/img/current-sense.jpg" alt="Current sensing PCB" />
        <p><b>Current Sensing Module:</b> Built and tested an analog front-end for the HAIS current sensor with CAN transmission to the ECU.</p>
      </div>
      <div class="subproject">
        <img src="./assets/img/pedalbox.jpg" alt="Pedal box PCB" />
        <p><b>Pedal Box PCB:</b> Developed analog brake pressure sensing logic to enable torque cut logic.</p>
      </div>
    </div>
  </section>
`;

const ProjectsData = [
  {
    name: "Mcodo :Learn Coding with AI",
    logo: "https://play-lh.googleusercontent.com/au3QvRNWZiRamIYLRb0irFPno-xuzSJDzrL1Te0vGx7889ROiOp3Sr7dIByGomFDJpbX=w480-h960-rw",
    description: "Powerful code compiler, AI chat assistant, interactive coding quizzes, and chapter-based learning resources.",
    link: "https://play.google.com/store/apps/details?id=com.sohezsoft.mcodo&hl=en_IN",
  },
  {
    name: "Student Portal App",
    logo: "https://cdn-icons-png.flaticon.com/128/14664/14664511.png",
    description: "Student Portal App, built using Kotlin.",
    link: "https://github.com/sohez/StudentPortalApp",
  },
  {
    name: "M.P.C",
    logo: "https://cdn-icons-png.flaticon.com/128/1011/1011812.png",
    description: "Calculate academic performance. Built with HTML, CSS, JavaScript, html2canvas, and jsPDF.",
    link: "https://sohez.github.io/Marks-Percentage-Calculator/",
  },
  {
    name: "PHP Registration full API",
    logo: "https://cdn-icons-png.flaticon.com/128/17335/17335144.png",
    description: "Registration API built with PHP and MySQL.",
    link: "https://github.com/sohez/PHP-Projects",
  },
  {
    name: "Tic-Tac-Toe",
    logo: "https://cdn-icons-png.flaticon.com/128/434/434798.png",
    description: "Play against a bot using the Minimax algorithm or with a friend. Built with HTML, CSS, and JS.",
    link: "https://sohez.github.io/tic-tac-toe/",
  },
  {
    name: "AI Chat",
    logo: "https://cdn-icons-png.flaticon.com/128/6873/6873405.png",
    description: "Gemini AI chatbot built with HTML, CSS, and JS.",
    link: "https://github.com/sohez/ai-chat",
  }
];

const ProjectsGridHTML = ProjectsData.map(
  (item) => `
    <div class="projects-card">
      <img loading="lazy" src="${item.logo}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" title="${item.name}" target="_blank">View</a>
    </div>
  `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    UCMFeatureHTML + ProjectsGridHTML;
});
