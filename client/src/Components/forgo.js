import React from 'react'

function login() {
    return (
        <div>
            <section class="vh-100 gradient-custom" id='login'>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white" id='login-1' >
                                <div class="card-body p-5 text-center" id='login-form'>

                                    <div class="mb-md-5 mt-md-4 pb-5">
                                        <div data-mdb-input-init class="form-outline form-white mb-4">
                                            <label class="form-label" for="typeEmailX">Email</label>
                                            <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder='Enter your Email' />
                                        </div>
                                        <a href='/code'><button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" id='login-btn' type="submit" style={{ backgroundColor: '#110942' }}>send Code</button></a>
                                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br></br><br></br>
        </div>
    )
}

export default login
