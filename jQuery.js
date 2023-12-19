$(document).ready(function () {
    $('#accept').click(function () {
        if ($('#submit').is(':disabled')) {
            $('#submit').removeAttr('disabled');
        } else {
            $('#submit').attr('disabled', 'disabled');
        }
    });

    $("#submit").click(function (event) {
        event.preventDefault();
        $(".error").remove();

        if ($("#name").val() === "") {
            $("#name").after('<span class="error">Please enter your name</span>');
        }

        var phone = $("#phone").val();

        if (phone === "") {
            $("#phone").after('<span class="error">Please enter your phone number</span>');
        } else if (!/^\d{10}$/.test(phone)) {
            $("#phone").after('<span class="error">Phone number should be in 10 digits</span>');
        } else if (phone.length > 10) {
            $("#phone").after('<span class="error">Phone number should be in 10 digits</span>');
        }


        var image = $("#image")[0].files[0];
        if (!image) {
            $("#image").after('<span class="error">Please select an image</span>');
        } else {
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(image.name)) {
                $("#image").after('<span class="error">Invalid file type. Please select a valid image file.</span>');
            }
        }

        var email = $("#email").val();
        if (email === "") {
            $("#email").after('<span class="error">Please enter your email</span>');
        } else {
            var emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
            if (!emailRegex.test(email)) {
                $("#email").after('<span class="error">Please enter a valid email address</span>');
            }
        }

        if (!$("input[name='gender']:checked").val()) {
            $("label[for='gender']").after('<span class="error">Please select your gender</span>');
        }

        var dob = $("#dob").val();

        if (dob === "") {
            $("#dob").after('<span class="error">Please enter your date of birth</span>');
        } else {
            var userDob = new Date(dob);
            var currentDate = new Date();

            if (userDob >= currentDate) {
                $("#dob").after('<span class="error">Date of birth cannot be in the future</span>');
            }
        }

        if ($("#password").val() === "") {
            $("#password").after('<span class="error">Please enter your password</span>');
        }

        var confirmPassword = $("#confirmpassword").val();
        if (confirmPassword === "") {
            $("#confirmpassword").after('<span class="error">Please confirm your password</span>');
        } else {
            var password = $("#password").val();
            if (password !== confirmPassword) {
                $("#confirmpassword").after('<span class="error">Passwords do not match</span>');
            }
        }
    });
});



