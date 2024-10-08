

// import { Link,  Head } from '@inertiajs/react';
// import { useState } from 'react';

// export default function Welcome({ auth }) {

//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     return (
//         <div className="">
//             <section id='home'>
//             <header className="">

//             <nav className="bg-white fixed left-0 top-0 right-0 shadow-2xl py-6 flex flex-col sm:flex-row justify-between items-center z-20">
//     <div className="flex items-center justify-between w-full">
//         <h1 className='px-3 py-2 ml-16'>
//             <span style={{ color: 'orange', fontFamily: 'Arial', fontSize: '1.2em' }}>BrightSphere</span>{' '}
//             <span style={{ color: '#007bff', fontFamily: 'Arial', fontSize: '1.2em' }}>SMS</span>
//         </h1>
//         <button
//             className="block sm:hidden px-3 py-2 text-black"
//             onClick={toggleMenu}
//         >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//         </button>
//     </div>
//     <div className={`flex flex-col sm:flex-row items-center w-full ${isOpen ? 'block' : 'hidden'} sm:block`}>
//         <div className="flex justify-end flex-col sm:flex-row sm:space-x-9 mr-16">
//             <Link
//                 href="#home"
//                 className="rounded-md px-3 py-2 text-lg font-large text-blue-400 hover:text-gray-500 underline"
//                 style={{ textDecorationColor: '#3B82F6', fontSize: '1.2em' }}
//                 aria-current="page"
//             >
//                 Home
//             </Link>
//             <Link
//                 href="#find"
//                 className="rounded-md px-3 py-2 text-lg font-large text-black hover:text-gray-500"
//                 style={{ fontSize: '1.2em' }}
//             >
//                 Services
//             </Link>
//             <Link
//                 href="#about-us"
//                 className="rounded-md px-3 py-2 text-lg font-large text-black hover:text-gray-500"
//                 style={{ fontSize: '1.2em' }}
//             >
//                 About Us
//             </Link>
//             <Link
//                 href="#contact"
//                 className="rounded-md px-3 py-2 text-lg font-large text-black hover:text-gray-500"
//                 style={{ fontSize: '1.2em' }}
//             >
//                 Contact
//             </Link>
//             <Link
//                 href={route('login')}
//                 className="rounded-md bg-blue-500 px-7 py-2 text-md font-medium text-white"
//             >
//                 Log in
//             </Link>
//         </div>
//     </div>
// </nav>

//             </header>
//             <div className='flex justify-between space-x-9 mt-20  flex-col sm:flex-row '>
//                 <div className='mt-20 '>
//                     <h5 className='text-left font-black text-6xl ml-20 mt-9 '>
//                         Ethiopian Education System is being Revolutionized 
//                         <span style={{ color: '#007bff' }}> by BrightSphere.</span>
//                     </h5>
//                     <p className='text-left ml-20 mt-9'>
//                         Welcome to BrightSphere University, where academic excellence and future leadership are cultivated. Our progressive approach integrates cutting-edge research with a collaborative learning environment, ensuring that every student excels intellectually, professionally, and personally. At BrightSphere University, we are dedicated to offering a transformative education that equips students to navigate and shape the evolving global landscape. Embark on a journey of innovation and achievement with us, where education meets ambition and vision.
//                     </p>
//                     <div className='flex ml-20 flex-col sm:flex-row'>
//                         <a href='#find' className='rounded-md bg-blue-500 text-white px-7 py-3 mt-9 hover:bg-blue-700 hover:text-white'>
//                             Find on BrightSphere
//                         </a >
//                         <a href='#contact' className=' rounded-md bg-blue-200 text-blue-700 hover:bg-blue-300 px-7 py-2 mt-9 ml-9'>
//                             Contact Us
//                         </a >
//                     </div>
//                 </div>
//                 <div className='mr-20 my-10 mt-20'>
                    
//                     <img src="/images/graduate.png" alt=""
//                       style={{ width: '2900px', height: '500px',  borderRadius: '20px'  }} 

//                       className='sm:w-full max-w-full h-auto rounded-lg'
//                        />
//                 </div>

//             </div>

//             <div className='flex justify-end fixed z-30 right-5' style={{ bottom: '30px' }}>
//                 <a href='tel:4464' className="bg-yellow-400 border-2 border-current px-8 py-3 font-bold uppercase text-black">
//                     Call: 4464
//                 </a> 
//             </div>
//             </section>

//             {/* What do you want to search today? */}
//             <div className='bg-blue-50 mt-10 pb-20'>
//             <section id='find'>

//             <div className='text-center pt-7'>
//                 <h2 className='font-black text-5xl mt-10 mb-5'>
//                     What do you want to search today?
//                 </h2>
//                 <p className='text-gray-700 text-xl'>
//                     Select any of the following services to find the information you need:
//                 </p>
//                 <div className="mt-2">
//                         <span className="inline-block w-40 h-1 bg-sky-500 rounded-full"></span>
//                         <span className="inline-block w-5 h-1 ml-1 bg-sky-500 rounded-full"></span>
//                         <span className="inline-block w-3 h-1 ml-1 bg-sky-500 rounded-full"></span>
//                 </div>
//             </div>
//             <div className='flex  mr-20 flex-col sm:flex-row '>
                
//                 <a href="#find-faculty-members" className='service-item bg-blue-200 p-16 rounded-lg shadow-lg  flex-1 max-w-3xl ml-20 mt-10 relative hover:shadow-2xl'> 
//                     <h3 className="text-3xl font-black mb-2"> Faculty Members</h3>
//                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="w-8 h-fit " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-Rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
//                     <div className='absolute top-0 right-0'>
//                         <img src="/images/faculty members 2.jpg" alt="Faculty Members" 
//                             style={{ width: '200px', height: '150px', borderRadius: '550px' }} 
//                             className='relative'
//                         />
//                     </div>
//                 </a>
//                 <a href="#find-departments" className='service-item bg-green-200 p-16 rounded-lg shadow-lg  flex-1 max-w-3xl ml-20 mt-10 relative hover:shadow-2xl'> 
//                     <h3 className="text-3xl font-black mb-2"> Departments</h3>
//                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="w-8 h-fit " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-Rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
//                     <div className='absolute top-0 right-0'>
//                         <img src="/images/department 1.jpg" alt="Department" 
//                             style={{ width: '200px', height: '150px', borderRadius: '550px' }} 
//                             className='relative'
//                         />
//                     </div>
//                 </a>
//             </div>
//             <div className='flex  flex-col sm:flex-row mr-20  mb-10'>
//             <a href="#find-research-center" className='service-item bg-purple-200 p-16 rounded-lg shadow-lg  flex-1 max-w-3xl ml-20 mt-10 relative hover:shadow-2xl'> 
//             <h3 className="text-3xl font-black mb-2"> Research Center</h3>
//                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="w-8 h-fit " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-Rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
//                     <div className='absolute top-0 right-0'>
//                         <img src="/images/research center 1.jpg" alt="Research Center" 
//                             style={{ width: '200px', height: '150px', borderRadius: '550px' }} 
//                             className='relative'
//                         />
//                     </div>
//                 </a>
//                 <a href="#find-campus-facility" className='service-item bg-blue-100 p-16 rounded-lg shadow-lg  flex-1 max-w-3xl ml-20 mt-10 relative hover:shadow-2xl'> 
//                     <h3 className="text-3xl font-black mb-2"> Campus Facilities</h3>
//                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="w-8 h-fit " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-Rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
//                     <div className='absolute top-0 right-0'>
//                         <img src="/images/campus facility 1.jpg" alt="Campus Facility" 
//                             style={{ width: '200px', height: '150px', borderRadius: '550px' }} 
//                             className='relative'
//                         />
//                     </div>
//                 </a>
//             </div>
//             </section>
//             {/*  Call Center */}
            

