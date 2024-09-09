export const handleKeyDown = (event) => {
    const ALPHA = /^[a-zA-Z ]*$/;
    const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,"]*$/;
    if (event.target.name === 'name') {
        let n = event.target.value.length, value = event.target.value;
        let lastS = value[n - 1];
        if (!ALPHA.test(event.key) || (lastS === ' ' && event.key === ' ') || (n < 1 && event.key === ' ')) event.preventDefault();
    }
    else if (event.target.name === 'phoneNumber' && (event.key === '.' || event.key === 'e')) event.preventDefault();
    else if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault();
}
export const handlePaste = (event) => {
    if (event.target.name === 'phoneNumber' && event.clipboardData.getData('text').includes('e')) event.preventDefault();
}
export const getInputSignupData = (formData, focusData, showPassword, checkName, checkUsername, checkEmail, checkPhoneNumber, checkNewPassword, checkConfirmNewPassword,
    handleChange, handlePaste, handleChangeFocusAndBlur, handleClickShow) => {
    return [
        {
            name: 'name',
            value: formData.name,
            labelValue: 'NAME',
            focus: focusData.name,
            error: checkName,
            handleKeyDown,
            handlePaste,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'username',
            value: formData.username,
            labelValue: 'USERNAME',
            focus: focusData.username,
            error: checkUsername,
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
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'phoneNumber',
            type: 'number',
            value: formData.phoneNumber,
            labelValue: 'PHONE NO.',
            focus: focusData.phoneNumber,
            error: checkPhoneNumber,
            handleKeyDown,
            handlePaste,
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
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur,
            handleClickShow
        }
    ]
}