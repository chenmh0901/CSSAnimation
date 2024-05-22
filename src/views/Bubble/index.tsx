import './style.css'

export default function BubbleAnimation() {
  const bubbles = Array.from({length: 30}, () => Math.floor(Math.random() * 30)+1);

  return (
    <div className="bubblebox">
      <div className="bubblecontainer">
        <div className="bubbles">
          {bubbles.map(i => (
            <span key={i} style={{'--i': i}} className='bspan'></span>
          ))}
        </div>
      </div>
    </div>
  );
}