//             <div className='flex flex-col sm:flex-row mt-40 mb-40 '>
//                 <div className='ml-20 mt-40 mr-10'>
//                     <h3 className='font-black text-5xl'>
//                         4464
//                     </h3>
//                     <h1 className='font-black text-4xl mt-5'>
//                         BrightSphere University Student Support
//                     </h1>
//                     <p className='mt-5'>
//                         At BrightSphere University, we are committed to supporting your academic journey and addressing any questions you might have. Whether you need assistance with course selection, academic advising, or counseling services, our dedicated team is just a call away. Reach out to us for personalized guidance and support tailored to your educational needs.
//                     </p>
//                     <div className='  bg-blue-500 rounded  p-3 text-white  mt-5 hover:bg-white hover:text-blue-500 border hover:border-blue-500 'style={{ maxWidth: '7rem' }}>
//                           <a href="/tel:4464" className='flex items-center text-xl'>
//                                 Call
//                                 <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="w-6 h-fit ml-5 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-Rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>

//                           </a>

//                     </div>

//                 </div>
//                 <div className=' mr-10'>
//                         <img src="/images/call center 2.jpg" alt=""
//                              style={{ width: '2000px', height: '600px', borderRadius: '20px'  }}
//                             //  className='absolute object-cover' 
//                         />                    
//                 </div>
//             </div>
//             {/*  About us */}
//             <section id='about-us'>
//                 <div className='text-center'>
//                     <h3 className='text-5xl font-extrabold pt-8 mb-5'>About Us!</h3>
//                     <p className='text-xl'>Here is some background about BrightSphere</p>
//                     <div className="mt-2">
//                         <span className="inline-block w-40 h-1 bg-sky-500 rounded-full"></span>
//                         <span className="inline-block w-5 h-1 ml-1 bg-sky-500 rounded-full"></span>
//                         <span className="inline-block w-3 h-1 ml-1 bg-sky-500 rounded-full"></span>
//                     </div>
//                 </div>
//                 <div className='flex flex-col sm:flex-row justify-between mt-20'>
//                     <div className='text-left ml-20 mr-10'>
//                         <img src="/images/about us.jpg" alt=""
//                              style={{ width: '3500px', height: '1000px' }} 
//                              className='w-full h-full object-cover'
//                         />                    
//                     </div>
//                     <div className='bg-green-100 mr-20  px-20 pt-20 pb-10'>
//                         <h2 className='text-xl mb-5'>
//                             ABOUT US!
//                         </h2>
//                         <p className='font-black text-3xl mb-5'>
//                             Ethiopian Education System <br />
//                             is being digitalized
//                         </p>
//                         <p className='mb-5 text-gray-800'>
//                         Welcome to BrightSphere School, your comprehensive solution for effective and efficient school management. We provide a one-stop platform for managing academic records, student enrollment, and faculty schedules. Our system brings all essential educational tools to your fingertips, offering seamless access to school resources, communication channels, and administrative functions. <br />
//                         </p>
//                         <p className='mb-5 text-gray-800'>
//                         BrightSphere School is committed to delivering a well-organized and reliable system to streamline school operations, saving time and reducing administrative overhead. Our platform integrates daily schedules, student progress tracking, and communication tools, ensuring smooth and effective management of school activities. <br />
//                         </p>
//                         <p className='mb-5 text-gray-800'>
//                         Our digital system also facilitates real-time updates on academic resources, helps manage inventory of educational materials, and provides support for online consultations and professional advice. Whether it's handling student queries or providing academic assistance, BrightSphere School is designed to enhance the educational experience for both administrators and students.
//                         </p>
//                         <a href="#contact" className='service-item bg-sky-700 text-white mt-5 px-10 py-3 rounded  hover:bg-green-100 hover:text-blue-500 border hover:border-blue-500'>
//                             Get in touch
//                         </a>
//                     </div>
//                 </div>
//                 </section>
//             </div>
//             {/* service providers */}
            
//             <div className='bg-sky-800 mt-20 text-white pt-20 pb-20 mb-10'>
//                 <div className=' ml-20 text-center'>
//                     <h3 className='font-black text-5xl mb-5 '>
//                         Our Partner Educational Service Providers
//                     </h3>
//                     <p className='text-xl'>
//                         BrightSphere University partners with a diverse range of educational providers. We're expanding our network and invite you to join our vibrant academic community.
//                     </p>
//                 </div>

//                 <div className=' flex flex-col sm:flex-row justify-between mt-10 ml-20 mr-20'>
//                     <div className=''>
//                         <h3 className='text-center font-black text-5xl'>
//                             123+
//                         </h3>
//                         <p className='text-xl'>
//                             Faculty Members
//                         </p>
//                     </div>
//                     <div className=''>
//                         <h3 className='text-center font-black text-5xl'>
//                             12+
//                         </h3>
//                         <p className='text-xl'>
//                             Departments
//                         </p>
//                     </div>
//                     <div className=''>
//                     <h3 className='text-center font-black text-5xl'>
//                             9+
//                         </h3>
//                         <p className='text-xl'>
//                             Research Centers
//                         </p>
//                     </div>
//                     <div className=''>
//                     <h3 className='text-center font-black text-5xl'>
//                             11+
//                         </h3>
//                         <p className='text-xl'>
//                             Campus Facilities 
//                         </p>
//                     </div>
//                     <div className=''>
//                     <h3 className='text-center font-black text-5xl'>
//                             1430+
//                         </h3>
//                         <p className='text-xl'>
//                             Educational Resources
//                         </p>
//                     </div>
//                 </div>
//                 <div className='flex justify-center  '>
//                 <a href="#contact" className='bg-blue-400 font-black py-3 w-40  text-center mt-10 text-white hover:bg-white hover:text-blue-500 border hover:border-blue-500 centered-button'>
//                     Join Us
//                 </a>
//                 </div>

