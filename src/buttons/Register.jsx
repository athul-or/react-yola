import React from 'react'

const Register = () => {
    return (
        <div className='bg-warning'>
            <section className="vh-100">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-10 col-md-9 col-lg-7 col-xl-5">
                                <div className="card shadow-2-strong shadow-lg p-3 mb-5 bg-body rounded">
                                    <div className="card-body p-5">
                                        <h2 className=" text-center mb-3">Sign Up</h2>

                                        <form>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Your Name' />
                                                {/* <label className="form-label" for="form3Example1cg">Your Name</label> */}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder='Your Email' />
                                                {/* <label className="form-label" for="form3Example3cg">Your Email</label> */}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder='Password' />
                                                {/* <label className="form-label" for="form3Example4cg">Password</label> */}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Confirm Password' />
                                                {/* <label className="form-label" for="form3Example4cdg">Repeat your password</label> */}
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-3">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label className="form-check-label" for="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                    className="btn btn-outline-warning btn-block btn-lg gradient-custom-4 ">Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-3 mb-0">Have already an account? <a href="/login"
                                                className="fw-bold text-body"><u>Login here</u></a></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register