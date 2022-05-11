import Image from 'next/image'
import React, { Component } from 'react'
import { motion } from 'framer-motion';
import jonaswebp from "../public/photos/team/jonas.webp";
import tin from "../public/photos/team/tin.jpg";
import tinwebp from "../public/photos/team/tin.webp";
import lcid from "../public/photos/team/lcid.jpg";
import lcidwebp from "../public/photos/team/lcid.webp";
import gino from "../public/photos/team/gino.jpg";
import ginowebp from "../public/photos/team/gino.webp";
import rey from "../public/photos/team/rey.jpg";
import reywebp from "../public/photos/team/rey.webp";

import rock4 from "../public/photos/rocks/Team-Meteor.png";
import rock4webp from "../public/photos/rocks/Team-Meteor.webp";

export default class Team extends Component {
    render () {
        return (
            <div>
            <section id="team">
            <div class="relative flex flex-col h-auto overflow-hidden bg-cover items-center justify-center">
            <div class="text-prometheus-gold font-visby text-base sm:text-base md:text-2xl 2xl:text-4xl text-center mt-10 lg:mt-20">
               <p class="max-sm:inline">
                 <span class="font-demi-bold">Prometheus</span> is founded on the
                 science of marketing{" "}
               </p>
               <p class="max-sm:inline">
                 coming from multiple disciplines, focused on one{" "}
               </p>
               <p class="max-sm:inline">singular goal of promoting your brand</p>
             </div>
             <h2 class="text-lg md:text-3xl 2xl:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-prometheus-gray text-center mt-10 mb-10">
               MEET OUR STORYTELLERS
             </h2>
             <motion.div class="z-10 flex flex-wrap flex-shrink justify-center md:w-10/12 ">
               <motion.div class="team-items z-50">
                 <motion.div
                   class="relative"
                   initial="rest"
                   whileHover="hover"
                   // variants={teamMotion}
                 >
               <Image
               src={jonaswebp} 
               type="image/webp"
               class="team-img"
               alt="Jonas Tavarro"
               >    
               </Image>
               <motion.div
                 // variants={teamDescMotion}
                 class="team-description left-full"
               >
               {/* <p> 
                       As the Post-Production Director, Jonas works with
                       computer-generated imagery (CGI) to make otherwise
                       impossible scenes very much possible.{" "}
                     </p>
                    <p>
                       With today’s technology, imaginative art isn’t limited to
                       the camera or a paintbrush.{" "}
                     </p>
                     <p>
                       A computer screen, in talented hands, can create art just
                       as well.
                     </p> 
                     */}
               </motion.div>
             </motion.div>
             <p class=" text-xl 2xl:text-4xl  font-visby font-bold text-left mt-5">
                   JONAS TAVARRO
                 </p>
             <p class=" text-xl 2xl:text-3xl  font-visby text-left mt-5">
                   Executive
                 </p>
             <p class=" text-xl 2xl:text-3xl  font-visby text-lef">
                   Post-Production Director
                 </p>
             </motion.div>
             
             <div class="team-items z-40">
             <motion.div
                   class="relative"
                   initial="rest"
                   whileHover="hover"
                   // variants={teamMotion}
                 >
                   <Image
                   source srcset={tinwebp}
                   type="image/webp"
                   class="team-img" 
                   alt="Christine Jaylo" 
                   src={tin}>
                   </Image>
                   <motion.div
                   // variants={teamDescMotion}
                   class="team-description left-full"
                 >
                   {/* <p> 
                     To lead a team of creatives requires not just peak talent
                     but also top-tier taste.{" "}
                   </p>
                   <p>
                     “Tintin” commands the team’s creative flow and directs
                     projects as the Executive Creative Director.
                   </p>
                   <p>
                     Her job is making sure that a singular message is sent
                     across multiple renditions of varied art forms.
                   </p>*/}
                   </motion.div>
               </motion.div>
               <p class=" text-xl 2xl:text-4xl  font-visby font-bold text-left mt-5">
                   CHRISTINE JAYLO
                 </p>
                 <p class=" text-xl 2xl:text-3xl  font-visby text-left mt-5">
                   Executive
                 </p>
                 <p class=" text-xl 2xl:text-3xl  font-visby text-left">
                   Creative Director
                 </p>
                </div>
               
                <div class="team-items z-30">
                 <motion.div
                   class="relative"
                   initial="rest"
                   whileHover="hover"
                   // variants={teamMotion}
                 >
                   <Image
                   srcset={lcidwebp} 
                   type="image/webp"
                   class="team-img"
                   alt="Lcid Fernandez" 
                   src={lcid}> 
                   </Image>
 
                   <motion.div
                     // variants={teamDescMotion}
                     class="team-description left-full"
                   >
                     {/* <p> 
                       Lcid founded Prometheus on a passion for imagination and
                       telling stories.
                     </p>
                     <p>
                       He envisioned a team of artists and strategists with the
                       singular goal of committing their talents to marketing.
                     </p>
                     <p>
                       The CEO understands that the best stories are told in an
                       exciting, colorful, and captivating manner.{" "}
                     </p>
                     <p>
                       What goes for telling a story is the same that goes for
                       marketing a brand.
                     </p>*/}
                   </motion.div>
                 </motion.div>
                 <p class=" text-xl 2xl:text-4xl  font-visby font-bold text-left mt-5">
                   LCID FERNANDEZ
                 </p>
                 <p class=" text-xl 2xl:text-3xl  font-visby text-left mt-5">
                   CEO
                 </p>
               </div>
               
               <motion.div class="team-items z-60" whileHover={{ zIndex: 60 }}>
                 <motion.div
                   class="relative"
                   initial="rest"
                   whileHover="hover"
                   // variants={teamMotion}
                 >
                   <Image
                   srcset={ginowebp} 
                   type="image/webp"
                   alt="Gino Fanega" 
                   src={gino}
                   class="team-img" >
                   </Image>
                   <motion.div
                     // variants={teamDescMotion}
                     class="team-description right-full"
                   >
                     {/* <p> 
                       Content Production is all about perspective, lighting, and
                       the techniques that come with it.{" "}
                     </p>
                     <p>
                       The man behind the camera is Gino and he’s responsible for
                       all visual direction and production.{" "}
                     </p>
                     <p>
                       The Executive Content Producer plans out the storyboard,
                       sets the scene, points the camera, and does the magic.{" "}
                     </p> */}
                   </motion.div>
                 </motion.div>
                 <p class=" text-xl 2xl:text-4xl  font-visby font-bold text-left mt-5">
                   GINO FANEGA
                 </p>
                 <p class=" text-xl 2xl:text-3xl  font-visby text-left mt-5">
                   Executive
                 </p>
                 <p class=" text-xl 2xl:text-3xl  font-visby text-left">
                   Content Producer
                 </p>
               </motion.div>
 
               <motion.div class="team-items" whileHover={{ zIndex: 50 }}>
                 <motion.div
                   class="relative"
                   initial="rest"
                   whileHover="hover"
                   // variants={teamMotion}
                 >
                   <Image
                   srcset={reywebp} 
                   type="image/webp"
                   class="team-img"
                   alt="Rey Palmares"
                   src={rey}>
                   </Image>
                   <motion.div
                     // variants={teamDescMotion}
                     class="team-description right-full"
                   >
                     {/* <p> 
                       The Senior Copywriter takes charge in the text and verbal
                       content in all production - like the one you’re reading
                       now.{" "}
                     </p>
                     <p>
                       Rey is responsible for presenting the ideas in word format
                       and conveying the message outside of the visuals by the
                       other creatives.{" "}
                     </p>*/}
                   </motion.div>
                 </motion.div>
                 <p class=" text-xl 2xl:text-4xl  font-visby font-bold mt-5"> 
                   REY PALMARES
                 </p>
                 <p class=" text-xl 2xl:text-3xl  font-visby text-left mt-5">
                   Senior Copywriter
                 </p>
               </motion.div>
             </motion.div>
             </div>
            </section>
            <Image
            srcset={rock4webp} type="image/webp"
            class="rellax absolute right-0 w-1/6 h-auto"
            alt="rock"
            data-rellax-speed="-1"
            src={rock4}>
         </Image>
         </div>
        )
    }
}

