import React from 'react'
import './style.css'

function Products() {
    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 mb-3 p-3">
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/A1.jpg" className="card-img-top" alt="..." style={{ height: '300px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily:'Arial', textAlign:'center'}}>Acer Predator Helios</h5>
                                <button className="button">Shop Now   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/A2.jfif" className="card-img-top" alt="..." style={{ height: '300px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily:'Arial', textAlign:'center'}}>HP Omen Gaming</h5>
                                <button className="button">Shop Now   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/A3.jfif" className="card-img-top" alt="..." style={{ height: '300px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily:'Arial', textAlign:'center'}}>MSI GF65</h5>
                                <button className="button">Shop Now   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/A4.jpg" className="card-img-top" alt="..." style={{ height: '300px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily:'Arial', textAlign:'center'}}>Lenovo Ideapad Slim</h5>
                                <button className="button">Shop Now   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/A5.jfif" className="card-img-top" alt="..." style={{ height: '300px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily:'Arial', textAlign:'center'}}>XPS 13(2020)</h5>
                                <button className="button">Shop Now   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/A6.jpg" className="card-img-top" alt="..." style={{ height: '300px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily:'Arial', textAlign:'center'}}>Intel Core</h5>
                                <button className="button">Shop Now   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/A7.jfif" className="card-img-top" alt="..." style={{ height: '300px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily:'Arial', textAlign:'center'}}>Microsoft Surface Laptop</h5>
                                <button className="button">Shop Now   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/A8.jpg" className="card-img-top" alt="..." style={{ height: '300px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily:'Arial', textAlign:'center'}}>LG Gram Laptop</h5>
                                <button className="button">Shop Now   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
