import { useEffect, useState } from 'react'
import './style.css'

function ClockAnimation() {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
    amPm: 'AM',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      let hr = date.getHours() % 12
      const amPm = date.getHours() >= 12 ? 'PM' : 'AM'
      hr = hr === 0 ? 12 : hr

      setTime({
        sec: date.getSeconds(),
        min: date.getMinutes(),
        hr,
        amPm,
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const renderDots = (count: number, activeIndex: number, rotationStep: number) => {
    const dots = []
    for (let i = 1; i <= count; i++) {
      const rotation = i * rotationStep
      const isActive = i === activeIndex
      dots.push(
        <div
          key={i}
          className={`dot ${isActive ? 'active' : ''}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        />,
      )
    }
    return dots
  }

  return (
    <div id="box">
      <div id="clock">
        <div id="hrDots" style={{ '--clr': '#ff2972' } as React.CSSProperties}>
          {renderDots(12, time.hr, 30)}
          <h2>
            {time.hr < 10 ? `0${time.hr}` : time.hr}
            <br />
            <span>Hours</span>
          </h2>
        </div>
        <div id="minDots" style={{ '--clr': '#fee800' } as React.CSSProperties}>
          {renderDots(60, time.min, 6)}
          <h2>
            {time.min < 10 ? `0${time.min}` : time.min}
            <br />
            <span>Minutes</span>
          </h2>
        </div>
        <div id="secDots" style={{ '--clr': '#04fc43' } as React.CSSProperties}>
          {renderDots(60, time.sec, 6)}
          <b>{time.amPm}</b>
          <h2>
            {time.sec < 10 ? `0${time.sec}` : time.sec}
            <br />
            <span>Seconds</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ClockAnimation
