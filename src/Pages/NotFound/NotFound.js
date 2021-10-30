import React from 'react';
import { Link } from 'react-router-dom';
import notfoundimg from '../../images/404.png';
const NotFound = () => {
    return (
        <div>
        <img className="my-5 img-fluid h-50" src={notfoundimg} alt="" />
        <h5>It's Look Like The Page You Are Looking For Is Not Found.</h5>
        <Link to="/home">
           <small className="btn btn-primary rounded-pill px-4"><i className="fas fa-arrow-circle-left text-white"></i> Go Back</small>
        </Link>
    </div>
    );
};

export default NotFound;