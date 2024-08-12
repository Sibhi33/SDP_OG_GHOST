
// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Shared/Home'
// import Login from './pages/Shared/Login'
// import Register from './pages/Shared/Register'
// import UserLayout from './layout/UserLayout'
// import UserDashboard from './pages/User/UserDashboard'
// import AdminLayout from './layout/AdminLayout'
// import AdminDashboard from './pages/Admin/AdminDashboard'
// import NotFound from './pages/Shared/NotFound'
// import HomeLayout from './layout/HomeLayout'
// import RetroGrid from "@/components/magicui/retro-grid";





// const App = () => {
//     return (
//         <>
//             <RetroGrid />
//             <BrowserRouter>
//                 <Routes>
//                     <Route element={<HomeLayout />}>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/login' element={<Login />} />
//                         <Route path='/register' element={<Register />} />
//                     </Route>

//                     <Route element={<UserLayout />}>
//                         <Route path='/dashboard' element={<UserDashboard />} />
//                     </Route>
                    
//                     <Route element={<AdminLayout />}>
//                         <Route path='/admin/dashboard' element={<AdminDashboard />} />
//                     </Route>

//                     <Route path='*' element={<NotFound />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

// export default App



import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUsers from './pages/Admin/AdminUsers'
import AboutUs from './pages/Shared/AboutUs'
import Products from './components/Shared/Products'
import Reports from './pages/Admin/AdminReports'
import Stories from './components/Stories'
import ContactUs from './pages/User/ContactUs'





const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/aboutus' element={<AboutUs/>} />
                        <Route path='/products' element={<Products/>} />
                        <Route path='/story' element={<Stories/>} />
                        <Route path='/conta' element={<ContactUs/>} />
                        
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                        <Route path='/admin/reports' element={<Reports />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App