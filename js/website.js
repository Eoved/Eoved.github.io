const current_theme = localStorage.getItem("theme");
if (current_theme == "dark") {
    toggle_dark();
} else {
    toggle_light();
}

function toggle_theme() {
    var theme = localStorage.getItem("theme");
    if (theme == "light") {
        toggle_dark();
    } else if (theme == "dark") {
        toggle_light();
    }
}

function toggle_dark() {
    localStorage.setItem("theme", "dark");
    document.getElementById("theme").href = "css/dark.css";
}

function toggle_light() {
    localStorage.setItem("theme", "light");
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

function get_page() {
    var page = localStorage.getItem("page");
    if (page == "experience") {
        experience_click();
    } else if (page == "projects") {
        projects_click();
    } else {
        about_click();
    }
}

function about_click() {
    localStorage.setItem("page", "about");
    document.getElementById("nav-about").classList.add("active");
    document.getElementById("nav-experience").classList.remove("active");
    document.getElementById("nav-projects").classList.remove("active");

    document.getElementById("about").style.display = "block";
    document.getElementById("experience").style.display = "none";
    document.getElementById("projects").style.display = "none";
}

function experience_click() {
    localStorage.setItem("page", "experience");
    document.getElementById("nav-about").classList.remove("active");
    document.getElementById("nav-experience").classList.add("active");
    document.getElementById("nav-projects").classList.remove("active");

    document.getElementById("about").style.display = "none";
    document.getElementById("experience").style.display = "block";
    document.getElementById("projects").style.display = "none";
}

function projects_click() {
    localStorage.setItem("page", "projects");
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
