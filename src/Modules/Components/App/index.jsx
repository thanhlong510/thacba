import React, {createContext, useState} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import DashBoard from '../../Pages/DashBoard'
import ChartPage from '../../Pages/ChartPage'
import Map from '../../Pages/Map'
import LeftBar from '../Layout/LeftBar'
import Nav from '../Layout/Nav'
import UserManagement from '../../Pages/UserManagement'
import Section from '../../Pages/Map/Components/Section'
import Side from '../../Pages/Map/Components/Side'
import Report from '../../Pages/Report'
import Water from '../../Pages/Water'
import LogIn from '../../Pages/LogIn'


export const dangnhap = createContext()
export const creatTitle = createContext()

function App() {
  const [toggleBar, setToggleBar] = useState(true)
  const handleToggle = () => {
    setToggleBar(!toggleBar)
  }
  const [title, setTitle] = useState('Bảng tin')
  const handleTitle = (giatri) => {
    setTitle(giatri)
  }
  const [auth, setAuth] = useState(true)

  if (!auth) return <LogIn setAuth={setAuth} />
  return (
    <creatTitle.Provider value={{handleTitle: handleTitle}}>
      <div className="App flex font-poppins">
        <LeftBar toggleBar={toggleBar} />
        <div
          className={
            ' h-screen ' + (toggleBar == false ? 'nav-bar' : 'second-nav')
          }
        >
          <Nav className="text-lg" title={title} setToggleBar={handleToggle} />
          <div className="Content mt-1 overflow-auto ">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/chart" element={<ChartPage />} />
              <Route path="/water" element={<Water />} />
              <Route path="/map" element={<Map />} />
              <Route path="/report" element={<Report />} />
              <Route path="/map/:section" element={<Section />} />
              <Route path="/map/:section/:side" element={<Side />} />
              <Route path="/user" element={<UserManagement />} />
            </Routes>
          </div>
        </div>
      </div>
    </creatTitle.Provider>
  )
}

export default App
