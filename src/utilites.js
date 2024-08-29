export const containsAlphabetsNumbersAndSpecialChars=(str)=>{
    return (/[A-Za-z]/.test(str) && /[0-9]/.test(str) && /[!@#$%^&*(),.?":{}|<>]/.test(str));
}