//             </div>

//             {/* Why Us */}

//             <div className='bg-gray-50 mt-20 pl-20 pt-10 '>
//                 <h3 className='font-black text-5xl '>
//                     Why Us
//                 </h3>
//                 <div className="mt-2 ">
//                         <span className="inline-block w-40 h-1 bg-sky-500 rounded-full"></span>
//                         <span className="inline-block w-5 h-1 ml-1 bg-sky-500 rounded-full"></span>
//                         <span className="inline-block w-3 h-1 ml-1 bg-sky-500 rounded-full"></span>
//                 </div>

//                 <div className=' flex flex-col sm:flex-row justify-between items-start '>
//                     <div className='flex flex-col justify-between w-1/2 mt-20 '>
//                         <div className='flex  flex-col sm:flex-row mb-10'>
//                             <div className='mb-6'>
//                                 <h3 className='text-2xl font-bold text-gray-800 mb-5 '>
//                                     Diverse Academic Programs                            
//                                 </h3>
//                                 <p className='text-xl text-gray-600'>
//                                     Choose from a wide range of programs in sciences, arts, business, and technology, with rigorous training to excel in your field.
//                                 </p>
//                             </div>
//                             <div className='mb-6'>
//                                 <h3 className='text-2xl font-bold text-gray-800 mb-5'>
//                                     Cutting-Edge Facilities                            
//                                 </h3>
//                                 <p className='text-xl text-gray-600'>
//                                     Benefit from our state-of-the-art labs, collaborative spaces, and extensive libraries, designed for hands-on learning and research.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className='flex flex-col sm:flex-row '>
//                             <div className='mb-6'>
//                                 <h3 className='text-2xl font-bold text-gray-800 mb-5'>
//                                     Groundbreaking Research                                                           
//                                  </h3>
//                                 <p className='text-xl text-gray-600'>
//                                     Engage in innovative research projects with full access to resources and funding to bring your ideas to life.
//                                 </p>
//                             </div>
//                             <div className='mb-6'>
//                                 <h3 className='text-2xl font-bold text-gray-800 mb-5'>
//                                     Flexible Learning Options                            
//                                 </h3>
//                                 <p className='text-xl text-gray-600'>
//                                     Enjoy flexible learning with online and hybrid courses tailored to fit various schedules and learning styles.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='text-left ml-20 mr-10 mb-10'>
//                         <img src="/images/why us.jpg" alt=""
//                              style={{ width: '500px', height: '500px',  borderRadius: '480px'  }} 
//                         />                    
//                     </div>
//                 </div>


//             </div>

//             {/* telegram  */}

//             <div className=' bg-blue-50 pt-20 pb-20  '>

//                 <div className='flex flex-col sm:flex-row justify-between pt-20 pb-20  ml-20 mr-20 bg-green-50  rounded'>
//                     <div className=' text-left ml-20 mr-10'>
//                         <img src="/images/telegram 2.jpg" alt=""
//                              style={{ width: '1500px', height: '600px',  borderRadius: '10px'   }} 
//                         />                    
//                     </div>
//                     <div className='pb-20 '>
//                         <h1 className='text-blue-600 [letter-spacing:0.4em]'>
//                             AT YOUR FINGER TIPS
//                         </h1>
//                         <h3 className='text-blue-700 text-3xl mt-5 '>
//                             BrightSphere is on Telegram
//                         </h3>
//                         <div className='flex mt-10 items-center mr-20'>
//                             <div>

//                             </div>
//                             <div>
//                                 <h2  className='text-2xl mb-5'>
//                                     Find Information on telegram 
//                                 </h2>
//                                 <p className=''>
//                                     On your telegram app, search for @BrightSphere_bot, and Find Information about Faculty Members, Departments, Research Centers, Campus Facilities and Educational Resources.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className='flex items-center mr-20'>
//                             <div>

//                             </div>
//                             <div>
//                                 <h2 className='text-2xl mb-5'>
//                                     Upload and Manage Academic Documents 
//                                 </h2>
//                                 <p className=''>
//                                 Follow the bot’s straightforward instructions to upload and manage your academic documents, such as course assignments or research papers. 
//                                 The bot will guide you on how to efficiently handle and track your documents within the university system.
//                                 </p>
//                             </div> 

//                         </div>
//                         <div className='flex items-center mr-20'>
//                             <div>

//                             </div>
//                             <div>
//                                 <h2 className='text-2xl mb-5'>
//                                     Order Campus Services and Track Requests 
//                                 </h2>
//                                 <p className='mb-10'>
//                                 Use the bot to request various campus services or resources.
//                                 Track the status of your requests and receive updates directly through Telegram, ensuring you stay informed about service delivery and availability.
//                                 </p>
//                             </div>
//                         </div>
//                         {/* <div className='bg-blue-500 w-1/4 text-white font-black rounded'>
//                             <p>Telegram Bot</p>
//                         </div> */}
//                         <a href='BrightSphere_bot' className='rounded-md bg-sky-800 text-white hover:bg-white hover:text-blue-500 border border-blue-700 px-7 py-2 mt-9 ml-9'>
//                             Telegram Bot
//                         </a >
//                     </div>

//                 </div>

//                 <div className='bg-gray-100 mt-20 ml-15 pl-20 pt-20 pb-20'>
//                     <h3 className='text-5xl w-1/3 mb-10 font-black'>
//                         Read Trusted reviews from our customers and Partners
//                     </h3>
//                     <p className='text-gray-500 text-xl w-1/2'>
//                         Nothing is more trustworthy than an honest review from users, Here is what our customers 
//                         and Partners are saying about us, 
//                     </p>

//                 </div>
//                 <div className='text-center'>
//                     <h3 className='text-5xl font-extrabold pt-8 mb-5 mt-20'>Services</h3>
//                     <p className='text-xl'>here are the list of services BrightSphere provide</p>
//                     <div className="mt-2">
//                         <span className="inline-block w-40 h-1 bg-sky-500 rounded-full"></span>
//                         <span className="inline-block w-5 h-1 ml-1 bg-sky-500 rounded-full"></span>
//                         <span className="inline-block w-3 h-1 ml-1 bg-sky-500 rounded-full"></span>
//                     </div>
//                 </div>
//             </div>


