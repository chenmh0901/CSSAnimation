import './style.css' // 假设你已经将CSS代码保存在styles.css文件中
import img1 from './Images/1.jpg'
import img2 from './Images/2.jpg'
import img3 from './Images/3.png'

const images = [img1, img2, img3, img1, img2, img3]

export default function ImageWallAnimation() {
  return (
    <div className="image__container">
      {images.map((src, index) => (
        <div className="image__box" key={index}>
          <img src={src} alt={src} className="i" />
        </div>
      ))}
    </div>
  )
}
