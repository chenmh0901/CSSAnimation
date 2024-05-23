import './style.css'

export default function BubbleAnimation() {
  const bubbles = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30) + 1)

  return (
    <div className="bubblecontainer">
      <div className="bubbles">
        {bubbles.map(i => (
          // @ts-expect-error TypeScript does not allow custom CSS variables in style attribute, but it's valid in this case.
          <span key={i} style={{ '--i': i }} className="bspan"></span>
        ))}
      </div>
    </div>
  )
}
