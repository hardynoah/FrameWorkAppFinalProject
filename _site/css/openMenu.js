function openMenu() {
  if (document.getElementById("HamburgerMenu").style.display == "block") 
    document.getElementById("HamburgerMenu").style.display = "none";
  else 
    document.getElementById("HamburgerMenu").style.display = "block"
  
}

function toggleDayNightTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');

  if (currentTheme === 'nord') {
      body.setAttribute('data-theme', 'dark');
  } else {
      body.setAttribute('data-theme', 'nord');
  }
}