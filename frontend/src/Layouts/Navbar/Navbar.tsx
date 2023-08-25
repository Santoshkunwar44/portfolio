import {Link} from "react-router-dom";
import { NavbarWrapper } from './Navbar.styles'
import ClientModal from "../modal/ClientModal/ClientModal";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducers";

const Navbar = () => {

  const {user} = useSelector((state:State)=>state.user)





  return (
    <NavbarWrapper>

        <div  className='nav_left'>
          <Link to={"/"} >

            <h1 className='logo_text'>Codewithmama</h1>
          </Link>
        </div>
        <div className='nav_right'>

        <ul className='nav_list'>
            <Link  to="/">
            <li className='active_nav'>Dashboard</li>
            
            </Link> 
            <Link to={"/reviews"}>
            <li>Reviews</li>
            </Link>
           <Link to={"/works"}>
            <li>Works</li>
           </Link>
        </ul>
           
           {
           !user?.isClient && user? <ClientModal>
             <button className='client_button'>Become Client</button>
            </ClientModal>:""
}
            {

            !user ? <Link to={"/login"}>
                 <button className='client_button'>Login</button>
               </Link> : <div className="profileBox">

                <img className="profileImg" src="https://images.pexels.com/photos/15517285/pexels-photo-15517285/free-photo-of-man-people-woman-street.jpeg?auto=compress&cs=tinysrgb&w=400" alt="userProfile" />
                <div className="profileInfo">
                  <h4  className="profileName">{user.username}</h4>
                  <span className="profileEmail">{user.email}</span>
                  </div>

                </div>
              } 
               
        </div>


    </NavbarWrapper>
  )
}

export default Navbar