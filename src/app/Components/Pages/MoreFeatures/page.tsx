'use client'
import React from "react"
import smart from '../../../Images/smart.png'
import launch from '../../../Images/app-launch.svg'
import man from '../../../Images/businessman-with-a-suitcase.svg'
import office from '../../../Images/home-office.svg'
import eng from '../../../Images/engineer.svg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function MoreFeatures(){
    let [communicate, setCommunicate] = React.useState(true);
    let [schedule, setSchedule] = React.useState(false);
    let [message, setMessage] = React.useState(false);
    let [security, setSecurity] = React.useState(false);

    function Communication(){
        setCommunicate(true);
        setSchedule(false);
        setMessage(false);
        setSecurity(false)
    }

    function Scheduling(){
        setCommunicate(false);
        setSchedule(true);
        setMessage(false);
        setSecurity(false)
    }

    function Message(){
        setCommunicate(false);
        setSchedule(false);
        setMessage(true);
        setSecurity(false)
    }

    function Security(){
        setCommunicate(false);
        setSchedule(false);
        setMessage(false);
        setSecurity(true)
    }
   

    return (
        <section className="bg-blue-50 pt-5">
            
            <p className="leading-7 text-xs font-semibold tracking-wider text-indigo-500 text-center">
                    HIGHLIGHTS
            </p>
            <h3 className="scroll-m-20 text-3xl font-regular tracking-tight text-blue-800 text-center opacity-80">
                    Do more with our app
            </h3>

        
            <div className="flex flex-col items-center mt-10 animate-in">
                   <div className="w-3/4 ">
                        <div className="flex flex-wrap  justify-between">
                            <h3 className= {`flex justify-center  items-center scroll-m-20 text-xl font-medium tracking-tight w-1/2 h-12 md:w-3/12 cursor-pointer ${communicate ?
                            'bg-white text-black opacity-100 border-t-4 border-indigo-400 rounded-lg whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-100 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm'
                            :
                            'bg-blue-200 text-indigo-800 opacity-50'
                            }`} onClick={Communication}>
                            Communicate
                            </h3>

                            <h3 className= {`flex justify-center items-center scroll-m-20 text-xl font-medium tracking-tight  w-1/2 h-12 cursor-pointer md:w-3/12 ${schedule ?
                            'bg-white text-black opacity-100 border-t-4 border-indigo-400 rounded-lg whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-100 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm'
                            :
                            'bg-blue-200 text-indigo-800 opacity-50'
                            }`} onClick={Scheduling}>
                            Schedule
                            </h3>

                           <h3 className= {`flex justify-center items-center scroll-m-20 text-xl font-medium tracking-tight  w-1/2 h-12 md:w-3/12 cursor-pointer ${message ?
                            'bg-white text-black opacity-100 border-t-4 border-indigo-400 rounded-lg whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-100 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm'
                            :
                            'bg-blue-200 text-indigo-800 opacity-50'
                            }`} onClick={Message}>
                            Message
                            </h3>

                            <h3 className= {`flex justify-center items-center scroll-m-20 text-xl font-medium tracking-tight  w-1/2 h-12 cursor-pointer md:w-3/12 ${security ?
                            'bg-white text-black opacity-100 border-t-4 border-indigo-400 rounded-lg whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-100 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm'
                            :
                            'bg-blue-200 text-indigo-800 opacity-50'
                            }`} onClick={Security}>
                            Security
                            </h3>
                        </div>


                       {
                        communicate && 
                        <div className="transition-all duration-300 ease-in-out flex flex-wrap justify-center bg-white pb-5 mb-10 shadow-lg gap-1 xl:flex xl:flex-nowrap">
                            <Image src={launch} alt="404" width={250} height={250} className="ms-2 mt-5"></Image>
                            <div className="flex flex-col mt-10">
                                <h2 className="scroll-m-20  pb-2 text-2xl font-medium tracking-tight transition-colors text-blue-800 opacity-80 text-center px-5 md:text-4xl md:text-start">
                                Easy and Reliable Communcation
                                </h2>
                                <p className="scroll-m-20 text-sm text-center font-thin tracking-normal text-indigo-700 mt-2 opacity-70 px-5 md:text-lg md:text-start">
                                Communicate with Ease and Flex
                                </p>
                                <p className="flex justify-center text-justify text-gray-500 text-sm mt-6 px-5 w-full md:text-lg md:text-start md:w-11/12">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aliquid dolor iste libero, similique rerum consequuntur, ducimus quis fugiat ipsum est tempora blanditiis facere labore hic commodi quidem alias impedit aspernatur? Quidem accusantium minus fugit atque fugiat aliquam? Porro vel laboriosam deserunt officiis vitae cum quasi exercitationem quisquam tempore et?
                                </p>
                                <p className="flex justify-center text-justify text-gray-500 text-sm mt-6 px-5 w-full md:text-lg md:text-start md:w-11/12">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aliquid dolor iste libero, similique rerum consequuntur, ducimus quis fugiat ipsum est tempora blanditiis facere labore hic commodi quidem alias impedit aspernatur? Quidem accusantium minus fugit atque fugiat aliquam? Porro vel laboriosam deserunt officiis vitae cum quasi exercitationem quisquam tempore et?
                                </p>
                            </div>
                        </div>
                    }

                    {
                    schedule && 
                    <div className="flex flex-wrap justify-center bg-white pb-5 mb-10 shadow-lg gap-1 xl:flex xl:flex-nowrap">
                    <Image src={man} alt="404" width={250} height={250} className="ms-2 mt-5"></Image>
                    <div className="flex flex-col mt-10">
                        <h2 className="scroll-m-20  pb-2 text-2xl font-medium tracking-tight transition-colors text-blue-800 opacity-80 text-center px-5 md:text-4xl md:text-start">
                        Schedule Freely and Accordingly
                        </h2>
                        <p className="scroll-m-20 text-sm text-center font-thin tracking-normal text-indigo-700 mt-2 opacity-70 px-5 md:text-lg md:text-start">
                        Schedule for better productivity
                        </p>
                        <p className="flex justify-center text-justify text-gray-500 text-sm mt-6 px-5 w-full md:text-lg md:text-start md:w-11/12">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aliquid dolor iste libero, similique rerum consequuntur, ducimus quis fugiat ipsum est tempora blanditiis facere labore hic commodi quidem alias impedit aspernatur? Quidem accusantium minus fugit atque fugiat aliquam? Porro vel laboriosam deserunt officiis vitae cum quasi exercitationem quisquam tempore et?
                        </p>
                        <p className="flex justify-center text-justify text-gray-500 text-sm mt-6 px-5 w-full md:text-lg md:text-start md:w-11/12">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aliquid dolor iste libero, similique rerum consequuntur, ducimus quis fugiat ipsum est tempora blanditiis facere labore hic commodi quidem alias impedit aspernatur? Quidem accusantium minus fugit atque fugiat aliquam? Porro vel laboriosam deserunt officiis vitae cum quasi exercitationem quisquam tempore et?
                        </p>
                    </div>
                    </div>
                    }

                    {
                    message && 
                    <div className="flex flex-wrap justify-center bg-white pb-5 mb-10 shadow-lg gap-1 xl:flex xl:flex-nowrap">
                    <Image src={office} alt="404" width={250} height={250} className="ms-2 mt-5"></Image>
                    <div className="flex flex-col mt-10">
                        <h2 className="scroll-m-20  pb-2 text-2xl font-medium tracking-tight transition-colors text-blue-800 opacity-80 text-center px-5 md:text-4xl md:text-start">
                        Realtime Messaging Service
                        </h2>
                        <p className="scroll-m-20 text-sm text-center font-thin tracking-normal text-indigo-700 mt-2 opacity-70 px-5 md:text-lg md:text-start">
                        Chat made Easy with Realtime
                        </p>
                        <p className="flex justify-center text-justify text-gray-500 text-sm mt-6 px-5 w-full md:text-lg md:text-start md:w-11/12">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aliquid dolor iste libero, similique rerum consequuntur, ducimus quis fugiat ipsum est tempora blanditiis facere labore hic commodi quidem alias impedit aspernatur? Quidem accusantium minus fugit atque fugiat aliquam? Porro vel laboriosam deserunt officiis vitae cum quasi exercitationem quisquam tempore et?
                        </p>
                        <p className="flex justify-center text-justify text-gray-500 text-sm mt-6 px-5 w-full md:text-lg md:text-start md:w-11/12">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aliquid dolor iste libero, similique rerum consequuntur, ducimus quis fugiat ipsum est tempora blanditiis facere labore hic commodi quidem alias impedit aspernatur? Quidem accusantium minus fugit atque fugiat aliquam? Porro vel laboriosam deserunt officiis vitae cum quasi exercitationem quisquam tempore et?
                        </p>
                    </div>
                    </div>
                    }


                    {
                    security && 
                    <div className="flex flex-wrap justify-center bg-white pb-5 mb-10 shadow-lg gap-1 xl:flex xl:flex-nowrap">
                    <Image src={eng} alt="404" width={250} height={250} className="ms-2 mt-5"></Image>
                    <div className="flex flex-col mt-10">
                        <h2 className="scroll-m-20  pb-2 text-2xl font-medium tracking-tight transition-colors text-blue-800 opacity-80 text-center px-5 md:text-4xl md:text-start">
                        Safe and Secure
                        </h2>
                        <p className="scroll-m-20 text-sm text-center font-thin tracking-normal text-indigo-700 mt-2 opacity-70 px-5 md:text-lg md:text-start">
                        Your Data is in safe hands
                        </p>
                        <p className="flex justify-center text-justify text-gray-500 text-sm mt-6 px-5 w-full md:text-lg md:text-start md:w-11/12">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aliquid dolor iste libero, similique rerum consequuntur, ducimus quis fugiat ipsum est tempora blanditiis facere labore hic commodi quidem alias impedit aspernatur? Quidem accusantium minus fugit atque fugiat aliquam? Porro vel laboriosam deserunt officiis vitae cum quasi exercitationem quisquam tempore et?
                        </p>
                        <p className="flex justify-center text-justify text-gray-500 text-sm mt-6 px-5 w-full md:text-lg md:text-start md:w-11/12">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aliquid dolor iste libero, similique rerum consequuntur, ducimus quis fugiat ipsum est tempora blanditiis facere labore hic commodi quidem alias impedit aspernatur? Quidem accusantium minus fugit atque fugiat aliquam? Porro vel laboriosam deserunt officiis vitae cum quasi exercitationem quisquam tempore et?
                        </p>
                    </div>
                    </div>
                    }


                   </div>
            </div>

        </section>
    )
}