
// "use client";
// import React from "react";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// import Image from "next/image";

// const HeroScroller = () => {
//   return (
//     <div className="flex flex-col overflow-hidden pb-[10px] " style={{ 
//         backgroundImage: "url('https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?s=2048x2048&w=is&k=20&c=1HNBVTOZegiiSA1RwbY9xJ4BoxuG5aSwMlro_-Mq61Q=')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         }}>
//             <div className="absolute inset-0 bg-black/95"></div>
//       <ContainerScroll
//         titleComponent={
//           <>
//             <h1 className="text-4xl font-semibold text-black dark:text-white">
//               Unleash the power of <br />
//               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//                 SAMSUNG INNOVATION
//               </span>
//             </h1>
//           </>
//         }
//       >
        
//         <Image
//           src= "/background img.png"
//           alt="hero"
//           height={720}
//           width={1400}
//           className="mx-auto rounded-2xl object-cover h-full object-left-top"
//           draggable={false}
//         />
//       </ContainerScroll>
//     </div>
//   );
// }

// export default HeroScroller;
"use client";
import React from "react";
import { ContainerScroll } from '../../components/ui/container-scroll-animation';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroScroller = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center w-full py-150 h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?s=2048x2048&w=is&k=20&c=1HNBVTOZegiiSA1RwbY9xJ4BoxuG5aSwMlro_-Mq61Q=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      <div className="absolute inset-0 bg-black/80"></div>

      
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl font-semibold text-white text-center mb-8">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                SAMSUNG INNOVATION
              </span>
            </h1>
          }
        >
          
          <div className="relative w-full max-w-6xl mx-auto flex justify-between items-center p-8 md:p-12 bg-[#212844] rounded-2xl text-white">
            
          
            <button className="absolute left-[-40px] top-1/2 -translate-y-1/2 border rounded-full p-6 bg-primary shadow">
              <ChevronLeft color="#ccc" />
            </button>

            
            <div className="flex-1 text-center md:text-left px-6">
              <p className="text-2xl font-semibold">
                Best deals online with Smart Watches
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
                SMART WEARABLE.
              </h1>
              <p className="text-2xl font-semibold mt-4">Up to 80% off</p>

              <div className="flex gap-2 items-center justify-center md:justify-start mt-6">
                {Array.from({ length: 7 }).map((_, i) => (
                  <button
                    key={i}
                    className="p-1 w-3 h-3 rounded-full bg-primary"
                  ></button>
                ))}
              </div>
            </div>

            <div className="flex justify-center px-6">
              <img
                className="w-[200px] md:w-[300px] md:h-[500px] object-contain"
                src="/image 2.png"
                alt="watch"
              />
            </div>

            {/* RIGHT ARROW (absolute) */}
            <button className="absolute right-[-40px] top-1/2 -translate-y-1/2 border rounded-full p-6 bg-primary shadow">
              <ChevronRight color="#ccc" />
            </button>
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
};

export default HeroScroller;
