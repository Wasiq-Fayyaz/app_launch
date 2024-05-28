import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import { AiFillApple } from 'react-icons/ai';
import { BiLogoPlayStore } from 'react-icons/bi';
import Image from "next/image"
import { Button } from "@/components/ui/button";


export default function FAQ(){
    return(
        <section className="pt-5">

            <p className="leading-7 text-xs font-semibold tracking-wider text-indigo-500 text-center">
                    FAQ
            </p>
            <h3 className="scroll-m-20 text-3xl font-regular tracking-tight text-blue-800 text-center opacity-80">
                    Frequently Asked Questions
            </h3>

            <div className="flex justify-center pt-5 pb-5 mt-5 ">

                <div className="flex flex-col gap-5 bg-white border-2 rounded-md w-full mx-3 md:w-2/4 lg:mx-0 xl:px-5">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                           
                            <AccordionTrigger className="text-lg px-2 lg:text-xl tracking-tight hover:no-underline text-blue-800 opacity-80">Is it accessible 24/7?</AccordionTrigger>
                            <AccordionContent className="text-gray-500 text-sm px-2 lg:text-md font-regular text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci officia ullam rerum molestias eum numquam velit possimus placeat eos excepturi.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg px-2 lg:text-xl tracking-tight hover:no-underline text-blue-800 opacity-80">Do you take Credit Card?</AccordionTrigger>
                            <AccordionContent className="text-gray-500 text-sm px-2 lg:text-md font-regular text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident beatae rem similique obcaecati fuga dolorem id cumque sunt atque!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg px-2 lg:text-xl tracking-tight hover:no-underline text-blue-800 opacity-80 ">Do you provide pharmaceuticals?</AccordionTrigger>
                            <AccordionContent className="text-gray-500 text-sm px-2 lg:text-md font-regular text-justify">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus soluta amet aliquam ratione aut minima possimus obcaecati, dolorum rem?
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg px-2 lg:text-xl tracking-tight hover:no-underline text-blue-800 opacity-80">Is it Cross-platform operated?</AccordionTrigger>
                            <AccordionContent className="text-gray-500 text-sm px-2 lg:text-md font-regular text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at expedita laboriosam ducimus provident animi molestiae aperiam quaerat voluptatem repudiandae?
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

        
            </div>

            <div className="bg-gradient-to-l from-blue-800 to-indigo-500 flex flex-col items-center justify-center w-full h-full py-10 mt-16 border-b-2 border-white">

                <h3 className="scroll-m-20 text-3xl md:text-6xl font-semibold tracking-tight text-white text-center">
                        Download Anywhere
                </h3>

                <p className="leading-7 text-sm tet-justify md:text-md font-light tracking-normal text-white opacity-90 text-center w-3/4 lg:w-1/2 mt-5">
                Available for all major mobile and desktop platforms. Rapidiously visualize optimal ROI rather than enterprise-wide methods of empowerment.
                </p>

                <div className="flex gap-5 mt-5">
                    <Button className="flex justify-center items-center gap-2 shadow-xl p-3 md:p-5">
                        <AiFillApple style={{ fontSize: '1.5rem' }} />
                        APP STORE
                    </Button>
                    
                    <Button className="flex justify-center items-center gap-2 shadow-xl p-3 lg:p-5">
                    <BiLogoPlayStore style={{ fontSize: '1.5rem' }} />
                        GOOGLE PLAY
                    </Button>
               
                </div>

                <kbd className="text-white opacity-80 mt-5 text-center text-sm md:text-lg">Works on iOS 10.0.5+, Android Kitkat and above.</kbd>

            </div>

        </section>
    )
}