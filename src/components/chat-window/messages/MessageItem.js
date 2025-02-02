
import React, { memo } from 'react'
import { Button } from 'rsuite'
import TimeAgo from 'timeago-react'
import { useCurrentRoom } from '../../../context/current-room-context'
import { useHover  ,useMediaQuery  } from '../../../misc/custom-hooks'
import { auth } from '../../../misc/firebase'
import PresenceDot from '../../PresenceDot'
import ProfileAvatar from '../../ProfileAvatar'
import IconBtnControl from './IconBtnControl'
import ImageBtnModal from './ImageBtnModal'
import ProfileInfoBtnModal from './ProfileInfoBtnModal'

const renderFileMessage = (file)=>{
    if (file.contentType.includes('image')){
        return <div className="height-220">
            <ImageBtnModal src={file.url} fileName={file.name}/>
        </div>
    }
    if (file.contentType.includes('audio')){
        // eslint-disable-next-line 
            return <audio controls>
            <source src={file.url} type="audio/mp3"/>
            Your browser does not support audio files.

        </audio>
    }
    return <a href={file.url}>Download {file.name}</a>
}

const MessageItem = ({message,handleAdmin,handleLike,handleDelete }) => {

    const {author,createdAt,text,file, likes,likeCount }=message
    const [selfRef, isHovered] = useHover()
    const isMobile = useMediaQuery(('(max-width: 992px)'))
    const isAdmin = useCurrentRoom(v=>v.isAdmin)
    const admins = useCurrentRoom(v=>v.admins)
    const isMsgAuthorAdmin = admins.includes(author.uid)
    const isAuthor = auth.currentUser.uid === author.uid
    const canGrantAdmin = isAdmin && !isAuthor
    const canShowIcons = isMobile || isHovered
    const isLiked = likes && Object.keys(likes).includes(auth.currentUser.uid)
    return (
        <li className={`padded mb-1 cursor-pointer ${isHovered ? 'bg-black-02':''}`} ref={selfRef}>
            <div className="d-flex align-item-center font-bolder mb-1">
                <PresenceDot uid={author.uid}/>
             <ProfileAvatar 
             src={author.avatar} 
             name={author.name} 
             className="ml-1" 
             size="xs"/>
             <ProfileInfoBtnModal profile={author} 
             appearance="link" className="p-0 ml-1 text-black">
                 {canGrantAdmin&&
                 <Button block onClick={()=>handleAdmin(author.uid)} color="blue">
                     {isMsgAuthorAdmin?'Remove admin permission':'Give admin in this room'}
                 </Button> }
                 </ProfileInfoBtnModal>
                <TimeAgo
                datetime={createdAt}
                className="font-normal text-black-45 ml-2"
                />
                 <IconBtnControl
                {...(isLiked ? {color: 'red'}: {})}
                isVisible={canShowIcons}
                iconName="heart"
                tooltip="Like this message"
                onClick={()=>handleLike(message.id)}
                badgeContent={likeCount}
                />
                {
                    isAuthor && (<IconBtnControl
                   
                    isVisible={canShowIcons}
                    iconName="close"
                    tooltip="Delete this message"
                    onClick={()=>handleDelete(message.id, file)}
                    
                    />)
                }  
            </div>
            <div>
            {text && <span className="word-break-all">{text}</span>}
            {file && renderFileMessage(file)}

            </div>
        </li>
        
    )
}

export default memo(MessageItem)
