export const handlePaste = (event) => {
    if (event.clipboardData.getData('text').includes('e')){
        event.preventDefault();
    }
}
export const handleKeyDown = (event) => {
    const ALPHA = /^[a-zA-Z ]*$/;
    const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,"]*$/;
    if (event.target.name === 'name') {
        let n = event.target.value.length, value = event.target.value;
        let lastS = value[n - 1];
        if (!ALPHA.test(event.key) || (lastS === ' ' && event.key === ' ') || (n < 1 && event.key === ' ')) {
            event.preventDefault();
        }
    }
    else if (event.target.name === 'phoneNumber' && (event.key === '.' || event.key === 'e')) {
        event.preventDefault();
    } else if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) {
        event.preventDefault();
    }
}

export const handleNavDetails = (path,isAuthenticated) => {
    let text='',paraText='',headtextSize='';
    if (!path || path === 'signup') text = 'Create new Account';
    else if (path === 'login') {
        text = 'Login';
        paraText = 'Sign in to continue';
        headtextSize = '4xl';
    }
    else if (path === 'dashboard') text = 'Dashboard';
    else if (path === 'profile' && isAuthenticated) text = 'Profile';
    else if (path === 'profile' && !isAuthenticated) text = 'Signup';
    return {text,paraText,headtextSize};
}