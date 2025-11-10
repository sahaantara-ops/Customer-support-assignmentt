import React, { use } from 'react';
import OrderContainer from '../OrderContainer/OrderContainer';
import TicketsCard from '../Cards/TicketsCard';

const TicketsContainer = ({promise}) => {
    const ticketDetails= use (promise);
    console.log(ticketDetails);
    return (
        <div>
            <OrderContainer></OrderContainer>
            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg: grid-cols-3 gap-5'>
            <div className="lg:col-span-2">
                <h2 className='font-bold text-4xl mr-90 '>CustomerTickets</h2>
                <div className='  grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-10'>
                    { ticketDetails.map((item) =>(
                        <TicketsCard key ={item.id} ticketDetails={item} ></TicketsCard>
                    ))}

                </div>

            </div>
            <div className="lg:col-span-1">Task Status</div>

            </section>

        </div>
    );
};

export default TicketsContainer;