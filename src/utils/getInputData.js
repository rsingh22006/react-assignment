export const getInputData = (isTypeLogin, formData, showPassword, errors) => {
    const inputDataObj = {
        name: {
            name: 'name',
            value: formData?.name,
            labelValue: 'NAME',
            error: errors?.checkName
        },
        username: {
            name: 'username',
            value: formData?.username,
            labelValue: 'USERNAME',
            error: errors?.checkUsername
        },
        email: {
            name: 'email',
            type: 'email',
            value: formData?.email,
            labelValue: 'EMAIL',
            error: errors?.checkEmail
        },
        phoneNumber: {
            name: 'phoneNumber',
            type: 'number',
            value: formData?.phoneNumber,
            labelValue: 'PHONE NO.',
            error: errors?.checkPhoneNumber
        },
        password: {
            name: 'password',
            show: typeof showPassword==='boolean'?showPassword:showPassword.password,
            value: formData?.password,
            labelValue: isTypeLogin === 'login' ? 'PASSWORD' : 'NEW PASSWORD',
            error: errors?.checkPassword
        },
        confirmNewPassword: {
            name: 'confirmNewPassword',
            show: showPassword.confirmNewPassword,
            value: formData?.confirmNewPassword,
            labelValue: 'CONFIRM NEW PASSWORD',
            error: errors?.checkConfirmNewPassword
        }
    }
    return Object.keys(formData).map((el,idx) =>{
        return {...inputDataObj[el],id:idx+1}
    })
}