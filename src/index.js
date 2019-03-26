import $ from 'jquery';

const footer = $('body>footer'),
    footerContainerRight = footer.find('.col-md-18');

let footerContentRight = `
<a href="https://thrivedatascience.com" title="Thrive Data Science" target="_blank" class="link-footer">
    <img src="https://thrivedatascience.com/images/logo.png" alt="Thrive Data Science" />
</a>`;

footerContainerRight.innerHTML = footerContentRight