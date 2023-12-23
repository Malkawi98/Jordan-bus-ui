import arrow from "../assets/images/arrow.svg";
import bus from "../assets/images/bus.svg";
import topSpeed from "../assets/images/top-speed.svg";
import topArrow from "../assets/images/arrow-up.svg";

function RouteCard() {
    return (<div className="bg-white rounded-xl text-brown-light">
        <div className="flex justify-between">
            <div className="flex flex-col px-5 py-6">


                <div className="flex justify-between">
                    <div className="grid grid-cols-trip relative">
                <span>
                    0.30 JOD
                </span>
                        <span className="after:content-vertical-line after:bg-brown-52 after:h-4 after:text-sm after:bottom-[-40%]
                flex items-baseline justify-center
                after:absolute relative after:left-[5%] whitespace-nowrap mb-3">
                    <img className="mr-2" src={bus} alt="bus"/>
                    <div>
                        Zarqa - Amman
                    </div>
                </span>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="grid grid-cols-trip relative">
                <span>
                    0.30 JOD
                </span>
                        <span
                            className="after:content-dots after:opacity-50 after:-bottom-[50%] after:h-4 after:absolute flex items-baseline justify-center relative after:left-0 whitespace-nowrap">
                    <img className="mr-2" src={bus} alt=""/>
                    <div>
                    Zarqa - Amman
                    </div>
                </span>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="grid grid-cols-trip">
                <span>
                </span>
                        <div className="relative right-[5%] top-[60%] flex items-center">
                            <img className="bg-brown-52 rounded-full p-1 mr-2" src={arrow} alt=""/>
                            <p className="text-[9px]">See All Transfers</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex gap-x-3">
                <div className="py-4 px-2">
                    <div className='text-green flex'>
                        <img src={topSpeed} alt="top speed"/>
                        <div>
                            Fastest
                        </div>
                    </div>
                    <div className='text-red flex gap-x-2'>
                        <img src={topArrow} alt="highest price"/>
                        <div>
                            Highest Price
                        </div>
                    </div>
                </div>
                <div className="border-r-[1px]  border-r-gray-500 border-gray-500 border-opacity-10">
                </div>
                <div className="flex justify-center items-center flex-col text-brown-dark font-bold text-2xl">
                    <div className="py-4 px-2">
                        1.30 JOD
                    </div>
                </div>
            </div>

        </div>
    </div>);
}

export default RouteCard;