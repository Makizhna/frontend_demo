import React from 'react'
import {Link} from 'react-router-dom';
export default function NotFound() {
  return (
    <div className= 'page not found'>
        <h1>404 not found the page</h1>
        <h2><Link to="/portal/home">Back to HomePage</Link></h2>
        <img src="https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png" style={{width:500,height:300}}/>
    </div>
  )
}
