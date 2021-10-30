import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo1.png';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="dark"  sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Brand href="#home">
                        <img className="justify-content-start" height="20px" width="100px" src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className="text-white" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-white"  as={HashLink} to="#">Blogs</Nav.Link>
                        {user.email &&

                            <>
                                <Nav.Link className="text-white" as={HashLink} to="/myOrders">My Orders</Nav.Link>
                                <Nav.Link className="text-white" as={HashLink} to="/manageOrders">Manage All Orders</Nav.Link>
                                <Nav.Link className="text-white" as={HashLink} to="/addService">Add A New Service</Nav.Link>

                                <Nav.Link>
                                    <h6 className="my-3 text-white" type="text" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">My Profile</h6>

                                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                        <div className="offcanvas-header">
                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">


                                            {user.email &&
                                                <Navbar.Text>
                                                    <span>  <img width="150px" height="150px" className="rounded-circle my-3" src={user.photoURL} alt="" /></span>
                                                    <h1>{user.displayName}</h1>
                                                    <p>Email: {user.email}</p>
                                                    <div className="text-start py-3 mx-2">
                                                        <h5 className="my-4"> <i className="text-primary fas fa-user"></i>  Manage My Account</h5>
                                                        <h5 className="my-4"><i className="text-primary fas fa-box"></i> My Appointment</h5>
                                                        <h5 className="my-4"><i className="text-primary fas fa-heart"></i> My Wishlist</h5>
                                                        <h5><i className="text-primary fas fa-grin-hearts"></i> Fllowed Services</h5>
                                                        <h5 className="my-4"><i className="text-primary fas fa-star"></i> My Reviews</h5>
                                                        <h5 className="my-4"><i className="text-primary fas fa-times-circle"></i> My Cancellations</h5>
                                                        <Button onClick={logOut} variant="danger rounded-pill px-4 text-white"><i className="fas fa-sign-out-alt text-white"></i> Sign Out</Button>
                                                    </div>
                                                </Navbar.Text>

                                            }

                                        </div>
                                    </div>


                                </Nav.Link>

                            </>


                        }

                        {user.email &&
                            <Navbar.Text>
                              <small className="text-white">Signed in as:</small>
                                <span className="text-primary"> {user.displayName}</span>
                                <span>  <img width="39px" height="39px" className="rounded-circle" src={user.photoURL} alt="" /></span>
                            </Navbar.Text>

                        }


                        {
                            user.email ?
                                <Nav.Link>
                                    <Button onClick={logOut} variant="danger rounded-pill px-4 text-white"><i className="fas fa-sign-out-alt text-white"></i> Sign Out</Button>
                                </Nav.Link>
                                :
                                <>
                                    <Nav.Link as={HashLink} to="/login">
                                        <Button variant=" btn-sign rounded-pill px-4 text-white"><i className="fas fa-sign-in-alt text-white"></i> Sign In</Button>
                                    </Nav.Link>

                                    <Nav.Link as={HashLink} to="/register">
                                        <Button variant=" btn-sign rounded-pill px-4 text-white"><i className="fas fa-sign-in-alt text-white"></i> Sign Up</Button>
                                    </Nav.Link>
                                </>
                        }






                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;