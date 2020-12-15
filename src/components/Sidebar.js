import React from 'react'
import { Divider } from 'rsuite'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'
import ChatRoomList from './rooms/ChatRoomList'

const Sidebar = () =>  (
        <div className="h-100 pt-2">
            <div>
                <DashboardToggle/>
                <CreateRoomBtnModal/>
                <Divider>Join Conversations</Divider>
            </div>
            <ChatRoomList/>
        </div>
    )


export default Sidebar
