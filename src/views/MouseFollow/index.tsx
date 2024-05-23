import Box from '@/components/box'
import './style.css'

export default function MouseFollowAnimation() {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>, btn: HTMLAnchorElement) => {
    const x = e.pageX - btn.offsetLeft
    const y = e.pageY - btn.offsetTop
    btn.style.setProperty('--x', `${x}px`)
    btn.style.setProperty('--y', `${y}px`)
  }

  return (
    <Box>
      <a className="a" href="#" style={{ '--clr': '#0f0' } as React.CSSProperties} onMouseMove={e => handleMouseMove(e, e.target as HTMLAnchorElement)}><span className="aspan">Button</span></a>
      <a className="a" href="#" style={{ '--clr': '#ff0' } as React.CSSProperties} onMouseMove={e => handleMouseMove(e, e.target as HTMLAnchorElement)}><span className="aspan">Button</span></a>
      <a className="a" href="#" style={{ '--clr': '#f0f' } as React.CSSProperties} onMouseMove={e => handleMouseMove(e, e.target as HTMLAnchorElement)}><span className="aspan">Button</span></a>
    </Box>
  )
}
