import React, { Component } from 'react'

export default class About extends Component {
    render () {
        return (
           <div>
            <div class="w-80p m-auto">
              <div class="relative w-100p pb-5625pc overflow-hidden">
                <iframe
                  loading="lazy"
                  data-autoplay="true"
                  data-lazy="true"
                  class="t-0 l-0 absolute w-full h-full"
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D208857277659564&show_text=false&appId=270558316298470&mute=0&autoplay=true"
                  title="Facebook video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
  
              </div>
          
              <section class="mt-10 mb-20">
              <div class="relative z-10 items-center justify-center">
              <div class="max-sm:text-white text-sm md:text-2xl xl:text-5xl 2xl:text-6xl font-display z-20 text-center">
                  WE'RE A TEAM OF MARKETERS
                </div>
                <div class="max-sm:text-white text-sm md:text-2xl xl:text-5xl 2xl:text-6xl font-display z-20 text-center">
                  WHO LOVE STORYTELLING
                </div>
              </div>
              <div class="prometheus-text font-visby text-center mt-10">
                We promote your brand through strategically{" "}
              </div>
              <div class="prometheus-text font-visby text-center">
                organized content with technical precision{" "}
              </div>
              <div class="prometheus-text font-visby text-center">
                and creative skill.
              </div>
              </section>
              </div>
              
        )
    }
}
