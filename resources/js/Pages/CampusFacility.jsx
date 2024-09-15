import React, { useState } from 'react';
import { Link } from '@inertiajs/react';


const CampusFacility = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-200">
            {/* Navigation */}
            <nav className="bg-white mb-20 fixed left-0 top-0 right-0 shadow-2xl py-6 flex flex-col sm:flex-row justify-between items-center z-20">
                <div className="flex items-center justify-between w-full px-4">
                    <h1 className='flex items-center'>
                        <span className='text-orange-500 font-bold text-xl'>BrightSphere</span>
                        <span className='text-blue-600 font-bold text-xl ml-1'>SMS</span>
                    </h1>
                    <button
                        className="block sm:hidden px-3 py-2 text-black"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className={`flex flex-col sm:flex-row items-center w-full ${isOpen ? 'block' : 'hidden'} sm:flex`}>
                    <div className="flex flex-col sm:flex-row sm:space-x-9 px-4">
                        <Link
                            href={route('home')}
                            className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500"
                            aria-current="page"
                        >
                            Home
                        </Link>
                        <Link
                            href={route('home')}
                            className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500"
                        >
                            Services
                        </Link>
                        <Link
                            href={route('home')}
                            className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500"
                        >
                            About Us
                        </Link>
                        <Link
                            href={route('home')}
                            className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500"
                        >
                            Contact
                        </Link>
                        <Link
                            href={route('login')}
                            className="rounded-md bg-blue-500 px-7 py-2 text-md font-medium text-white"
                            aria-current="page"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
            <div className='flex justify-end fixed z-30 right-5' style={{ bottom: '30px' }}>
                <a href='tel:4464' className="bg-yellow-400 border-2 border-current px-8 py-3 font-bold uppercase text-black">
                    Call: 4464
                </a>
            </div>

 <div className='bg-gray-200'>
 <div className="relative w-full h-screen overflow-hidden">
     <img 
         alt="Welcome" 
         src="/images/campus facility 1.jpg"
         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
         className="absolute inset-0 w-full h-full object-cover"
     />
     <div className="absolute inset-0 bg-black opacity-50" style={{ filter: 'blur(8px)' }}></div>
     <div className="absolute inset-0 flex items-center justify-center">
         <div className="relative p-6  bg-opacity-70 rounded-lg shadow-lg" style={{ width: '80%', maxWidth: '800px', height: 'auto', maxHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <h2 className='text-center text-3xl font-bold text-emerald-200'>
                 BrightSphere University boasts a diverse array of campus facilities, each meticulously designed to support comprehensive education.
             </h2>
         </div>
     </div>
 </div>
</div>



<div className='bg-green-100 m-10 '>
<div className='flex justify-between'>
    <div className='pt-20 pl-20'>
    <h1 className=' text-6xl text-emerald-900 font-black '>Campus Facilities</h1>
    <p className='mt-10 mr-5 text-2xl text-emerald-800'>BrightSphere University features a wide array of campus facilities designed to support over 20 specialized academic departments. Our state-of-the-art resources include modern classrooms, advanced laboratories, and dedicated research centers, all tailored to enhance your learning experience.</p>
    </div>
<div className='flex pr-20 pt-20 pb-20'>
            <div className='flex flex-col bg-white shadow-2xl rounded-lg mr-10 w-[300px] h-[400px]'>
    <img src="/images/main library.jpg" alt="main library" className='' 
            style={{ width: '100%',height: '100%', maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
        
        />
       <div className='m-5  text-emerald-600 text-center '>
        <h3 className='text-xl'>10+</h3>
        <p className=''>Libraries </p>
        </div>
        </div>

        <div className='flex flex-col bg-white shadow-2xl rounded-lg mr-10 w-[300px] h-[400px]'>
    <img src="/images/labratory.jfif" alt="labratory" className='' 
            style={{ width: '100%',height: '100%', maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
        
        />
       <div className='m-5   text-green-600 text-center '>
       <h3 className='text-xl'>7+</h3>
        <p className=''>Labratories</p>
        </div>
        </div>
</div>
</div>
<div className='flex pr-20 pb-20 pl-20'>
            <div className='flex flex-col bg-white shadow-2xl rounded-lg mr-10 w-[300px] h-[400px]'>
    <img src="/images/cafe.jpg" alt="cafe" className='' 
            style={{ width: '100%',height: '100%', maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
        
        />
       <div className='m-5  text-green-600 text-center  '>
       <h3 className='text-xl'>9+</h3>
        <p className=''>Campus Cafeteria </p>
        </div>
        </div>

        <div className='flex flex-col bg-white shadow-2xl rounded-lg mr-10 w-[300px] h-[400px]'>
    <img src="/images/health center.jpg" alt="health center" className='' 
            style={{ width: '100%',height: '100%', maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
        
        />
       <div className='m-5  text-green-600 text-center  '>
       <h3 className='text-xl'>4+</h3>
        <p className=''>Campus Health Center</p>
        </div>
        </div>
        <div className='flex flex-col bg-white shadow-2xl rounded-lg mr-10 w-[300px] h-[400px]'>
    <img src="/images/gym.jpg" alt="gym" className='' 
            style={{ width: '100%',height: '100%', maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
        
        />
       <div className='m-5   text-green-600 text-center '>
       <h3 className='text-xl'>6+</h3>
        <p className=''>Gymnasium</p>
        </div>
        </div>     
           <div className='flex flex-col bg-white shadow-2xl rounded-lg mr-10 w-[300px] h-[400px]'>
    <img src="/images/music room.jpg" alt="software" className='' 
            style={{ width: '100%',height: '100%', maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
        
        />
       <div className='m-5  text-center  text-green-600  '>
       <h3 className='text-xl'>3+</h3>
        <p className=''>Music Rooms</p>
        </div>
        </div>
</div>
</div>


<div className='bg-emerald-800  text-white   mb-10 px-4 md:px-20'>
    <div className='text-center pt-20 pb-10'>
        <h3 className='font-black text-3xl md:text-5xl mb-5'>
        Why Choose BrightSphere University?
        </h3>
        </div>
<div className='flex justify-between pb-20'>
    <div>
        <h1 className='text-3xl font-black mb-7'>State-of-the-Art Learning Environment</h1>
        <p className='w-[400px] text-xl'>BrightSphere University offers top-notch educational resources with state-of-the-art classrooms and modern technology, ensuring an exceptional learning environment. Our facilities are designed to support your academic success and innovation.</p>
    </div>
    <div>
        <h1 className='text-3xl font-black mb-7'>Comprehensive Campus Amenities</h1>
        <p className='w-[400px] text-xl'>Our campus features comprehensive amenities, including extensive libraries, advanced laboratories, and recreational centers. These facilities provide essential resources for study and research, while also promoting a balanced student lifestyle.</p>
    </div>
    <div>
        <h1 className='text-3xl font-black mb-7'>Streamlined Departmental Access</h1>
        <p className='w-[400px] text-xl'>Access to multiple departments is streamlined, making it easy to navigate and engage with various academic resources. Centralized administrative services simplify managing your university needs, enhancing your overall educational experience.</p>
    </div>
</div>
        </div>



{/* Telegram Section */}
<div className='flex flex-col md:flex-row justify-between bg-green-50 rounded-lg mx-4 md:mx-20 pt-10 pb-10 md:pt-20 md:pb-20'>
    <div className='text-center md:text-left md:w-[600px]'>
        <img src="/images/telegram 2.jpg" alt="Telegram Bot"
                style={{ objectFit: 'cover' }}
                 className='w-full h-auto md:w-[1500px] md:h-[600px] rounded-lg' />
    </div>
    <div className='md:w-[600px] md:ml-10 mt-10 md:mt-0'>
        <h1 className='text-green-800 text-2xl md:text-xl font-bold [letter-spacing:0.4em]'>
            AT YOUR FINGERTIPS
        </h1>
        <h3 className='text-green-700 text-2xl md:text-2xl  md:mb-5 mt-5'>
            BrightSphere is on Telegram
        </h3>
        <div className='mt-10 md:mt-5'>
            <div className='flex flex-col md:flex-row items-start mb-10'>
                <div className='md:w-[600px]'>
                    <h2 className='text-xl md:text-2xl mb-3'>
                        Find Information on Telegram
                    </h2>
                    <p>
                        On your Telegram app, search for @BrightSphere_bot, and find information about Faculty Members, Departments, Research Centers, Campus Facilities, and Educational Resources.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:mt-5 md:flex-row items-start mb-10'>
                <div className='md:w-[600px]'>
                    <h2 className='text-xl md:text-2xl mb-3'>
                        Upload and Manage Academic Documents
                    </h2>
                    <p>
                        Follow the bot’s straightforward instructions to upload and manage your academic documents, such as course assignments or research papers. The bot will guide you on how to efficiently handle and track your documents within the university system.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:mt-5 md:flex-row items-start'>
                <div className='md:w-[600px]'>
                    <h2 className='text-xl md:text-2xl mb-3'>
                        Order Campus Services and Track Requests
                    </h2>
                    <p>
                        Use the bot to request various campus services or resources. Track the status of your requests and receive updates directly through Telegram, ensuring you stay informed about service delivery and availability.
                    </p>
                </div>
            </div>
        </div>
        <a href='https://t.me/BrightSphere_bot' className='rounded-md bg-emerald-800 text-white hover:bg-white hover:text-blue-500 border border-blue-700 px-7 py-2 mt-6 inline-block'>
            Telegram Bot
        </a>
    </div>
</div>
{/* </div> */}



            {/* Contact us */}

            <section id='contact'>
    <div className='bg-emerald-900 py-20 px-4 pl-5 md:px-20'>
        <div className='flex flex-col md:flex-row justify-between'>
            {/* Contact Information */}
            <div className='text-white mb-10 md:mb-0 md:w-1/2'>
                <h3 className='text-3xl md:text-4xl font-black mb-6'>
                    Join BrightSphere Today!
                </h3>
                <p className='text-xl mb-6'>
                    Are you an educator or administrator interested in modernizing campus services? <br />
                    Contact us and join BrightSphere University!
                </p>
                <h3 className='text-3xl md:text-4xl font-black mb-4'>
                    Get In Touch
                </h3>
                <p className='text-xl mb-4'>
                    For any comments and inquiries, contact us at the following address:
                </p>
                <p className='text-xl mb-4'>
                    Addis Ababa
                </p>
                <a href='tel:+251178990536' className='text-xl mb-4'>
                    011-3-23-68-42
                </a><br />
                <a href="tel:4464" className='text-xl mb-6'>
                    4464
                </a>
                <p className='text-xl'>
                    contact@BrightSphere.com
                </p>
            </div>

            {/* Contact Form */}
            <div className='text-white md:w-1/2'>
                <h3 className='text-3xl md:text-4xl font-black mb-6'>
                    Contact Us
                </h3>
                <div className='space-y-4'>
                    <div>
                        <label htmlFor="name" className='block text-xl mb-1'>Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className='w-full p-2 border rounded-md border-gray-300 bg-gray-100 text-black'
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className='block text-xl mb-1'>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className='w-full p-2 border rounded-md border-gray-300 bg-gray-100 text-black'
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className='block text-xl mb-1'>Message</label>
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            className='w-full p-2 border rounded-md border-gray-300 bg-gray-100 text-black'
                        />
                    </div>

                    <button className='bg-white text-blue-500 rounded px-6 py-2 mt-4 hover:bg-blue-700 hover:text-white'>
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

            {/* Footer */}
<div className='bg-gray-900  text-white py-0   md:px-0'>
    <div className='flex flex-col md:flex-row justify-between items-start'>
        {/* Image Section */}
        <div className=' md:mb-0 md:mr-15 md:ml-0 md:pb-0 mb-10'>
            <img 
                src="/images/graduation 2.jpg" 
                alt="Graduation" 
                style={{ objectFit: 'cover' }}
                className='md:w-[500px] md:h-[400px] w-full h-auto rounded-lg'
            />
        </div>

        {/* Contact and Links Section */}
        <div className='flex flex-col  md:flex-row md:w-2/3 ml-5 md:mt-10'>
            {/* Contact Information */}
            <div className='flex flex-col md:flex-col'>
            <div className=' md:mb-0 md:w-[400px] md:mr-10'>
                <p className='text-3xl mb-5 font-semibold'>CALL</p>
                <a href="tel:4464" className='text-3xl mb-3 block'>4464</a>
                <a href="tel:+251178990536" className='text-3xl mb-3 block'>011-3-23-68-42</a>
            </div>
            <div className=' mt-5 mb-10 md:text-start  '>
                <p className='text-xl'>
                    © 2024 BrightSphere.
                </p>
            </div>
            </div>
            {/* Links Section */}
            <div className='flex flex-col md:flex-row pb-10 md:w-1/2'>
            <div className='mb-10 md:mb-0 md:mr-10'>
    <h3 className='text-2xl font-semibold mb-4'>Links</h3>
    <ul className='space-y-2'>
        <li className='text-xl'>
            <a href='/faculty-members' className='hover:text-gray-500'>Faculty Members</a>
        </li>
        <li className='text-xl'>
            <a href='/departments' className='hover:text-gray-500'>Departments</a>
        </li>
        <li className='text-xl'>
            <a href='/research-center' className='hover:text-gray-500'>Research Center</a>
        </li>
        <li className='text-xl'>
            <a href='/campus-facility' className='hover:text-gray-500'>Campus Facilities</a>
        </li>
    </ul>
</div>

                <div>
                    <h3 className='text-2xl font-semibold mb-4'>Lists</h3>
                    <ul className='space-y-2'>
                        <li className='text-xl'>Faculty Members</li>
                        <li className='text-xl'>Departments</li>
                        <li className='text-xl'>Research Center</li>
                        <li className='text-xl'>Campus Facilities</li>
                    </ul>
                </div>
  
            </div>
        </div>
    </div>
    

    {/* Footer Copyright */}


</div>
</div>



    );
};

export default CampusFacility;
