export default function Navbar() {
    function toggleHamburger() {
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        const hamburgerMenuList = document.querySelector('.hamburger-menu-item');

        hamburgerIcon.classList.toggle("active");
        hamburgerMenuList.classList.toggle("active");

    }

    return <section>
        <div className='header-section'>
            <div className="desktop-header">
                <div className="header-name font-medium">
                    Nagarajan S
                </div>
                <div className="header-menu">
                    <ul className="menu-item">
                        <li><a href='#about'>About</a></li>
                        <li><a href='#experience'>Experience</a></li>
                        <li><a href='#project'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="mobile-header">
                <div className="header-name font-medium">
                    Nagarajan S
                </div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggleHamburger}>
                        <div className='hamburger'></div>
                        <div className='hamburger'></div>
                        <div className='hamburger'></div>
                    </div>

                    <div className="hamburger-menu-item">
                        <a href='#about' onClick={toggleHamburger}>About</a>
                        <a href='#experience' onClick={toggleHamburger}>Experience</a>
                        <a href='#project' onClick={toggleHamburger}>Projects</a>
                        <a href='#contact' onClick={toggleHamburger}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}