import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

  return (
    <div className='main'>
       <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div> 
        <div className="main-container">
        
        {!showResult
        ?<>
           <div className="greet">
            <p><span>Hello, Sumit.</span></p>
            <p>How can I help you today?</p>
           </div>
           <div className="cards">
              <div className="card">
                <p>Playful and intellectually curious, Gemini is constantly juggling a variety of passions, hobbies, careers, and friend groups.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>They are the social butterflies of the zodiac: These quick-witted twins can talk to anyone about anything.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Gemini season begins on May 21, a day that ushers in the heat and electricity of summer.</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p> These curious twins are terrific pioneers, using their energy to spearhead innovative creative projects.</p>
                <img src={assets.code_icon} alt="" />
              </div>
           </div>
        </>
        :<div className="result">
           <div className="result-title">
             <img src={assets.user_icon} alt="" />
             <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
               <img src={assets.gemini_icon} alt="" />
               {loading
               ?<div className='loader'>
                <hr />
                <hr />
                <hr />
               </div>
               :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
               }
            </div>
        </div>
        }

           <div className="main-bottom">
             <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a Prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                </div>
             </div>
             <p className="bottom-info">
             Gemini is the star sign born between May 22 and June 22, and belong to the Air element of.  
             </p>
           </div>
        </div>
    </div>
  )
}

export default Main