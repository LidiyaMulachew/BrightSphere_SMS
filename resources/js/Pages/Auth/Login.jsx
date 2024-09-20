
// import { useEffect } from 'react';
// import Checkbox from '@/Components/Checkbox';
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Login({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     useEffect(() => {
//         return () => {
//             reset('password');
//         };
//     }, []);

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('login'));
//     };

//     return (
        
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         isFocused={true}
//                         onChange={(e) => setData('email', e.target.value)}
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="current-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="block mt-4">
//                     <label className="flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             onChange={(e) => setData('remember', e.target.checked)}
//                         />
//                         <span className="ms-2 text-sm text-gray-600">Remember me</span>
//                     </label>
//                 </div>

//                 <div className="flex items-center justify-end mt-4">
//                     {canResetPassword && (
//                         <Link
//                             href={route('password.request')}
//                             className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Log in
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }


















import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, [reset]);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
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
                            className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500 "
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
            
            <div className="flex justify-between items-center  pt-20 ">
            <div className='mt-10 sm:mt-20 md:mr-5  '>
            {/* <img src="/images/glad2.jpg" alt="Glad"
                style={{ width: '100%', maxWidth: '500px', borderRadius: '20px', objectFit: 'cover' }}
                className='w-full md:w-[1900px] md:h-[600px]'
            /> */}
            
        <img alt="Welcome" src="/images/glad2.jpg"
                style={{ width: '100%',height: '100%', maxWidth: '700px', maxHeight: '900px',borderRadius: '20px', objectFit: 'cover' }}
        
        className="absolute mb-20 left-0 inset-0 w-full h-full object-cover"></img>

        </div>
<div className=" ">

{/* <p className='text-left order-1 sm:order-2  mt-9 text-base sm:text-lg md:w-[700px]'>
                Welcome to BrightSphere University, where academic excellence and future leadership are cultivated. Our progressive approach integrates cutting-edge research with a collaborative learning environment, ensuring that every student excels intellectually, professionally, and personally. At BrightSphere University, we are dedicated to offering a transformative education that equips students to navigate and shape the evolving global landscape. Embark on a journey of innovation and achievement with us, where education meets ambition and vision.
            </p> */}
            <h5 className='text-left font-black text-4xl  sm:text-6xl mt-9 md:w-[800px]'>
                {/* Ethiopian Education System is being Revolutionized  */}
                <span className='text-gray-600' > Welcome To <span style={{ color: '#007bff' }}>BrightSphere.</span> </span>
            </h5>
                <form onSubmit={submit} className='bg-white items-center mt-20 mb-20 w-full max-w-2xl h-full max-h-4xl mr-20 mx-4 my-8 p-8 rounded-lg shadow-2xl' >
                    <Head title="Log in" />
                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                    <div>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
                </div>
            </div>

            <div className='relative z-10 bg-gray-900  text-white py-0   md:px-0'>
    <div className='flex flex-col  md:flex-row justify-between items-start'>
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
        <div className='flex flex-col md:flex-row md:w-2/3 ml-5 md:mt-10'>
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
}





