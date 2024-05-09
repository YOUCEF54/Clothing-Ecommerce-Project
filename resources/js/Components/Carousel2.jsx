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
    breakpoint: { max: 2000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

export default function Carousel1({Data}){

    return(
        <Carousel className=" z-0 mx-5 mt-4 " responsive={responsive}>
            {
                Data?.map((e, index) => (
                    // <div key={index} class="bg-gray-800   p-[2px] h-[8rem] w-[7rem] flex-none">
                        <Card
                        title={e.title}
                        price={e.price}
                        main_image={e.main_image}
                        index={index} key={index}/>

                    // </div>


                    ))}

        </Carousel>
    )
}
