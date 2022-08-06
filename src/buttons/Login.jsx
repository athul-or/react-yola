import React from 'react'

const Login = () => {
    return (
        <div className="bg-warning">
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                            <div className="card shadow-2-strong shadow-lg p-3 mb-5 bg-body rounded" >
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Sign in</h3>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email' />
                                        {/* <label className="form-label" for="typeEmailX-2">Email</label> */}
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='Password' />
                                        {/* <label className="form-label" for="typePasswordX-2">Password</label> */}
                                    </div>

                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label className="form-check-label ms-2" for="form1Example3">Remember password </label>
                                    </div>

                                    <button className="btn btn-outline-warning btn-lg btn-block" type="submit">Login</button>

                                    <hr className="my-4" />
                                    <p className="text-center text-muted mt-3 mb-0">Don't have an account? <a href="/Register"
                                                className="fw-bold text-body"><u>Register</u></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login