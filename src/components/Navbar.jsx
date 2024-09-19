export const Navbar = ({ path }) => {
    let text = '', paraText = '', headtextSize = '';
    const handleNavDetails = () => {
        if (!path || path === 'signup') text = 'Create new Account';
        else if (path === 'login') {
            text = 'Login';
            paraText = 'Sign in to continue';
            headtextSize = '4xl';
        }
        else if (path === 'dashboard') text = 'Dashboard';
        else if (path === 'profile') text = 'Profile';
    }
    handleNavDetails();
    return (
        <div className='navDiv'>
            <p className={`navFirstP ${headtextSize ? `text-${headtextSize}` : ''}`}>
                {text}
            </p>
            {paraText &&
                <p className='navSecondP'>
                    {paraText}
                </p>
            }
        </div>
    )
}