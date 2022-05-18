import Image from 'next/image'
import React, { Component } from 'react'
import { motion } from 'framer-motion';

export default class Contact extends Component {
    render () {
        return (
            <div class="max-w-screen-sm mx-auto p-5">
            <div class="text-center mb-16">
              <p class="mt-4 text-sm sm:text-xl leading-7 text-white font-regular uppercase">
                Contact Us and Get a Quote
              </p>
              <h2 class="z-10 text-3xl sm:text-4xl 2xl:text-6xl leading-normal font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-prometheus-gray text-center">
                We're always ready for new stories
              </h2>
            </div>
            <form name="prometheuscontact" method="POST" netlify>
            <input type="hidden" name="form-name" value="prometheuscontact" />
            <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
                    class="block uppercase tracking-wide text-white text-xs font-visby mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    name="firstname"
                    required
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Peter"
                  />
            </div>
            <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-visby mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    name="lastname"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Weyland"
                  />
            </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-visby mb-2"
                    for="grid-password"
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    required
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="********@*****.**"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-visby mb-2"
                    for="grid-password"
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    required
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="********@*****.**"
                  />
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-visby mb-2"
                    for="grid-password"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="10"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
                <div class="flex justify-between w-full px-3">
                  <div class="md:flex md:items-center">
                    <label class="block text-white font-bold">
                      <input
                        name="checked"
                        class="mr-2 leading-tight"
                        type="checkbox"
                      />
                      <span class="text-sm">Add me to your mailing list</span>
                    </label>
                  </div>
                  <button
                    class="shadow bg-prometheus-gold hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
        )
    }
}

