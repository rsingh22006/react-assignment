export const Navbar = ({ headtext, headtextSize, paraText }) => {
    console.log('hi in nav')
    return (
        <div className='navDiv'>
            <p className={`navFirstP ${headtextSize ? `text-${headtextSize}` : ''}`}>
                {headtext}
            </p>
            {paraText &&
                <p className='navSecondP'>
                    {paraText}
                </p>
            }
        </div>
    )
}