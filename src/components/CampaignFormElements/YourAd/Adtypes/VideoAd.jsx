import React,{useState} from 'react'
import ReactPlayer from 'react-player'
import './videoaspect.css';

const VideoAd = ({fileUrl}) => {
  const [duration, setDuration] = useState(null);
  const [error,setError] = useState('');

  const handleDuration = (dur) => {
    console.log('duration',dur)
    if(dur<=20){
      setDuration(dur);
      setError('')
    }else{
      setError(`your video Ad duration is ${parseFloat(dur).toFixed(2)} and maximum allowed duration is of 20 seconds for better visibility`)
    }
  }
  return (
    <>
    <div className="video-container rounded-md border-2 border-slate-400 shadow-lg">
        <ReactPlayer
        className='react-player'
        url={fileUrl}
        width='100%' // Make the player take up full width
        height='100%' // Make the player take up full height
        controls={false}
        muted={false}
        playing={true}
        onDuration={handleDuration}
        loop={true}
        poster=''
        config={{
            file: {
            attributes: {
                poster: true, // Optional: Show a placeholder image until the video loads
            },
            },
        }}
        />
  </div>
  {error && fileUrl && <div className='p-1 bg-red-600 bg-opacity-20 text-red-900 font-bold mt-2 rounded-md'>{error}</div>}
  </>
  )
}

export default VideoAd