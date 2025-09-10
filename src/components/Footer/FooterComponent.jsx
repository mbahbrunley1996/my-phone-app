
import React from 'react';


const FooterComponent = () =>  {
  return (
    <footer className=''>

        <div className='ml-0 md:ml-20 w-[100%] md:w-[90%]  md:flex bg-primary  flex-wrap justify-start md:justify-between items-start p-20 text-white border-b-2 border-blue-400  '>


           <div className='space-y-6'>
              <h1 className='text-6xl md:text-8xl font-bold'>MegaMart</h1>
              <br />
              <h2 className='text-2xl font-bold'>Contact Us</h2>
              <div className='flex gap-6 items-center text-2xl'>
                <ul>
                    <img src="/ant-design_whats-app-outlined.png" alt="#" />
                </ul>
                <ul>
                    <li>Whats App</li>
                    <li>+1 202-918-2132</li>
                </ul>
              </div>
               <div className='flex gap-6 items-center text-2xl'>
                  <ul>
                    <img src="/Call.png" alt="#" />
                  </ul>
                  <ul>
                    <li>Call Us</li>
                    <li>+1 202-918-2132</li>
                  </ul>
               </div>
               <br />
                 <h2 className='text-2xl font-bold'>Download App</h2>
                 <br />
                 <div>
                    <ul className='flex gap-4'>
                       <li><img src="/image 11.png" alt="#" /></li>
                       <li><img src="/image 10.png" alt="#" /></li>
                    </ul>
                 </div>
           </div>

            <div>
                <h1 className='text-2xl md:text-4xl text-white underline underline-offset-20 decoration-4 font-bold'>Most Popular Categories</h1>
                <br />
                <ul className='flex flex-col gap-2 items-start'>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Staples</span></li>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Beverages</span></li>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Personel Care</span></li>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Home Care</span></li>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Baby Care</span></li>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Vegetables & Fruits</span></li>         
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Snaks & Foods</span></li>         
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Diary & Bakery</span></li>         
                </ul>
            </div>
         
             <div>
                <h1 className='text-3xl md:text-4xl text-white underline underline-offset-20 decoration-4 font-bold'>Customer Services</h1>
                <br />
                <ul className='flex flex-col gap-2 items-start'>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>About Us</span></li>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Terms & Condition</span></li>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>FAQ</span></li>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Privacy Policy</span></li>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>E-Waste Policy</span></li>
                    <li className='text-2xl'><button className='p-1 rounded-full bg-white'></button> <span className='flex relative bottom-6 left-6 text-2xl text-white'>Councellation & Return Policy</span></li>                  
                </ul>
             </div>




        </div>



       <div className='flex justify-center text-3xl text-center p-10'>
      <p>© 2022 All rights reserved. Reliance Retail Ltd</p>
      </div>
    </footer>
  );
}

export default FooterComponent;