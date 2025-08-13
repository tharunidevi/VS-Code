// script.js
function showPage(id) {

  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  // Show the selected page
  const selectedPage = document.getElementById(id);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});
