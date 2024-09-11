export const getInputData = (type, formData, showPassword, errors) => {
    const { checkName, checkUsername, checkEmail, checkPhoneNumber, checkPassword, checkConfirmNewPassword } = errors;
    const inputData = [
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
            name: 'password',
            show: showPassword.password,
            value: formData.password,
            labelValue: type === 'login' ? 'PASSWORD' : 'NEW PASSWORD',
            error: checkPassword
        },
        {
            name: 'confirmNewPassword',
            show: showPassword.confirmNewPassword,
            value: formData.confirmNewPassword,
            labelValue: 'CONFIRM NEW PASSWORD',
            error: checkConfirmNewPassword
        }
    ]

    if (type === 'login') return [inputData[1], inputData[4]];
    return inputData;
}