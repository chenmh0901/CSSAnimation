function Card({title, content, onClick}: {title: string, content: string, onClick: () => void}){
  return (
    <div className="card w-full bg-primary text-primary-content" >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end" onClick={onClick}>
          <button className="btn btn-primary">查看</button>
        </div>
      </div>
    </div>
  )
}
export default Card


