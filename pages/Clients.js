import Image from 'next/image'
import React, { Component } from 'react'
import { motion } from 'framer-motion';
import dailyguardianLogo from "../public/photos/logos/DGLogo.png";
import dailyguardianLogowebp from "../public/photos/logos/DGLogo.webp";
import morepowerLogo from "../public/photos/logos/MOREPowerLogo.png";
import morepowerLogowebp from "../public/photos/logos/MOREPowerLogo.webp";
import acenergyLogo from "../public/photos/logos/ACEnergyLogo.png";
import acenergyLogowebp from "../public/photos/logos/ACEnergyLogo.webp";
import metropacificiloiloLogo from "../public/photos/logos/MetroPacificIloiloWater.png";
import metropacificiloiloLogowebp from "../public/photos/logos/MetroPacificIloiloWater.webp";
import ap4Logo from "../public/photos/logos/ap4.png";
import ap4Logowebp from "../public/photos/logos/ap4.webp";
import globalshapersLogo from "../public/photos/logos/GlobalShapers.png";
import globalshapersLogowebp from "../public/photos/logos/GlobalShapers.webp";
import hondaLogo from "../public/photos/logos/Honda.png";
import hondaLogowebp from "../public/photos/logos/Honda.webp";
import fordLogo from "../public/photos/logos/FordLogo.png";
import fordLogowebp from "../public/photos/logos/FordLogo.webp";
import metroiloiloLogowebp from "../public/photos/logos/MetroIloiloBulk.webp";
import marriotLogo from "../public/photos/logos/Marriott.png";
import marriotLogowebp from "../public/photos/logos/Marriott.webp";
import doubleteamLogo from "../public/photos/logos/DoubleTeamLogo.png";
import doubleteamLogowebp from "../public/photos/logos/DoubleTeamLogo.webp";
import ibcLogo from "../public/photos/logos/IBCLogo.png";
import ibcLogowebp from "../public/photos/logos/IBCLogo.webp";
import iurLogo from "../public/photos/logos/IUR.png";
import iurLogowebp from "../public/photos/logos/IUR.webp";
import isatLogo from "../public/photos/logos/ISAT.png";
import isatLogowebp from "../public/photos/logos/ISAT.webp";
import damireshillsLogo from "../public/photos/logos/damireshillslogo.png";
import damireshillsLogowebp from "../public/photos/logos/damireshillslogo.webp";
import laylaLogo from "../public/photos/logos/Layla.png";
import laylaLogowebp from "../public/photos/logos/Layla.webp";
import ferjbironLogo from "../public/photos/logos/Ferj.png";
import ferjbironLogowebp from "../public/photos/logos/Ferj.webp";
import jamjamLogo from "../public/photos/logos/Jamjam.png";
import jamjamLogowebp from "../public/photos/logos/Jamjam.webp";


export default class Clients extends Component {
    render () {
        return (
            <div class="relative bg-white h-auto flex flex-col items-center">
            <div class="p-4 mx-auto text-center lg:mt-20">
            <h2 class="text-lg sm:text-xl md:text-3xl 2xl:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-b from-prometheus-gray to-black text-center md:mb-10">
              BRANDS WE'VE WORKED WITH
            </h2>
            </div> 
            <div class="sm:w-10/12 flex flex-wrap flex-shrink flex-row place-items-center items-center content-center justify-center mb-10">
            <div class="logo-container lg:w-1/4">
              <Image
              src={dailyguardianLogo}
              class="w-full  m-auto"
              alt="daily guardian logo"
              source srcset={dailyguardianLogowebp} type="image/webp" >
              </Image>
            </div>
            <div class="logo-container lg:w-1/4">
              <Image
              class="w-full m-auto"
              alt="more power logo"
              src={morepowerLogo}
              source srcset={morepowerLogowebp} type="image/webp">    
              </Image>
            </div>
            <div class="logo-container lg:w-1/4">
              <Image
              class="w-full max-sm:w-80p m-auto"
              alt="ace energy logo"
              src={acenergyLogo}
              source srcset={acenergyLogowebp} type="image/webp" >
              </Image>
            </div>
            <div class="logo-container lg:w-1/4">
              <Image
              class="w-full m-auto"
              alt="metro pacific iloilo logo"
              src={metropacificiloiloLogo}
              srcset={metropacificiloiloLogowebp} type="image/webp">
              </Image>
            </div>
            <div class="logo-container">
              <Image
              src={ap4Logo}
              class="w-80p m-auto" 
              lt="apmc logo" 
              srcset={ap4Logowebp} type="image/webp"> 
              </Image>
            </div>
            <div class="logo-container">
              <Image
              class="w-full m-auto"
              alt="globalshapers logo"
              src={globalshapersLogo}
              source srcset={globalshapersLogowebp} type="image/webp">
              </Image>
            </div>
            <div class="logo-container">
              <Image
            class="w-full m-auto" 
            alt="honda logo" 
            src={hondaLogo}
            source srcset={hondaLogowebp} type="image/webp">
              </Image>
            </div>
            <div class="logo-container">
              <Image
              img class="w-full m-auto" 
              alt="ford logo" 
              src={fordLogo} 
              source srcset={fordLogowebp} type="image/webp" >
              </Image>
            </div>
            <div class="logo-container">
              <Image
              src={metroiloiloLogowebp}   type="image/webp"
              class="w-full m-auto"
              alt="metro iloilo logo">
              </Image>
            </div>
            <div class="logo-container">
              <Image
              class="w-full m-auto"
              alt="marriot iloilo logo"
              src={marriotLogo}
              >
              </Image>
            </div>
            <div class="logo-container">
              <Image
              class="w-60p m-auto"
              alt="doubleteam logo"
              src={doubleteamLogo}
              source srcset={doubleteamLogowebp} type="image/webp">
              </Image>
            </div>
            <div class="logo-container">
              <Image
              class="w-80p m-auto"
              alt="iloilo business club logo"
              src={ibcLogo}
              source srcset={ibcLogowebp} type="image/webp">
              </Image>
            </div>
            <div class="logo-container">
              <Image
              class="w-60p m-auto"
              alt="iloilo united royals logo"
              src={iurLogo}
              srcset={iurLogowebp} type="image/webp">
              </Image>
            </div>
            <div class="logo-container">
              <Image
              class="w-80p m-auto"
              alt="isat university logo"
              src={isatLogo}
              source srcset={isatLogowebp} type="image/webp" >
              </Image>
            </div>
            <div class="logo-container">
              <Image
              class="m-auto"
              alt="damires hills logo"
              src={damireshillsLogo}
              srcset={damireshillsLogowebp} type="image/webp">   
              </Image>
            </div>
            <div class="logo-container">
              <Image
              source srcset={laylaLogowebp} 
              type="image/webp"
              class="w-60p m-auto"
              alt="layla logo" 
              src={laylaLogo} >
              </Image>
            </div>
            <div class="logo-container lg:w-1/3">
              <Image
              class="w-full m-auto"
              alt="ferj biron banner"
              src={ferjbironLogo}
              source srcset={ferjbironLogowebp} type="image/webp">
              </Image>
            </div>
            <div class="logo-container">
              <Image
              class="w-full m-auto"
              alt="jamjam banner"
              src={jamjamLogo}
              srcset={jamjamLogowebp} type="image/webp">
              </Image>
            </div>
            </div>
            </div>
        )
    }
}
