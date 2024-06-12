import React from 'react';
import './AddressComponent.css'; // Import your CSS file with component styles

const AddressComponent = () => {
    return (
        <div>
            <div className="address-container">
                <div className="image-container">
                    <img src="office.png" alt="Image" className="image" />
                </div>
                <div className="text-container">
                    <div className="text-card">
                        <div className="company-name">
                            Advent Chembio Pvt. Ltd.

                        </div>
                    </div>
                    <div>
                        <div className="address">
                            W-288, T.T.C. Industrial Area, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701
                            <div className="contact-info">
                                <img src="phone.png" alt="Phone" className="phone-icon" />
                                <span className="phone-number">+91 7777084837</span>
                            </div>
                            <div className="logos">
                                <a href="https://www.linkedin.com/company/advent-chembio-private-limited/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                                    <img src="linkedin.png" alt="Logo 1" className="logo" />
                                </a>
                                <a href="https://x.com/adventchembio" target="_blank" rel="noopener noreferrer">
                                    <img src="twitter.png" alt="Logo 1" className="logo1" />
                                </a>
                                <a href="https://www.youtube.com/channel/UC-GCkjLJDkG_QlfgU-cIMXA" target="_blank" rel="noopener noreferrer">
                                    <img src="yt.png" alt="Logo 1" className="logo2" />
                                </a>


                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className="additional-content">
                <div className="textbox1">
                    <div className="card">
                        <div className="facility-name">
                            FDA approved manufacturing facility
                        </div>
                    </div>
                    <div className="address-1">
                        W-279, MIDC, TTC Rabale, Navi Mumbai - 400701, Bharat
                        <div className="contact-info">
                            <img src="phone.png" alt="Phone" className="phone-icon" />
                            <span className="phone-number">+91 7777084837</span>
                        </div>

                    </div>

                </div>
                <div className="textbox2">
                <div className="card">
                        <div className="facility-name">
                        Central Warehouse
                        </div>
                    </div>
                    <div className="address">
                    Sri Arihant Complex, Building No.I-12 Gala No. 1 to 5, Kalher village, at Kopar Bhiwandi, Thane - 421302
                        <div className="contact-info">
                            <img src="phone.png" alt="Phone" className="phone-icon" />
                            <span className="phone-number">+91 7777084837</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressComponent;