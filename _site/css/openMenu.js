function openMenu() {
  if (document.getElementById("HamburgerMenu").style.display == "block") 
    document.getElementById("HamburgerMenu").style.display = "none";
  else 
    document.getElementById("HamburgerMenu").style.display = "block"
  
}

function toggleDayNightTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  console.log(currentTheme)

  if (currentTheme === 'light') {
      body.setAttribute('data-theme', 'dark');
  } else {
      body.setAttribute('data-theme', 'light');
  }
}