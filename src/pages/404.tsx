import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div className="h-screen w-screen bg-gray-100 flex items-center">
    <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
      <div className="max-w-md">
        <div className="text-5xl font-dark font-bold">404</div>
        <p className="text-2xl md:text-3xl font-light leading-normal">
          Sorry we couldn't find this page.{" "}
        </p>
        <p className="mb-8">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link
          to="/"
          className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-primary bg-primary-600 active:bg-primary-600 hover:bg-primary-700"
        >
          back to homepage
        </Link>
      </div>
      <div className="max-w-lg">
        <svg
          className="fill-current w-3/5 pt-10 m-auto"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
        >
          <circle cx="100" cy="100" r="100" fill="#14B8A6" />
          <g fill="#4e5c73">
            <path
              d="M83.853,118.918c0,-19.582 17.256,-35.48 38.511,-35.48c21.255,0 38.512,15.898 38.512,35.48c0,11.627 -6.185,22.517 -16.553,29.147l-1.56,12.396l-11.135,-7.105c-3.031,0.692 -6.142,1.042 -9.264,1.042c-21.255,0 -38.511,-15.898 -38.511,-35.48Z"
              fillOpacity=".25"
            />
            <path d="M83.853,117.054c0,-19.582 17.256,-35.48 38.511,-35.48c21.255,0 38.512,15.898 38.512,35.48c0,11.627 -6.185,22.517 -16.553,29.147l-1.56,12.396l-11.135,-7.105c-3.031,0.692 -6.142,1.042 -9.264,1.042c-21.255,0 -38.511,-15.898 -38.511,-35.48Z" />
          </g>
          <path
            d="M146.609,91.652c0,-27.326 -24.081,-49.511 -53.742,-49.511c-29.661,0 -53.743,22.185 -53.743,49.511c0,16.227 8.631,31.423 23.1,40.675l2.176,17.298l15.54,-9.914c4.229,0.965 8.57,1.453 12.927,1.453c29.661,0 53.742,-22.185 53.742,-49.512Z"
            fill="#231f20"
            fillOpacity=".25"
          />
          <path
            d="M146.609,89.051c0,-27.326 -24.081,-49.512 -53.742,-49.512c-29.661,0 -53.743,22.186 -53.743,49.512c0,16.226 8.631,31.423 23.1,40.675l2.176,17.298l15.54,-9.915c4.229,0.966 8.57,1.454 12.927,1.454c29.661,0 53.742,-22.185 53.742,-49.512Z"
            fill="#fff"
          />
          <g fill="#4e5c73">
            <circle cx="70.2" cy="89.398" r="6.485" />
            <circle cx="92.867" cy="89.398" r="6.485" />
            <circle cx="115.534" cy="89.398" r="6.485" />
          </g>
        </svg>
      </div>
    </div>
  </div>
)

export default NotFoundPage
