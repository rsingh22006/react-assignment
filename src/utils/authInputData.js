export const handleKeyDown = (event) => {
    const ALPHA = /^[a-zA-Z ]*$/;
    const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,"]*$/;
    if (event.target.name === 'name') {
        let n = event.target.value.length, value = event.target.value;
        let lastS = value[n - 1];
        console.log('key',event.key)
        console.log("1 ALPHA.test(event.key)",ALPHA.test(event.key));
        console.log("2 (lastS === ' ' && event.key === ' ')",(lastS === ' ' && event.key === ' '));
        console.log("3 (n < 1 && event.key === ' ')",(n < 1 && event.key === ' '))
        if (!ALPHA.test(event.key) || (lastS === ' ' && event.key === ' ') || (n < 1 && event.key === ' ')) event.preventDefault();
    } else if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault();
}
export const getInputSignupData = (formData, focusData, showPassword, checkUsername, checkEmail, checkNewPassword, checkConfirmNewPassword,
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
            handleClickShow
        }
    ]
}