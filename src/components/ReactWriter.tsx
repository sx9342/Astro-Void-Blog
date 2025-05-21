import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Writer = () => {
    const [words]= React.useState(['Show Must Go On!', '迷子でもいい、迷子でも進め!', '色は匂へど、散りぬるを'])
  return (
    <div className='App'>
    <h1 style={{ paddingTop: '5rem', margin: 'auto 0' }}>
      <span className="text-gray-700 dark:text-gray-300">
        <Typewriter
          words={words}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500} // 优化后的停留时间
          cursorColor="currentColor" // 同步光标颜色
        />
      </span>
    </h1>
  </div>
  )
}
export default Writer