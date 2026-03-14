import Footer from "./Footer";
import header from "./header.jpg";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";
function Skills() {
    const skills = [
    {name : "C", level : 90},
    {name : "C++", level : 90},
    {name : "Java", level : 90},
    { name: "HTML", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React JS", level: 75 },
    { name: "DSA", level: 70 },
    {name : "Communication", level : 90},
  ];

  return (
    <header>
      <div className="h-full bg-cover items-center justify-center pt-10 bg-zinc-900  md:bg-zinc-900">
        <center>
          <div
            style={{ backgroundImage: `url(${header})` }}
            className="max-w mx-auto  ml-8 mr-8 pr-5 md:pr-5 border-10 rounded-2xl max-h-screen  pt-10
                      border-indigo-800 mb-20 bg-cover"
          >
            <Portfolio />
            <h2 className="md:text-4xl text-2xl font-bold text-center text-indigo-800 animate-fadeUp p-2">
        My Skills
      </h2>
            {/* skills section */}
            <div className="md:flex hidden  justify-center md:overflow-hidden p-2 pt-[-100px]  gap-5">
              <div className="animate-fadeUp ">
                <svg className="md:h-20 md:w-20 h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#283593"
                    fill-rule="evenodd"
                    d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#5c6bc0"
                    fill-rule="evenodd"
                    d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#3949ab"
                    fill-rule="evenodd"
                    d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20 h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#00549d"
                    fill-rule="evenodd"
                    d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#0086d4"
                    fill-rule="evenodd"
                    d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#0075c0"
                    fill-rule="evenodd"
                    d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M31 21H33V27H31zM38 21H40V27H38z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M29 23H35V25H29zM36 23H42V25H36z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20 h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#F44336"
                    d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                  ></path>
                  <path
                    fill="#F44336"
                    d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                  ></path>
                  <g>
                    <path
                      fill="#1565C0"
                      d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20 h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#E65100"
                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                  ></path>
                  <path
                    fill="#FF6D00"
                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                  ></path>
                  <path
                    fill="#EEE"
                    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                  ></path>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20 h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#00acc1"
                    d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                  ></path>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20 h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                  <path
                    fill="#000001"
                    d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                  ></path>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20 h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width="70"
                  height="70"
                >
                  <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
                  <g stroke="#61DAFB" strokeWidth="6" fill="none">
                    <ellipse cx="64" cy="64" rx="56" ry="22" />
                    <ellipse
                      cx="64"
                      cy="64"
                      rx="56"
                      ry="22"
                      transform="rotate(60 64 64)"
                    />
                    <ellipse
                      cx="64"
                      cy="64"
                      rx="56"
                      ry="22"
                      transform="rotate(120 64 64)"
                    />
                  </g>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20 h-10 w-10"
                 viewBox="0 0 64 64" width="80" height="80">
                  <circle cx="32" cy="10" r="5" fill="#4F46E5" />
                  <circle cx="10" cy="40" r="5" fill="#4F46E5" />
                  <circle cx="54" cy="40" r="5" fill="#4F46E5" />

                  <line
                    x1="32"
                    y1="15"
                    x2="10"
                    y2="35"
                    stroke="#4F46E5"
                    strokeWidth="2"
                  />
                  <line
                    x1="32"
                    y1="15"
                    x2="54"
                    y2="35"
                    stroke="#4F46E5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20 h-10 w-10"
                 width="70" height="70" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
                    stroke="blue"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div></div>
            </div>
            {/* in mobile size */}
            <div className="flex-col md:hidden  justify-center p-2 pt-[-100px] overflow-hidden  gap-8">
              <div className="animate-fadeUp ">
                <svg className="md:h-20 md:w-20  h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#283593"
                    fill-rule="evenodd"
                    d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#5c6bc0"
                    fill-rule="evenodd"
                    d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#3949ab"
                    fill-rule="evenodd"
                    d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20   h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#00549d"
                    fill-rule="evenodd"
                    d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#0086d4"
                    fill-rule="evenodd"
                    d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#0075c0"
                    fill-rule="evenodd"
                    d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M31 21H33V27H31zM38 21H40V27H38z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M29 23H35V25H29zM36 23H42V25H36z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20  h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#F44336"
                    d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                  ></path>
                  <path
                    fill="#F44336"
                    d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                  ></path>
                  <g>
                    <path
                      fill="#1565C0"
                      d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20  h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#E65100"
                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                  ></path>
                  <path
                    fill="#FF6D00"
                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                  ></path>
                  <path
                    fill="#EEE"
                    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                  ></path>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20   h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#00acc1"
                    d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                  ></path>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20   h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                  <path
                    fill="#000001"
                    d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                  ></path>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20   h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width="70"
                  height="70"
                >
                  <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
                  <g stroke="#61DAFB" strokeWidth="6" fill="none">
                    <ellipse cx="64" cy="64" rx="56" ry="22" />
                    <ellipse
                      cx="64"
                      cy="64"
                      rx="56"
                      ry="22"
                      transform="rotate(60 64 64)"
                    />
                    <ellipse
                      cx="64"
                      cy="64"
                      rx="56"
                      ry="22"
                      transform="rotate(120 64 64)"
                    />
                  </g>
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20  h-12 w-12"
                 viewBox="0 0 64 64" width="80" height="80">
                  <circle cx="32" cy="10" r="5" fill="#4F46E5" />
                  <circle cx="10" cy="40" r="5" fill="#4F46E5" />
                  <circle cx="54" cy="40" r="5" fill="#4F46E5" />

                  <line
                    x1="32"
                    y1="15"
                    x2="10"
                    y2="35"
                    stroke="#4F46E5"
                    strokeWidth="2"
                  />
                  <line
                    x1="32"
                    y1="15"
                    x2="54"
                    y2="35"
                    stroke="#4F46E5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="animate-fadeUp">
                <svg className="md:h-20 md:w-20  h-12 w-12"
                 width="70" height="70" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
                    stroke="blue"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
            </div>
            
            <div className="max-w-2xl mx-auto justify-center flex-col  md:flex pb-5  hidden">

    

      {skills.map((skill, index) => (

        <div key={index} className="mb-2">

          <div className="flex justify-between text-indigo-800 font-semibold mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="w-full bg-gray-300 h-3 rounded-full">

            <motion.div
              className="bg-blue-500 h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5 }}
            />

          </div>

        </div>

      ))}

    </div>
    
          </div>
        </center>
      </div>
       <footer className="bg-zinc-900">
          <div className=" mt-[-80px] md:mt-[-80px] p-3 overflow-hidden  md:p-5 rounded-lg text-center bg-indigo-600">
          {/* for laptop size */}
          <p className=" text-xl font-semibold hidden md:block text-gray-300 animate-marquee">
            Welcome to the Manish Kumar Nayak portfolio || Welcome to the Manish
            Kumar Nayak portfolio
          </p>

          {/* for mobile size */}
          <p className="text-[13px]   md:text-xl font-semibold block md:hidden  text-gray-300 animate-marquee">
            Welcome to the Manish Kumar Nayak portfolio
          </p>
          </div>
          </footer>
      {/* screen for mobile */}
      <div className="max-w-2xl mx-auto p-10 bg-zinc-900 h-full flex-col  md:hidden">

    

      {skills.map((skill, index) => (

        <div key={index} className="mb-2">

          <div className="flex justify-between text-indigo-800 font-semibold mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="w-full  bg-gray-300 h-3 rounded-full">

            <motion.div
              className="bg-blue-500 h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5 }}
            />

          </div>

        </div>

      ))}

    </div>
   <Footer />
    </header>
  );
}
export default Skills;
