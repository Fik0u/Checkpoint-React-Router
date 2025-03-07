import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()

  return (
    <>
    <div className='error' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'beige'}}>
      <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick = {()=> navigate('/')} style={{backgroundColor: '#7c7256'}}>Back Home</Button>}
  />
    </div>
  </>
  )
}

export default Error
