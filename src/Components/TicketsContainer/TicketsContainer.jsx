import React, { use, useState } from 'react';
import OrderContainer from '../OrderContainer/OrderContainer';
import TicketsCard from '../Cards/TicketsCard';
import HeroSection from '../HeroSection/HeroSection';
import TaskCard from '../Cards/TaskCard';
import { toast } from 'react-toastify';


const TicketsContainer = ({promise}) => {
    const ticketDetails= use (promise);
    // console.log(ticketDetails);

    const [ticketItems,setTicketItems] =useState([]);
     const handleOrder = (ticketDetails) =>{
    console.log(ticketDetails);

    const newTicketItems = [...ticketItems, ticketDetails];
     setTicketItems(newTicketItems);

     const handleComplete = (id) => {
    setInProgress(inProgress.filter((t) => t.id !== id));
    toast.success('Task completed!');
  };

     


  };
  console.log(ticketItems);

    return (
        <div>
            <HeroSection InProgress={ticketItems.length}></HeroSection>

            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <div className="lg:col-span-2 mr-7 space-y-4 ">
                <h2 className='font-bold text-4xl mr-80'>CustomerTickets</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-5'>
                    { ticketDetails.map((item) =>(
                        <TicketsCard  handleComplete={handleComplete} handleOrder={handleOrder} key ={item.id} ticketDetails={item} ></TicketsCard>
                    ))}

                </div>

            </div>

        <div className="lg:col-span-1 text-2xl font-bold space-y-5 w-[358px] ml-21">Task Status
            
            
        {/* <div className="lg:cols-span-1 mt-5 bg-gray-50 shadow p-10 space-y-2">
            {
                ticketItems.map((ticketDetails) => (
                    <TaskCard  key={ticketDetails.id} ticketDetails={ticketDetails}></TaskCard>
                ))}
        </div> */}
        <div className="lg:cols-span-1 font-bold shadow p-20" >pii</div>
        </div>
        </section>
            
                 
            

        </div>
    );
};

export default TicketsContainer;