
'use client'
import Image from "next/image";


import NavbarComponent from "@/components/Navbar/NavbarComponent";
import HeroComponent from "@/components/Hero/HeroComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
// import cardsComponent from '../components/cards/cardsComponent';


const Page = () => {
  return (
    <>
    <div>
       <NavbarComponent />
       <HeroComponent />
       {/* <cardsComponent /> */}
       <FooterComponent />
    </div>
    </>
  );
}

export default Page;

