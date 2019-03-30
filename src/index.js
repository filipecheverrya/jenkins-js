import mainCss from './css/index.css'
import logoJenkins from './img/jenkins-logo.svg'
import logoThrive from './img/thrive-logo.svg'

const footerContent =
`
<div class="col-md-8">
    <a href="https://thrivedatascience.com/" class="footer-logo-thrive" target="_blank" title="Thrive Data Science">${logoThrive}</a>
</div>
<div class="col-md-8">
    <a href="mailto:support@thrivedatascience.com" class="contact-lnk" title="support@thrivedatascience.com">support@thrivedatascience.com</a>
</div>
<div class="col-md-8">
    <a href="https://jenkins.thrivedatascience.com/" class="jenkins-lnk" target="_blank" title="Jenkins">JENKINS</a>
</div>
`,
    headerLogo = 
`
<a href="https://jenkins.thrivedatascience.com/" class="header-jenkins-logo" title="Jenkins">${logoJenkins}</a>
`
function footerLogo() {
    document.querySelector('body>footer .row').innerHTML = footerContent;
}
function logoHeader() {
    var elem = document.getElementById('#header .logo');
    elem.innerHTML = headerLogo;
}

setTimeout(() => {
    footerLogo();
    logoHeader();
}, 750);