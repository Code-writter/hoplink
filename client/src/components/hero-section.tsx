import LinkForm from "./link-form";

export default function HeroSection(){
    return(
        <div className=" flex flex-col max-w-3xl mx-auto w-full " >
            <section className="  space-y-6 pt-[20vh] 2xl:pt-48" >
                <div className= "flex flex-col items-center" >
                    <h1 className=" mb-4 py-4 font-bold text-[#FFFDF8] text-5xl" >
                        Build stronger digital connections
                    </h1>

                    <p className=" text-center font-normal text-[#FFFDF8] text-2xl" >
                        Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform.
                    </p>
                </div>
            </section>
            <div className="pt-[20vh]" />
            <div className=" py-[34px] px-[32px] bg-accent-foreground rounded-4xl h-full w-full  " >
                <h3 className=" text-black  mb-2.5  text-2xl font-semibold font-sans" >Shorten a long link</h3>
                <p className="pb-4  text-black font-normal font-sans" >No credit card required.</p>
                <LinkForm />
            </div>
        </div>
    )
}

