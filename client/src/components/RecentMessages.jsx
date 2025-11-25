import React, { useEffect, useState } from 'react'
import { dummyRecentMessagesData } from '../assets/assets'
import { Link } from 'react-router-dom'
import moment from 'moment'

const RecentMessages = () => {

    const [messages, setMessages] = useState([])

    const fetchRecentMessages = async () => {
        setMessages(dummyRecentMessagesData)
    }

    useEffect(()=>{
        fetchRecentMessages()
    }, [])

    

  return (
    <div className='bg-white max-w-xs mt-4 p-4 min-h-20 rounded-md shadow text-xs text-slate-800'>
      <h3 className='font-semibold text-slate-8 mb-4'>Recent Messages</h3>
      <div className='flex flex-col max-h-56 overflow-y-scroll no-scrollbar pb-1.5'>
        {messages.map((message, index)=>(
            <Link to={`/messages/${message.from_user_id._id}`} key={index} className='group flex items-start mx-1 gap-2 py-2 rounded-sm hover:bg-slate-100 hover:drop-shadow-md transition-all'>
                <img src={message.from_user_id.profile_picture} alt={message.from_user_id.full_name} className='ml-1 w-8 h-8 rounded-full group-hover:scale-115 transition-all'/>
                <div className='w-full'>
                    <div className='flex justify-between'>
                        <p className='font-medium group-hover:scale-110 transition-all origin-top-left'>{message.from_user_id.full_name}</p>
                        <p className='text-[10px] text-slate-400 mr-2 group-hover:scale-110 transition-all origin-center'>{moment(message.createdAt).fromNow()}</p>
                    </div> 
                    <div className='flex justify-between'>
                        <p className={`text-gray-500 group-hover:scale-110 transition-all origin-top-left line-clamp-1 ${message.text.length > 40 ? "[mask-image:linear-gradient(to_right,black_80%,transparent)]" : ""}`}>{message.text ? message.text: 'Media'}</p>
                        {!message.seen && <p className='bg-indigo-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[10px] mr-2 group-hover:scale-110 transition-all origin-center'>1</p>}
                    </div>                                       
                </div>

            </Link>
        ))}
      </div>
    </div>
  )
}

export default RecentMessages
