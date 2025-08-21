
'use client';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { User } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import { Search } from 'lucide-react';
import { AlignLeft } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
import { trips } from '../../app/data';


const HeroComponent = () => {
  return (
    <>
    <div className='md:py-8 py-20'>


    <div className="w-[80%] mx-auto bg-[#212844] md:flex flex-wrap justify-between items-center p-12  rounded-2xl text-white">

       <div className="">
      <button className='border rounded-full p-8 bg-white flex relative md:right-0 md:left-[-90px] left-20 md:bottom-0 bottom-23 shadow'> <ChevronLeft color='#008ECC'/></button>
    </div>

      <div>
      <div className=' text-[#fff] flex flex-wrap gap-100 justify-between items-center'>
        <div className="">
        <p className='text-2xl font-semibold'>Best deals online with Smart Watches</p>
        <br />
        <h1 className='text-5xl md:text-6xl font-bold text-[#fff]'>SMART WEARABLE.</h1>
        <br />
        <p className='text-2xl font-semibold'>Up to 80% off</p>
        <br />
        <br />
        <div className='flex gap-2 items-center'>
            <button className=' p-1 px-3 rounded-full bg-white'></button>
            <button className=' p-1 rounded-full bg-white'></button>
            <button className=' p-1 rounded-full bg-white'></button>
            <button className=' p-1 rounded-full bg-white'></button>
            <button className=' p-1 rounded-full bg-white'></button>
            <button className=' p-1 rounded-full bg-white'></button>
            <button className=' p-1 rounded-full bg-white'></button>
        </div>
        </div>
      </div>
      </div>

       <div className="flex justify-center md:py-0 py-20">
          <img className='w-[70%] md:w-[300px] md:h-[300px] h-[70%]' src="/image 2.png" alt="watch" />
       </div>

       <div>
      <button className='border rounded-full p-8 bg-white flex relative left-22 top-23 md:top-0 shadow'> <ChevronRight color='#008ECC'/></button>
    </div>
    </div>



     <div className='py-20 space-y-5 w-[100%] md:w-[80%] flex flex-col md:justify-center justify-start ml-0 md:ml-[10%] ml-[5%]'>
      <div className='border-b border-gray-300 pb-4'>
        <p className='underline underline-offset-20 text-2xl text-gray-500 font-bold decoration-[#008ECC] decoration-4'>Grap the best deal on{" "} <a className='text-[#008ECC]' href="#">trips</a> </p>
      </div> 
     <div className="grid grid-cols-2 md:grid-cols-5 md:w-full w-[92%] md:justify-center md:items-center gap-2 md:gap-3 py-4">
          {trips.map((phone) => (
            <div
         key={phone.id}
         className='border border-gray-100 w-[100%] md:w-[280px] rounded-2xl'>

       <div className='flex md:flex-col items-center md:items-center gap-4 p-4 bg-[#F5F5F5] h-[220px] rounded-xl'>
          <img src= {phone.img} alt={phone.name}/>
       </div>
       <div className='space-y-2 p-2 text-medium'>
         <p className='font-semibold'>{phone.name}</p>
         <div className='flex gap-4'>
           <p className='font-bold'>${phone.price}</p>
           <p className='line-through'>${phone.oldPrice}</p>
         </div>
         <div className='border-t pt-2 border-gray-300 flex justify-between items-center'>
          <button className='text-[#249B3E] font-semibold'>Save - ${phone.saveAmount}</button>
         </div>
       </div>
       </div>
          ))}
       </div>
    </div>


     <div className='md:py-20 space-y-5 w-[100%] md:w-[80%] flex flex-col justify-center ml-0 md:ml-[10%] ml-[5%]'>
         <div className='border-b border-gray-300 pb-4 flex justify-between'>
        <p className='underline underline-offset-20 text-2xl text-gray-500 font-bold decoration-[#008ECC] decoration-4'>Shop From<a className='text-[#008ECC]' href="#">Top Categories</a> </p>
        <p className="flex md:visible hidden">View All <ChevronRight color='#008ECC'/></p>
      </div> 

          <div className='grid grid-cols-2 md:grid-cols-7 gap-5 py-4 justify-between items-center'>
           
         <div className=''>
            <div className='flex gap-4 items-center'>
              <button className='p-4 w-[110px] rounded-full bg-[#F3F9FB] shadow-lg flex justify-center border border-sky-300'> 
                 <img className='w-[40px]' src="/image 3.png" alt="logo" />
              </button>
            </div>
        
         <br />
         <div className='flex items-center ml-7'>
          <p className=''>Mobile</p>
         </div>
        </div> 
     

     <div className=''>
            <div className='flex gap-4 items-center'>
              <button className='p-4 w-[110px] rounded-full bg-[#F3F9FB] shadow-lg flex justify-center'> 
                 <img className='w-[40px]' src="/image 3 (4).png" alt="logo" />
              </button>
            </div>
         
         <br />
         <div className='flex items-center ml-7'>
          <p className=''>Cusmetic</p>
         </div>
        </div> 
     <div className=''>
            <div className='flex gap-4 items-center'>
              <button className='p-4 w-[110px] rounded-full bg-[#F3F9FB] shadow-lg flex justify-center'> 
                 <img className='w-[80px]' src="/Ellipse 41.png" alt="logo" />
              </button>
            </div>
        
         <br />
         <div className='flex items-center ml-7'>
          <p className=''>Electronics</p>
         </div>
         </div>
     <div className=''>
            <div className='flex gap-4 items-center'>
              <button className='p-4 w-[110px] rounded-full bg-[#F3F9FB] shadow-lg flex justify-center'> 
                 <img className='w-[80px]' src="/image 4.png" alt="logo" />
              </button>
            </div>
         
         <br />
         <div className='flex items-center ml-7'>
          <p className=''>Furnitures</p>
         </div>
         </div>
     <div className=''>
            <div className='flex gap-4 items-center'>
              <button className='p-4 w-[110px] rounded-full bg-[#F3F9FB] shadow-lg flex justify-center'> 
                 <img className='w-[80px]' src="/image 2.png" alt="logo" />
              </button>
            </div>
         
         <br />
         <div className='flex items-center ml-7'>
          <p className=''>Watches</p>
         </div>
         </div> 
       <div className=''>
            <div className='flex gap-4 items-center'>
              <button className='p-4 w-[110px] rounded-full bg-[#F3F9FB] shadow-lg flex justify-center'> 
                 <img className='w-[80px]' src="/image 6.png" alt="logo" />
              </button>
            </div>
         
         <br />
         <div className='flex items-center ml-7'>
          <p className=''>Decor</p>
         </div>
         </div>

          <div className=''>
            <div className='flex gap-4 items-center'>
              <button className='p-4 w-[110px] rounded-full bg-[#F3F9FB] shadow-lg flex justify-center'> 
                 <img className='w-[80px]' src="/image 7.png" alt="logo" />
              </button>
            </div>

           <br />
         <div className='flex items-center ml-7'>
          <p className=''>Accessories</p>
         </div>
         </div>    

    </div>

    </div>



      <div>

         <div className='py-20 space-y-5 w-[80%] flex flex-col justify-center md:ml-[10%] ml-[5%]'>
         <div className=' border-b border-gray-300 pb-4 flex justify-between'>
        <p className='underline underline-offset-20 text-2xl text-gray-500 font-bold decoration-[#008ECC] decoration-4'>Shop From<a className='text-[#008ECC]' href="#">Top Categories</a> </p>
        <p className="flex md:visible hidden">View All <ChevronRight color='#008ECC'/></p>
        </div> 


        <div className="grid grid-cols-1 md:grid-cols-3 h-[50%] md:h-full gap-4">

        <div className='bg-[#313131] flex justify-between items-center rounded-3xl text-white w-[100%] md:w-[35.333] md:h-[300px] h-[100%] mt-5 md:mt-10 relative'>

          <div className='flex flex-col items-start gap-3 ml-5 p-0'>
            <button className=' p-3 w-[100px] md:w-[150px] rounded-2xl bg-[#494949] text-white text-2xl space-x-2 font-light'> Iphone </button>
            <br />
            <button className='border p-2 bg-[#fff] rounded-2xl'> <img className='w-[31px] md:w-[62px]' src="/Apple svg.png" alt="#" /> </button>
            <br />
            <p className='text-white font-semibold md:text-[34px] text-2xl'>Up to 80% off</p>
          </div>

          <div className='flex flex-col items-center justify-center relative top-23 md:top-20 w-[50%]'>
               <img className='absolute md:bottom-[-17px] bottom-[43px] md:w-[246px] w-[300px] md:h-[246px] h-[150px] right-[1px] md:right-[3px]' src="/image copy 3.png" alt="#" />
               <img className='absolute md:bottom-0 bottom-[47px] md:w-[226px] w-[190px] right-0 md:right-0 md:left-[15px] rounded-3xl h-[150px] md:h-[226px]' src="/image copy 2.png" alt="#" />
              <img className='w-[100%] absolute md:mb-0 mb-15 md:w-full z-10' src="/image 9.png" alt="#" />
            </div>  
        </div>

          <div className='bg-[#FFF3CC] flex justify-between items-center rounded-3xl text-white w-[100%] md:w-[35.333] md:h-[300px] h-[100%] mt-5 md:mt-10 '>

          <div className='flex flex-col items-start gap-[17px] md:gap-6 ml-5 p-0'>
            <button className=' p-2 md:p-3 w-[150px] rounded-2xl bg-[#F6DE8D] text-black text-2xl space-x-2 font-light'> REALME </button>
            <br />
            <button className=' p-1 md:p-2 bg-[#000] bg-yellow-500 text-black text-2xl md:text-4xl w-[150px] md:w-[170px] font-bold'> realme </button>
            <br />
            <p className='text-black font-semibold md:text-[34px] text-2xl'>Up to 80% off</p>
          </div>

          <div className='flex flex-col items-center justify-center relative top-20 w-[50%]'>
            <img className='absolute md:bottom-[-17px] bottom-[33px] md:w-[246px] w-[300px] md:h-[246px] h-[155px] right-[1px] md:right-[3px]' src="/image copy.png" alt="#" />
               <img className='absolute md:bottom-[3px] bottom-[38px] md:w-[226px] w-[190px] right-0 md:right-0 md:left-[16px] rounded-3xl h-[150px] md:h-[226px]' src="/image.png" alt="#" />
              <img className='w-[100%] absolute md:mb-0 mb-10 md:w-[456px] md:h-[420px] h-[330px] z-10' src="/image 9 (1).png" alt="#" />
            </div>  
        </div>

        <div className='bg-[#FFECDF] flex justify-between items-center rounded-3xl text-white w-[100%] md:w-[35.333] md:h-[300px] h-[100%] mt-5 md:mt-10 '>

          <div className='flex flex-col items-start gap-2 ml-5 p-0'>
            <button className=' p-2 md:p-3 w-[150px] rounded-2xl bg-[#FFD1B0] text-black text-2xl space-x-2 font-light'> XIAOMI </button>
            <br />
            <button className=' p-2 text-white rounded-2xl'> <img className='w-[70px] md:w-[100px]' src="/Vector.png" alt="#" /> </button>
            <br />
            <p className='text-black font-semibold md:text-[34px] text-2xl px-0'>Up to 80% off</p>
          </div>

          <div className='flex flex-col items-center justify-center relative top-20 w-[50%]'>
            <img className='absolute md:bottom-[-17px] bottom-[33px] md:w-[246px] w-[300px] md:h-[246px] h-[155px] right-[1px] md:right-[3px]' src="/Ellipse 44.png" alt="#" />
               <img className='absolute md:bottom-[3px] bottom-[38px] md:w-[226px] w-[190px] right-0 md:right-0 md:left-[16px] rounded-3xl h-[150px] md:h-[226px] ' src="/Ellipse 43.png" alt="#" />
              <img className='w-[100%] absolute md:mb-0 mb-8 md:w-[456px] h-[340px] md:h-[420px] z-10' src="/image 9 (2).png" alt="#" />
            </div>  
            </div>

      </div>

         <div className='flex gap-2 items-center justify-center mt-10'>
            <button className=' p-1 px-4 rounded-full bg-[#008ECC]'></button>
            <button className=' p-1 rounded-full bg-gray-300'></button>
            <button className=' p-1 rounded-full bg-gray-300'></button>
            <button className=' p-1 rounded-full bg-gray-300'></button>
            <button className=' p-1 rounded-full bg-gray-300'></button>
            <button className=' p-1 rounded-full bg-gray-300'></button>
            <button className=' p-1 rounded-full bg-gray-300'></button>
        </div>

       </div>

      </div>




       <div className='py-20 space-y-5 w-[80%] flex flex-col justify-center md:ml-[10%] ml-[5%]'>
         <div className='border-b border-gray-300 pb-4 flex justify-between'>
        <p className='underline underline-offset-20 text-2xl text-gray-500 font-bold decoration-[#008ECC] decoration-4'>Shop From<a className='text-[#008ECC]' href="#">Top Categories</a> </p>
        <p className='flex md:visible hidden'>View All <ChevronRight color='#008ECC'/></p>
      </div> 


       <div className='grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-5 justify-between items-center py-6'>
           
         <div className=''>
            <div className=' border-gray-300 rounded-4xl bg-[#F5F5F5] w-[200px] h-[200px] justify-center flex gap-4 items-center'>
                 <img className='w-[300px]' src="/41624-7-groceries-hd-download-hd-png 1.png" alt="logo" />
              
            </div>
        
         <br />
         <div className='flex flex-col justify-center items-center'>
          <p className='text-xl md:text-2xl text-gray-500'>Daily Essentials</p>
          <p className="text-2xl md:text-3xl font-bold">Up to 50% OFF</p>
         </div>
        </div> 
     

     <div className=''>
            <div className=' border-gray-300 rounded-4xl bg-[#F5F5F5] w-[200px] h-[200px] justify-center flex gap-4 items-center'>
                 <img className='w-[200px]' src="/54018-9-grocery-free-hq-image 2.png" alt="logo" />
              
            </div>
        
         <br />
         <div className='flex flex-col justify-center items-center'>
          <p className='text-xl md:text-2xl text-gray-500'>Vegitables</p>
          <p className="text-2xl md:text-3xl font-bold">Up to 50% OFF</p>
         </div>
        </div> 
     <div className=''>
            <div className=' border-gray-300 rounded-4xl bg-[#F5F5F5] w-[200px] h-[200px] justify-center flex gap-4 items-center'>
                 <img className='w-[250px]' src="/pngegg 1 (1).png" alt="logo" />
              
            </div>
        
         <br />
         <div className='flex flex-col justify-center items-center'>
          <p className='text-xl md:text-2xl text-gray-500'>Fruits</p>
          <p className="text-2xl md:text-3xl font-bold">Up to 50% OFF</p>
         </div>
         </div>
     <div className=''>
           <div className=' border-gray-300 rounded-4xl bg-[#F5F5F5] w-[200px] h-[200px] justify-center flex gap-4 items-center'>
                 <img className='w-[230px]' src="/23410-4-strawberry-photo 1.png" alt="logo" />
              
            </div>
        
         <br />
         <div className='flex flex-col justify-center items-center'>
          <p className='text-xl md:text-2xl text-gray-500'>Strowberry</p>
          <p className="text-2xl md:text-3xl font-bold">Up to 50% OFF</p>
         </div>
         </div>
     <div className=''>
            <div className=' border-gray-300 rounded-4xl bg-[#F5F5F5] w-[200px] h-[200px] justify-center flex gap-4 items-center'>
                 <img className='w-[200px]' src="/22136-3-mango-fruit 1.png" alt="logo" />
              
            </div>
        
         <br />
         <div className='flex flex-col justify-center items-center'>
          <p className='text-xl md:text-2xl text-gray-500'>Mango</p>
          <p className="text-2xl md:text-3xl font-bold">Up to 50% OFF</p>
         </div>
         </div> 
       <div className=''>
            <div className=' border-gray-300 rounded-4xl bg-[#F5F5F5] w-[200px] h-[200px] justify-center flex gap-4 items-center'>
                 <img className='w-[150px]' src="/35763-7-cherry-fruit-file 1.png" alt="logo" />
              
            </div>
        
         <br />
         <div className='flex flex-col justify-center items-center'>
          <p className='text-xl md:text-2xl text-gray-500'>Cherry</p>
          <p className="text-2xl md:text-3xl font-bold     ">Up to 50% OFF</p>
         </div>
         </div>

          

    </div>







      </div>




    </div>
    </>
  );
}

export default HeroComponent;