//             {/* services */}

//         <div className='bg-white mt-10 ml-20 mb-20'>
//             <div className='flex flex-col sm:flex-row justify-between '>
//                 <div className='  flex  justify-between ml-20 mr-10 mt-20'>
//                     <div className='flex  items-center justify-center rounded'>
//                     <img src="/images/faculty members 2.jpg" alt=""
//                             style={{ width: '900px', height: '200px',  borderRadius: '10px' }} 
//                             className='mr-10'
//                         /> 
//                     </div>

//                         <div className='flex flex-col'>
//                         <img src="/images/faculty members 1.jpg" alt=""
//                              style={{ width: '1000px', height: '200px', borderRadius: '10px'  }} 
//                             className='mb-5'

//                         /> 
//                         <img src="/images/faculty members 3.jpg" alt=""
//                              style={{ width: '500px', height: '400px', borderRadius: '10px'  }} 
//                             className='mr-10'

//                         />  
//                         </div>                   
//                     </div>

//                     <div className='flex flex-col items-center justify-center'>
//                             <h3 className=' text-5xl mb-5 font-black'>
//                                 Faculty Members
//                             </h3>
//                             <p className='text-xl w-1/2 text-gray-500 mb-15'>
//                                 Benefit from the expertise of BrightSphere University’s distinguished faculty members, who bring a wealth of knowledge and experience to the academic environment. On BrightSphere, you can search for faculty by name, department, and their areas of specialization to learn more about their research interests and availability for consultations.
//                             </p>
//                             <a href='#find-faculty-members' className='bg-blue-500 text-white py-3 px-9 mt-10 hover:bg-blue-800 hover:text-white rounded'>
//                                 Find Faculty Members
//                             </a>
//                     </div>

//                 </div>
//             <div className='flex flex-col sm:flex-row mr-20'>

//                     <div className='flex flex-col items-center justify-center'>
//                             <h3 className=' text-5xl mb-5 font-black'>
//                             Departments
//                             </h3>
//                             <p className='text-xl w-1/2 text-gray-500 mb-15'>
//                             Access comprehensive information about BrightSphere University’s various departments. Each department is equipped with skilled professionals and state-of-the-art facilities to support your educational journey. Through BrightSphere, you can explore departmental services, faculty listings, and academic resources tailored to your needs.
//                             </p>
//                             <a href='#find-departments' className='bg-blue-500 text-white py-3 px-9 mt-10 hover:bg-blue-800 hover:text-white rounded'>
//                             Find Departments
//                             </a>
//                     </div>

//                 <div className='  flex  justify-between ml-20 mr-20 mt-20'>
//                     <div className='flex items-center justify-center rounded'>
//                     <img src="/images/department 1.jpg" alt=""
//                             style={{ width: '900px', height: '200px',  borderRadius: '10px' }} 
//                             className='mr-10'
//                         /> 
//                     </div>

//                         <div className='flex flex-col'>
//                         <img src="/images/department 2.png" alt=""
//                              style={{ width: '1000px', height: '200px', borderRadius: '10px'  }} 
//                             className='mb-5'

//                         /> 
//                         <img src="/images/department 3.jpg" alt=""
//                              style={{ width: '500px', height: '400px', borderRadius: '10px'  }} 
//                             className='mr-10'

//                         />  
//                         </div>                   
//                 </div>

//             </div>
//         <div className='flex flex-col sm:flex-row '>
//             <div className=' text-left ml-20 mr-10'>
//                 <div className='  flex justify-between ml-20 mr-20 mt-20'>
//                     <div className='flex items-center justify-center rounded'>
//                         <img src="/images/research center 1.jpg" alt=""
//                             style={{ width: '900px', height: '200px',  borderRadius: '10px' }} 
//                             className='mr-10'
//                         /> 
//                     </div>

//                     <div className='flex flex-col'>
//                         <img src="/images/research center 2.jpg" alt=""
//                              style={{ width: '1000px', height: '200px', borderRadius: '10px'  }} 
//                             className='mb-5'

//                         /> 
//                         <img src="/images/research center 3.jpg" alt=""
//                              style={{ width: '500px', height: '400px', borderRadius: '10px'  }} 
//                             className='mr-10'

//                         />  
//                     </div>                   
//                 </div>                    
//             </div>
//                     <div className='flex flex-col items-center justify-center'>
//                             <h3 className=' text-5xl mb-5 font-black'>
//                             Research Centers
//                             </h3>
//                             <p className='text-xl w-1/2 text-gray-500 mb-15'>
//                             Our research centers at BrightSphere University are dedicated to advancing knowledge with cutting-edge technology and innovative research. Discover how you can engage with ongoing projects, access advanced resources, and collaborate with leading experts in your field.                            </p>
//                             <a href='#find-research-center' className='bg-blue-500 text-white py-3 px-9 mt-10 hover:bg-blue-800 hover:text-white rounded'>
//                             Find Research Centers
//                             </a>
//                     </div>
//             </div>
//                 <div className='flex flex-col sm:flex-row'>

//                     <div className='flex flex-col items-center justify-center'>
//                             <h3 className=' text-5xl mb-5 font-black'>
//                             Campus Facilities
//                             </h3>
//                             <p className='text-xl w-1/2 text-gray-500 mb-15'>
//                             Explore the modern and well-equipped facilities available at BrightSphere University. From libraries and laboratories to recreational and support services, find out how our campus amenities can enhance your university experience and provide a conducive learning environment.                            </p>
//                             <a href='#find-campus-facilty' className='bg-blue-500 text-white py-3 px-9 mt-10 hover:bg-blue-800 hover:text-white rounded'>
//                             Find Campus Facilities
//                             </a>
//                     </div>

//                     <div className='  mr-20 ml-10'>
//                     <div className='  flex justify-between ml-20 mr-20 mt-20'>
//                     <div className='flex items-center justify-center rounded'>
//                     <img src="/images/campus facility 4.jpg" alt=""
//                             style={{ width: '900px', height: '200px',  borderRadius: '10px' }} 
//                             className='mr-10'
//                         /> 
//                     </div>

//                         <div className='flex flex-col'>
//                         <img src="/images/campus facility 2.jpg" alt=""
//                              style={{ width: '1000px', height: '200px', borderRadius: '10px'  }} 
//                             className='mb-5'

