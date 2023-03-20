import React from 'react'
import banner from "../images/banner2.jpg"
import { useState } from 'react'
import MainPage from './MainPage';
import SearchPage from './SearchPage';


const Home = () => {
  const [text, setText] = useState("");
  return (
    <div className='home'>            
            <div className='search'>
                <input placeholder='Enter Keywords ...' onChange={(e)=>setText(e.target.value)}/>
              
            </div>
        {
          text ? <SearchPage text={text}/> : <MainPage />
        }
    </div>
  )
}

export default Home