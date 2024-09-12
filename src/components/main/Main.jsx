import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    } = useContext(Context);


    return (
        <div className="main">
            <div className="nav">
                <p>French Tutor</p>
                <img src={assets.user_icon} alt='' />
            </div>

            <div className="main-container">

                {!showResult ? <>
                    <div className="greet">
                        <p><span>Hello, Students.</span></p>
                        <p>How can I help you today?</p>
                    </div>

                    <div className="cards">
                        <div className="card">
                            <p>Lets have a conversation in french</p>
                            <img src={assets.message_icon} alt='' />
                        </div>

                        <div className="card">
                            <p>How to greet someone in french</p>
                            <img src={assets.bulb_icon} alt='' />
                        </div>

                        <div className="card">
                            <p>Places to see in France</p>
                            <img src={assets.compass_icon} alt='' />
                        </div>

                        <div className="card">
                            <p>French exam in Canada?</p>
                            <img src={assets.question_icon} alt='' />
                        </div>
                    </div>

                </> : <div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>

                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />

                        {loading 
                        ?  <div className='loader'> 
                        <hr />
                        <hr />
                        <hr />                    
                        
                        </div> :
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p> }

                        
                    </div>
                </div>
            }



                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Question Prompt' />
                        <div>
                            <img src={assets.gallery_icon} alt='' />
                            <img src={assets.mic_icon} alt='' />
                            <img onClick={() => onSent()} src={assets.send_icon} alt='' />
                        </div>
                    </div>
                    <p className="bottom-info"></p>

                </div>

            </div>
        </div>
    )
}

export default Main