//                         /> 
//                         <img src="/images/campus facility 5.jpg" alt=""
//                              style={{ width: '500px', height: '400px', borderRadius: '10px'  }} 
//                             className='mr-10'

//                         />  
//                         </div>                   
//                 </div>                   
//                     </div>
//                 </div>

//             </div>

//             {/* Contact us */}

//             <section id='contact'>
//             <div className='flex flex-col sm:flex-row justify-between bg-sky-900 pt-20 pb-20'>
//                 <div className='text-white ml-20'>
//                     <h3 className='text-4xl mb-10 font-black'>
//                         Join BrightSphere Today!
//                     </h3>
//                     <p className='mb-15 text-xl'>
//                         Are You an Educator or Administrator Interested in Modernizing Campus Services? <br />
//                         Contact Us and Join Brightsphere University!
//                     </p>
//                     <h3 className='text-4xl mt-10 font-black mb-5'>
//                         Get In Touch
//                     </h3>
//                     <p className='mb-5 text-xl'>
//                         For any comment and inquiry Contact us with this address.
//                     </p>
//                     <p className='mb-5 text-xl'>
//                          Addis Ababa
//                     </p>
//                     <a href='tel:+251178990536' className='mb-5 text-xl'>
//                         011-3-23-68-42
//                     </a > <br />
//                     <a href="tel:4464"  className='mb-10 text-xl'>4464</a>
//                     <p className='mb-5 text-xl'>
//                         contact@BrightSphere.com
//                     </p>
//                 </div>
//                 <div className='text-white mr-20 w-full ' style={{ maxWidth: '600px', margin: '0 auto' }}>
//                     <h3 className='text-4xl font-black mb-15'>
//                         Contact Us
//                     </h3>
//                     <div className='mt-10  '>
//                         <label htmlFor="name">Name</label><br />
//                             <input 
//                                 type="text" 
//                                 id="name" 
//                                 placeholder="Your Name" 
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc',color: 'black'}}
//                             /><br />
    
//                         <label htmlFor="email">Email</label><br />
//                             <input 
//                                 type="email" 
//                                 id="email" 
//                                 placeholder="Your Email" 
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc',color: 'black' }}
//                             /><br />
    
//                         <label htmlFor="message">Message</label><br />
//                             <textarea 
//                                 id="message" 
//                                 placeholder="Your Message" 
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc',color: 'black' }}
//                             /><br />
    
//                         <button className='bg-white text-blue-500 rounded mt-7 px-7 py-2 hover:bg-blue-700 hover:text-white'>
//                             Send
//                         </button>
//                     </div>


//                 </div>
//             </div>
//             </section>
//             {/* Footer */}
//             <div className='flex flex-col sm:flex-row justify-between bg-gray-900 text-white '>
//                 <div className='text-left  '>
//                     <img src="/images/graduation 2.jpg" alt=""
//                         style={{ width: '500px', height: '500px' }} 
//                     />                    
//                 </div>
//                 <div className='  '>
//                     <div className='flex justify-between'>
//                         <div className=' mt-20 mr-40'>
//                             <p className='text-3xl mb-5'>
//                                 CALL
//                             </p>
//                             <a href="tel:4464" className='text-3xl mb-5'>4464</a> <br />
                        
//                             <a href="tel:+251178990536" className='text-3xl mb-5'>011-3-23-68-42</a>
//                         </div>
//                         <div className='flex justify-between mr-10 mt-20 ml-30'>
//                             <div className='ml-10 mr-10 '>
//                                 <h3 className='text-2xl'>
//                                     Link
//                                 </h3>
//                                 <ul>
//                                     <li className='text-xl'>Faculty Members</li>
//                                     <li className='text-xl'>Departments</li>
//                                     <li className='text-xl'>Research Center</li>
//                                     <li className='text-xl'>Campus Facilities</li>

//                                 </ul>
                            

//                             </div>
//                             <div className='mr-5'>
//                                 <h3 className='text-2xl'>
//                                     List
//                                 </h3>
//                                 <ul>
//                                     <li className='text-xl'>Faculty Members</li>
//                                     <li className='text-xl'>Departments</li>
//                                     <li className='text-xl'>Research Center</li>
//                                     <li className='text-xl'>Campus Facilities</li>

//                                 </ul>

//                             </div>

//                         </div> 

//                     </div>
//                     <div>
//                        <p>
//                             © 2024 BrightSphere.
//                         </p> 
//                     </div>
              

//                 </div>
//             </div>
//         </div>
//     );
// }





















// // import { Link, Head } from '@inertiajs/react';

// // export default function Welcome({ auth, laravelVersion, phpVersion }) {
// //     const handleImageError = () => {
// //         document.getElementById('screenshot-container')?.classList.add('!hidden');
// //         document.getElementById('docs-card')?.classList.add('!row-span-1');
// //         document.getElementById('docs-card-content')?.classList.add('!flex-row');
// //         document.getElementById('background')?.classList.add('!hidden');
// //     };

// //     return (
// //         <>
// //             <Head title="Welcome" />
// //             <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
// //                 <img
// //                     id="background"
// //                     className="absolute -left-20 top-0 max-w-[877px]"
// //                     src="https://laravel.com/assets/img/welcome/background.svg"
// //                 />
// //                 <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
// //                     <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
// //                         <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
// //                             <div className="flex lg:justify-center lg:col-start-2">
// //                                 <svg
// //                                     className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
// //                                     viewBox="0 0 62 65"
// //                                     fill="none"
// //                                     xmlns="http://www.w3.org/2000/svg"
// //                                 >
// //                                     <path
// //                                         d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
// //                                         fill="currentColor"
// //                                     />
// //                                 </svg>
// //                             </div>
// //                             <nav className="-mx-3 flex flex-1 justify-end">
// //                                 {auth.user ? (
// //                                     <Link
// //                                         href={route('login')}
// //                                         className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
// //                                     >
// //                                         login
// //                                     </Link>
// //                                 ) : (
// //                                     <>
// //                                         <Link
// //                                             href={route('login')}
// //                                             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
// //                                         >
// //                                             Log in
// //                                         </Link>
                                        
// //                                     </>
// //                                 )}
// //                             </nav>
// //                         </header>

// //                         </div>
// //                         </div>
// //                         </div>
// //                         </>

// //     )}













































