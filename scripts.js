const modal = document.getElementById("menuModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalPrice = document.getElementById("modalPrice");
  const closeModal = document.querySelector(".modal .close");

  document.querySelectorAll(".menu-card").forEach(card => {
    card.addEventListener("click", () => {
      modalImage.src = card.getAttribute("data-image");
      modalTitle.textContent = card.getAttribute("data-title");
      modalDesc.textContent = card.getAttribute("data-desc");
      modalPrice.textContent = card.getAttribute("data-price");
      modal.style.display = "flex";
    });
  });

  closeModal.onclick = () => { modal.style.display = "none"; };
  window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };