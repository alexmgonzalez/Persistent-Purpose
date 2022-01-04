import React from 'react'
import {Link} from 'react-router-dom'
import './SocialMediaBar.css'

function SocialMediaBar(){
    return(
        <>
            <div className="social-media-bar">
                <section className="social-media">
                        <div className="social-icons">
                            <Link className="social-icon-link facebook"
                            to='/'
                            target="_blank"
                            aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="social-icon-link instagram"
                            to='/'
                            target="_blank"
                            aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link className="social-icon-link youtube"
                            to='/'
                            target="_blank"
                            aria-label="Youtube"
                            >
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link className="social-icon-link twitter"
                            to='/'
                            target="_blank"
                            aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="social-icon-link linkedin"
                            to='/'
                            target="_blank"
                            aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </div>
                </section>
            </div>
        </>
    );
}

export default SocialMediaBar;