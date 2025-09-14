"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {

 const download = () => {
    const link = document.createElement('a');
    link.href = '/Asim Cv.pdf'; // Path to your resume file in public folder
    link.download = 'Asim_Khatri_Resume.pdf'; // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (




    <div className="flex justify-center flex-col items-center py-8 max-w-4xl mx-auto">
      <div className="w-42 h-42 rounded-full border-4 border-gray-300 overflow-hidden mb-6">
        <Image
          src="/asim.jpg"
          alt="Asim Khatri"
          width={168}
          height={168}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">Hi I'm Asim Khatri</h1>
        <h2 className="text-xl text-blue-600 font-semibold">Frontend Web Developer</h2>
        
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          I am a frontend developer currently studying at Janamaitri College (7th Sem). 
          I have some experience and basic knowledge in Express.js, Next.js, MongoDB, 
          Node.js, and more knowledge with JavaScript, React, and Tailwind CSS.
        </p>
        
        <div className="flex gap-4 justify-center mt-6 ">
                <Link href={"/contact"}> <button className="bg-blue-600 flex gap-3 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Contact me <img className="w-6 h-6" src="/con.svg" alt="" />
          </button>
          </Link> 
  <button onClick={download} className="border flex gap-3 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            My Resume <img className="w-6 h-6" src="/down.webp" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}