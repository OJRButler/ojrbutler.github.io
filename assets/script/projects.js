const ProjectsDataHTML = `
  <div class="projects-card ucm-project">
    <h3>UC Motorsport – Electrical Team</h3>
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
`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML = ProjectsDataHTML;
});
