import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";

function LoginComponent() {
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">
            <MDBRow>

                <MDBCol sm='6'>

                    <div className='flex-column justify-content-center h-custom-2 w-75 pt-4'>
                        <div className='d-flex flex-row ps-5 pt-5'>
                            <MDBIcon fas icon="crow fa-3x me-3" style={{color: '#709085'}}/>
                            <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h3 className="fw-normal mb-3 ps-5 pb-3 text-center" style={{letterSpacing: '1px'}}>Log in</h3>

                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email'
                                  size="lg"/>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password'
                                  size="lg"/>

                        <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
                        <div className='d-flex flex-row mt-3 mb-5'>
                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='facebook-f' size="lg"/>
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='twitter' size="lg"/>
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='google' size="lg"/>
                            </MDBBtn>
                        </div>
                        <p className="small mb-5 pb-lg-3 ms-5"><Link to={'/'} className="text-muted" href="#!">Forgot
                            password?</Link></p>
                        <p className='ms-5'>Don't have an account? <Link to={'/'} className="link-info">Register
                            here</Link></p>

                    </div>

                </MDBCol>

                <MDBCol sm='6' className='d-none d-sm-block px-0'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                         alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}}/>
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default LoginComponent;
