const UCMProjectHTML = `
  <div class="project-section ucm-project">
    <h3 class="section-title">UC Motorsport – Electrical Team</h3>
    <div class="project-card ucm-card">
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
    </div>
  </div>
`;

const PersonalProjects = [
  {
    name: "YOLOv8 Track Limit Detector",
    logo: "./assets/img/yolo.jpg",
    description: "A real-time track limit violation detector using YOLOv8 segmentation and OpenCV.",
    link: "https://github.com/ojrbutler/f1-track-limit-detection",
  },
  {
    name: "CAN Sensor Module",
    logo: "./assets/img/can-sensor.jpg",
    description: "Custom PCB and embedded firmware for transmitting sensor data over CAN.",
    link: "#",
  }
];

const PersonalProjectsHTML = PersonalProjects.map(
  (item) => `
    <div class="project-card">
      <img loading="lazy" src="${item.logo}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" title="${item.name}" target="_blank">View</a>
    </div>
  `
).join("");

// Inject both sections
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    UCMProjectHTML + PersonalProjectsHTML;
});
