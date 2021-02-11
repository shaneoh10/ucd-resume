function sendMail(contactForm) {
    emailjs.send('ucd_resume', 'rosie', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'project_request': contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log('SUCCESS', response);
            document.getElementById('form').innerHTML = `<h2>Thanks for your message!</h2>`;
        },
        function(error) {
            console.log('FAILED', error);
        });

    return false;    
}