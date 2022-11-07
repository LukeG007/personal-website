function triggerDark() {
    if (theme == "light") {
        theme = "dark";
        document.cookie = "theme=dark; SameSite=Lax";
        theme_stylesheet = document.getElementById("theme_stylesheet");
        theme_stylesheet.href = "/static/css/themes/dark.css"
    } else {
        if (theme == "dark") {
            theme = "light";
            document.cookie = "theme=light; SameSite=Lax";
            theme_stylesheet = document.getElementById("theme_stylesheet");
            theme_stylesheet.href = "/static/css/themes/light.css"
        }
    }
}
