import Image from "next/image";
import client from '../../../Images/client-logos.png'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

export default function Features(){
    return (
        <section className="flex flex-col">

            <div className="flex justify-center p-10">
                <Image src={client} alt="404" width={1000} height={1000}></Image>
            </div>

            <div className="bg-blue-50 p-10">
                <p className="leading-7 text-xs font-semibold tracking-wider text-indigo-500 text-center">
                    HIGHLIGHTS
                </p>
                <h3 className="scroll-m-20 text-3xl font-regular tracking-tight text-blue-800 text-center opacity-80">
                    Features you love
                </h3>

                <div className="flex flex-wrap justify-center gap-5 mt-10 sm: gap-10">

                    <div className="flex gap-2 shadow-lg w-96 bg-white p-5 border-l-4 border-indigo-500 transition-transform transform hover:-translate-y-2 hover:shadow-xl md:w-full xl:w-96">
                        <TagFacesIcon className="w-12 h-16 text-blue-800 opacity-80"/>
                       <div>
                        <p className="scroll-m-20 text-2xl font-regular tracking-tight text-blue-800 pt-3 opacity-80">Simple</p>
                        <p className="scroll-m-20 w-64 text-sm font-regular tracking-tight text-gray-500 pt-3 text-justify md:text-xl md:w-full xl:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores vel numquam corrupti voluptatum commodi ut
                        </p>
                       </div>
                    </div>

                    <div className="flex gap-2 shadow-lg w-96 bg-white p-5 border-l-4 border-indigo-500 transition-transform transform hover:-translate-y-2 hover:shadow-xl md:w-full xl:w-96">
                        <AccessibilityNewIcon className="w-12 h-16 text-blue-800 opacity-80"/>
                       <div>
                        <p className="scroll-m-20 text-2xl font-regular tracking-tight text-blue-800 pt-3 opacity-80">Accessible</p>
                        <p className="scroll-m-20 w-64 text-sm font-regular tracking-tight text-gray-500 pt-3 text-justify md:text-xl md:w-full xl:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores vel numquam corrupti voluptatum commodi ut
                        </p>
                       </div>
                    </div>

                    <div className="flex gap-2 shadow-lg w-96 bg-white p-5 border-l-4 border-indigo-500 transition-transform transform hover:-translate-y-2 hover:shadow-xl md:w-full xl:w-96">
                        <HttpsOutlinedIcon className="w-12 h-16 text-blue-800 opacity-80"/>
                       <div>
                        <p className="scroll-m-20 text-2xl font-regular tracking-tight text-blue-800 pt-3 opacity-80">Secure</p>
                        <p className="scroll-m-20 w-64 text-sm font-regular tracking-tight text-gray-500 pt-3 text-justify md:text-xl md:w-full xl:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores vel numquam corrupti voluptatum commodi ut
                        </p>
                       </div>
                    </div>

                </div>

            </div>
      

        </section>
    )
}