import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj={
   username: "Deep",
   age:21
  };

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl  mb-5' >tailwind CSS test </h1>
     <div className="flex flex-row space-x-4"> {/* Flex container to align cards horizontally */}
        <Card  username="Deepak " someobj={myobj}/>
        <Card username="NJ"/>
      </div>
     
    </>
  )
}

export default App
