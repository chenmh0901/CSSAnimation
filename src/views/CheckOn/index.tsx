import { useState } from 'react'
import './style.css'
import Box from '@/components/box'

export default function CheckOnAnimation() {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!checked)
  }

  return (
    <Box>
      <input type="checkbox" style={{ margin: '10px 0' }} onChange={handleCheckboxChange} />
      <svg width="400" height="400">
        <circle
          fill="none"
          stroke="#68E534"
          strokeWidth="20"
          cy="200"
          cx="200"
          r="190"
          className={`circle ${checked ? 'animate' : ''}`}
          strokeLinecap="round"
        />
        <polyline
          fill="none"
          stroke="#68E534"
          strokeWidth="24"
          points="88,214 173,284 304,138"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stick ${checked ? 'animate' : ''}`}
        />
      </svg>
      <h2 className={`h2 ${checked ? 'visible' : ''}`}>支付成功</h2>
    </Box>
  )
}
