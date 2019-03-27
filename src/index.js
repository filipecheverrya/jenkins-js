var logo = '<a href="https://thrivedatascience.com" target="_blank" alt="Thrive Data Science"><img src="https://thrivedatascience.com/images/logo.png" alt="Thrive Data Science" width="120" height="40" /></a>'

function footerLogo() {
    document.querySelector('body>footer .page_generated').innerHTML = logo;
}
function headerLogo() {
    document.getElementById('jenkins-home-link').innerHTML = logo;
}

setTimeout(() => {
    footerLogo();
    headerLogo();
}, 750);