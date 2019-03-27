var footerLogo = '<a href="https://thrivedatascience.com" target="_blank" title="Thrive Data Science"><img src="https://thrivedatascience.com/images/logo.png" alt="Thrive Data Science" width="120" height="40" /></a>',
    headerLogo = '<a href="https://jenkins.thrivedatascience.com/" title="Thrive Data Science"><img src="https://thrivedatascience.com/images/logo.png" alt="Thrive Data Science" width="120" height="40" /></a>',
    contactInfo = '<a href="mailto:comercial@thrivedatascience.com" title="Thrive Data Science" class="contact-lnk">comercial@thrivedatascience.com</a>'

contactInfo += '<a href="tel:+5553997039577" title="Thrive Data Science" class="contact-lnk">+55 53 9 9703 9577</a>'

function footerLogo() {
    document.querySelector('body>footer .page_generated').innerHTML = footerLogo;
}
function headerLogo() {
    document.getElementById('jenkins-home-link').innerHTML = headerLogo;
}
function footerContact() {
    document.getElementById('footer').innerHTML = contactInfo;
}

setTimeout(() => {
    footerLogo();
    headerLogo();
    footerContact();
}, 750);