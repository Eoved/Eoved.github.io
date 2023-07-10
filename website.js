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
    document.getElementById("theme").href = "dark.css";
}

function toggle_blue() {
    document.cookie = "theme=blue;SameSite=Lax";
}

function toggle_light() {
    document.cookie = "theme=light;SameSite=Lax";
    document.getElementById("theme").href = "light.css";
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
    document.getElementsByTagName("body").innerHTML = "about.html";
}

function experience_click() {
}

function projects_click() {
}

function cv_click() {
    window.open("cv.pdf");
}