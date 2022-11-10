import { useState, useEffect } from "react";
import { ReactElement } from "react";
import Card from "./Card";
import { CarInterface } from "../../public/api/cartype";
import Carousel from "react-material-ui-carousel";
import DesktopNavigation from "../../src/components/DesktopNavigationBtns";

interface DesktopCarouselProps {
  items: CarInterface[];
}

const itemInPage: number = 4;

interface DesktopViewInterface {
  index: number;
  pageCount: number;
}

const DesktopCarousel: React.FC<DesktopCarouselProps> = (
  props: DesktopCarouselProps
) => {
  const [desktopViewState, setDesktopViewState] =
    useState<DesktopViewInterface>({
      index: 0,
      pageCount: Math.ceil(props.items.length / itemInPage),
    });

  useEffect(() => {
    const pageCount: number = Math.ceil(props.items.length / itemInPage);
    setDesktopViewState({
      index: 0,
      pageCount,
    });
  }, [props.items]);

  const nextSlide = () => {
    const { index, pageCount }: DesktopViewInterface = desktopViewState;
    if (index < pageCount - 1)
      setDesktopViewState({ ...desktopViewState, index: index + 1 });
  };

  const PrevSlide = () => {
    const { index }: { index: number } = desktopViewState;
    if (index > 0)
      setDesktopViewState({ ...desktopViewState, index: index - 1 });
  };

  const getDesktopCars = () => {
    const { items } = props;
    if (items.length === 0) return [];

    let pages: ReactElement[] = [];

    for (let i: number = 0; i < desktopViewState.pageCount; ++i) {
      let pageItems: ReactElement[] = [];

      for (let j: number = 0; j < itemInPage; ++j) {
        let index: number = i * itemInPage + j;
        if (index < items.length)
          pageItems.push(
            <Card isMobile={false} key={items[index].id} {...items[index]} />
          );
      }

      pages.push(
        <div key={i} className="card-group">
          {[...pageItems]}
        </div>
      );
    }

    return pages;
  };

  return (
    <>
      <div className="desktop-container">
        <Carousel
          index={desktopViewState.index}
          autoPlay={false}
          navButtonsAlwaysInvisible={true}
          indicators={false}
        >
          {getDesktopCars()}
        </Carousel>
        <DesktopNavigation
          onNext={nextSlide}
          onPrev={PrevSlide}
        ></DesktopNavigation>
      </div>
    </>
  );
};

export default DesktopCarousel;
