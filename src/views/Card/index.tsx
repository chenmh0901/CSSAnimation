import './style.css'; // 假设你已经将CSS代码保存在styles.css文件中

const cards = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

function CardAnimation() {
  return (
    <div className='box'>
      <div className="container">
        {cards.map((i, index) => (
          <div className="card" style={{ '--i': i }} key={index}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardAnimation;
