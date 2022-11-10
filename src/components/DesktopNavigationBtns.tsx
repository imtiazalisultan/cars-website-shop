import Image from "next/image";
import { MouseEventHandler } from "react";
import img from "../../docs/chevron-circled.svg";

interface DesktopNavigationProps {
  onNext: MouseEventHandler<HTMLImageElement>;
  onPrev: MouseEventHandler<HTMLImageElement>;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = (
  props: DesktopNavigationProps
) => {
  return (
    <>
      <div className="button-container">
        <Image
          onClick={props.onPrev}
          src={img}
          width={30}
          height={30}
          className="rotate"
          alt="previous"
        />
        <Image
          onClick={props.onNext}
          src={img}
          width={30}
          height={30}
          alt="next"
        />
      </div>
    </>
  );
};

export default DesktopNavigation;
