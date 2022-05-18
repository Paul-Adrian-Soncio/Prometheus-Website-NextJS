import Image from 'next/image'
import React, { Component } from 'react'
import { motion } from 'framer-motion';
import iconST from "../public/photos/icons/strategyservicesicon.png";
import iconSTwebp from "../public/photos/icons/strategyservicesicon.webp";
import iconBS from "../public/photos/icons/brandingservicesicon.png";
import iconBSwebp from "../public/photos/icons/brandingservicesicon.webp";
import iconCS from "../public/photos/icons/creativeservicesicon.png";
import iconCSwebp from "../public/photos/icons/creativeservicesicon.webp";
import iconDS from "../public/photos/icons/digitalmarketingicon.png";
import iconDSwebp from "../public/photos/icons/digitalmarketingicon.webp";
import iconMS from "../public/photos/icons/mediaservicesicon.png";
import iconMSwebp from "../public/photos/icons/mediaservicesicon.webp";
import iconSM from "../public/photos/icons/socialmediaicon.png";
import iconSMwebp from "../public/photos/icons/socialmediaicon.webp";
import iconEM from "../public/photos/icons/eventmanagementicon.png";
import iconEMwebp from "../public/photos/icons/eventmanagementicon.webp";
import rock3 from "../public/photos/rocks/Services-Meteor.png";
import rock3webp from "../public/photos/rocks/Services-Meteor.webp";

export default class Services extends Component {
    render () {
        return (
            <div class="relative h-auto xl:h-screen  flex flex-col items-center">
            <h2 class="text-xl xl:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-prometheus-gray text-center mb-5">
              SERVICES
            </h2>
            <div class="flex flex-shrink flex-wrap justify-center lg:w-8/12">
            <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
                <Image
                srcset={iconSTwebp}
                src={iconST}
                class="image-services"
                alt="strategy services">
                  </Image>           
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
              <Image
              srcset={iconBSwebp}
                src={iconBS}
                class="image-services"
                alt="brand services">
                  </Image> 
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
              <Image
              srcset={iconCSwebp}
                src={iconCS}
                class="image-services"
                alt="creative services">
                  </Image> 
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
              <Image
              srcset={iconDSwebp}
                src={iconDS}
                class="image-services"
                alt="Digital Marketing services">
                  </Image> 
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
              <Image
              srcset={iconMSwebp}
                src={iconMS}
                class="image-services"
                alt="Media services">
                  </Image> 
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
              <Image
              srcset={iconSMwebp}
                src={iconSM}
                class="image-services"
                alt="Social Media services">
                  </Image> 
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
              <Image
              srcset={iconEMwebp}
                src={iconEM}
                class="image-services"
                alt="Event Management services">
                  </Image> 
              </motion.div>
            </div>
            <Image
                src={rock3}
                class="rellax absolute bottom-0 left-0 w-2/6 auto"
                alt="rock">
                  </Image> 
              </div>
          
        )
    }
}
