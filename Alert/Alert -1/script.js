// alert dom
const successAlert = document.querySelector(".alert__color--success");
const dengerAlert = document.querySelector(".alert__color--denger");
const warningAlert = document.querySelector(".alert__color--warning");
const infoAlert = document.querySelector(".alert__color--info");

// alert close button
const successAlertCloseBtn = document.querySelector(".alert__close--success");
const dengerAlertCloseBtn = document.querySelector(".alert__close--denger");
const warningAlertCloseBtn = document.querySelector(".alert__close--warning");
const infoAlertCloseBtn = document.querySelector(".alert__close--info");

// click event for alert close
successAlertCloseBtn.addEventListener("click", () => {
  successAlert.style.display = "none";
});
dengerAlertCloseBtn.addEventListener("click", () => {
  dengerAlert.style.display = "none";
});
infoAlertCloseBtn.addEventListener("click", () => {
  infoAlert.style.display = "none";
});
warningAlertCloseBtn.addEventListener("click", () => {
  warningAlert.style.display = "none";
});
