import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import Card from "../../features/countries/components/Card";
import { getCountries } from "../../features/countries/countriesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import type Country from "../../features/countries/models/Country";
const regions: string[] = ["Africa", "America", "Asia", "Europe", "Ocenia"];

export default function HomePage() {
  const { countries } = useAppSelector((state) => state.countries);
  const dispatch = useAppDispatch();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <section className="mx-auto my-10 container">
      <div className="flex md:flex-row flex-col justify-between gap-5 mb-10 px-5 md:px-0">
        <div className="relative bg-[var(--color-elements)] shadow-md max-sm:mb-5 px-20 py-5 rounded-md md:min-w-[30rem]">
          <BiSearch
            size={25}
            className="top-1/2 left-8 absolute -translate-y-1/2"
          />
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search for a country..."
            className="outline-0 w-full h-full"
          />
        </div>
        <div className="md:w-[14rem]">
          <Listbox value={selectedRegion} onChange={setSelectedRegion}>
            <div className="relative bg-[var(--color-elements)] shadow-lg rounded outline-0 max-sm:w-[60%]">
              <ListboxButton className="flex justify-between items-center gap-2 p-4 w-full">
                {selectedRegion || "Filter by Region"}
                <MdArrowDropDown size={30} />
              </ListboxButton>
              <ListboxOptions className="absolute bg-[var(--color-elements)] shadow-lg mt-1 rounded outline-0 w-full">
                {regions.map((region) => (
                  <ListboxOption
                    key={region}
                    value={region}
                    className={`py-3 px-2 cursor-pointer`}
                  >
                    {region}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="justify-between gap-5 md:gap-8 lg:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3">
        {countries &&
          countries
            .filter((country) =>
              country.name.toLowerCase().includes(searchTerm || "")
            )
            .filter(
              (country) => !selectedRegion || country.region === selectedRegion
            )
            .map((country: Country) => (
              <Link to={`/${country.name}`} key={country.name}>
                <Card
                  country={country}
                  className="bg-[var(--color-elements)] shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                />
              </Link>
            ))}
      </div>
    </section>
  );
}
