import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Menu from './Pages/Menu.jsx'
import Cheef from './Pages/Cheef.jsx'
import Gallery from './Pages/Gallery.jsx'
import Testimonials from './Pages/Testimonials.jsx'
import Blog from './Pages/Blog.jsx'
import Faq from './Pages/Faq.jsx'
import Contact from './Pages/Contact.jsx'
import Reservation from './Pages/Reservation.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/menu' element={<Menu/>}/>
     <Route path='/chef' element={<Cheef/>}/>
     <Route path='/gallery' element={<Gallery/>}/>
     <Route path='/test' element={<Testimonials/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/faq' element={<Faq/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/reservation' element={<Reservation/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
