import React from 'react';
import AddServer from './actionButtons/AddServer';
import DownloadApps from './actionButtons/DownloadApps';
import ExploreServers from './actionButtons/ExploreServers';
import FriendsButton from './FriendsButton';
import ServerButton from './ServerButton';

const Sidebar = () => {
    let text = "Parsatopia"

    return (
        <div className='h-screen p-3 w-[4.5rem] bg-[#202225]'>
            <FriendsButton />
            <div className='flex flex-col gap-2'>
            <ServerButton serverName='Parsatopia' />
            <AddServer />
            <ExploreServers />
            <DownloadApps />
            </div>
        </div>
    );
};

export default Sidebar;