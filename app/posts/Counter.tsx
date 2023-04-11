'use client'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      count {count}
      <div style={{ margin: '1rem 0' }}>
        <button
          onClick={() => {
            setCount((count) => count + 1)
          }}
        >
          increment counter
        </button>
        <button
          onClick={() => {
            setCount(0)
          }}
        >
          reset counter
        </button>
      </div>
    </>
  )
}

export default Counter
