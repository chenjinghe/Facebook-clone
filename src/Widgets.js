import React from 'react'
import "./Widgets.css"
function Widgets() {
    return (
        <div className="Widgets">
            {/* https:www.facebook.com/plugins/page.pnp?href=https%3A%2Fwww.facebooke.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_hrader=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId */}
            <iframe src="https://www.facebook.com/plugins/page.pnp?href=https%3A%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_hrader=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="100%"
                style={{border:'none', overflow:'hidden'}}
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
           ></iframe>
        </div>
    )
}
 
export default Widgets
