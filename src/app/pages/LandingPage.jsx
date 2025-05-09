export default function LandingPage(){
    return(
        <div className="relative flex h-screen">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url('bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1, 
                    zIndex: 0,
                }}
            ></div>

            <div className="relative z-10 flex justify-center items-center p-5 flex-col lg:w-1/2">
                <img className="w-48" src="logo.png" alt="Coco Ease Logo"/>
                <h1 className="mt-4 text-[#343434] text-2xl font-bold">growing stronger together</h1>
                <h1 className="mt-10 text-center text-[#167A15] font-semibold text-xl">
                    Delivering high quality coco substrates and coir fibre products that are tailored to meet the needs of commercial growers.
                </h1>
                <h1 className="mt-10 text-center p-2">
                    Have any questions or need more info?<br/>Reach out to our sales team today!
                </h1>
                <h1 className="mt-5">sales@cocoease.com</h1>
                <h1>www.cocoease.com</h1>
            </div>

            <img className="lg:w-1/2 hidden rounded-xl m-2 lg:block relative z-10 object-cover" src="bg.png"/>
        </div>

    )
}