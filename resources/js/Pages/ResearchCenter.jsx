import React, { useState } from 'react';
import { Link } from '@inertiajs/react';


const ResearchCenter = () => {
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
{/* <div className="relative w-full h-screen overflow-hidden">
<img 
    alt="Welcome" 
    src="/images/faculty members background.jpg"
    style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover' }}
    className="absolute inset-0 w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-black opacity-50" style={{ filter: 'blur(8px)' }}></div>
<div className="absolute inset-0 flex items-center justify-center">
    <div className="relative p-6 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h2 className='text-center text-3xl font-bold text-gray-900'>
            Our University Faculty Members
        </h2>
    </div>
</div>
</div> */}



{/* <div className='bg-indigo-300'>
    <div className='flex'>
        <div>
        <img 
    alt="Welcome" 
    src="/images/faculty members background.jpg"
    />
        </div>
    <div>
         
    </div>
    </div>
</div> */}


<div className='bg-indigo-200 m-10 '>
<div className='flex justify-between'>
    <div className='pt-20 pl-20'>
    <h1 className=' text-6xl text-indigo-900 font-black '>Research center</h1>
    <p className='mt-10 mr-5 text-2xl text-indigo-800'>BrightSphere University boasts dedicated research centers that support over 20 specialized academic departments. Our state-of-the-art resources include dedicated research centers, all tailored to enhance your learning experience.</p>
    </div>
<div className='flex pr-20 pt-20 pb-20'>
            <div className='flex flex-col bg-white shadow-2xl rounded-lg mr-10 w-[300px] h-[400px]'>
    <img src="/images/robotics.jpg" alt="robotics" className='' 
            style={{ width: '100%',height: '100%', maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
        
        />
       <div className='m-5  text-indigo-600 text-center '>
        <h3 className='text-xl'>Institute for Engineering Innovation</h3>
        <p className=''>Specializes in cutting-edge research in engineering and technology. </p>
        </div>
        </div>

        <div className='flex flex-col bg-white shadow-2xl rounded-lg mr-10 w-[300px] h-[400px]'>
    <img src="/images/health research center.jpg" alt="health research center" className='' 
            style={{ width: '100%',height: '100%', maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
        
        />
       <div className='m-5   text-indigo-600 text-center '>
       <h3 className='text-xl'>Medical and Health Sciences</h3>
        <p className=''> Dedicated to medical research, public health, and biomedical studies.</p>
        </div>
        </div>
</div>
</div>
<div className='flex pr-20 pb-20 pl-20'>
            <div className='flex flex-col bg-white shadow-2xl rounded-lg mr-10 w-[300px] h-[400px]'>
    <img src="/images/earth science research center.jpg" alt="earth science research center" className='' 
            style={{ width: '100%',height: '100%', maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
        
        />
       <div className='m-5  text-indigo-600 text-center  '>
       <h3 className='text-xl'>Environmental and Earth Sciences</h3>
        <p className=''>Centers focused on climate change, geology, and environmental studies. </p>
        </div>
        </div>

        <div className='flex flex-col bg-white shadow-2xl rounded-lg mr-10 w-[300px] h-[400px]'>
    <img src="/images/architecture research center.jpg" alt="architecture research center" className='' 
            style={{ width: '100%',height: '100%', maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
        
        />
       <div className='m-5  text-indigo-600 text-center  '>
       <h3 className='text-xl'>Architecture Research Centers</h3>
        <p className=''>Exploring new design methodologies, technological advancements in construction, and innovative materials.</p>
        </div>
        </div>
        <div className='bg-indigo-200 tetx-black text-4xl w-[300px] h-[400px] rounded text-indigo-800 flex items-center justify-center'>
    <p className='text-center  mr-2'>View</p> 
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-9 h-9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
    </svg>
</div>

</div>
</div>


<div className='bg-indigo-900 text-white mb-10 px-4 md:px-20'>
    <div className='text-center pt-20 pb-10'>
        <h3 className='font-black text-3xl md:text-5xl mb-5'>
            Why Choose BrightSphere University's Research Centers?
        </h3>
    </div>
    <div className='flex justify-between pb-20'>
        <div>
            <h1 className='text-3xl font-black mb-7'>Cutting-Edge Research Facilities</h1>
            <p className='w-[400px] text-xl'>
                BrightSphere University's research centers boast cutting-edge facilities equipped with the latest technology. These state-of-the-art labs and research environments are designed to foster innovation and support groundbreaking discoveries across various fields.
            </p>
        </div>
        <div>
            <h1 className='text-3xl font-black mb-7'>Diverse Research Opportunities</h1>
            <p className='w-[400px] text-xl'>
                Our research centers offer a wide range of opportunities for exploration and collaboration. From biomedical research to environmental studies, our diverse centers provide essential resources and interdisciplinary approaches to tackle complex global challenges.
            </p>
        </div>
        <div>
            <h1 className='text-3xl font-black mb-7'>Collaborative Research Networks</h1>
            <p className='w-[400px] text-xl'>
                We facilitate collaborative research through integrated networks that connect various centers and departments. This streamlined access promotes synergy and enables researchers to work together effectively, enhancing the impact of their studies and projects.
            </p>
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
        <h1 className='text-indigo-800 text-2xl md:text-xl font-bold [letter-spacing:0.4em]'>
            AT YOUR FINGERTIPS
        </h1>
        <h3 className='text-indigo-700 text-2xl md:text-2xl  md:mb-5 mt-5'>
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
        <a href='https://t.me/BrightSphere_bot' className='rounded-md bg-indigo-800 text-white hover:bg-white hover:text-blue-500 border border-blue-700 px-7 py-2 mt-6 inline-block'>
            Telegram Bot
        </a>
    </div>
</div>
{/* </div> */}



            {/* Contact us */}

            <section id='contact'>
    <div className='bg-indigo-900 py-20 px-4 pl-5 md:px-20'>
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
</div>

    );
};

export default ResearchCenter;
