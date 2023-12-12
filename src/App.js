import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/CreateTask' element={<CreateTaskRoute/>}>
            </Route>
          </Routes>
          <Footer/>
        </Layout>
      </BrowserRouter>
    </React.StrictMode>,
)