import React from "react";
import Image from "next/image";
import HamburgerMenu from "@/components/navigations/hamburgerMenu";
import logo from "@/img/logo.svg";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";

export default function ContactMe() {
  return (
    <section className="absolute z-20 top-[calc(3vw+70px)] left-[20%]">
      <h3 className="text-3xl font-bold mb-8">Travaillions ensemble</h3>
      <div className="rounded w-96">
        <form
          action="mailto:mathys.deshaies.co@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="mb-6 w-[calc(5vw+300px)]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="Nom complet"
              placeholder="Ton nom complet ..."
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-6 w-[calc(5vw+300px)]">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Courriel
            </label>
            <input
              type="email"
              id="email"
              name="Courriel"
              placeholder="Ton courriel ..."
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-6 w-[calc(5vw+300px)]">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-600"
            >
              Sujet
            </label>
            <textarea
              id="subject"
              name="Sujet"
              placeholder="Écrit moi un petit message ..."
              className="w-full p-3 border border-gray-300 rounded resize-y"
            ></textarea>
          </div>

          <input
            type="submit"
            value="Envoyé"
            className="bg-blue-800 text-white py-3 px-6 rounded cursor-pointer hover:bg-blue-900"
          />
        </form>
      </div>
    </section>
  );
}
