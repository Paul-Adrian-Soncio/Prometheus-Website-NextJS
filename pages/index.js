import './_app.js';
import Image from 'next/image'
import Logo from "../public/photos/PrometheusLogo.webp";


function HomePage() {
  return(
    <header class="text-gray-100 body-font bg-gradient-to-b from-black w-full max-sm:z-10 relative">
       <nav
          animate={{ scale: [0.8, 1] }}
          transition={{ ease: [0.4, 0.0, 0.2, 1], duration: 0.4 }}
          class="py-2 md:py-4"
        >
          <div class="container px-4 mx-auto md:flex md:items-center">
            <div class="flex justify-between items-center">
              <a href="#" class="font-bold text-xl text-prometheus-gold">
              <Image
                src={Logo}
                alt="Picture of logo"
                width={250}
                height={100}
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
              <a href="#about" class="nav-items">
                ABOUT
              </a>
              <a href="#services" class="nav-items">
                SERVICES
              </a>
              <a href="#team" class="nav-items">
                TEAM
              </a>
              <a href="#clients" class="nav-items">
                CLIENTS
              </a>
              <a href="#advisors" class="nav-items">
                ADVISORS
              </a>


            </div>
            </div>


    </nav>
    </header>
  )
}
  

export default HomePage