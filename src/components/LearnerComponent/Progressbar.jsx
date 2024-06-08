import React,{useState} from 'react'

function Progressbar() {

  const [progress, setProgress] = useState(0)
  const handleButtonClick =()=>{

    if (progress < 100){

      setProgress(progress + 20);
    }
  }

  const handleButtonReset = () =>{

    setProgress(0);
  };


  const getcolor= () =>{

    if (progress < 40){

      return "#ff0000";
    } else if (progress < 70){

      return "#ffa500"
    }else{

      return "#2ecc"
    }
  };

  return (
    <div className='container'>

      <div className='progress-bar'>



      <div className='progress-bar-fill'>Progress bar</div>
      </div>
      <div className='progress-label'>{progress}%</div>
      <button onClick={handleButtonClick}>Progress</button>
      <button onClick={handleButtonReset}>Reset</button>
    </div>
  )
}

export default Progressbar