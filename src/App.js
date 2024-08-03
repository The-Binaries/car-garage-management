import React from 'react'
import Header from './components/Header'
import AdminForm from './components/AdminForm'
import CarForm from './components/CarForm'
// import CarList from './components/CarList'
import MechanicManagement from './components/MechanicManagement'



const App = () => {
  return (
    <div style={{padding: '4rem'}}>
      <AdminForm />
      <Header />
      <CarForm />
      <MechanicManagement />
    </div>
  )
}

export default App
