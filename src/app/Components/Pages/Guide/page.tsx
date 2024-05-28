import Image from "next/image";
import splash from '../../../Images/guide.png'

export default function Guide(){
    return (
        <section className="bg-white pt-5 pb-5">
            <p className="leading-7 text-xs font-semibold tracking-wider text-indigo-500 text-center">
                    Highlights
            </p>
            <h3 className="scroll-m-20 text-3xl font-regular tracking-tight text-blue-800 text-center opacity-80">
                    Signup and Get Started
            </h3>

            <div className="flex flex-wrap-reverse justify-around items-center mt-10 lg:flex lg:flex-nowrap">

                <div className="flex flex-col mx-5 gap-10">

                    <div className="group flex items-center cursor-pointer">
                        
                            <div className="flex justify-center items-center grow-0 shrink-0 text-4xl bg-blue-100 text-blue-800 text-opacity-70 h-16 w-16 rounded-full shadow-md group-hover:bg-gradient-to-l from-blue-800 to-indigo-500 group-hover:text-white xl:h-28 xl:w-28 lg:text-4xl">1</div>
                        
                        <div className="flex flex-col items-start ms-5 gap-1 mt-10 xl:ms-10 xl:gap-3">
                            <h3 className="scroll-m-20 text-xl font-regular tracking-tight text-blue-800 text-center opacity-80 xl:text-xl">
                                    Signup to Access
                            </h3>
                            <p className="flex justify-center text-justify text-gray-500 text-sm w-full md:text-sm md:text-start md:w-11/12 border-b-2 border-gray-100 pb-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus minus quas recusandae vero autem voluptas!
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center cursor-pointer group">
                        <div className="flex justify-center items-center text-4xl bg-blue-100 text-blue-800 text-opacity-70 grow-0 shrink-0 h-16 w-16 rounded-full shadow-md group-hover:bg-gradient-to-l from-blue-800 to-indigo-500 group-hover:text-white xl:h-28 xl:w-28 lg:text-4xl">2</div>
                        <div className="flex flex-col items-start ms-5 gap-1  xl:ms-10 xl:gap-3">
                            <h3 className="scroll-m-20 text-xl font-regular tracking-tight text-blue-800 text-center opacity-80 xl:text-xl">
                                    Signin to Enjoy
                            </h3>
                            <p className="flex justify-center text-justify text-gray-500 text-sm w-full md:text-sm md:text-start md:w-11/12 border-b-2 border-gray-100 pb-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus minus quas recusandae vero autem voluptas!
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center cursor-pointer group">
                        <div className="flex justify-center items-center text-4xl bg-blue-100 text-blue-800 text-opacity-70 grow-0 shrink-0 h-16 w-16 rounded-full shadow-md group-hover:bg-gradient-to-l from-blue-800 to-indigo-500 group-hover:text-white xl:h-28 xl:w-28 lg:text-4xl">3</div>
                        <div className="flex flex-col items-start ms-5 gap-1  xl:ms-10 xl:gap-3">
                            <h3 className="scroll-m-20 text-xl font-regular tracking-tight text-blue-800 text-center opacity-80 xl:text-xl">
                                    Share with Friends
                            </h3>
                            <p className="flex justify-center text-justify text-gray-500 text-sm w-full md:text-sm md:text-start md:w-11/12 border-b-2 border-gray-100 pb-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus minus quas recusandae vero autem voluptas!
                            </p>
                        </div>
                    </div>

                    </div>

                    <div >
                        <Image src={splash} alt="404" width={200} height={200} className="guide me-5"></Image>
                    </div>
                </div>

               

            
        </section>
    )
}