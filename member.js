<script>
    // Form elements
    const nameEl = document.querySelector('#name');
    const studentIDEl = document.querySelector('#studentID');
    const courseEl = document.querySelector('#course');
    const yearEl = document.querySelector('#year');
    const emailEl = document.querySelector('#email');
    const genderEl = document.querySelector('#gender');
    const contactEl = document.querySelector('#contact');
    const form = document.querySelector('#registrationForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent the form from submitting
        // validate fields
        let isNameValid = checkName(),
            isStudentIDValid = checkStudentID(),
            isCourseValid = checkCourse(),
            isYearValid = checkYear(),
            isEmailValid = checkEmail(),
            isGenderValid = checkGender(),
            isContactValid = checkContact();

        let isFormValid = isNameValid && isStudentIDValid && isCourseValid && isYearValid && isEmailValid && isGenderValid && isContactValid;

        // Submit the form if all fields are valid
        if (isFormValid) {
            alert('Form submitted successfully!');
        }
    });

    const checkName = () => {
        let valid = false;
        const name = nameEl.value.trim();
        if (!isRequired(name)) {
            showError(nameEl, 'Name cannot be blank.');
        } else {
            showSuccess(nameEl);
            valid = true;
        }
        return valid;
    };

    const checkStudentID = () => {
        let valid = false;
        const studentID = studentIDEl.value.trim();
        if (!isRequired(studentID)) {
            showError(studentIDEl, 'Student ID cannot be blank.');
        } else {
            showSuccess(studentIDEl);
            valid = true;
        }
        return valid;
    };

    const checkCourse = () => {
        let valid = false;
        const course = courseEl.value;
        if (!isRequired(course)) {
            showError(courseEl, 'Please select a course.');
        } else {
            showSuccess(courseEl);
            valid = true;
        }
        return valid;
    };

    const checkYear = () => {
        let valid = false;
        const year = yearEl.value;
        if (!isRequired(year)) {
            showError(yearEl, 'Please select a year.');
        } else {
            showSuccess(yearEl);
            valid = true;
        }
        return valid;
    };

    const checkEmail = () => {
        let valid = false;
        const email = emailEl.value.trim();
        if (!isRequired(email)) {
            showError(emailEl, 'Email cannot be blank.');
        } else if (!isEmailValid(email)) {
            showError(emailEl, 'Email is not valid.');
        } else {
            showSuccess(emailEl);
            valid = true;
        }
        return valid;
    };

    const checkGender = () => {
        let valid = false;
        const gender = genderEl.value;
        if (!isRequired(gender)) {
            showError(genderEl, 'Please select your gender.');
        } else {
            showSuccess(genderEl);
            valid = true;
        }
        return valid;
    };

    const checkContact = () => {
        let valid = false;
        const contact = contactEl.value.trim();
        const contactRegex = /^1[67]\d{6}|77\d{6}$/; // Regex for Bhutanese numbers
        if (!isRequired(contact)) {
            showError(contactEl, 'Contact number cannot be blank.');
        } else if (!contactRegex.test(contact)) {
            showError(contactEl, 'Contact number is not valid.');
        } else {
            showSuccess(contactEl);
            valid = true;
        }
        return valid;
    };

    // Helper functions
    const isRequired = value => value === '' ? false : true;

    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const showError = (input, message) => {
        const formField = input.parentElement;
        formField.classList.remove('success');
        formField.classList.add('error');
        const error = formField.querySelector('small');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        const formField = input.parentElement;
        formField.classList.remove('error');
        formField.classList.add('success');
        const error = formField.querySelector('small');
        error.textContent = '';
    };
</script>
