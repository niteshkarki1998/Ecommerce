import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Day from './Day'
import Week from './Week'

const Deals = () => {
    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <h2>Deals and Promotion</h2>
                    <span>Shop Today’s Deals, Lightning Deals, and limited-time discounts</span>
                    <div className="col-md-2 p-3 shadow" style={{ backgroundColor: '#f5f5f5' }}>
                        <h4>Category</h4>
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Mobiles
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Laptops
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Clothes
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Mobile Accesoories
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Books
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Men's Fashion
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Women's Fashion
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Kid's Fashion
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Custom's and Accesories
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Camera and Photo
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Motorcycles
                                </label>
                            </div>
                            <Link className="text-decoration-none btn btn-info"> See more</Link>
                        </form>
                        <div className="mt-2">
                            <h4>Deals Type</h4>
                            <Link to="#" className="text-decoration-none">Deals of the Day</Link><br />
                            <Link to="#" className="text-decoration-none">Lightening Deals</Link><br />
                            <Link to="#" className="text-decoration-none">Saving and Sales</Link><br />
                            <Link to="#" className="text-decoration-none">Weekend Deals</Link>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="shadow p-2">
                            <center><h3>Deals of the Day</h3></center>
                        </div>
                        <Day />
                        <div className="shadow p-2">
                            <center><h3>Deals of the Week</h3></center>
                        </div>
                        <Week />
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Deals
