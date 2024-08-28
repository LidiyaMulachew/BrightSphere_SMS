
import { Link,  Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome({ auth }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="">
            <section id='home'>
            <header>
    <nav className="bg-white fixed left-0 top-0 right-0 shadow-2xl py-6 flex flex-col sm:flex-row justify-between items-center z-20">
        <div className="flex items-center justify-between w-full">
            <h1 className='px-3 py-2 ml-4 sm:ml-16'>
                <span style={{ color: 'orange', fontFamily: 'Arial', fontSize: '1.2em' }}>BrightSphere</span>{' '}
                <span style={{ color: '#007bff', fontFamily: 'Arial', fontSize: '1.2em' }}>SMS</span>
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
        <div className={`flex flex-col sm:flex-row md:justify-end items-center w-full ${isOpen ? 'block' : 'hidden'} sm:block`}>
            <div className="flex flex-col sm:flex-row sm:space-x-9 mt-4 sm:mt-0 mr-4 sm:mr-16">
                <Link
                    href="#home"
                    className="rounded-md px-3 py-2 text-lg font-medium text-blue-400 hover:text-gray-500 underline"
                    style={{ textDecorationColor: '#3B82F6', fontSize: '1.2em' }}
                    aria-current="page"
                >
                    Home
                </Link>
                <Link
                    href="#find"
                    className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500"
                    style={{ fontSize: '1.2em' }}
                >
                    Services
                </Link>
                <Link
                    href="#about-us"
                    className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500"
                    style={{ fontSize: '1.2em' }}
                >
                    About Us
                </Link>
                <Link
                    href="#contact"
                    className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500"
                    style={{ fontSize: '1.2em' }}
                >
                    Contact
                </Link>
                <Link
                    href={route('login')}
                    className="rounded-md bg-blue-500 px-7 py-2 text-md font-medium text-white"
                >
                    Log in
                </Link>
            </div>
        </div>
    </nav>
</header>

    <div className='flex flex-col sm:flex-row justify-between mt-10 px-4 sm:px-16'>
        <div className='mt-20 flex-1 md:w-[600px]  '>
            <h5 className='text-left font-black text-4xl  sm:text-6xl mt-9 md:w-[800px]'>
                Ethiopian Education System is being Revolutionized 
                <span style={{ color: '#007bff' }}> by BrightSphere.</span>
            </h5>
            <p className='text-left order-1 sm:order-2  mt-9 text-base sm:text-lg md:w-[700px]'>
                Welcome to BrightSphere University, where academic excellence and future leadership are cultivated. Our progressive approach integrates cutting-edge research with a collaborative learning environment, ensuring that every student excels intellectually, professionally, and personally. At BrightSphere University, we are dedicated to offering a transformative education that equips students to navigate and shape the evolving global landscape. Embark on a journey of innovation and achievement with us, where education meets ambition and vision.
            </p>
            <div className='flex flex-col sm:flex-row  mt-9'>
                <a href='#find' className='rounded-md bg-blue-500 text-white px-7 py-3 mb-4 sm:mb-0 hover:bg-blue-700 hover:text-white'>
                    Find on BrightSphere
                </a >
                <a href='#contact' className='rounded-md bg-blue-200 text-blue-700 hover:bg-blue-300 px-7 py-2 ml-0 sm:ml-9'>
                    Contact Us
                </a >
            </div>
        </div>
        <div className='mt-10 sm:mt-20 md:mr-5  '>
            <img src="/images/graduate.png" alt="Graduate"
                style={{ width: '100%', maxWidth: '500px', borderRadius: '20px', objectFit: 'cover' }}
                className='w-full md:w-[1900px] md:h-[500px]'
            />
        </div>
    </div>

    <div className='flex justify-end fixed z-30 right-5 shadow-md' style={{ bottom: '30px' }}>
        <a href='tel:4464' className="bg-yellow-400 border-2 border-current px-8 py-3 font-bold uppercase text-black">
            Call: 4464
        </a> 
    </div>
</section>



            {/* What do you want to search today? */}
            
<div className='bg-blue-50 mt-10 pb-20 '>
    <section id='find'>
        <div className='text-center pt-7'>
            <h2 className='font-black text-3xl sm:text-5xl mt-10 mb-5'>
                What do you want to search today?
            </h2>
            <p className='text-gray-700 text-base sm:text-xl'>
                Select any of the following services to find the information you need:
            </p>
            <div className="mt-2">
                <span className="inline-block w-20 sm:w-40 h-1 bg-sky-500 rounded-full"></span>
                <span className="inline-block w-4 sm:w-5 h-1 ml-1 bg-sky-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-sky-500 rounded-full"></span>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-center mt-10 md:ml-20 md:mr-20'>
        <a href="#find-faculty-members" className='service-item bg-blue-200 p-8 sm:p-16 rounded-lg shadow-lg flex-1 max-w-md sm:max-w-3xl mx-4 mb-10 relative hover:shadow-2xl overflow-hidden'>
    <h3 className="text-xl sm:text-3xl font-black mb-2"> Faculty Members</h3>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-6 sm:w-8 h-fit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
    </svg>
    <div className='absolute top-0 right-0 flex items-end'>
        <img 
            src="/images/faculty members 2.jpg" 
            alt="Faculty Members" 
            style={{ objectFit: 'cover' }}
            className='w-22 h-24 sm:w-48 sm:h-36 md:w-64 md:h-68 object-cover rounded-full transform translate-x-1/2'

        />
    </div>
</a>

<a href="#find-departments" className='service-item bg-green-200 p-8 sm:p-16 rounded-lg shadow-lg flex-1 max-w-md sm:max-w-3xl mx-4 mb-10 relative hover:shadow-2xl overflow-hidden'> 
    <h3 className="text-xl sm:text-3xl font-black mb-2">Departments</h3>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-6 sm:w-8 h-fit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
    </svg>
    <div className='absolute top-0 right-0 overflow-hidden'>
        <img 
            src="/images/department 1.jpg" 
            alt="Department" 
            style={{ objectFit: 'cover' }}
            className='w-22 h-24 sm:w-48 sm:h-36 md:w-64 md:h-68 object-cover rounded-full transform translate-x-1/2'

        />
    </div>
</a>


            {/* <div class="div circle overflow-hidden flex justify-center items-center  absolute -right-5 -top-5 rounded-full  transition-all md:h-52 md:w-52 w-32 h-32 md:-right-[56px] md:-top-[56px]">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="doctor's image" class="h-full w-full object-cover rounded-t-xl ">
                </div> */}
        </div>
        <div className='flex flex-col sm:flex-row justify-center mb-10 md:ml-20 md:mr-20'>
        <a href="#find-research-center" className='service-item bg-purple-200 p-8 sm:p-16 rounded-lg shadow-lg flex-1 max-w-md sm:max-w-3xl mx-4 mb-10 relative hover:shadow-2xl overflow-hidden'>
    <h3 className="text-xl sm:text-3xl font-black mb-2">Research Center</h3>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-6 sm:w-8 h-fit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
    </svg>
    <div className='absolute top-0 right-0 flex items-end'>
        <img 
            src="/images/research center 1.jpg" 
            alt="Research Center" 
            style={{ objectFit: 'cover' }}
            className='w-13 h-24 sm:w-48 sm:h-36 md:w-64 md:h-68 object-cover rounded-full transform translate-x-1/2'

        />
    </div>
</a>

<a href="#find-campus-facility" className='service-item bg-blue-100 p-8 sm:p-16 rounded-lg shadow-lg flex-1 max-w-md sm:max-w-3xl mx-4 mb-10 relative hover:shadow-2xl overflow-hidden'>
    <h3 className="text-xl sm:text-3xl font-black mb-2">Campus Facilities</h3>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-6 sm:w-8 h-fit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
    </svg>
    <div className='absolute top-0 right-0 flex items-end'>
        <img 
            src="/images/campus facility 1.jpg" 
            alt="Campus Facility" 
            style={{ objectFit: 'cover' }}
            className='w-15 h-24 sm:w-48 sm:h-36 md:w-64 md:h-68 object-cover rounded-full transform translate-x-1/2'
        />
    </div>
</a>


        </div>
    </section>

            {/*  Call Center */}
            

            <div className='flex flex-col md:flex-row mt-20 mb-20 px-4'>
    <div className='flex-1 order-2 sm:order-1 mb-10 md:mb-0 md:mr-10 md:mt-20 md:items-center md:ml-20'>
        <h3 className='font-black text-3xl md:text-5xl md:mt-20'>
            4464
        </h3>
        <h1 className='font-black text-2xl md:text-4xl mt-3 md:mt-5'>
            BrightSphere University Student Support
        </h1>
        <p className='mt-3 md:mt-5 text-base md:text-lg'>
            At BrightSphere University, we are committed to supporting your academic journey and addressing any questions you might have. Whether you need assistance with course selection, academic advising, or counseling services, our dedicated team is just a call away. Reach out to us for personalized guidance and support tailored to your educational needs.
        </p>
        <div className='bg-blue-500 rounded p-3 text-white mt-5 hover:bg-white hover:text-blue-500 border hover:border-blue-500' style={{ maxWidth: '7rem' }}>
            <a href="tel:4464" className='flex items-center text-base md:text-xl'>
                Call
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-5 h-fit ml-2 md:w-6 md:h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                </svg>
            </a>
        </div>
    </div>
    <div className='flex-1 order-1 sm:order-2 md:mr-10'>
        <img src="/images/call center 2.jpg" alt="Call Center"         
        style={{ objectFit: 'cover' }} 
        className='w-full h-auto md:w-[800px] md:h-[600px] rounded-lg object-cover' />
    </div>
</div>

            {/*  About us */}
            <section id='about-us' className='px-4'>
    <div className='text-center'>
        <h3 className='text-3xl md:text-5xl font-extrabold pt-8 mb-5'>
            About Us!
        </h3>
        <p className='text-base md:text-xl'>
            Here is some background about BrightSphere
        </p>
        <div className="mt-2">
            <span className="inline-block w-20 h-1 bg-sky-500 rounded-full"></span>
            <span className="inline-block w-4 h-1 ml-1 bg-sky-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-sky-500 rounded-full"></span>
        </div>
    </div>
    <div className='flex flex-col md:justify-between md:flex-row mt-12'>
        <div className='text-left mb-10 md:mb-0 md:mr-0 md:ml-20'>
            <img src="/images/about us.jpg" alt="About Us"
                    style={{ objectFit: 'cover' }}
                className='w-full h-auto md:w-[600px]  md:h-[900px] rounded-lg object-cover'
            />
        </div>
        <div className='bg-green-100 px-4 md:px-10 pt-6 md:pt-12 pb-6 md:pb-10 md:mr-20 md:w-[700px] md:justify-end'>
            <h2 className='text-lg md:text-xl mb-4'>
                ABOUT US!
            </h2>
            <p className='font-black text-xl md:text-3xl mb-4'>
                Ethiopian Education System <br />
                is being digitalized
            </p>
            <p className='mb-4 text-gray-800 text-base md:text-lg'>
                Welcome to BrightSphere School, your comprehensive solution for effective and efficient school management. We provide a one-stop platform for managing academic records, student enrollment, and faculty schedules. Our system brings all essential educational tools to your fingertips, offering seamless access to school resources, communication channels, and administrative functions.
            </p>
            <p className='mb-4 text-gray-800 text-base md:text-lg'>
                BrightSphere School is committed to delivering a well-organized and reliable system to streamline school operations, saving time and reducing administrative overhead. Our platform integrates daily schedules, student progress tracking, and communication tools, ensuring smooth and effective management of school activities.
            </p>
            <p className='mb-4 text-gray-800 text-base md:text-lg md:mb-20'>
                Our digital system also facilitates real-time updates on academic resources, helps manage inventory of educational materials, and provides support for online consultations and professional advice. Whether it's handling student queries or providing academic assistance, BrightSphere School is designed to enhance the educational experience for both administrators and students.
            </p>
            <a href="#contact" className='bg-sky-700 md:mt-20 text-white mt-4 px-6 py-3 rounded hover:bg-green-100 hover:text-blue-500 border hover:border-blue-500'>
                Get in touch
            </a>
        </div>
    </div>
</section>

            </div>
            {/* service providers */}
            
            <div className='bg-sky-800 mt-20 text-white pt-20 pb-20 mb-10 px-4 md:px-20'>
    <div className='text-center'>
        <h3 className='font-black text-3xl md:text-5xl mb-5'>
            Our Partner Educational Service Providers
        </h3>
        <p className='text-base md:text-xl'>
            BrightSphere University partners with a diverse range of educational providers. We're expanding our network and invite you to join our vibrant academic community.
        </p>
    </div>

    <div className='flex flex-col md:flex-row justify-between mt-10'>
        <div className='text-center mb-10 md:mb-0'>
            <h3 className='font-black text-4xl md:text-5xl'>
                123+
            </h3>
            <p className='text-base md:text-xl'>
                Faculty Members
            </p>
        </div>
        <div className='text-center mb-10 md:mb-0'>
            <h3 className='font-black text-4xl md:text-5xl'>
                12+
            </h3>
            <p className='text-base md:text-xl'>
                Departments
            </p>
        </div>
        <div className='text-center mb-10 md:mb-0'>
            <h3 className='font-black text-4xl md:text-5xl'>
                9+
            </h3>
            <p className='text-base md:text-xl'>
                Research Centers
            </p>
        </div>
        <div className='text-center mb-10 md:mb-0'>
            <h3 className='font-black text-4xl md:text-5xl'>
                11+
            </h3>
            <p className='text-base md:text-xl'>
                Campus Facilities
            </p>
        </div>
        <div className='text-center'>
            <h3 className='font-black text-4xl md:text-5xl'>
                1430+
            </h3>
            <p className='text-base md:text-xl'>
                Educational Resources
            </p>
        </div>
    </div>
    <div className='flex justify-center md:mt-20 mt-20'>
        <a href="#contact" className='bg-blue-400 font-black py-3 px-6 text-center text-white hover:bg-white hover:text-blue-500 border hover:border-blue-500 rounded'>
            Join Us
        </a>
    </div>
</div>


            {/* Why Us */}

            <div className='bg-gray-50 mt-20 px-4 md:px-20 pt-10'>
    <h3 className='font-black text-3xl md:text-5xl text-center md:text-left'>
        Why Us
    </h3>
    <div className="mt-2 text-center md:text-left">
        <span className="inline-block w-24 h-1 bg-sky-500 rounded-full"></span>
        <span className="inline-block w-6 h-1 ml-1 bg-sky-500 rounded-full"></span>
        <span className="inline-block w-4 h-1 ml-1 bg-sky-500 rounded-full"></span>
    </div>

    <div className='flex flex-col md:flex-row justify-between items-start mt-10 '>
        <div className='flex flex-col order-2 sm:order-1 w-full md:w-1/2'>
            <div className='flex flex-col md:flex-row md:justify-between mb-10'>
                <div className='mb-6 flex-1 md:mt-20'>
                    <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-5'>
                        Diverse Academic Programs
                    </h3>
                    <p className='text-base md:text-xl text-gray-600'>
                        Choose from a wide range of programs in sciences, arts, business, and technology, with rigorous training to excel in your field.
                    </p>
                </div>
                <div className='mb-6 flex-1 md:mt-20'>
                    <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-5'>
                        Cutting-Edge Facilities
                    </h3>
                    <p className='text-base md:text-xl text-gray-600'>
                        Benefit from our state-of-the-art labs, collaborative spaces, and extensive libraries, designed for hands-on learning and research.
                    </p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between '>
                <div className='mb-6 flex-1 '>
                    <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-5'>
                        Groundbreaking Research
                    </h3>
                    <p className='text-base md:text-xl text-gray-600'>
                        Engage in innovative research projects with full access to resources and funding to bring your ideas to life.
                    </p>
                </div>
                <div className='mb-6 flex-1'>
                    <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-5'>
                        Flexible Learning Options
                    </h3>
                    <p className='text-base md:text-xl text-gray-600'>
                        Enjoy flexible learning with online and hybrid courses tailored to fit various schedules and learning styles.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex justify-center order-1 sm:order-2 md:justify-end w-full md:w-1/2 mb-10'>
            <img src="/images/why us.jpg" alt="Why Us" 
                    style={{ objectFit: 'cover' }}
            className='w-64 h-64 md:w-[500px] md:h-[500px] rounded-full' />
        </div>
    </div>
</div>


            {/* telegram  */}

            <div className='bg-blue-50 pt-10 pb-20'>

{/* Telegram Section */}
<div className='flex flex-col md:flex-row justify-between bg-green-50 rounded-lg mx-4 md:mx-20 pt-10 pb-10 md:pt-20 md:pb-20'>
    <div className='text-center md:text-left md:w-[600px]'>
        <img src="/images/telegram 2.jpg" alt="Telegram Bot"
                style={{ objectFit: 'cover' }}
                 className='w-full h-auto md:w-[1500px] md:h-[600px] rounded-lg' />
    </div>
    <div className='md:w-[600px] md:ml-10 mt-10 md:mt-0'>
        <h1 className='text-blue-600 text-2xl md:text-xl font-bold [letter-spacing:0.4em]'>
            AT YOUR FINGERTIPS
        </h1>
        <h3 className='text-blue-700 text-2xl md:text-2xl  md:mb-5 mt-5'>
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
        <a href='https://t.me/BrightSphere_bot' className='rounded-md bg-sky-800 text-white hover:bg-white hover:text-blue-500 border border-blue-700 px-7 py-2 mt-6 inline-block'>
            Telegram Bot
        </a>
    </div>
</div>

{/* Reviews Section */}
<div className='bg-gray-100 mt-20 px-4 md:px-20 pt-10 pb-20 md:text-left '>
    <h3 className='text-3xl md:text-5xl font-black mb-5  md:w-[800px]'>
        Read Trusted Reviews from Our Customers and Partners
    </h3>
    <p className='text-gray-500  md:text-xl w-full  md:w-[1000px]'>
        Nothing is more trustworthy than an honest review from users. Here is what our customers and partners are saying about us.
    </p>
</div>

{/* Services Section */}
<div className='text-center mt-20 px-4'>
    <h3 className='text-3xl md:text-5xl font-extrabold mb-5'>
        Services
    </h3>
    <p className='text-base md:text-xl'>
        Here is the list of services BrightSphere provides.
    </p>
    <div className="mt-2">
        <span className="inline-block w-24 h-1 bg-sky-500 rounded-full"></span>
        <span className="inline-block w-6 h-1 ml-1 bg-sky-500 rounded-full"></span>
        <span className="inline-block w-4 h-1 ml-1 bg-sky-500 rounded-full"></span>
    </div>
</div>

</div>



            {/* services */}
            <div className='bg-white mt-10 mb-20 px-4 md:px-20'>

{/* Faculty Members Section */}
<div className='flex flex-col md:flex-row md:items-center justify-between mb-20  md:mt-20 md:mb-20'>
    <div className='flex  md:flex-row md:w-[1200px]'>
        <div className='flex md:items-center text-left items-center ml-3 mr-3 md:justify-center rounded-lg mb-5 md:mb-0 md:mr-5'>
            <img src="/images/faculty members 2.jpg" alt="Faculty Members"
                    style={{ objectFit: 'cover' }}
                     className='w-[170px] h-[70px] md:w-[200px] md:h-[200px]  rounded-lg' />
        </div>
        <div className='flex flex-col  mr-8 '>
            <img src="/images/faculty members 1.jpg" alt="Faculty Member 1"        style={{ objectFit: 'cover' }} className='w-[210px] h-[100px] md:w-[200px] md:h-[200px]  mb-5 rounded-lg' />
            <img src="/images/faculty members 3.jpg" alt="Faculty Member 3"        style={{ objectFit: 'cover' }} className='w-[210px] h-[180px] md:w-[200px] md:h-[350px] rounded-lg' />
        </div>
    </div>
    <div className='flex flex-col items-center md:items-start md:w-[1600px] mt-10 md:mt-0'>
        <h3 className='text-3xl md:text-5xl font-black mb-5'>
            Faculty Members
        </h3>
        <p className='text-base md:text-xl text-gray-500 mb-5 text-center md:text-left'>
            Benefit from the expertise of BrightSphere University’s distinguished faculty members, who bring a wealth of knowledge and experience to the academic environment. On BrightSphere, you can search for faculty by name, department, and their areas of specialization to learn more about their research interests and availability for consultations.
        </p>
        <a href='#find-faculty-members' className='bg-blue-500 text-white py-3 px-6 mt-5 hover:bg-blue-800 rounded'>
            Find Faculty Members
        </a>
    </div>
</div>

{/* Departments Section */}
<div className='flex flex-col md:flex-row md:items-center justify-between mb-20  md:mt-20 md:mb-20'>
    <div className='flex flex-col order-2 sm:order-1 items-center md:items-start md:w-[600px]'>
        <h3 className='text-3xl md:text-5xl font-black mb-5'>
            Departments
        </h3>
        <p className='text-base md:text-xl text-gray-500 mb-5 text-center md:text-left'>
            Access comprehensive information about BrightSphere University’s various departments. Each department is equipped with skilled professionals and state-of-the-art facilities to support your educational journey. Through BrightSphere, you can explore departmental services, faculty listings, and academic resources tailored to your needs.
        </p>
        <a href='#find-departments' className='bg-blue-500 text-white py-3 px-6 mt-5 hover:bg-blue-800 rounded'>
            Find Departments
        </a>
    </div>
    <div className='flex items-center order-1 sm:order-2 md:flex-row md:w-[600px] mr-8'>
        <div className='flex items-center justify-center rounded-lg mb-5 mr-3 ml-3 mt-5 md:mr-5 md:mb-0'>
            <img src="/images/department 1.jpg" alt="Department 1"         style={{ objectFit: 'cover' }} className='w-[130px] h-[70px] md:w-[200px] md:h-[200px] rounded-lg' />
        </div>
        <div className='flex flex-col'>
            <img src="/images/department 2.png" alt="Department 2"         style={{ objectFit: 'cover' }} className='w-[170px] h-[100px] md:w-[200px] md:h-[200px] mb-5 rounded-lg' />
            <img src="/images/department 3.jpg" alt="Department 3"         style={{ objectFit: 'cover' }} className='w-[170px] h-[180px] md:w-[200px] md:h-[350px] rounded-lg' />
        </div>
    </div>
</div>

{/* Research Centers Section */}
<div className='flex flex-col md:flex-row md:items-center justify-between mb-20 md:mt-20 md:mb-20'>
    <div className='flex items-center md:flex-row md:w-[1200px] mr-8'>
        <div className='flex items-center justify-center rounded-lg mb-5 mr-3 ml-3 mt-5 md:mr-5 md:mb-0'>
            <img src="/images/research center 1.jpg" alt="Research Center 1"         style={{ objectFit: 'cover' }} className='w-[100px] h-[70px] md:w-[200px] md:h-[200px] rounded-lg' />
        </div>
        <div className='flex flex-col'>
            <img src="/images/research center 2.jpg" alt="Research Center 2"         style={{ objectFit: 'cover' }}  className='w-[130px] h-[100px] md:w-[200px] md:h-[200px] mb-5 rounded-lg' />
            <img src="/images/research center 3.jpg" alt="Research Center 3"         style={{ objectFit: 'cover' }} className='w-[130px] h-[180px] md:w-[200px] md:h-[350px] rounded-lg' />
        </div>
    </div>
    <div className='flex flex-col items-center  md:items-start md:w-[1600px] mt-10 md:mt-0'>
        <h3 className='text-3xl md:text-5xl font-black mb-5'>
            Research Centers
        </h3>
        <p className='text-base md:text-xl text-gray-500 mb-5 text-center md:text-left'>
            Our research centers at BrightSphere University are dedicated to advancing knowledge with cutting-edge technology and innovative research. Discover how you can engage with ongoing projects, access advanced resources, and collaborate with leading experts in your field.
        </p>
        <a href='#find-research-center' className='bg-blue-500 text-white py-3 px-6 mt-5 hover:bg-blue-800 rounded'>
            Find Research Centers
        </a>
    </div>
</div>

{/* Campus Facilities Section */}
<div className='flex flex-col md:flex-row md:items-center justify-between md:mt-20'>
    <div className='flex flex-col order-2 sm:order-1 items-center md:items-start md:w-[600px]'>
        <h3 className='text-3xl md:text-5xl font-black mb-5'>
            Campus Facilities
        </h3>
        <p className='text-base md:text-xl text-gray-500 mb-5 text-center md:text-left'>
            Explore the modern and well-equipped facilities available at BrightSphere University. From libraries and laboratories to recreational and support services, find out how our campus amenities can enhance your university experience and provide a conducive learning environment.
        </p>
        <a href='#find-campus-facility' className='bg-blue-500 text-white py-3 px-6 mt-5 hover:bg-blue-800 rounded'>
            Find Campus Facilities
        </a>
    </div>
    <div className='flex items-center order-1 sm:order-2 md:flex-row ml-3 mr-8 md:w-[600px]'>
        <div className='flex items-center justify-center rounded-lg mb-5 mr-3 md:mb-0 md:mr-5 '>
            <img src="/images/campus facility 4.jpg" alt="Campus Facility 4"         style={{ objectFit: 'cover' }} className='w-[100px] h-[70px] md:w-[200px] md:h-[200px] rounded-lg' />
        </div>
        <div className='flex flex-col'>
            <img src="/images/campus facility 2.jpg" alt="Campus Facility 2"         style={{ objectFit: 'cover' }} className='w-[130px] h-[100px] md:w-[200px] md:h-[200px] mb-5 rounded-lg' />
            <img src="/images/campus facility 5.jpg" alt="Campus Facility 5"         style={{ objectFit: 'cover' }} className='w-[130px] h-[180px] md:w-[200px] md:h-[350px] rounded-lg' />
        </div>
    </div>
</div>

</div>


            {/* Contact us */}

            <section id='contact'>
    <div className='bg-sky-900 py-20 px-4 pl-5 md:px-20'>
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
                        <li className='text-xl'>Faculty Members</li>
                        <li className='text-xl'>Departments</li>
                        <li className='text-xl'>Research Center</li>
                        <li className='text-xl'>Campus Facilities</li>
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
}




