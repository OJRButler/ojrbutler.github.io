const UCMCardHTML = `
  <div class="ucm-card">
    <img class="ucm-logo" src="./assets/img/ucm-logo.png" alt="UC Motorsport Logo" />
    <h3>UC Motorsport – Electrical Team</h3>
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML = UCMCardHTML;
});
