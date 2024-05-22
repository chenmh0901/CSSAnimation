import './style.css';

function MouseFollowAnimation() {
  const handleMouseMove = (e, btn) => {
    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTop;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  }

  return (
    <div className='mousebox'>
      <a className='a' href="#" style={{ '--clr': '#0f0' }} onMouseMove={(e) => handleMouseMove(e, e.target)}><span className='aspan'>Button</span></a>
      <a className='a' href="#" style={{ '--clr': '#ff0' }} onMouseMove={(e) => handleMouseMove(e, e.target)}><span className='aspan'>Button</span></a>
      <a className='a' href="#" style={{ '--clr': '#f0f' }} onMouseMove={(e) => handleMouseMove(e, e.target)}><span className='aspan'>Button</span></a>
    </div>
  );
}

export default MouseFollowAnimation;
