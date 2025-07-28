const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", async () => {
    cards.forEach(c => {
      c.classList.remove("focused");
      c.querySelector(".preview").innerHTML = "";
    });

    card.classList.add("focused");

    const filePath = card.getAttribute("data-file");
    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const markdown = await res.text();
      const html = marked.parse(markdown);
      card.querySelector(".preview").innerHTML = html;
    } catch (err) {
      card.querySelector(".preview").innerHTML = `<p class="error">Error loading markdown: ${err.message}</p>`;
    }
  });
});
