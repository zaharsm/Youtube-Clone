
import React from 'react';
import "./ChannelRow.css";
import { Avatar } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

function ChannelRow({image,subs,noOfVideos,verified,description,channel}) {
  return (
    <div className='channelRow'>
       <Avatar className='channelRow_logo' alt={channel} src={image}/>
       <div className='channelRow_text'>
           <h4>{channel} {verified && <CheckCircleOutlinedIcon />}</h4>
           <p>
            {subs} subcribers • {noOfVideos} videos
           </p>
           <p>
            {description}
           </p>

       </div>

    </div>
  )
}

export default ChannelRow