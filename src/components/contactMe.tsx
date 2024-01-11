import React from 'react';
import Image from 'next/image';
import HamburgerMenu from '@/components/hamburgerMenu';
import logo from '@/img/logo.svg'
import { Button } from '@/components/ui/button';
import '@/styles/globals.css';

export default function ContactMe() {

  return ( 
    <section className='absolute z-20 top-52 left-[30%]'>
        <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
        <div className="container p-8 rounded form">
        <form action="/action_page.php">

            <div className="mb-6">
            <label htmlFor="fname" className="block text-sm font-medium text-gray-600">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." className="w-full p-3 border border-gray-300 rounded" />
            </div>

            <div className="mb-6">
            <label htmlFor="lname" className="block text-sm font-medium text-gray-600">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="w-full p-3 border border-gray-300 rounded" />
            </div>

            <div className="mb-6">
            <label htmlFor="country" className="block text-sm font-medium text-gray-600">Country</label>
            <select id="country" name="country" className="w-full p-3 border border-gray-300 rounded">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
            </select>
            </div>

            <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." className="w-full p-3 border border-gray-300 rounded resize-y"></textarea>
            </div>

            <input type="submit" value="Submit" className="bg-green-500 text-white py-3 px-6 rounded cursor-pointer hover:bg-green-600" />

        </form>
        </div>
    </section> 
  )
}