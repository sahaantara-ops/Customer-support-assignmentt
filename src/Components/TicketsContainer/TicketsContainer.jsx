import React, { use } from 'react';
import OrderContainer from '../OrderContainer/OrderContainer';

const TicketsContainer = ({promise}) => {
    const orders= use (promise);
    console.log(orders);
    return (
        <div>
            <OrderContainer></OrderContainer>
            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg: grid-cols-3 gap-5'>
            <div className="lg:col-span-2">
                <h2 className='font-bold text-4xl'>CustomerTickets</h2>
                <div className='space-y-5'>
                    {
                        
                    }
                </div>

            </div>
            <div className="lg:col-span-1">Task Status</div>

            </section>

        </div>
    );
};

export default TicketsContainer;