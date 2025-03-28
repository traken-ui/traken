import { useState } from 'react'
import Avatar from './components/avatar/avatar'


function App() {

  return (
<div className='flex  justify-center items-center h-screen gap-4 p-4'>
<Avatar size={"xl"} color='secondary' radius='lg' name='krishna'  src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
<Avatar/>
<Avatar/>
<Avatar/>
<Avatar/>
<Avatar/>
</div>
  )
}

export default App
