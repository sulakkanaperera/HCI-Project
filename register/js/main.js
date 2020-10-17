
$(document).on('blur', '[data-validator]', function () {
    new Validator($(this));
});

$('#register-form #register-btn').on('click', '[data-validator]', function () {
    new Validator($(this));
});