import React from 'react'
import Header from './components/Header'
// import AdminForm from './components/AdminForm'
import CarManagement from './components/CarManagement'
import MechanicManagement from './components/MechanicManagement'



const App = () => {
  return (
    <div style={{padding: '2rem'}}>
      {/* <AdminForm /> */}
      <Header />
      <CarManagement />
      <MechanicManagement />
    </div>
  )
}

export default App
