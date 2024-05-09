import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { BsDribbble, BsInstagram, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-0" id="#contact">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pb-4">
        <div>
          <Link href="/">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">
              Imagi<span className="text-blue-500">Nate</span>
            </span>
          </Link>
          <p className="pt-6">Learn more about us</p>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-6">Company</h5>
          <ul className="space-y-4">
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                Press
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                Support
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-6">Resources</h5>
          <ul className="space-y-4">
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                Learning Centre
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                Promotion
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                Inspiration
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                Videos
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-6">Store</h5>
          <ul className="space-y-4">
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                View the Store
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                Forest UI Kit
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-600" href="#">
                Otto Template
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-2 pt-2 border-t border-gray-200">
        <p className="text-gray-500">
          Copyright©2024{" "}
          <span className="text-lg font-bold text-gray-900">
            Imagi<span className="text-blue-500">Nate</span>
          </span>
        </p>
        <div className="mt-4 lg:mt-0 flex space-x-4">
          <h5 className="font-bold text-md sm:text-lg mb-4">
            Follow our Socials
          </h5>
          <BsTwitterX className="h-6 w-6 text-gray-500 hover:text-gray-600" />
          <BsInstagram className="h-6 w-6 text-gray-500 hover:text-gray-600" />
          <BsDribbble className="h-6 w-6 text-gray-500 hover:text-gray-600" />
          <LinkedinIcon className="h-6 w-6 text-gray-500 hover:text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
