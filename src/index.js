var footer_logo = '<a href="https://thrivedatascience.com" target="_blank" title="Thrive Data Science"><img src="https://thrivedatascience.com/images/logo.png" alt="Thrive Data Science" width="120" height="40" /></a>',
    header_logo = '<img src="https://thrivedatascience.com/images/logo.png" alt="Thrive Data Science" width="120" height="40" />',
    contact_info = '<a href="mailto:comercial@thrivedatascience.com" title="Thrive Data Science" class="contact-lnk">comercial@thrivedatascience.com</a>'

contact_info += '<a href="tel:+5553997039577" title="Thrive Data Science" class="contact-lnk">+55 53 9 9703 9577</a>'
contact_info += '<span class="contact-lnk">Rua Santa Cruz, 2439 - Pelotas, RS</span>'

function footerLogo() {
    document.querySelector('body>footer .page_generated').innerHTML = footer_logo;
}
function headerLogo() {
    var elem = document.getElementById('jenkins-home-link');
    elem.setAttribute('href', 'https://jenkins.thrivedatascience.com/');
    elem.innerHTML = header_logo;
}
function footerContact() {
    document.getElementById('footer').innerHTML = contact_info;
}

setTimeout(() => {
    footerLogo();
    headerLogo();
    footerContact();
}, 100);