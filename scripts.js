const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("show"));
});


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

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
    }
});
}, {
threshold: 0.1
});

document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el));

window.addEventListener("load", () => {
const popup = document.getElementById("promoPopup");
const close = document.getElementById("popupClose");

// Show popup after 1.5 seconds
setTimeout(() => {
    popup.style.display = "flex";
}, 1500);

close.addEventListener("click", () => {
    popup.style.display = "none";
});

// Optional: close on outside click
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
    popup.style.display = "none";
    }
});
});