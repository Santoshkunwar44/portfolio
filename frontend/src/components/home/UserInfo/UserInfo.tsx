import { UserInfoWrapper } from './UserInfo.styles';
import {TbBrandFiverr} from "react-icons/tb";;
import {TfiGithub } from "react-icons/tfi";
import {FaTwitter, FaLinkedinIn} from "react-icons/fa";
import { UserType } from '../../../utils/Types';
type AdminInfoProps={
  adminData : UserType |null
}
const UserInfo:React.FC<AdminInfoProps> = ({adminData}) => {

  return (
    <UserInfoWrapper>
        
    
            <div className='name_box' >
                <p className='name_label'></p>
                <p className='name_value'>{adminData?.username}</p>
            </div>
            <div className="user_map_box">
          <img src='/images/users.jpg'/>
            </div>
            <div className="social_media_box">
              
                <a href='https://www.linkedin.com/in/santosh-kunwar-5573a2273/' target='_blank' className="media_box current_media" >

                <FaLinkedinIn/>
                </a>
                <a href='https://www.fiverr.com/santoshkunwa442' target='_blank' className="media_box">

                <TbBrandFiverr/>
                </a>
                <a  href='https://github.com/Santoshkunwar44' target='_blank' className="media_box">
    <TfiGithub/>
                </a>
                <a href='https://twitter.com/santosh68789183' target='_blank' className='media_box'>

                <FaTwitter/>
                </a>

            </div>

    </UserInfoWrapper>
  )
}

export default UserInfo