import { useAuthStore } from "../../store/authUser";


import PageHome from "./PageHome";
import ScreenAuth from "./ScreenAuth";


const Home = () => {
  const { user } = useAuthStore();
  return (
    <div>
        
      {user ? <PageHome/>:<ScreenAuth/>}

    </div>
  
   
  )
}

export default Home