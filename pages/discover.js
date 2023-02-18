"use client";

import PageHead from "../components/PageHead";

import UserCard from "../components/user/UserCard";
import Page from "../components/Page";
import { useState } from "react";
import { TbRefresh } from "react-icons/tb";
import {popular, random, trending } from "../data/hometest.json"
import Navbar from '../components/navbar/Navbar.js';

export async function getServerSideProps(/*context*/) {
  let data = {
    popular: [],
    random: [],
    trending: [],
  };
// var datoTest = hometest;
try{
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/discover/popular`
    // );
    data.popular = await new json(popular); //await res.json();
  } catch (e) {
    console.log("ERROR loading popular profiles", e);
  }

  try {
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/discover/random`
    // );
    data.random = await new json(random); //await res.json();
  } catch (e) {
    console.log("ERROR loading random profiles", e);
  }

  try {
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/discover/trending`
    // );
    data.trending = await new json(trending);//await res.json();
  } catch (e) {
    console.log("ERROR loading trending profiles", e);
  }

  return {
    props: { data/*, BASE_URL: process.env.NEXT_PUBLIC_BASE_URL*/ },
  };
}

export default function Popular({ /*hometestdata,BASE_URL*/  }) {
  // let { popular, random, trending } = hometest;//data;
  // const { popular } = popular;

  const [randomProfiles, setRandomProfiles] = useState(random);

  const fetchRandom = async () => {
    try {
      const res =new json(random); //await fetch(`${BASE_URL}/api/discover/random`);
      setRandomProfiles(await res.json());
    } catch (e) {
      console.log("ERROR refreshing profiles", e);
    }
  };

  return (
    <>
    {/* <Navbar/> */}
      <PageHead
        title="Discover LinkFree Profiles"
        description="Discover more people in your LinkFree community"
      />
      <Page>
        <h1 className="text-2xl md:text-4xl mb-4 font-bold">
        Descubra los profesionales de Pinamar🌲
        </h1>

        <div className="mb-12">
          <div className="flex flex-row justify-center md:justify-start gap-3 items-center mb-4">
            <h2 className="text-md md:text-xl font-bold">
            Perfiles aleatorios
            </h2>
            <button
              className="inline-flex gap-3 items-center justify-center rounded-full border border-transparent bg-white px-2 py-1 text-base font-medium text-indigo-600 border-indigo-600 hover:bg-indigo-50"
              onClick={() => fetchRandom()}
              aria-label="refresh random profiles"
            >
              <TbRefresh />
            </button>
          </div>
          <ul className="flex flex-wrap gap-3 justify-center">
            {randomProfiles.map((profile) => (
              <li key={profile.username}>
                <UserCard profile={profile} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-md md:text-left md:text-xl text-center font-bold mb-4">
          Tendencias de perfiles GuiaPin (últimas 24 horas)
          </h2>
          <ul className="flex flex-wrap gap-3 justify-center">
            {trending.map((profile) => (
              <li key={profile.username}>
                <UserCard profile={profile} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-md md:text-xl md:text-left text-center font-bold mb-4">
          Perfiles populares de GuiaPin
          </h2>
          <ul className="flex flex-wrap gap-3 justify-center">
            {popular.map((profile) => (
              <li key={profile.username}>
                <UserCard profile={profile} />
              </li>
            ))}
          </ul>
        </div>
      </Page>
    </>
  );
}
