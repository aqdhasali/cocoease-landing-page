export default function LandingPage(){
    return(
        <div className="flex h-screen">
            <div className="flex items-center p-5 justify-center flex-col lg:w-1/2">
                <img className="w-48" src="logo.png" alt="Coco Ease Logo"/>
                <h1 className="mt-4 text-gray-400 text-2xl font-bold">Growing Strong Together</h1>
                <h1 className="text-center font-semibold animate-pulse text-4xl mt-24">Launching Soon!</h1>
                <h1 className="mt-36 text-center p-2">Have any questions or need more info? Reach out to our sales team today!</h1>
                <h1 className="mt-5 text-gray-600">sales@cocoease.com</h1>
                <h1 className="text-gray-600">www.cocoease.com</h1>
            </div>

            
            <img className="w-1/2 hidden lg:block" src="bg.png"/>
            
        </div>
    )
}