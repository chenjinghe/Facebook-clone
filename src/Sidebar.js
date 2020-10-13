import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from "@material-ui/icons/EmojiFlags"
import EmojiFlagsIcon from "@material-ui/icons/LocalHospital"
import ChatIcon from "@material-ui/icons/Chat"
import PeopleIcon from "@material-ui/icons/People"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import {useStateValue}  from "./StateProvider"
// import ExpandMoreOutlined from "@material-ui/icons/VideoLibrary"
function Sidebar() {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            {/* <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/> */}
        </div>
    )
}

export default Sidebar
