import React from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
// import './R.css'
import Home from './Home'
import About from './About'
import Service from './Service'
import Blog from './Blog'
import Contact from './Contact'
import Profile1 from './Profile1'
import Profile2 from './Profile2'
import Nfp from './Nfp'
import Btn from './Btn'
import Dash from './Dash'

const Routing = () => {
  return (
    <>
   
    <BrowserRouter>
    <header>
        <nav className='nav'>
        <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/service">SERVICE</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
       
        <li>
          <Link>Profile</Link>
          <li><Link to={"/profile/profile1"}>Profile1</Link></li>
          <li><Link to={"/profile/profile2"}>Profile2</Link></li>
        </li>

        <li><Link to="/login">loginpage</Link></li>

        </ul>
        </nav>
    </header>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

        <Route path='/profile'>
            <Route path='profile1' element={<Profile1/>} />
            <Route path='profile2' element={<Profile2/>} />
        </Route>

        <Route path='/login' element={<Btn/>} />
        <Route path='/dash' element={<Dash/>} />

        <Route path='*' element={<Nfp/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing