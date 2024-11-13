import Link from "next/link";

export default function Form() {
    return (
        <section className="bg-blue-50 w-full h-screen mt-4">
            <div>
                <h1 className="text-3xl text-center pt-24 font-semibold">Enter Your Details</h1>
            </div>
            <form action="" className="flex flex-col justify-center items-center py-60 space-y-4">
                <input type="text" className="border w-60 border-black pl-4" placeholder="Enter Your Name" />
                <input type="text" className="border w-60 border-black pl-4" placeholder="Enter Your Email" />
                <input type="text" className="border w-60 border-black pl-4" placeholder="Card Number" />
                <input type="text" className="border w-60 border-black pl-4" placeholder="Address" />
                <Link href="/" className="bg-blue-700 border border-blue-700 hover:bg-blue-900 text-xs text-white py-2 px-4 rounded ">Place Your Order</Link>
            </form>
        </section>

    )
}