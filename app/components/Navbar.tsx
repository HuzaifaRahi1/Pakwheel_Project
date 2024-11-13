import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers"
import { headers } from "next/headers"
import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="">

            <header className="bg-gray-800 h-24 w-full flex justify-center items-center space-x-6 gap-6 pt-12" >
                <div className="w-36 h-16 flex justify-center items-center  ">
                    <Image className=""
                        src="/PakwheelLogo-removebg-preview.png"
                        alt="Pakwheel Image"
                        width={800}
                        height={800}
                    ></Image>
                </div>
                <div>
                    <ul className=" text-white text-l space-x-12 flex justify-center items-center ">
                        <li><Link href=""></Link>Used Cars</li>
                        <li><Link href=""></Link>New Cars</li>
                        <li><Link href=""></Link>Bikes </li>
                        <li><Link href=""></Link>Auto Stores</li >
                        <li><Link href=""></Link>Videos</li>
                        <li><Link href=""></Link>Forums</li>
                        <li><Link href=""></Link>Blogs</li>
                        <li><Link href=""></Link>More</li>
                        <div >
                            <button className="bg-red-400 text-white py-2 gap-2 px-3 rounded">Post an Add</button>
                        </div>
                    </ul>
                </div>
                <div className=" justify-end">

                        <div className=" text-white w-32 text-sm h-10 flex justify-center items-center gap-2 mb-28">
                            <h3>Sign In</h3>
                            <h3>Sign Up</h3>
                        </div>
                    </div>
            </header>

        </nav>


    )
}