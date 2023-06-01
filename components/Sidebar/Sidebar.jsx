import React from 'react';
import AddServer from './actionButtons/AddServer';
import DownloadApps from './actionButtons/DownloadApps';
import ExploreServers from './actionButtons/ExploreServers';
import FriendsButton from './FriendsButton';
import ServerButton from './ServerButton';
import ProfileBar from './ProfileBar';

const Sidebar = () => {
    let text = "Parsatopia"

    return (
        <div className='h-screen relative p-3 w-[74px] bg-[#202225]'>
            <FriendsButton />
            <div className='flex flex-col gap-2'>
            <ServerButton serverName='Forward Assault' href="/channels/ForwardAssault/community" serverAvatar="/Avatars/ForwardAssault.jpg" />
            <ServerButton serverName='Parsatopia' href={"#"} />
            <AddServer />
            <ExploreServers />
            <DownloadApps />
            </div>
            <ProfileBar />
        </div>
    );
};

export default Sidebar;