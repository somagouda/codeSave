import React from 'react'
const Home = () => {
    const [title, setTitle] = React.useState('');


  return (
    <div>
        <input   className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder='enter title here' value={title} onChange={(e)=>setTitle(e.target.value)} />
      
    </div>
  )
}

export default Home
 