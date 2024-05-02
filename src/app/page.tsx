import Hero from "@/components/hero/Hero";
import About from '@/components/about/About'
import React from "react";
import Service from "@/components/service/Service";
import Contact from "@/components/contact/Contact";
import Testimonial from "@/components/Testi/Testimonial";
import Work from "@/components/work/Work";

export default function Home() {
  return (
 <div className="">
 <Hero />
 <About id="#about"/>
 <Service id="#service"/>
 <Work id='#gallery'/>
 <Testimonial id='#testimonial'/>
 <Contact id='#contact-us'/>
 </div>
  );
}
