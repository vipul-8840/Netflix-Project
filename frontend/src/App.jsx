import { Route, Routes, Navigate } from "react-router-dom"

import Signup from "./page/Signup"
import Login from "./page/Login"
import Home from "./page/Home/HomePage"
import Footer from "./components/footer"
import { useEffect } from "react"
import { Loader } from "lucide-react";
import { useAuthStore } from "./store/authUser"
import { Toaster } from "react-hot-toast";
import WatchPage from "./page/WatchPage"
import SearchPage from "./page/SearchPage"
import SearchHistoryPage from "./page/SearchHistoryPage"
import NotFoundPage from "./page/NotFoundPage"




function App() {
  
  const { user,  isCheckingAuth, authCheck } = useAuthStore();

	useEffect(() => {
		authCheck();
	}, [authCheck]);

	if (isCheckingAuth) {
		return (
			<div className='h-screen'>
				<div className='flex justify-center items-center bg-black h-full'>
					<Loader className='animate-spin text-red-600 size-10' />
				</div>
			</div>
		);
	}
  
  return (
      <>
           <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/signup' element={!user?<Signup />:<Navigate to={"/"}/>} />
           <Route path='/login'  element={ !user?<Login /> :<Navigate to={"/"}/>} />
           <Route path='/watch/:id' element={user ? <WatchPage /> : <Navigate to={"/login"} />} />
           <Route path='/search' element={user ? <SearchPage/> : <Navigate to={"/login"} />} />
           <Route path='/history' element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />} />
           <Route path='/*' element={<NotFoundPage />} />

          </Routes>

          <Toaster />
          
          <Footer/>
      
      </>
       


   
  )
}

export default App
