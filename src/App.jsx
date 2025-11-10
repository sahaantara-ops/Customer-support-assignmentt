

import { Suspense } from 'react';
import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar'
import OrderContainer from './Components/OrderContainer/OrderContainer'
import TicketsContainer from './Components/TicketsContainer/TicketsContainer';

const ticketsData = () => fetch('/public/public.json').then((res) => res.json());


function App() {
     const ticketsPromise = ticketsData();
    

 
  return (
    <>
    <header>
      <Navbar></Navbar>
     </header>
     <section className='bg-gray-100'>
      <HeroSection></HeroSection>
     </section>
     <section className='bg-gray-100'>
      <Suspense fallback={'<span className="loading loading-ring loading-xl"></span>'}>
      <TicketsContainer promise ={ticketsPromise} ></TicketsContainer>
      </Suspense>
      
     </section>
      
     
    </>
  )
}

export default App
