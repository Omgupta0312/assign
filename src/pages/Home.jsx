import React from 'react'
import "./home.scss"
import SideBar from '../components/sideBar/SideBar'

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='left'>
                    <SideBar />
                </div>
                <div className='right'>
                    <div className='container inner'>
                        <div className='row'>

                            <div className='col-5'>
                                <div className='upper'></div>
                                <div className='mid '>

                                    <div className='mid-left'></div>
                                    <div></div>
                                    <div className=' mid-right'></div>

                                </div>
                                <div className='down'>

                                </div>
                            </div>

                            <div className='col-7 right-cont'>
                                <div className='rightUpper'>
                                </div>
                                <div className='rightMid'>
                                </div>
                                <div className='rightLow'>
                                    <div className='right-low-left'></div>
                                    <div></div>
                                    <div className='right-low-right'></div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}

export default Home