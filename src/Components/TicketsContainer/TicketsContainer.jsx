import React, { use, useState } from 'react';

import TicketsCard from '../Cards/TicketsCard';
import HeroSection from '../HeroSection/HeroSection';
import TaskCard from '../Cards/TaskCard';
import { ToastContainer, toast } from 'react-toastify';
import ResolveCard from '../Cards/ResolveCard';


const TicketsContainer = ({promise}) => {
    const data= use (promise);

    // console.log(ticketDetails);
     const [ticketDetails,setTicketDetails] = useState(data);

    



    const [ticketItems,setTicketItems] =useState([]);
    const [resolveTask,setResolveTask]= useState([]);
    const handleOrder = (ticketDetails) =>{
    console.log(ticketDetails);
    toast("In Progress");

    const newTicketItems = [...ticketItems, ticketDetails];
     setTicketItems(newTicketItems);

     

};
    const handleResolve =(ticketDetails) =>{

        const newResveolveTask =[...resolveTask, ticketDetails];
        setResolveTask(newResveolveTask);
         console.log({ticketDetails});

        const remainingTickets = ticketItems.filter((item) => item.ticket_id !== ticketDetails.ticket_id);
        console.log({remainingTickets});
        setTicketItems(remainingTickets);
        toast("Task Completed Successfully");

         

        const updatedTickets = ticketDetails.filter((item) => item.ticket_id !== ticketDetails.ticket_id);
        console.log({updatedTickets});
        setTicketDetails(updatedTickets);
    };


    return (
        <div>
            <HeroSection 
            InProgress={ticketItems.length} 
            Resolve={resolveTask.length}   
            ></HeroSection>

            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <div className="lg:col-span-2 mr-7 space-y-4 ">
                <h2 className='font-bold text-4xl mr-80'>CustomerTickets</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-5'>
                    { ticketDetails.map((item) =>(
                        <TicketsCard  handleOrder={handleOrder} key ={item.id} ticketDetails={item} ></TicketsCard>
                    ))}
                      <ToastContainer />

                </div>

            </div>

        <div className="lg:col-span-1 text-2xl font-bold space-y-5 w-[358px] ml-21">Task Status
            
            
        <div className="lg:cols-span-1 mt-5 bg-gray-50 shadow p-10 space-y-2">
            {
                ticketItems.map((ticketDetails) => (
                    <TaskCard handleResolve={handleResolve} key={ticketDetails.id} ticketDetails={ticketDetails}></TaskCard>
                ))}
        </div>
        <div className="lg:cols-span-1 mt-5">Resolve Task
        <div className="lg:cols-span-1 shadow p-20 font-normal border-1" >
            {
                resolveTask.map((ticketDetails) => (<ResolveCard key={ticketDetails.id} ticketDetails={ticketDetails}></ResolveCard>
                ))}
        </div>
        </div>
        </div>
        </section>
            
                 
            

        </div>
    );
};

export default TicketsContainer;