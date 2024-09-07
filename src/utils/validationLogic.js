export const containsAlphabetsNumbersAndSpecialChars = (str) => {
    return (/[A-Za-z]/.test(str) && /[0-9]/.test(str) && /[!@#$%^&*(),.?":{}|<>]/.test(str));
}
export const containsSpace = (str) => /\s/.test(str);
export const handleCheckName = (name) => {
    const ALPHA_REGEX = /^[a-zA-Z ]*$/;
    if(name.length>0 && !ALPHA_REGEX.test(name)) return 'NAME is invalid, only alphabates are allowed!';
}
export const handleCheckUsername = (username) => {
    const checkANS = containsAlphabetsNumbersAndSpecialChars(username);
    const checkSpace = containsSpace(username);
    const checkFirstChar = /[A-Za-z]/.test(username[0]);
    if(username.length > 0) {
        if(checkSpace)return 'USERNAME must not contain space, please remove that';
        if(!checkFirstChar)return 'USERNAME must contain first alphabetic character';
        else if(!checkANS)return 'USERNAME must contain combination of alphanumeric values with special characters only';
        else if(username.length < 8 || username.length > 30)return 'USERNAME must consist minimum 8 or maximum 30 characters';
    }
}
export const handleCheckEmail = (email) => {
    const ALPA_NUM = /[a-zA-Z0-9]/;
    const isFirstCharRight = ALPA_NUM.test(email[0]);
    if (email.length>0) {
        if (!isFirstCharRight) return 'Your EMAIL first word should be a-z or 0-9';
        else if (!validateEmail()) return 'Your EMAIL is invalid';
    }

    function validateEmail() {
        let check = /^[a-zA-Z0-9]+@\S+\.com$/;
        return ((isFirstCharRight && check.test(email) && email.includes('.com')));
    }
}
export const handleCheckPhoneNumber = (phoneNumber) => {
    const ALPA_NUM = /^[0-9][^.]*$/;
    if (phoneNumber.length>0){
        if (!ALPA_NUM.test(phoneNumber)) return 'PHONE NO. is invalid, remove "." from it';
        if (phoneNumber.length > 9 && phoneNumber.length <= 10) return 'Your PHONE NO. is invalid, it must include 10 numbers';
    }
}
export const handleCheckNewPassword = (username, password) => {
    let check = containsAlphabetsNumbersAndSpecialChars(password);
    const checkSpace = containsSpace(password);
    if (password.length > 0) {
        if (checkSpace) {
            return 'PASSWORD must not contain space, please remove that';
        }
        if (username === password && !check) {
            return 'USERNAME and PASSWORD should not be same, PASSWORD must contain combination of alphanumeric values with special characters only';
        } else if (username === password) {
            return 'USERNAME and PASSWORD should not be same';
        } else if (!check) {
            return 'PASSWORD must contain combination of alphanumeric values with special characters only';
        } else if (password.length < 8 || password.length > 20) {
            return 'PASSWORD must consist minimum 8 or maximum 20 characters';
        }
    }
}
export const handleCheckConfirmNewPassword = (newPassword, confirmNewPassword) => {
    if ((newPassword && confirmNewPassword) && (newPassword !== confirmNewPassword) && confirmNewPassword.length > 0) {
        return 'CONFIRM PASSWORD must be same as NEW PASSWORD';
    }
}