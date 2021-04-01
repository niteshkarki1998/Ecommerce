import React from 'react'

 const Contactform=()=> {
    return (
        <>
            
                <div className="col-md-6 shadow-lg p-5">
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
                            <label htmlFor="contact">Contact Number</label>
                            <input type="number" className="form-control" placeholder="Contact Details" />
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" placeholder="Your Queries.............."></textarea>
                        </div>
                        <div className="col-8 mt-3 offset-md-2">
                        <button className="btn btn-primary form-control">Send</button>
                        </div>
                    </form>

                </div>
            
        </>
    )
}

export default Contactform
