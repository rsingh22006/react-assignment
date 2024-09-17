export const getInputData = (type, formData, showPassword, errors) => {
    const {
        checkName,
        checkUsername,
        checkEmail,
        checkPhoneNumber,
        checkPassword,
        checkConfirmNewPassword
    } = errors;
    const inputDataObj = {
        name: {
            name: 'name',
            value: formData?.name,
            labelValue: 'NAME',
            error: checkName
        },
        username: {
            name: 'username',
            value: formData?.username,
            labelValue: 'USERNAME',
            error: checkUsername
        },
        email: {
            name: 'email',
            type: 'email',
            value: formData?.email,
            labelValue: 'EMAIL',
            error: checkEmail
        },
        phoneNumber: {
            name: 'phoneNumber',
            type: 'number',
            value: formData?.phoneNumber,
            labelValue: 'PHONE NO.',
            error: checkPhoneNumber
        },
        password: {
            name: 'password',
            show: typeof showPassword==='boolean'?showPassword:showPassword.password,
            value: formData?.password,
            labelValue: type === 'login' ? 'PASSWORD' : 'NEW PASSWORD',
            error: checkPassword
        },
        confirmNewPassword: {
            name: 'confirmNewPassword',
            show: showPassword.confirmNewPassword,
            value: formData?.confirmNewPassword,
            labelValue: 'CONFIRM NEW PASSWORD',
            error: checkConfirmNewPassword
        }
    }
    return Object.keys(formData).map(el => inputDataObj[el])
}