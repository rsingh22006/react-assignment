const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,"]*$/;
const ALPHA = /^[a-zA-Z ]*$/;
const ALPA_NUM = /[a-zA-Z0-9]/;
export const initFormData = { name: '', username: '', email: '', phoneNumber: '', newPassword: '', confirmNewPassword: '' };
export const initFocusData = { name: false, username: false, email: false, phoneNumber: false, newPassword: false, confirmNewPassword: false };

export const containsAlphabetsNumbersAndSpecialChars = (str) => {
    return (/[A-Za-z]/.test(str) && /[0-9]/.test(str) && /[!@#$%^&*(),.?":{}|<>]/.test(str));
}
export const handleCheckUsername = (username) => {
    const checkANS = containsAlphabetsNumbersAndSpecialChars(username);
    const checkFirstChar = /[A-Za-z]/.test(username[0]);
    if (username.length > 0 && !checkFirstChar) {
        return 'USERNAME must contain first alphabetic character';
    } else if (username.length > 0 && !checkANS) {
        return 'USERNAME must contain combination of alphanumeric values with special characters only';
    }
}
export const handleCheckEmail = (email) => {
    const isFirstCharRight = ALPA_NUM.test(email[0]);
    if(email.length>0){
        if(!isFirstCharRight)return 'Your EMAIL first word should be a-z or 0-9';
        else if(!validateEmail())return 'Your EMAIL is invalid';
    }

    function validateEmail() {
        let re = /^[a-zA-Z0-9]+@gmail|@yahoo|@outlook\.com$/;
        return ((isFirstCharRight && re.test(email) && email.includes('.com')));
    }
}
export const handleCheckNewPassword = (username, newPassword) => {
    let check = containsAlphabetsNumbersAndSpecialChars(newPassword);
    if ((!check || username === newPassword) && newPassword.length > 0) {
        if (username === newPassword && !check) {
            return 'USERNAME and PASSWORD should not be same, PASSWORD must contain combination of alphanumeric values with special characters only';
        } else if (username === newPassword) {
            return 'USERNAME and PASSWORD should not be same';
        } else return 'PASSWORD must contain combination of alphanumeric values with special characters only';
    }
}
export const handleCheckConfirmNewPassword = (newPassword, confirmNewPassword) => {
    if ((newPassword && confirmNewPassword) && (newPassword !== confirmNewPassword) && confirmNewPassword.length > 0) {
        return 'CONFIRM PASSWORD must be same as NEW PASSWORD';
    }
}
export const handleKeyDown = (event) => {
    if (event.target.name === 'name') {
        let n = event.target.value.length, value = event.target.value;
        let lastS = value[n - 1];
        if (!ALPHA.test(event.key) || (lastS === ' ' && event.key === ' ') || (n < 1 && event.key === ' ')) event.preventDefault();
    } else if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault();
}
export const getInputSingupData = (
    formData, focusData, showPassword, checkUsername,checkEmail, checkNewPassword, checkConfirmNewPassword,
    handleChange, handleChangeFocusAndBlur, handleClickShow) => {
    const checkPhoneNumber = formData.phoneNumber.length > 9 && formData.phoneNumber.length <= 10;
    return [
        {
            name: 'name',
            value: formData.name,
            labelValue: 'NAME',
            focus: focusData.name,
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'username',
            value: formData.username,
            labelValue: 'USERNAME',
            focus: focusData.username,
            error: checkUsername,
            errorDetail: checkUsername,
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'email',
            type: 'email',
            value: formData.email,
            labelValue: 'EMAIL',
            focus: focusData.email,
            error: checkEmail,
            errorDetail: checkEmail,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'phoneNumber',
            type: 'number',
            value: formData.phoneNumber,
            labelValue: 'PHONE NO.',
            focus: focusData.phoneNumber,
            error: !checkPhoneNumber && formData.phoneNumber.length > 0,
            errorDetail: 'Your PHONE NO. is invalid, it must include 10 numbers',
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'newPassword',
            show: showPassword.newPassword,
            value: formData.newPassword,
            labelValue: 'NEW PASSWORD',
            focus: focusData.newPassword,
            error: checkNewPassword,
            errorDetail: checkNewPassword,
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur,
            handleClickShow,
        },
        {
            name: 'confirmNewPassword',
            show: showPassword.confirmNewPassword,
            value: formData.confirmNewPassword,
            labelValue: 'CONFIRM NEW PASSWORD',
            focus: focusData.confirmNewPassword,
            error: checkConfirmNewPassword,
            errorDetail: checkConfirmNewPassword,
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur,
            handleClickShow,
        }
    ]
}

export const getInputLoginData = (formData, focusData, showPassword, checkUsername, checkPassword,
    handleChange, handleChangeFocusAndBlur, handleClickShow) => {
    return [
        {
            name: 'username',
            value: formData.username,
            labelValue: 'USERNAME',
            focus: focusData.username,
            error: checkUsername,
            errorDetail: checkUsername,
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'password',
            show: showPassword,
            value: formData.password,
            labelValue: 'PASSWORD',
            focus: focusData.password,
            error: checkPassword,
            errorDetail: checkPassword,
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur,
            handleClickShow: handleClickShow
        }
    ]
}