$('#link-section a').on('click', '[data-validator]', function () {
    window.location.replace("profile.html");
});

$(document).on('blur', '[data-validator]', function () {
    new Validator($(this));
});
