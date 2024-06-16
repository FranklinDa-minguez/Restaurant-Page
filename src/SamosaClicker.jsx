import { useState } from 'react'

const SamosaClicker = () => {
  const [count, setCount] = useState(0)

  const Add = () => {

    setCount(count + 1)
    console.log(count)

  }

  return (
    <>
      <h1 className=' text-red-600'>Click the Samosa</h1>
      <p>{count}</p>
      <button onClick={Add}><img src="samosa.jpg" alt="" /></button>
    </>
  )
}

export default SamosaClicker
