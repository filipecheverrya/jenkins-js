import mainCss from './css/index.css'
import logoJenkins from './img/jenkins-logo.svg'
import logoThrive from './img/thrive-logo.svg'

let footer = document.querySelector('footer .container-fluid .row');
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
`;


setTimeout(() => {
    footer.innerHTML = footerContent
    
}, 500);