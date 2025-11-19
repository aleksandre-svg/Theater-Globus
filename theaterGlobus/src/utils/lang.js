export function getLang() {
    return window.location.pathname.startsWith("/en") ? "en" : "ka";
}