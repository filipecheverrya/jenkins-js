import mainCss from './css/index.css'
import logoJenkins from './img/jenkins-logo.svg'
import logoThrive from './img/thrive-logo.svg'

const footerContent =
`
<div class="row">
    <div class="col-md-16">
        <a href="https://thrivedatascience.com/" class="footer-logo-thrive" target="_blank" title="Thrive Data Science">${logoThrive}</a>
    </div>
    <div class="col-md-16">
        <a href="https://jenkins.thrivedatascience.com/" class="jenkins-lnk" target="_blank" title="Jenkins">JENKINS</a>
        <a href="mailto:support@thrivedatascience.com" class="jenkins-lnk" title="support@thrivedatascience.com">support@thrivedatascience.com</a>
    </div>
</div>
`,
    headerLogo = 
`
<a href="https://jenkins.thrivedatascience.com/" class="header-jenkins-logo" title="Jenkins">${logoJenkins}</a>
`

function footerLogo() {
    document.querySelector('body>footer .container-fluid .row').insertAdjacentHTML('beforebegin', footerContent)
}
function logoHeader() {
    var elem = document.querySelector('#header .logo');
    elem.innerHTML = headerLogo;
}

setTimeout(() => {
    footerLogo();
    logoHeader();
}, 750);