import { formatNumber } from "../../../shared/utils/formatNumber";

import type Country from "../models/Country";

interface CardProps {
  country: Country;
  className?: string;
}

export default function Card({ country, className }: CardProps) {
  return (
    <div className={`shadow-2xl rounded overflow-hidden ${className}`}>
      <div className="w-full h-[150px] overflow-hidden">
        <img
          src={country.flag}
          alt={country.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h2 className="mb-2 font-bold">{country.name}</h2>
        <div className="text-sm">
          <span className="font-[500]">Population</span>:{" "}
          {formatNumber(country.population)}
        </div>
        <div className="font-[300] text-sm">
          <span className="font-[500]">Region</span>: {country.region}
        </div>
        <div className="text-sm">
          <span className="font-[500]">Capital</span>: {country.capital}
        </div>
      </div>
    </div>
  );
}
