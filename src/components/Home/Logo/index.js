// import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logomain.png'
import './index.scss'

const Logo = () => {
  // const bgRef = useRef()
  // const outlineLogoRef = useRef()
  // const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 20,
  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 1.4,
  //       duration: 2.4,
  //     }
  //   )
  // }, [])

  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        
        src={LogoS}
        alt="Developer"
      />

      
          
    </div>
  )
}

export default Logo