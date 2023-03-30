import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSearch } from 'react-icons/bi';

export default function Form() {

    const [sourceClick, setSourceClick] = useState(false);
    const [destinationClick, setDestinationClick] = useState(false);
    const [weightInputClick, setWeightInputClick] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className="lg:px-4 px-12 py-6 flex justify-center items-center w-full h-full">
            <form onSubmit={handleSubmit(onSubmit)} className='lg:w-[70vw] flex flex-col lg:flex-row justify-between items-center bg-gray-100 lg:rounded-full w-full border rounded-3xl h-full lg:pr-4 pb-4 lg:pb-0 gap-4'>
                <div className={`${(sourceClick) ? 'bg-white scale-105 shadow-form' : 'bg-gray-100'} flex flex-col lg:rounded-full rounded-3xl px-9 h-full py-3 w-full cursor-pointer lg:w-[25%] transition-all duration-300 ${errors.source && sourceClick ? 'border-red-400 border' : 'border-none'}`} onClick={() => { setSourceClick(true); setDestinationClick(false); setWeightInputClick(false); }} onFocus={() => { setSourceClick(true); setDestinationClick(false); setWeightInputClick(false); }} >
                    <label htmlFor="source">Source</label>
                    <input {...register("source", { required: true })} id='source' className="bg-transparent text-[14px] focus:outline-none rounded-full py-2 text-gray-500" placeholder="Search source" />
                    {errors.source && <span className="text-red-600 text-[12px]">*Required field</span>}
                </div>
                <div className={`${(destinationClick) ? 'bg-white scale-105 shadow-form' : 'bg-gray-100'} flex flex-col lg:rounded-full rounded-3xl px-9 h-full py-3 w-full cursor-pointer lg:w-[25%] transition-all duration-300 ${errors.source && destinationClick ? 'border-red-400 border' : 'border-none'}`} onClick={() => { setSourceClick(false); setDestinationClick(true); setWeightInputClick(false); }} onFocus={() => { setSourceClick(false); setDestinationClick(true); setWeightInputClick(false); }}>
                    <label htmlFor="destination">Destination</label>
                    <input {...register("destination", { required: true })} id='destination' className="bg-transparent text-[14px] focus:outline-none rounded-full py-2 text-gray-500" placeholder="Search destinations" />
                    {errors.destination && <span className="text-red-600 text-[12px]">*Required field</span>}
                </div>
                <div className={`${(weightInputClick) ? 'bg-white scale-105 shadow-form' : 'bg-gray-100'} flex flex-col lg:rounded-full rounded-3xl px-9 h-full py-3 w-full cursor-pointer lg:w-[25%] transition-all duration-300 ${errors.source && weightInputClick ? 'border-red-400 border' : 'border-none'}`} onClick={() => { setSourceClick(false); setDestinationClick(false); setWeightInputClick(true); }} onFocus={() => { setSourceClick(false); setDestinationClick(false); setWeightInputClick(true); }}>
                    <label htmlFor="Weight">Weight</label>
                    <input {...register("weight", { required: true, pattern: /[0-9]/ })} id='Weight' className="bg-transparent text-[14px] focus:outline-none rounded-full py-2 text-gray-500" placeholder="Search weight" />
                    {errors.weight && <span className="text-red-600 text-[12px]">*Required field, takes only digits</span>}
                </div>
                <div className="flex rounded-full py-2 pl-5 pr-10 bg-[rgb(244,91,91)] hover:bg-[rgb(248,73,73)] justify-start items-center text-white cursor-pointer gap-2 w-[90%] lg:w-fit" onClick={handleSubmit(onSubmit)}>
                    <BiSearch />
                    <button type="submit" className="focus:outline-none">Search</button>
                </div>
            </form>
        </div>
    );
}