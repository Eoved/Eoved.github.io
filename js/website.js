const current_theme = document.cookie;
if (current_theme == "light") {
    toggle_light();
} else {
    toggle_dark();
}

function get_cookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function toggle_theme() {
    var theme = get_cookie("theme");
    if (theme == "light") {
        toggle_dark();
    } else if (theme == "dark") {
        toggle_light();
    }
}

function toggle_dark() {
    document.cookie = "theme=dark;SameSite=Lax";
    document.getElementById("theme").href = "css/dark.css";
}

function toggle_blue() {
    document.cookie = "theme=blue;SameSite=Lax";
}

function toggle_light() {
    document.cookie = "theme=light;SameSite=Lax";
    document.getElementById("theme").href = "css/light.css";
}

function email_click() {
    window.location.href = "mailto:adevoe@uchicago.edu";
}

function github_click() {
    window.open("https://github.com/Eoved");
}
function linkedin_click() {
    window.open("https://www.linkedin.com/in/andrew-devoe/");
}

function about_click() {
    document.getElementById("nav-about").classList.add("active");
    document.getElementById("nav-experience").classList.remove("active");
    document.getElementById("nav-projects").classList.remove("active");

    document.getElementById("about").style.display = "block";
    document.getElementById("experience").style.display = "none";
    document.getElementById("projects").style.display = "none";
}

function experience_click() {
    document.getElementById("nav-about").classList.remove("active");
    document.getElementById("nav-experience").classList.add("active");
    document.getElementById("nav-projects").classList.remove("active");

    document.getElementById("about").style.display = "none";
    document.getElementById("experience").style.display = "block";
    document.getElementById("projects").style.display = "none";
}

function projects_click() {
    document.getElementById("nav-about").classList.remove("active");
    document.getElementById("nav-experience").classList.remove("active");
    document.getElementById("nav-projects").classList.add("active");

    document.getElementById("about").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("projects").style.display = "block";
}

function cv_click() {
    window.open("cv.pdf");
}
