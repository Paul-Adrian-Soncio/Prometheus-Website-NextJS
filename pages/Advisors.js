import Image from 'next/image'
import React, { Component } from 'react'
import { motion } from 'framer-motion';
import lemuel from "../public/photos/sirlemuel.jpg";
import lemuelwebp from "../public/photos/sirlemuel.webp";
import tessa from "../public/photos/tessa.jpg";
import tessawebp from "../public/photos/tessa.webp";
import rock5 from "../public/photos/rocks/AdviserstoEndblock--Meteors.png";
import rock5webp from "../public/photos/rocks/AdviserstoEndblock--Meteors.webp";

export default class Advisors extends Component {
    render () {
        return (
            <div class="relative flex md:h-screen bg-cover place-items-center	items-center justify-center">
            <div class="w-3/4 md:h-3/6 max-md:block grid max-md:grid-cols-1 max-md:grid-rows-3 md:grid-cols-3 grid-flow-col max-md:mt-10 gap-10">
              <div class="text-white text-base lg:text-3xl xl:text-4xl 2xl:text-6xl font-visby text-center md:text-left tracking-wider mt-10 mb-10">
                <span>
                  We are backed by{" "}
                  <span class="font-demi-bold">
                    several decades of experience
                  </span>{" "}
                  in theory and practice.
                </span>
              </div>
              <motion.div>
                <motion.div
                  class="relative"
                  initial="rest"
                  whileHover="hover"
                  // variants={teamMotion}
                >
                  <Image
                  srcset={lemuelwebp} type="image/webp" 
                  alt="Lemuel Fernandez"
                  class="transition duration-500 border-gray-300 border-opacity-0 sm:hover:border-opacity-100 border-4 rounded-lg sm:hover:border-prometheus-gold w-full mh-600px object-cover block"
                  src={lemuel}>
                  </Image>
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 1,
                      bounce: 0,
                      zIndex: -1,
                      type: "tween",
                    }}
                    // variants={teamDescMotion}
                    class="team-description right-full w-full"
                  >
                    {/* <p class=""> 
                      Mr. Fernandez has over thirty years’ experience in public
                      relations service working with corporations and public
                      servants all over the country.
                    </p>
                    <p class="">
                      Coupled with his time as a journalist, he knows the
                      intricacies of marketing by first-hand experience.
                    </p> */}
                  </motion.div>
                  {/* <p class="text-white text-xl 2xl:text-4xl font-visby text-left max-sm:mb-5">
                    Lemuel Fernandez
                  </p> */}
                </motion.div>
              </motion.div>
          
              <motion.div>
                <motion.div
                  class="relative"
                  initial="rest"
                  whileHover="hover"
                  // variants={teamMotion}
                >
                  <Image
                  srcset={tessawebp} type="image/webp" 
                  alt="Tessa Albaña"
                  class="transition duration-500 border-gray-300 border-opacity-0 sm:hover:border-opacity-100 border-4 rounded-lg sm:hover:border-prometheus-gold w-full mh-600px object-cover block"
                  src={tessa}>
                  </Image>
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 1,
                      bounce: 0,
                      zIndex: -1,
                      type: "tween",
                    }}
                    // variants={teamDescMotion}
                    class="absolute w-full p-4  text-prometheus-gold bg-black bg-cover border-prometheus-gold text-sm 2xl:text-xl font-visby text-center md:text-left bottom-10 right-full"
                  >
                    {/* <p class=""> 
                      Ms. Albaña has taught generations of marketers as an
                      Assistant Professor at the University of the Philippines
                      Visayas.
                    </p>
                    <p class="">
                      As the go-to coach for marketing competitions, her teams
                      have won several national awards.
                    </p> */}
                  </motion.div>
                  {/* <p class="text-white text-xl xl:text-2xl 2xl:text-4xl font-visby text-right">
                    Tessa Albaña
                  </p> */}
                </motion.div>
              </motion.div>
            </div>
            <Image
            srcset={rock5webp} type="image/webp"
            class="rellax overflow-visible absolute left-5 -bottom-36 2xl:-bottom-60 w-3/12 h-auto"
            alt="floating rock5"
            data-rellax-speed="4"
            src={rock5}>
            </Image>
            
          </div>
        )
    }
}

