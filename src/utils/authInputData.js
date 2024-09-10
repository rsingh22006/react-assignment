export const getInputLoginData = (formData,showPassword, errors) => {
    const {checkUsername, checkPassword} = errors;
    return [
        {
            name: 'username',
            value: formData.username,
            labelValue: 'USERNAME',
            error: checkUsername,
        },
        {
            name: 'password',
            show: showPassword,
            value: formData.password,
            labelValue: 'PASSWORD',
            error: checkPassword
        }
    ]
}
export const getInputSignupData = (formData,showPassword, errors) => {
    const {checkName, checkUsername, checkEmail, checkPhoneNumber, checkNewPassword, checkConfirmNewPassword} = errors;
    return [
        {
            name: 'name',
            value: formData.name,
            labelValue: 'NAME',
            error: checkName
        },
        {
            name: 'username',
            value: formData.username,
            labelValue: 'USERNAME',
            error: checkUsername
        },
        {
            name: 'email',
            type: 'email',
            value: formData.email,
            labelValue: 'EMAIL',
            error: checkEmail
        },
        {
            name: 'phoneNumber',
            type: 'number',
            value: formData.phoneNumber,
            labelValue: 'PHONE NO.',
            error: checkPhoneNumber
        },
        {
            name: 'newPassword',
            show: showPassword.newPassword,
            value: formData.newPassword,
            labelValue: 'NEW PASSWORD',
            error: checkNewPassword
        },
        {
            name: 'confirmNewPassword',
            show: showPassword.confirmNewPassword,
            value: formData.confirmNewPassword,
            labelValue: 'CONFIRM NEW PASSWORD',
            error: checkConfirmNewPassword
        }
    ]
}