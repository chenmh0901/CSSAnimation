import './style.css'

export default function Box(props) {
  return (
    <div className="box">
      {props.children}
    </div>
  )
}
