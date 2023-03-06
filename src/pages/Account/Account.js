import React from 'react'
import { Button, Container } from '../../components/index'
import { AiOutlineEdit } from "react-icons/ai";
import userImg from "../../assets/images/avatar.png"
import './Account.css'
function Account() {
    return (

        <Container>

            <form className="col-md-8 text-center m-auto container mb-4">
                <div className="row text-center">
                    <div className='col profile-user '>

                        <img src={userImg} alt='' className=' profile-picture text-center' />
                        <div className='btnEditProf'>
                            <button
                                type="button"
                                className="link-button"
                                onClick={() => this.setState({ showSomething: true })}
                            >
                                Edit Profile <AiOutlineEdit />
                            </button>
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" id="inputName" className="form-control" placeholder="Enter Your Name" required />
                    </div>
                    <div className="col">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required />
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="inputPass">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Enter Your Password" required />
                    </div>
                    <div className="col">
                        <label htmlFor="inputConfirmPass">Password</label>
                        <input type="password" id="inputConfirmPass" className="form-control" placeholder="Confirm Your Password" required />
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="inputCountry">Country</label>
                        <input type="text" id="inputCountry" className="form-control" placeholder="Enter Your Country" required />
                    </div>
                    <div className="col">
                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                        <input type="number" id="inputPhoneNumber" className="form-control" placeholder="Enter Your Phone Number" required />
                    </div>

                </div>

                <Button type="submit" text="Sign in" />
            </form>

        </Container>


    )
}

export default Account