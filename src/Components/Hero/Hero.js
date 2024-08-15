import React ,{useState, useEffect} from 'react';
import './Hero.css';
import profile from '../../assets/gokul.svg'

const Hero = () => {
  
  const [loopNum, setLoopNum]= useState(0);
  const [isDeleting, setIsDeleting]= useState(false);
  const toRotate = ["FrontEnd","BackEnd","Node Js", "React JS","MERN Stack","FullStack"];
  const [text, setText]= useState('');
  const [delta, setDelta]= useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(()=>{
    let ticker = setInterval(()=> {
      tick();
    }, delta)
    return ()=> {clearInterval(ticker)};
  },[text]);

  const tick =()=> {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if(isDeleting) {
      setDelta(prevData => prevData / 2)
    }

    if(!isDeleting && updatedText === fullText)
      {
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updatedText === '')
    {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }


  return (
    <div id='home' className='hero'>
      <img src={profile} alt='profileimg'/>
      <h1><span>I' m Gokul Easwaran, </span> </h1>
      <h1><span className='changetext'>{text}</span> Developer</h1>
      <p>I am a frontend developer from Madurai, India with 1 years of Experiences</p>
        <div className="hero-action">
            <div className='hero-connect'>Connect With Me</div>
            <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default Hero
