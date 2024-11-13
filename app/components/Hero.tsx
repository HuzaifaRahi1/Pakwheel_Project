
import Link from "next/link"
export default function Hero() {
    return (
        <section className=" mt-6">

            <h2 className="text-black font-bold text-center text-2xl mb-8  ">Sell Your Car on PakWheels and Get the Best Price</h2>

            <div className="container mx-auto flex justify-center items-center space-x-10">
                <div>
                    <h3 className="font-semibold text-l ">Post your Ad on PakWheels</h3>
                    <ul>
                        <li className="flex gap-1">
                            <svg className="text-green-700 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <span className="">Post your add for free in 3 easy steps</span>
                        </li>
                        <li className="flex gap-1">
                            <svg className="text-green-700 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <span className="">Get Geniune Offers from Verified Buyers</span>
                        </li>
                        <li className="flex gap-1">
                            <svg className="text-green-700 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <span className="">ٍSell Your car Fast and</span>
                        </li>
                    </ul>
                    <Link className="bg-red-500 text-white rounded px-6 py-3 mt-3 text-sm font-bold inline-block" href="#">Post Your Add</Link>
                </div>
                <div className="flex justify-center items-center">
                    <h3>OR</h3>
                </div>
                <div>
                    <h3 className="font-semibold text-l">Post your Ad on PakWheels</h3>
                    <ul>
                        <li className="flex gap-1">
                            <svg className="text-green-700 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <span className="">Post your add for free in 3 easy steps</span>
                        </li>
                        <li className="flex gap-1">
                            <svg className="text-green-700 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <span className="">Get Geniune Offers from Verified Buyers</span>
                        </li>
                        <li className="flex gap-1">
                            <svg className="text-green-700 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <span className="">ٍSell Your car Fast and</span>
                        </li>
                    </ul>
                    <Link className="bg-blue-500 text-white rounded px-6 py-3 mt-3 font-bold text-sm inline-block" href="#">Regester Your Car</Link>
                </div>
            </div>
        </section>
    )
}