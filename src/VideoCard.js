
import React from 'react'
import { Avatar } from '@mui/material'

function VideoCard({image ,title, channel, views, timeStamp,channelImage}) {
  return (
   
    <div className="videoCard">
     <img className="videoCard_thumbnail" src={image} alt="" />
     <div className='videoCard_info'>
       <Avatar 
        className="videoCard_avatar"
        alt={channel}
        src={channelImage}
       />
       
       <div className='videoCard_text'>
         <h4>{title}</h4>
         <p>{channel}</p>
         <p>
            {views} • {timeStamp}
         </p>
         </div>
     </div>
  </div>
  )
}

export default VideoCard