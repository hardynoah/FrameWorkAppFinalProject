function openMenu() {
  if (document.getElementById("HamburgerMenu").style.display == "block") 
    document.getElementById("HamburgerMenu").style.display = "none";
  else 
    document.getElementById("HamburgerMenu").style.display = "block"
  
}

document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  
  savedTheme = localStorage.getItem('data-theme');
  if (savedTheme) 
    body.setAttribute('data-theme', savedTheme);
});


function toggleDayNightTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');

  if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'nord');
      localStorage.setItem('data-theme', 'nord');
  } else {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('data-theme', 'dark');
  }
}