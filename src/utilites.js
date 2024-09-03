const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,"]*$/;
const ALPHA = /^[a-zA-Z ]*$/;
export const initFormData = { name: '', username: '', email: '', phoneNumber: '', newPassword: '', confirmNewPassword: '' };
export const initFocusData = { name: false, username: false, email: false, phoneNumber: false, newPassword: false, confirmNewPassword: false };

export const containsAlphabetsNumbersAndSpecialChars=(str)=>{
    return (/[A-Za-z]/.test(str) && /[0-9]/.test(str) && /[!@#$%^&*(),.?":{}|<>]/.test(str));
}
export const handleCheckNewPassword=(username,newPassword)=>{
    let check = containsAlphabetsNumbersAndSpecialChars(newPassword);
    if (!check || username === newPassword) {
        if (username === newPassword && !check) {
            return 'USERNAME and PASSWORD should not be same, PASSWORD must contain combination of alphanumeric values with special characters only';
        } else if (username === newPassword) {
            return 'USERNAME and PASSWORD should not be same';
        } else return 'PASSWORD must contain combination of alphanumeric values with special characters only';
    }
}

export const handleKeyDown = (event) => {
    if (event.target.name === 'name') {
        let n=event.target.value.length,value=event.target.value;
        let lastS=value[n-1];
        if (!ALPHA.test(event.key) || (lastS===' ' && event.key===' ') || (n<1 && event.key===' ')) event.preventDefault();
    } else if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault();
}