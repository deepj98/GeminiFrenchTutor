import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

export const Sidebar = () => {

    const [extended, setExtended] = useState(false);

    return (

        //This defines the overall look of sidebar via Sidebar.css class
        <div className='sidebar'>


            {/* Sidebar is divided in 2 parts This class is used for defining top part */}
            <div className="top">
                <img onClick={() => setExtended(prev=> !prev)} className='menu' src={assets.menu_icon} alt='' />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt='' />

                    {extended ? <p> New Lesson</p> : null}
                </div>

                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt='' />
                            <p>Comment Ca va...</p>
                        </div>
                    </div>
                    : null
                }
            </div>


            {/* This class is used for defining footer/bottom part of Sidebar */}
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt='' />
                    {extended ? <p>Help</p> : null }
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt='' />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt='' />
                    {extended ? <p>Settings</p> : null}
                </div>

            </div>

        </div>
    )
}
