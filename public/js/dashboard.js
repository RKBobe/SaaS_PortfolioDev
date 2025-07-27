const projects = [
  { name: "RAD", folder: "projects/rad", description: "Requirements analysis docs" },
  { name: "Design", folder: "projects/design", description: "UI sketches & layout flows" },
  { name: "UML", folder: "projects/uml", description: "System modeling diagrams" },
  { name: "Scripts", folder: "projects/scripts", description: "Deployment & setup logic" },
  { name: "DB Config", folder: "projects/db-config", description: "Postgres setup scripts" }
];

const container = document.getElementById("project-list");

projects.forEach(({ name, folder, description }) => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h2>${name}</h2>
    <p>${description}</p>
    <button class="toggle-btn">Show Details</button>
    <div class="project-details" style="display: none;">
      <p><strong>Folder:</strong> ${folder}</p>
      <a href="${folder}" target="_blank">Open Folder</a>
    </div>
  `;

  const button = card.querySelector(".toggle-btn");
  const details = card.querySelector(".project-details");

  button.addEventListener("click", () => {
    const showing = details.style.display === "block";
    details.style.display = showing ? "none" : "block";
    button.textContent = showing ? "Show Details" : "Hide Details";
  });

  container.appendChild(card);
});
