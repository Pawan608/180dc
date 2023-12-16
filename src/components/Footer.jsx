import React from "react";
import insta from "../assets/insta.png";
import linkedIn from "../assets/linkedInFooter.png";
import mail from "../assets/mail.png";

export default function Footer() {
    return (
        <footer id="footer" className="bottom-0">
            <hr class="h-1 my-6 bg-lime-600 border-0 dark:bg-lime-700"/>

            <div className="flex flex-col md:flex-row bg-white">
                <div className="flex flex-col basis-1/2 md:p-3 md:justify-start">
                    <div>
                        <p className="text-xl md:text-4xl lg:text-5xl font-bold text-center text-lime-600">
                            CONTACT US
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center my-2 ">
                        <div className="flex flex-row justify-start items-center">
                            <a href="mailto:bitm@180dc.org"><img src={mail} alt="..." className="h-7 w-7 m-1"/></a>
                                <p className="text-xs md:text-lg lg:text-xl font-extralight m-1">
                                bitm@180dc.org
                            </p>
                        </div>
                        <div className="flex flex-row justify-start items-center">
                            <a href="https://www.linkedin.com/company/180-degrees-consulting-bit-mesra/mycompany/" target="_blank" rel="noopener noreferrer"><img
                                src={linkedIn} alt="..." className="h-7 w-7 m-1"/></a>
                                <p className="text-xs md:text-lg lg:text-xl font-extralight m-1">
                                    180dcbitmesra
                            </p>
                        </div>
                        <div className="flex flex-row justify-start items-center">
                            <a href="https://www.instagram.com/180dcbitmesra" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram" className="h-7 w-7 m-1"/>
                            </a>
                            <p className="text-xs md:text-lg lg:text-xl font-extralight m-1">
                                180dcbitmesra
                            </p>
                        </div>

                    </div>
                </div>

                <div className="basis-1/2 md:basis-1/3 md:ml-auto justify-center align-middle text-lime-600 font-mono ">
                    <h1 className='hidden md:block' style={{
                        position: 'relative',
                        top: '20%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '2',
                    }}>Subscribe to 180 DC BITM Newsletter</h1>
                    <iframe

                        src="https://180dcbitmnewsletter.substack.com/embed"
                        className="w-full md:w-auto newsletter"
                        scrolling="no"
                        style={{background: 'transparent'}}
                        frameborder="0"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}
