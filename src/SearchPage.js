
import React from 'react'
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
  return (
    <div className='searchPage'>
       <div className="searchPage_filter">
       <TuneIcon />
        <h2>FILTER</h2>
       </div>
       <hr/>

       <ChannelRow 
         channel="Clever Programmer"
         image="https://yt3.ggpht.com/ytc/AMLnZu_GS4vuibuZjr4ZBgVr97RrriUQrrhqeyWQWqMYfQ=s176-c-k-c0x00ffffff-no-rj-mo"
         verified
         subs="660k"
         noOfVideos={384}
         description="You can find awesome Programming right here, tips and tricks that will take your coding skills to the ..."
       />
       
       <hr/>

       <VideoRow 
        views ="1.4M"
        subs ="659K"
        channel="Clever Programmer"
        description="We just created a todo list clone using React JS, Solidity,Next.js & Truffle"
        timestamp="59 seconds ago"
        title="Build a ToDo App with Solidity,Next.js & Truffle"
        image="https://i.ytimg.com/vi/awQTDVvYyjI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJFv9bakFZBba3-4aAbM_JNMV3AA"

       />
      <VideoRow 
        title="High-Profit Margins without VC funding"
        views="2.3M"
        channel="Intelectual Indies"
        timeStamp="3 days ago"
        image="https://i.ytimg.com/vi/fnVbAgN0rpU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKnGcpTlFMPnuM_IBLHoPnT7QOWQ"
        subs ="3.6M"
        description="We just created a High-Profit Margins without VC funding,Next.js & Truffle"
      />

      <VideoRow 
        title="This startup is making coffee...without coffee beans"
        views="1.3M"
        timeStamp="9 months ago"
        image="https://i.ytimg.com/vi/k_rg5p5SZxY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9IqzaqolClgzD2WRgrNaK_oqLiQ"
        channel="Intelectual Indies"
        subs ="1.2M"
        description="startup is making coffee. clone using React JS, Solidity,Next.js & Truffle"
      />

        <VideoRow
          title="Ep2 Ankara - Docu-Vlog - Nouman Ali Khan - Europe Tour 2022"
          views="3.5M"
          timeStamp="13 days ago"
          image="https://i.ytimg.com/vi/DZIPg6ICAHs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmck9G4lRz0BHkFcMV0J8I1jQR3Q"
          channel="Bayyinah Institute"
          subs ="959K"
          description="Europe Tour 2022 clone using React JS, Solidity,Next.js & Truffle"
        />
        <VideoRow
          title="Q&A: My education background, personal life, introversion, and more!"
          views="99k"
          timeStamp="11 months ago"
          image="https://i.ytimg.com/vi/EDeygRPhRdk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaHmFSqaDIaTuAxHm3_iGEOGsVUQ"
          channel="Soch by Mohak Mangal"
          subs ="459K"
          description="We just created a My education background, personal life, Solidity,Next.js & Truffle"
        />
      <VideoRow 
        title="High-Profit Margins without VC funding"
        views="2.3M"
        timeStamp="3 days ago"
        image="https://i.ytimg.com/vi/fnVbAgN0rpU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKnGcpTlFMPnuM_IBLHoPnT7QOWQ"
        channel="Intelectual Indies"
        subs ="65K"
        description="We just created a High-Profit Margins without VC funding, Solidity,Next.js & Truffle"
      />
      <VideoRow 
        views ="1.4M"
        subs ="659K"
        channel="Clever Programmer"
        description="We just created a todo list clone using React JS, Solidity,Next.js & Truffle"
        timestamp="59 seconds ago"
        title="Build a ToDo App with Solidity,Next.js & Truffle"
        image="https://i.ytimg.com/vi/awQTDVvYyjI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJFv9bakFZBba3-4aAbM_JNMV3AA"
       />
    </div>
  )
}

export default SearchPage