export default function Card({ title, content, onClick }: { title: string, content: string, onClick: () => void }) {
  // Generate two random colors
  const randomColor1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  const randomColor2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`

  return (
    <div className="card w-full text-primary-content" style={{ background: `linear-gradient(90deg, ${randomColor1} 0%, ${randomColor2} 100%)` }}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={onClick}>查看</button>
        </div>
      </div>
    </div>
  )
}
