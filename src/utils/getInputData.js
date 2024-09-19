export const getInputData = (isTypeLogin, formData, showPassword, errors) => {
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
            id:1,
            name: 'name',
            value: formData?.name,
            labelValue: 'NAME',
            error: checkName
        },
        username: {
            id:2,
            name: 'username',
            value: formData?.username,
            labelValue: 'USERNAME',
            error: checkUsername
        },
        email: {
            id:3,
            name: 'email',
            type: 'email',
            value: formData?.email,
            labelValue: 'EMAIL',
            error: checkEmail
        },
        phoneNumber: {
            id:4,
            name: 'phoneNumber',
            type: 'number',
            value: formData?.phoneNumber,
            labelValue: 'PHONE NO.',
            error: checkPhoneNumber
        },
        password: {
            id:5,
            name: 'password',
            show: typeof showPassword==='boolean'?showPassword:showPassword.password,
            value: formData?.password,
            labelValue: isTypeLogin === 'login' ? 'PASSWORD' : 'NEW PASSWORD',
            error: checkPassword
        },
        confirmNewPassword: {
            id:6,
            name: 'confirmNewPassword',
            show: showPassword.confirmNewPassword,
            value: formData?.confirmNewPassword,
            labelValue: 'CONFIRM NEW PASSWORD',
            error: checkConfirmNewPassword
        }
    }
    return Object.keys(formData).map(el => inputDataObj[el])
}