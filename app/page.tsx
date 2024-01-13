import Image from "next/image";
import Link from "next/link";

import HeroImage from "../assets/images/square.jpg";
import Cup from "../assets/images/cup.png";
import Product1 from "../assets/images/p1.jpg";
import Product2 from "../assets/images/p2.jpg";
import Product3 from "../assets/images/p3.jpg";
import Product4 from "../assets/images/p4.jpg";

export default function Home() {
  return (
    <>
      <header className="text-[--color2] body-font  border-b  border-[--color2] w-full">
        <div className="container z-10 fixed  bg-[--wine] mx-auto flex md:flex-wrap px-8 md:px-24 p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-[--color2] mb-4 md:mb-0">
            <span className="ml-3 text-xl font-bold">The Communion</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex md:flex-wrap items-center text-base justify-center">
            <a href="#home" className="mr-5 hover:text-white">
              Home
            </a>
            <a href="#bread" className="mr-5 hover:text-white">
              The Bread
            </a>
            {/* <a href="#wine" className="mr-5 hover:text-white">
              The Wine
            </a>
            <a href="#contact" className="mr-5 hover:text-white">
              The Testament
            </a> */}
          </nav>
          <button className="inline-flex items-center bg-[--color2] text-[--wine] border border-[--wine] py-1 px-3 focus:outline-none hover:border-[--color2] hover:text-[--color2] hover:bg-[--wine] rounded text-base mt-4 md:mt-0">
            Get the Bread
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <main
        id="home"
        className="flex min-h-screen flex-col items-center justify-between p-3 lg:p-24 pb-5">
        <section className="hero h-screen text-gray-600 body-font mx-[-2rem] md:mx-[-6rem]">
          <div className="overlay h-screen glassEffect">
            <div className="container mx-auto flex p-16 lg:p-24 pt-40  flex-col justify-center items-center">
              <div className="lg:flex-grow md:mt-28 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font text-center uppercase text-4xl md:text-7xl p-2 md:p-6 rounded mb-4 font-medium text-[--color2]">
                  The Blood <span className="inline-block w-2 h-16 bg-[--wine]"></span> The Body
                  &nbsp;
                  <br className="hidden lg:inline-block" />
                  The Spirit
                </h1>
                <p className="mb-8 leading-relaxed text-white lg:px-24 text-center">
                  Here is for a brief description of the product. Loom neutra air plant cold-pressed
                  tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div className="flex justify-center ">
                  <button className="inline-flex text-[--wine] bg-[--color2] border border-[--color2] py-2 px-6  hover:bg-[--wine] hover:text-[--color2] rounded text-lg">
                    <a href="#sectionTwo">Get the Bread</a>
                  </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                {/* <Image
                  src={Cup}
                  className="object-cover object-center rounded"
                  alt="hero"
                  width={400}
                  height={400}
                /> */}
              </div>
            </div>
          </div>
        </section>

        <section id="sectionTwo" className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[--color2]">
                  Order for Communion Bread
                </h1>
                <div className="h-1 w-20 bg-[--color3] rounded"></div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-[--color3] px-3 py-6 rounded-lg">
                  <Image
                    className="h-60 rounded w-full object-cover object-center mb-6"
                    src={Product1}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-[--color2] text-xs font-medium title-font">
                    ₦50,000
                  </h3>
                  <h2 className="text-lg text-[--color2] font-medium title-font mb-4">
                    Opsford Communion Bread
                  </h2>
                  <p className="leading-relaxed text-base text-[--wine]">
                    Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt
                    edison bulbche.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-[--color3] px-3 py-6 rounded-lg">
                  <Image
                    className="h-60 rounded w-full object-cover object-center mb-6"
                    src={Product2}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-[--color2] text-xs font-medium title-font">
                    ₦50,000
                  </h3>
                  <h2 className="text-lg text-[--color2] font-medium title-font mb-4">
                    Opsford Communion Bread
                  </h2>
                  <p className="leading-relaxed text-base text-[--wine]">
                    Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt
                    edison bulbche.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-[--color3] px-3 py-6 rounded-lg">
                  <Image
                    className="h-60 rounded w-full object-cover object-center mb-6"
                    src={Product3}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-[--color2] text-xs font-medium title-font">
                    ₦50,000
                  </h3>
                  <h2 className="text-lg text-[--color2] font-medium title-font mb-4">
                    Opsford Communion Bread
                  </h2>
                  <p className="leading-relaxed text-base text-[--wine]">
                    Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt
                    edison bulbche.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-[--color3] px-3 py-6 rounded-lg">
                  <Image
                    className="h-60 rounded w-full object-cover object-center mb-6"
                    src={Product4}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-[--color2] text-xs font-medium title-font">
                    ₦50,000
                  </h3>
                  <h2 className="text-lg text-[--color2] font-medium title-font mb-4">
                    Opsford Communion Bread
                  </h2>
                  <p className="leading-relaxed text-base text-[--wine]">
                    Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt
                    edison bulbche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="wine" className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                ROOF PARTY POLAROID
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Master Cleanse Reliac Heirloom
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway
                tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep
                jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt
                  edison bulbche.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt
                  edison bulbche.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt
                  edison bulbche.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Melanchole
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt
                  edison bulbche.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </section> */}
      </main>
      <footer className="text-gray-600 body-font px-24">
        <div className="container px-5 py-8 mx-auto flex items-center justify-between  sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl text-[--color2]">The Communion</span>
          </a>
          <p className="text-sm text-[--color2] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-[--color2] sm:py-2 sm:mt-0 mt-4">
            © 2024 TheCommunion —
            <a href="#" className="text-[--color2] ml-1" target="_blank">
              @TheCommunion
            </a>
          </p>
          {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span> */}
        </div>
      </footer>
    </>
  );
}
