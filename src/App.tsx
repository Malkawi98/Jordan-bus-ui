import Select from "react-select";
import RouteCard from "./Components/RouteCard.tsx";
import {Infographic} from "./Components/Infographic.tsx";

function App() {
    return (<div className="bg-hot-pink h-full font-Geist">
        <div className="relative min-h-30rem">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-bus"></div>

            <div className="absolute inset-0 bg-brown-52"></div>
            <div className="container mx-auto">
                <div className="absolute text-white bottom-20 flex justify-center flex-col">
                    <div className="font-bold text-4xl">
                        Travel that moves you
                    </div>
                    <div className="text-2xl">
                        Book train, bus, flight and ferry tickets
                    </div>
                </div>
            </div>
        </div>
        <div className='container mx-auto'>
            <div
                className="shadow-xl flex gap-x-5 items-center justify-center rounded-xl bg-white p-3 relative -mt-8 z-10 mb-10">
                <Select
                    classNames={customClassNames}
                    placeholder={"From"} className="rounded flex-grow"/>
                <Select
                    classNames={customClassNames}
                    placeholder={"To"} className="rounded flex-grow"/>
                <button className='bg-light-green text-white px-6 py-2 rounded-full'>Search</button>

            </div>

            <RouteCard/>
            <Infographic/>
        </div>


    </div>)
}

const customClassNames = {
    indicatorSeparator: () => 'hidden',
    indicatorsContainer: () => 'hidden',
    clearIndicator: () => 'hidden',
    loadingIndicator: () => 'hidden',
    dropdownIndicator: () => 'text-black hidden',

}

export default App
