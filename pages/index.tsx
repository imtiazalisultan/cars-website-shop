import React, { useEffect, useState } from "react";
import { CarInterface } from "../public/api/cartype";
import MobileCarousel from "../src/components/MobileCarousel";
import SearchInput from "../src/components/SearchInput";
import DesktopCarousel from "../src/components/DesktopCarousel";

const mobileBreakPoint: number = 1000;

function HomePage() {
  const [cars, setCars] = useState<CarInterface[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarInterface[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    fetch("/api/car-service")
      .then((res) => res.json())
      .then((data) => {
        const cars: CarInterface[] = data;
        setCars(cars);
        setFilteredCars(cars);
      });
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const condition: string = filter.trim().toLowerCase();
    const filteredCars: CarInterface[] =
      condition === ""
        ? [...cars]
        : [
            ...cars.filter(
              (car) => car.bodyType.toLowerCase().indexOf(condition) >= 0
            ),
          ];
    setFilteredCars(filteredCars);
  }, [filter]);

  const updateDimensions = () => {
    const width: number = window.innerWidth;
    const isMobile: boolean = width <= mobileBreakPoint;
    setIsMobile(isMobile);
  };

  return (
    <React.StrictMode>
      <div className="background-white">
        <SearchInput
          onChange={setFilter}
          name="filterInput"
          value={filter}
          placeholder="Body Type"
        ></SearchInput>

        {!isMobile && <DesktopCarousel items={filteredCars}></DesktopCarousel>}

        {isMobile && <MobileCarousel items={filteredCars}></MobileCarousel>}
      </div>
    </React.StrictMode>
  );
}

export default HomePage;
