import Image from "next/image"
import Link from "next/link"
export default function CarCard() {
    return (
        <section className="bg-gray-100 mt-12 ">
            <div className=" container mx-auto ">
                <h1 className="text-2xl font-bold pt-6 mb-6">Featured </h1>
                <div className="flex gap-12 mb-8">
                    <Link className="text-bold hover:underline hover:decoration-blue-500 text-black text-xl active:underline" href="#">Populer</Link>
                    <Link className="text-bold hover:underline hover:decoration-blue-500 text-black text-xl active:underline " href="#">Upcoming</Link>
                    <Link className="text-bold hover:underline hover:decoration-blue-500 text-black text-xl active:underline inline-block" href="#">Newly Launched</Link>
                </div>
                <div className="container mx-auto flex pb-6 gap-6">
                    <div className="bg-white flex-1 p-4 ">
                        <div>

                        <Link href="../corolla">
                            <Image className="w-full h-full "
                                src="/car1.jpg"
                                alt="Car1"
                                width={800}
                                height={900}
                            />
                        </Link>
                        </div>
                        <h3 className="text-blue-950 hover:text-blue-500 text-center text-xl font-bold pt-3"> 
                            <Link href="../corolla">Toyota Corolla</Link></h3>
                        <h4 className="text-green-400 text-center"> PKR 59.5-75.5 lacs</h4>
                    </div>
                    <div className="bg-white flex-1 p-4 ">
                        <div>

                        <Link href="../suzuki">
                            <Image className="w-full h-full "
                                src="/car2.png"
                                alt="Car2"
                                width={800}
                                height={900}
                            />
                        </Link>
                        </div>
                        <h3 className="text-blue-950 hover:text-blue-500 text-center text-xl font-bold pt-3"> 
                            <Link href="../alto">Suzuki Alto</Link></h3>
                        <h4 className="text-green-400 text-center"> PKR 59.5-75.5 lacs</h4>
                    </div>
                    <div className="bg-white flex-1 p-4 ">
                       <div>
                        <Link href="../honda">
                            <Image className="w-full h-full "
                                src="/car3.jpg"
                                alt="Car3"
                                width={800}
                                height={900}
                            />
                        </Link>
                       </div>
                       <h3 className="text-blue-950 hover:text-blue-500 text-center text-xl font-bold pt-3"> 
                       <Link href="../honda">Honda City</Link></h3>
                        <h4 className="text-green-400 text-center"> PKR 59.5-75.5 lacs</h4>
                    </div>
                    <div className="bg-white flex-1 p-4 ">
                        <div>

                        <Link href="../civic">
                            <Image className="w-full h-full "
                                src="/car4.jpg"
                                alt="Car4"
                                width={800}
                                height={900}
                            />
                        </Link>
                        </div>
                        <h3 className="text-blue-950 hover:text-blue-500 text-center text-xl font-bold pt-3"> 
                            <Link href="../civic">Honda Civic</Link></h3>
                        <h4 className="text-green-400 text-center"> PKR 59.5-75.5 lacs</h4>
                    </div>
                </div>


            </div>

        </section>

    )

}
