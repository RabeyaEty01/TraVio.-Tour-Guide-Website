import React from 'react';

const Footer = () => {
    return (
      
            <div class="bg-dark">
                <h4 class="p-5 text-white">Our Top Cities</h4>
                <div class="p-5 pt-0 text-start">
                    <div class="row">
                        <div class="col text-white">
                            <h6>San Francisco</h6>
                            <h6>Miami</h6>
                            <h6>San Diego</h6>
                            <h6>San Diego</h6>
                            <h6>Long Beach</h6>

                        </div>
                        <div class="col text-white">
                            <h6>Los Angeles</h6>
                            <h6>Washington DC</h6>
                            <h6>Seattle</h6>
                            <h6>Portland</h6>
                            <h6>Nashville</h6>
                        </div>
                        <div class="col text-white">
                            <h6>New York City</h6>
                            <h6>Orange County</h6>
                            <h6>Atlanta</h6>
                            <h6>Charlotte</h6>
                            <h6>Denver</h6>
                        </div>
                        <div class="col text-white">
                            <h6>Chicago</h6>
                            <h6>Phoenix</h6>
                            <h6>Las Vegas</h6>
                            <h6>Sacramento</h6>
                            <h6>Oklahoma City</h6>
                        </div>
                        <div class="col text-white">
                            <h6>Columbus</h6>
                            <h6>New Mexico</h6>
                            <h6>Albuquerque</h6>
                            <h6>Sacramento</h6>
                            <h6>New Orleans</h6>
                        </div>
                    </div>
                    <hr className="text-secondary"/>
                </div>

                <div class="p-5 pt-0 text-start">
                    <div class="row row-cols-lg-4">
                        <div class="col text-white">
                            <h4 class="pb-3">Company</h4>
                            <h6>About us</h6>
                            <h6>Team</h6>
                            <h6>Careers</h6>
                            <h6>Blog</h6>

                        </div>
                        <div class="col text-white">
                            <h4 class="pb-3">Contact</h4>
                            <h6>Help & Support</h6>
                            <h6>Partner with us </h6>
                            <h6>Ride with us</h6>
                        </div>
                        <div class="col text-white">
                            <h4 class="pb-3">Legal</h4>
                            <h6>Terms & Conditions</h6>
                            <h6>Refund & Cancellation</h6>
                            <h6>Privacy Policy</h6>
                            <h6>Cookie Policy</h6>

                        </div>
                        <div class="col text-white">
                            <h4 class="pb-3">Follow Us</h4>
                            <div class="d-flex">
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-facebook ps-3"></i>
                                <i class="fab fa-twitter ps-4"></i>
                            </div>
                            <p class="pt-3">Receive exclusive offers in your mailbox</p>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Enter Your Mail"
                                    aria-label="Enter Your Mail" aria-describedby="button-addon2"/>
                                    <button
                                    class="btn btn-outline-secondary text-white shadow">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <hr className="text-secondary"/>
                    <div className ="text-white d-flex justify-content-between">
                    <p>All rights Reserved <i class ="far fa-copyright"></i> GATEWAY Travel Guide, 2021</p>
                    <p>Made with <i class ="fas fa-heart text-warning "></i> by <b>Rabeya Ety</b></p>

                    </div>
                </div>
            </div>
    );
};

export default Footer;