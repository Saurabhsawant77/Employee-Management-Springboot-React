import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    {/* <h1 className="text-center">Hello Saurabh</h1> */}
    <BrowserRouter>
    <Header />
    <Routes>
      {/* <Route path="/" element={<ListEmployeeComponent />}></Route> */}
      <Route path="/employees" element={<ListEmployeeComponent />}></Route>
      <Route path="/add-employee" element={<EmployeeComponent />}></Route>
      <Route path="/edit-employee/:id" element={<EmployeeComponent />}></Route>
    </Routes>
    
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