// adissu



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
            <div className={`flex flex-col sm:flex-row items-center w-full ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col sm:flex-row sm:space-x-9 mt-4 sm:mt-0 mr-4 sm:mr-16">
                    <Link
                        href="#home"
                        className="rounded-md px-3 py-2 text-l font-large text-blue-400 hover:text-gray-500 underline"
                        style={{ textDecorationColor: '#3B82F6', fontSize: '1.2em' }}
                        aria-current="page"
                    >
                        Home
                    </Link>
                    <Link
                        href="#find"
                        className="rounded-md px-3 py-2 text-l font-large text-black hover:text-gray-500"
                        style={{ fontSize: '1.2em' }}
                    >
                        Services
                    </Link>
                    <Link
                        href="#about-us"
                        className="rounded-md px-3 py-2 text-l font-large text-black hover:text-gray-500"
                        style={{ fontSize: '1.2em' }}
                    >
                        About Us
                    </Link>
                    <Link
                        href="#contact"
                        className="rounded-md px-3 py-2 text-l font-large text-black hover:text-gray-500"
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
    <div className='flex flex-col sm:flex-row justify-between mt-20 px-4 sm:px-16'>
        <div className='mt-20 flex-1'>
            <h5 className='text-left font-black text-4xl sm:text-6xl mt-9'>
                Ethiopian Education System is being Revolutionized 
                <span style={{ color: '#007bff' }}> by BrightSphere.</span>
            </h5>
            <p className='text-left mt-9 text-base sm:text-lg'>
                Welcome to BrightSphere University, where academic excellence and future leadership are cultivated. Our progressive approach integrates cutting-edge research with a collaborative learning environment, ensuring that every student excels intellectually, professionally, and personally. At BrightSphere University, we are dedicated to offering a transformative education that equips students to navigate and shape the evolving global landscape. Embark on a journey of innovation and achievement with us, where education meets ambition and vision.
            </p>
            <div className='flex flex-col sm:flex-row mt-9'>
                <a href='#find' className='rounded-md bg-blue-500 text-white px-7 py-3 mb-4 sm:mb-0 hover:bg-blue-700 hover:text-white'>
                    Find on BrightSphere
                </a >
                <a href='#contact' className='rounded-md bg-blue-200 text-blue-700 hover:bg-blue-300 px-7 py-2 ml-0 sm:ml-9'>
                    Contact Us
                </a >
            </div>
        </div>
        <div className='mt-10 sm:mt-20'>
            <img src="/images/graduate.png" alt="Graduate"
                style={{ width: '100%', maxWidth: '500px', borderRadius: '20px' }}
            />
        </div>
    </div>

    <div className='flex justify-end fixed z-30 right-5' style={{ bottom: '30px' }}>
        <a href='tel:4464' className="bg-yellow-400 border-2 border-current px-8 py-3 font-bold uppercase text-black">
            Call: 4464
        </a> 
    </div>
</section>



            {/* What do you want to search today? */}
            
<div className='bg-blue-50 mt-10 pb-20'>
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
        <div className='flex flex-col sm:flex-row justify-center mt-10'>
            <a href="#find-faculty-members" className='service-item bg-blue-200 p-8 sm:p-16 rounded-lg shadow-lg flex-1 max-w-md sm:max-w-3xl mx-4 mb-10 relative hover:shadow-2xl'> 
                <h3 className="text-xl sm:text-3xl font-black mb-2"> Faculty Members</h3>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-6 sm:w-8 h-fit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                <div className='absolute top-0 right-0'>
                    <img src="/images/faculty members 2.jpg" alt="Faculty Members" 
                        style={{ width: '100px', height: '75px', borderRadius: '50%' }} 
                        className='relative'
                    />
                </div>
            </a>
            <a href="#find-departments" className='service-item bg-green-200 p-8 sm:p-16 rounded-lg shadow-lg flex-1 max-w-md sm:max-w-3xl mx-4 mb-10 relative hover:shadow-2xl'> 
                <h3 className="text-xl sm:text-3xl font-black mb-2"> Departments</h3>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-6 sm:w-8 h-fit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                <div className='absolute top-0 right-0'>
                    <img src="/images/department 1.jpg" alt="Department" 
                        style={{ width: '100px', height: '75px', borderRadius: '50%' }} 
                        className='relative'
                    />
                </div>
            </a>
        </div>
        <div className='flex flex-col sm:flex-row justify-center mb-10'>
            <a href="#find-research-center" className='service-item bg-purple-200 p-8 sm:p-16 rounded-lg shadow-lg flex-1 max-w-md sm:max-w-3xl mx-4 mb-10 relative hover:shadow-2xl'> 
                <h3 className="text-xl sm:text-3xl font-black mb-2"> Research Center</h3>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-6 sm:w-8 h-fit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                <div className='absolute top-0 right-0'>
                    <img src="/images/research center 1.jpg" alt="Research Center" 
                        style={{ width: '100px', height: '75px', borderRadius: '50%' }} 
                        className='relative'
                    />
                </div>
            </a>
            <a href="#find-campus-facility" className='service-item bg-blue-100 p-8 sm:p-16 rounded-lg shadow-lg flex-1 max-w-md sm:max-w-3xl mx-4 mb-10 relative hover:shadow-2xl'> 
                <h3 className="text-xl sm:text-3xl font-black mb-2"> Campus Facilities</h3>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-6 sm:w-8 h-fit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                <div className='absolute top-0 right-0'>
                    <img src="/images/campus facility 1.jpg" alt="Campus Facility" 
                        style={{ width: '100px', height: '75px', borderRadius: '50%' }} 
                        className='relative'
                    />
                </div>
            </a>
        </div>
    </section>

            {/*  Call Center */}
            

            <div className='flex flex-col md:flex-row mt-20 mb-20 px-4'>
    <div className='flex-1 mb-10 md:mb-0 md:mr-10'>
        <h3 className='font-black text-3xl md:text-5xl'>
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
    <div className='flex-1'>
        <img src="/images/call center 2.jpg" alt="Call Center" className='w-full h-auto rounded-lg object-cover' />
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
    <div className='flex flex-col md:flex-row mt-12'>
        <div className='text-left mb-10 md:mb-0 md:mr-10'>
            <img src="/images/about us.jpg" alt="About Us"
                className='w-full h-auto rounded-lg object-cover'
            />
        </div>
        <div className='bg-green-100 px-4 md:px-10 pt-6 md:pt-12 pb-6 md:pb-10'>
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
            <p className='mb-4 text-gray-800 text-base md:text-lg'>
                Our digital system also facilitates real-time updates on academic resources, helps manage inventory of educational materials, and provides support for online consultations and professional advice. Whether it's handling student queries or providing academic assistance, BrightSphere School is designed to enhance the educational experience for both administrators and students.
            </p>
            <a href="#contact" className='bg-sky-700 text-white mt-4 px-6 py-3 rounded hover:bg-green-100 hover:text-blue-500 border hover:border-blue-500'>
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
    <div className='flex justify-center'>
        <a href="#contact" className='bg-blue-400 font-black py-3 px-6 text-center text-white hover:bg-white hover:text-blue-500 border hover:border-blue-500 rounded'>
            Join Us
        </a>
    </div>
</div>


            {/* Why Us */}

            <div className='bg-gray-50 mt-20 px-4 md:px-20 pt-10'>
    <h3 className='font-black text-3xl md:text-5xl text-center'>
        Why Us
    </h3>
    <div className="mt-2 text-center">
        <span className="inline-block w-24 h-1 bg-sky-500 rounded-full"></span>
        <span className="inline-block w-6 h-1 ml-1 bg-sky-500 rounded-full"></span>
        <span className="inline-block w-4 h-1 ml-1 bg-sky-500 rounded-full"></span>
    </div>

    <div className='flex flex-col md:flex-row justify-between items-start mt-10'>
        <div className='flex flex-col w-full md:w-1/2'>
            <div className='flex flex-col md:flex-row md:justify-between mb-10'>
                <div className='mb-6 flex-1'>
                    <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-5'>
                        Diverse Academic Programs
                    </h3>
                    <p className='text-base md:text-xl text-gray-600'>
                        Choose from a wide range of programs in sciences, arts, business, and technology, with rigorous training to excel in your field.
                    </p>
                </div>
                <div className='mb-6 flex-1'>
                    <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-5'>
                        Cutting-Edge Facilities
                    </h3>
                    <p className='text-base md:text-xl text-gray-600'>
                        Benefit from our state-of-the-art labs, collaborative spaces, and extensive libraries, designed for hands-on learning and research.
                    </p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between'>
                <div className='mb-6 flex-1'>
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
        <div className='flex justify-center md:justify-start w-full md:w-1/2 mb-10'>
            <img src="/images/why us.jpg" alt="Why Us" className='w-64 h-64 md:w-80 md:h-80 rounded-full' />
        </div>
    </div>
</div>


            {/* telegram  */}

            <div className='bg-blue-50 pt-10 pb-20'>

{/* Telegram Section */}
<div className='flex flex-col md:flex-row justify-between bg-green-50 rounded-lg mx-4 md:mx-20 pt-10 pb-10 md:pt-20 md:pb-20'>
    <div className='text-center md:text-left md:w-1/2'>
        <img src="/images/telegram 2.jpg" alt="Telegram Bot" className='w-full h-auto md:w-1500 md:h-600 rounded-lg' />
    </div>
    <div className='md:w-1/2 md:ml-10 mt-10 md:mt-0'>
        <h1 className='text-blue-600 text-2xl md:text-4xl font-bold [letter-spacing:0.4em]'>
            AT YOUR FINGERTIPS
        </h1>
        <h3 className='text-blue-700 text-2xl md:text-3xl mt-5'>
            BrightSphere is on Telegram
        </h3>
        <div className='mt-10'>
            <div className='flex flex-col md:flex-row items-start mb-10'>
                <div className='md:w-1/2'>
                    <h2 className='text-xl md:text-2xl mb-3'>
                        Find Information on Telegram
                    </h2>
                    <p>
                        On your Telegram app, search for @BrightSphere_bot, and find information about Faculty Members, Departments, Research Centers, Campus Facilities, and Educational Resources.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start mb-10'>
                <div className='md:w-1/2'>
                    <h2 className='text-xl md:text-2xl mb-3'>
                        Upload and Manage Academic Documents
                    </h2>
                    <p>
                        Follow the bot’s straightforward instructions to upload and manage your academic documents, such as course assignments or research papers. The bot will guide you on how to efficiently handle and track your documents within the university system.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start'>
                <div className='md:w-1/2'>
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
<div className='bg-gray-100 mt-20 px-4 md:px-20 pt-10 pb-20'>
    <h3 className='text-3xl md:text-5xl font-black mb-5 text-center'>
        Read Trusted Reviews from Our Customers and Partners
    </h3>
    <p className='text-gray-500 text-base md:text-xl w-full md:w-1/2 mx-auto text-center'>
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
<div className='flex flex-col md:flex-row justify-between mb-20'>
    <div className='flex flex-col md:flex-row md:w-2/3'>
        <div className='flex items-center justify-center rounded-lg mb-5 md:mb-0'>
            <img src="/images/faculty members 2.jpg" alt="Faculty Members" className='w-full h-auto md:w-900 md:h-200 rounded-lg' />
        </div>
        <div className='flex flex-col md:w-1/3'>
            <img src="/images/faculty members 1.jpg" alt="Faculty Member 1" className='w-full h-auto mb-5 rounded-lg' />
            <img src="/images/faculty members 3.jpg" alt="Faculty Member 3" className='w-full h-auto rounded-lg' />
        </div>
    </div>
    <div className='flex flex-col items-center md:items-start md:w-1/3 mt-10 md:mt-0'>
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
<div className='flex flex-col md:flex-row justify-between mb-20'>
    <div className='flex flex-col items-center md:items-start md:w-1/3'>
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
    <div className='flex flex-col md:flex-row md:w-2/3'>
        <div className='flex items-center justify-center rounded-lg mb-5 md:mb-0'>
            <img src="/images/department 1.jpg" alt="Department 1" className='w-full h-auto md:w-900 md:h-200 rounded-lg' />
        </div>
        <div className='flex flex-col'>
            <img src="/images/department 2.png" alt="Department 2" className='w-full h-auto mb-5 rounded-lg' />
            <img src="/images/department 3.jpg" alt="Department 3" className='w-full h-auto rounded-lg' />
        </div>
    </div>
</div>

{/* Research Centers Section */}
<div className='flex flex-col md:flex-row justify-between mb-20'>
    <div className='flex flex-col md:flex-row md:w-2/3'>
        <div className='flex items-center justify-center rounded-lg mb-5 md:mb-0'>
            <img src="/images/research center 1.jpg" alt="Research Center 1" className='w-full h-auto md:w-900 md:h-200 rounded-lg' />
        </div>
        <div className='flex flex-col'>
            <img src="/images/research center 2.jpg" alt="Research Center 2" className='w-full h-auto mb-5 rounded-lg' />
            <img src="/images/research center 3.jpg" alt="Research Center 3" className='w-full h-auto rounded-lg' />
        </div>
    </div>
    <div className='flex flex-col items-center md:items-start md:w-1/3 mt-10 md:mt-0'>
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
<div className='flex flex-col md:flex-row justify-between'>
    <div className='flex flex-col items-center md:items-start md:w-1/3'>
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
    <div className='flex flex-col md:flex-row md:w-2/3'>
        <div className='flex items-center justify-center rounded-lg mb-5 md:mb-0'>
            <img src="/images/campus facility 4.jpg" alt="Campus Facility 4" className='w-full h-auto md:w-900 md:h-200 rounded-lg' />
        </div>
        <div className='flex flex-col'>
            <img src="/images/campus facility 2.jpg" alt="Campus Facility 2" className='w-full h-auto mb-5 rounded-lg' />
            <img src="/images/campus facility 5.jpg" alt="Campus Facility 5" className='w-full h-auto rounded-lg' />
        </div>
    </div>
</div>

</div>


            {/* Contact us */}

            <section id='contact'>
    <div className='bg-sky-900 py-20 px-4 md:px-20'>
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
            <div className='bg-gray-900 text-white py-10 px-4 md:px-20'>
    <div className='flex flex-col md:flex-row justify-between items-start'>
        {/* Image Section */}
        <div className='mb-10 md:mb-0 md:w-1/3'>
            <img 
                src="/images/graduation 2.jpg" 
                alt="Graduation" 
                className='w-full h-auto rounded-lg'
            />
        </div>

        {/* Contact and Links Section */}
        <div className='flex flex-col md:flex-row md:w-2/3'>
            {/* Contact Information */}
            <div className='mb-10 md:mb-0 md:w-1/2 md:mr-10'>
                <p className='text-3xl mb-5 font-semibold'>CALL</p>
                <a href="tel:4464" className='text-3xl mb-3 block'>4464</a>
                <a href="tel:+251178990536" className='text-3xl mb-3 block'>011-3-23-68-42</a>
            </div>

            {/* Links Section */}
            <div className='flex flex-col md:flex-row md:w-1/2'>
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
    <div className='text-center mt-10'>
        <p className='text-xl'>
            © 2024 BrightSphere.
        </p>
    </div>
</div>

        </div>
    );
}

























// import { Link, Head } from '@inertiajs/react';

// export default function Welcome({ auth, laravelVersion, phpVersion }) {
//     const handleImageError = () => {
//         document.getElementById('screenshot-container')?.classList.add('!hidden');
//         document.getElementById('docs-card')?.classList.add('!row-span-1');
//         document.getElementById('docs-card-content')?.classList.add('!flex-row');
//         document.getElementById('background')?.classList.add('!hidden');
//     };

//     return (
//         <>
//             <Head title="Welcome" />
//             <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
//                 <img
//                     id="background"
//                     className="absolute -left-20 top-0 max-w-[877px]"
//                     src="https://laravel.com/assets/img/welcome/background.svg"
//                 />
//                 <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
//                     <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
//                         <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
//                             <div className="flex lg:justify-center lg:col-start-2">
//                                 <svg
//                                     className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
//                                     viewBox="0 0 62 65"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
//                                         fill="currentColor"
//                                     />
//                                 </svg>
//                             </div>
//                             <nav className="-mx-3 flex flex-1 justify-end">
//                                 {auth.user ? (
//                                     <Link
//                                         href={route('login')}
//                                         className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                     >
//                                         login
//                                     </Link>
//                                 ) : (
//                                     <>
//                                         <Link
//                                             href={route('login')}
//                                             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                         >
//                                             Log in
//                                         </Link>
                                        
//                                     </>
//                                 )}
//                             </nav>
//                         </header>

//                         </div>
//                         </div>
//                         </div>
//                         </>

//     )}














// import { Link, Head } from '@inertiajs/react';

// export default function Welcome({ auth, laravelVersion, phpVersion }) {
//     const handleImageError = () => {
//         document.getElementById('screenshot-container')?.classList.add('!hidden');
//         document.getElementById('docs-card')?.classList.add('!row-span-1');
//         document.getElementById('docs-card-content')?.classList.add('!flex-row');
//         document.getElementById('background')?.classList.add('!hidden');
//     };

//     return (
//         <>
//             <Head title="Welcome" />
//             <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
//                 <img
//                     id="background"
//                     className="absolute -left-20 top-0 max-w-[877px]"
//                     src="https://laravel.com/assets/img/welcome/background.svg"
//                 />
//                 <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
//                     <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
//                         <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
//                             <div className="flex lg:justify-center lg:col-start-2">
//                                 <svg
//                                     className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
//                                     viewBox="0 0 62 65"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
//                                         fill="currentColor"
//                                     />
//                                 </svg>
//                             </div>
//                             <nav className="-mx-3 flex flex-1 justify-end">
//                                 {auth.user ? (
//                                     <Link
//                                         href={route('login')}
//                                         className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                     >
//                                         login
//                                     </Link>
//                                 ) : (
//                                     <>
//                                         <Link
//                                             href={route('login')}
//                                             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                         >
//                                             Log in
//                                         </Link>
                                        
//                                     </>
//                                 )}
//                             </nav>
//                         </header>

//                         </div>
//                         </div>
//                         </div>
//                         </>

//     )}


























// import React from 'react';
// import { useForm } from '@inertiajs/react';

// const Registration = () => {
//   const { data, setData, post, errors, reset } = useForm({
//     name: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//     role: '',
//   });

//   const register = () => {
//     post(route('registration'), {
//       onSuccess: () => {
//         reset();
//         this.$inertia.visit('/login');
//       },
//     });
//   };

//   return (
//     <div>
//       <h1>Registration</h1>
//       <form onSubmit={register}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             id="name"
//             type="text"
//             value={data.name}
//             onChange={(e) => setData('name', e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             type="email"
//             value={data.email}
//             onChange={(e) => setData('email', e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             id="password"
//             type="password"
//             value={data.password}
//             onChange={(e) => setData('password', e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password_confirmation">Confirm Password:</label>
//           <input
//             id="password_confirmation"
//             type="password"
//             value={data.password_confirmation}
//             onChange={(e) => setData('password_confirmation', e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="role">Role:</label>
//           <select
//             id="role"
//             value={data.role}
//             onChange={(e) => setData('role', e.target.value)}
//             required
//           >
//             <option value="">Select a role</option>
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//             <option value="parent">Parent</option>
//           </select>
//         </div>
//         <div>
//           <button type="submit">Register</button>
//         </div>
//       </form>
//       {errors && (
//         <div>
//           <ul>
//             {Object.values(errors).map((error, index) => (
//               <li key={index}>{error[0]}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Registration;