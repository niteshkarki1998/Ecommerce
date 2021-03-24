import React from 'react'
import NavBar from '../NavBar'//one step outside so two dots//
import Footer from '../Footer'

const Signup = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5 mb-3">
                <div className="col-md-6 offset-md-3 shadow-lg p-5">
                    <form>
                        <div className="col-12 mb-3">
                            <label htmlFor="username">Name</label>
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm password" />
                        </div>
                        <div className="col-8 mt-3 offset-md-2">
                        <button className="btn btn-primary form-control">Sign Up</button>
                        </div>
                    </form>

                </div>
            </div>

            <Footer />


        </>
    )
}

export default Signup