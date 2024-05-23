import Box from '@/components/box'
import './style.css'

const cards = [-4, -3, -2, -1, 0, 1, 2, 3, 4]

export default function CardAnimation() {
  return (
    <Box>
      <div className="card__container">
        {cards.map((i, index) => (
          <div className="card" style={{ '--i': `${i}` } as React.CSSProperties} key={index}>
            {index + 1}
          </div>
        ))}
      </div>
    </Box>
  )
}
