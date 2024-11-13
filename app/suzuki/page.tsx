import Image from "next/image"
export default function suzuki() {
    return (
        <section>
            <div className=" bg-gray-100 flex justify-center container mx-auto">
                <Image
                    src="/car2.png"
                    alt="car Corolla"
                    width={400}
                    height={400}
                />
            </div>
            <div className="bg-gray-100 flex flex-col container mx-auto justify-center">
                <h2 className="flex justify-center items-center text-2xl font-bold">Car description</h2>

                <p>
                    2023 Toyota Corolla XLE: <br />
                    This sleek sedan boasts a captivating Silver Pearl exterior, accented by a panoramic moonroof that floods the cabin with natural light.
                    <br /> The interior is a haven of comfort, featuring premium leather seats in a warm Saddle Tan hue. Enjoy the convenience of a 7-inch touchscreen infotainment system, wireless Apple CarPlay and Android Auto, and a powerful 169-horsepower engine that delivers a smooth and efficient ride.
                    <br />
                    Additional features include:
                    <br />
                    Blind spot monitoring with rear cross-traffic alert
                    Heated front seats
                    <br />
                    Dual-zone automatic climate control
                    16-inch alloy wheels
                </p>

            </div>
        </section>

    )

}