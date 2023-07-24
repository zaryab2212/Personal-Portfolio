import React from 'react'

const Header = () => {
    return (
        <div className='header-container' id='home'>
            <div className='header-left'>
                <div className='profile-image'>
                    <img src={"/images/Profile.png"} />
                </div>
            </div>
            <div className='header-right'>
                <div className='header-right-content'>
                    <h3>Full Stack Developer</h3>
                    <h1>Zaryab Ikram</h1>
                    <p>"Hello! I'm a passionate and dedicated web developer with a focus on creating captivating and user-friendly websites. I have a solid educational background in web development and continuously strive to stay updated with the latest trends and technologies in this ever-evolving industry.</p>
                    <div className='header-right-button'>
                        <a href='full-stack.pdf' download="full-stack.pdf"><button>Download</button></a>
                        <a href='#contact'><button>Contact</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header