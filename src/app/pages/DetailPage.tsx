import { useEffect, useMemo } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getCountries } from "../../features/countries/countriesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import type Country from "../../features/countries/models/Country";
export default function DetailPage() {
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector((state) => state.countries);
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const country: Country | undefined = useMemo(() => {
    if (countries) {
      const foundCountry = countries.find(
        (country) =>
          country.name.toLocaleLowerCase() === name?.toLocaleLowerCase()
      );
      if (foundCountry) {
        return foundCountry;
      }
      navigate("/");
    }
  }, [countries, navigate, name]);

  return (
    country && (
      <section className="mx-auto mt-15 max-md:px-5 container">
        <div className="mb-15">
          <button
            className="inline-flex items-center gap-2 shadow-[0_0_16px_0_rgba(0,0,0,0.15)] px-6 py-2 rounded transition-transform duration-200 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <BiArrowBack size={20} />
            Back
          </button>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-10">
          <div>
            <img
              src={country?.flags?.png}
              alt={country?.name}
              width={500}
              className="object-cover"
            />
          </div>
          <div className="flex-1 md:px-10 md:py-10">
            <h1 className="mb-5 font-bold text-[2rem] h1">{country?.name}</h1>
            <div className="flex md:flex-row flex-col justify-between max-md:gap-10">
              <div className="flex flex-col gap-3 font-[300]">
                <div className="text-sm">
                  <span className="font-[700]">Native Name:</span>{" "}
                  {country?.nativeName}
                </div>
                <div className="text-sm">
                  <span className="font-[700]">Population:</span>{" "}
                  {country?.population?.toLocaleString("en-US")}
                </div>
                <div className="text-sm">
                  <span className="font-[700]">Region:</span> {country?.region}
                </div>
                <div className="text-sm">
                  <span className="font-[700]">Sub Region:</span>{" "}
                  {country.subregion}
                </div>
                <div className="text-sm">
                  <span className="font-[700]">Capital:</span> {country.capital}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-sm">
                  <span className="font-[700]">Top Level Domain:</span>{" "}
                  {country.topLevelDomain?.join(", ")}
                </div>
                <div className="text-sm">
                  <span className="font-[700]">Currencies:</span>{" "}
                  {country.currencies
                    ?.map((currency) => currency?.name)
                    .join(", ")}
                </div>
                <div className="text-sm">
                  <span className="font-[700]">Languages:</span>{" "}
                  {country.languages
                    ?.map((language) => language?.name)
                    .join(", ")}
                </div>
              </div>
            </div>
            <div>
              <div className="mt-10 mb-5 font-bold text-center">
                Border Countries
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {country.borders ? (
                  country.borders.map((item) => {
                    const borderCountry = countries?.find(
                      (country) => country.alpha3Code === item
                    );
                    return (
                      <Link
                        to={`/${borderCountry?.name}`}
                        key={item}
                        className="shadow-[0_0_16px_0_rgba(0,0,0,0.15)] px-4 py-2 rounded hover:scale-105 transition-transform duration-200"
                      >
                        {borderCountry?.name}
                      </Link>
                    );
                  })
                ) : (
                  <div className="px-5 py-2 w-full">No Border Countries</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
