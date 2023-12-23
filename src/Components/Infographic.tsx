import carFlag from "../assets/images/car-flag.png";
export const Infographic = () => {
    return (
        <div className="shadow-xl bg-white pl-7 rounded-xl max-md:pl-5 my-5 ">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
                    <div className="text-brown-dark  text-4xl font-bold my-auto max-md:max-w-full ">
                        <div>
                            All your travel options in one place
                        </div>
                        <span className="text-xl">
                          More than 1,000 trusted travel partners across trains, buses, so
                          that you can focus on the journey.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                        alt="flag"
                        loading="lazy"
                        srcSet={carFlag}
                        className="aspect-[1.84] object-contain w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 object-cover"
                    />
                </div>
            </div>
        </div>);
};