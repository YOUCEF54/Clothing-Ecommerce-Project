import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 2000, min: 1500 },
    items: 6
  },
  smallDesktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 3
  },
  medium: {
    breakpoint: { max: 680, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Carousel1({Data,isHome}){

    return(
        <Carousel className=" z-0 mx-5 mt-4 " responsive={responsive}>
            {
                Data?.map((e, index) => (
                    // <div key={index} class="bg-gray-800   p-[2px] h-[8rem] w-[7rem] flex-none">
                        <Card
                        title={e.title}
                        price={e.price}
                        isHome={isHome}
                        main_image={e.main_image}
                        index={index} key={index}/>

                    // </div>


                    ))}

        </Carousel>
    )
}
