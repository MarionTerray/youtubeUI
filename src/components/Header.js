/*top header*/
import ImgMenu from "../Images/Img_menu.svg"
import Logo from "../Images/logo_name.PNG"
import Create from "../Images/create.PNG"
import Notification from "../Images/notification.PNG" 


export default function Header(){

    return (
        <div id="header">
            <div className="top left">
                <button className="btn_header"><img className="ImgMenu" src={ImgMenu}/></button>
                <a className='logo'><img src={Logo}/></a>
            </div>
            <div className="top center">
                <input className="searchBar" type="text" placeholder='Rechercher' name='searchBar' />
                <button className="loup">loup</button>
                <button className="btn_header vocal">voc</button>
            </div>
            <div className="top right">
                <button className="btn_header"><img className="btn_menu_img" src={Create}/></button>
                <button className="btn_header"><img className="btn_menu_img" src={Notification}/></button>
                <button className="btn_header">U</button>
            </div>
        </div>
    )
}