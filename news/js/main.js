// var form = document.getElementById('newsLetter-form');
// var name = document.getElementById('exampleInputName1');
// var email = document.getElementById('exampleInputEmail1');


// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const nameValue = name.value.trim();
// 	const emailValue = email.value.trim();
	
	
// 	if(nameValue === '') {
// 		setErrorFor(name, 'name cannot be blank');
// 	} else {
// 		setSuccessFor(name);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
//     }
    	
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }



$(document).on('blur', '[data-validator]', function () {
    new Validator($(this));
});

$('#newsLetter-form #subscribe-btn').on('click', '[data-validator]', function () {
    new Validator($(this));
});


$(document).ready(function () {
    $('#newsLetter-form').submit(function () {
        var f = $(this).find('.form-group'),
            ferror = false,
            emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

        f.children('input').each(function () { // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if (rule !== undefined) {
                var ierror = false; // error flag for current input
                var pos = rule.indexOf(':', 0);
                if (pos >= 0) {
                    var exp = rule.substr(pos + 1, rule.length);
                    rule = rule.substr(0, pos);
                } else {
                    rule = rule.substr(pos + 1, rule.length);
                }

                switch (rule) {
                    case 'required':
                        if (i.val() === '') {
                            ferror = ierror = true;
                        }
                        break;

                    case 'email':
                        if (!emailExp.test(i.val())) {
                            ferror = ierror = true;
                        }
                        break;
                }
                i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
            }
        });

        if (ferror) return false;
        else var str = $(this).serialize();
        var action = $(this).attr('action');
        if (!action) {
            action = '';
        }

        var name = $('#exampleInputName1').val();
        var email = $('#exampleInputEmail1').val();


        if (!name && !email) {
            alert('Success');
        }

        // $.ajax({
        //     type: "POST",
        //     url: action,
        //     data: {
        //         name: name,
        //         email: email,
        //     },
        //     success: function (data) {
        //         if (data == 'OK') {
        //             alert('Success');
        //         } else if (data == 'Error') {
        //             alert('Error Occur')
        //         }
        //     }
        // });
        return false;
    });
});