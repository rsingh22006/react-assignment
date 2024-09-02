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