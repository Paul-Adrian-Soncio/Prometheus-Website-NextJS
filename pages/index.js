
import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}

import './_app.js';
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactDOM from "react-dom";

import Logo from "../public/photos/PrometheusLogo.webp";
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


// import secondBG from './photos/secondbg.jpg';
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

import lemuel from "../public/photos/sirlemuel.jpg";
import lemuelwebp from "../public/photos/sirlemuel.webp";
import tessa from "../public/photos/tessa.jpg";
import tessawebp from "../public/photos/tessa.webp";
import rock5 from "../public/photos/rocks/AdviserstoEndblock--Meteors.png";
import rock5webp from "../public/photos/rocks/AdviserstoEndblock--Meteors.webp";

import prometheusLogo from "../public/photos/PrometheusLogo.png";
import prometheusLogowebp from "../public/photos/PrometheusLogo.webp";


import about from 'next/dynamic';
import services from 'next/dynamic';
import clients from 'next/dynamic';
import team from 'next/dynamic';
import advisors from 'next/dynamic';
import contact from 'next/dynamic';
function HomePage() {
  const About = about (()=>import ("./About"));
  const Services = services (()=>import ("./Services"));
  const Clients = clients (()=>import ("./Clients"));
  const Team = team (()=>import ("./Team"));
  const Advisors = advisors (()=>import ("./Advisors"));
  const Contact = contact (()=>import ("./Contact"));
  return(
    <header class="text-gray-100 body-font bg-gradient-to-b from-black w-full max-sm:z-10 relative">
     
        <div className="bg-black">
              <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="w-0 flex-1 flex text-center justify-center items-center">
                    <p className="ml-3 font-medium text-prometheus-gold">
                      Prometheus is CDM and Google Analytics Qualification certified!
                    </p>
                  </div>
                </div>
              </div>
            </div>
      
       
       
            <motion.nav
          animate={{ scale: [0.8, 1] }}
          transition={{ ease: [0.4, 0.0, 0.2, 1], duration: 0.4 }}
          class="py-2 md:py-4"
        >
          <div class="container px-4 mx-auto md:flex md:items-center">
            <div class="flex justify-between items-center">
              <a href="#" class="font-bold text-xl text-prometheus-gold">
              <Image
                src={Logo}
                alt="Prometheus Logo"
                width={200}
                height={70}
                />
              </a>
              <button
                class="border border-solid border-white px-3 py-1 rounded text-white opacity-50 hover:opacity-75 md:hidden"           
              >
              <b>☰</b>
              </button>
            </div>

            <div
              className={
                // (this.state.isHeaderToggled ? "hidden " : "flex ") +
                "md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 max-sm:bg-black font-bold text-2xl"
              }
            >

              <a
                href="#"
                class="p-2 lg:px-4 md:text-sm lg:text-base md:mx-2 font-visby text-white rounded bg-prometheus-gold"
              >
                HOME
              </a>
              <a href="#about" class="nav-items" >
                ABOUT
              </a>
              <a href="#services" class="nav-items" >
                SERVICES
              </a>
              <a href="#team" class="nav-items" >
                TEAM
              </a>
              <a href="#clients" class="nav-items" >
                CLIENTS
              </a>
              <a href="#advisors" class="nav-items" >
                ADVISORS
              </a>
              <a href="#" class="nav-items" >
                BLOG
              </a>
              <a
                href="#contact"
                class="p-2 lg:px-4 md:mx-2 md:text-sm lg:text-base text-prometheus-gold text-center border border-solid border-prometheus-gold rounded hover:bg-prometheus-gold hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                CONTACT
              </a>
          </div>
        </div>
      </motion.nav>
      
            <section>
            <motion.nav
            animate={{ scale: [0.8, 1] }}
            transition={{ ease: [0.4, 0.0, 0.2, 1], duration: 0.4 }}
            class="sm:relative flex h-auto top-1/2 absolute md:h-screen w-full overflow-hidden max-md:justify-center items-center"
          >
            <h1 class="relative bg-clip-text text-transparent bg-gradient-to-b from-white to-prometheus-gray md:left-20 xl:bottom-20 2xl:left-40">
              <p class="font-display text-3xl sm:text-4xl xl:text-6xl 2xl:text-7xl text-left">
                <span>YOUR BRAND,</span>
              </p>
              <p class="font-display text-3xl sm:text-4xl xl:text-6xl 2xl:text-7xl text-left">
                REIMAGINED.
              </p>
            </h1>
          </motion.nav>
          </section>
          
    <div
        class="bg-cover bg-bottom bg-black bg-no-repeat"
       
      >
        <section id="about">
         <About/>
            </section>
            
            <section id="services">
              <Services/>
            </section>
            </div>

            <section id="clients">
            <Clients/>
            </section>

            <div
        class="relative bg-cover bg-bottom bg-black"
       >
        <section id="team">
        <Team/>
        </section>

        <section id="advisors">
        <Advisors/>
        </section>
        
        <section id="contact">
        <Contact/>
        </section>

      </div>

      <div class="placeholder relative z-10 h-70px sm:h-100px"></div>

      <footer class="fixed bottom-0 w-full z-20">
      <div
        class="relative content-center items-center sm:flex justify-between flex-row-reverse bg-cover h-70px sm:h-100px bg-bottom overflow-hidden"
   
      >
        <Image
        srcset={prometheusLogowebp} type="image/webp"
        class="sm:mx-5 m-auto md:mx-10 lg:mx-20 h-8 sm:h-12 md:h-16 lg:h-20 2xl:max-h-20 max-sm:mt-1"
        alt="Prometheus Footer Logo"
        src={prometheusLogo}
        width={250}
        height={70}>
        </Image>
        <div class="text-center sm:text-left sm:text-sm text-xs md:text-base 2xl:text-xl font-visby text-white sm:ml-10">
          <p>Copyright © 2022 Prometheus, Inc. All rights reserved</p>
          <p>Daily Guardian Center, Guzman Jesena St., Mandurriao, Iloilo City, 5000 Iloilo, Philippines</p>
        </div>
      </div>
    </footer>
       
            
    
    </header>
  );
}


  

export default HomePage

