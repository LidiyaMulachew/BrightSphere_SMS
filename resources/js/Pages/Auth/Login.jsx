
import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
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
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
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

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}




















// import { useEffect, useState } from 'react';
// import Checkbox from '@/Components/Checkbox';
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Login({ status, canResetPassword }) {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     useEffect(() => {
//         return () => {
//             reset('password');
//         };
//     }, [reset]);

//     const submit = (e) => {
//         e.preventDefault();
//         post(route('login'));
//     };

//     return (
//         <>
//             {/* Navigation */}
//             <nav className="bg-white fixed left-0 top-0 right-0 shadow-2xl py-6 flex flex-col sm:flex-row justify-between items-center z-20">
//                 <div className="flex items-center justify-between w-full px-4">
//                     <h1 className='flex items-center'>
//                         <span className='text-orange-500 font-bold text-xl'>BrightSphere</span>
//                         <span className='text-blue-600 font-bold text-xl ml-1'>SMS</span>
//                     </h1>
//                     <button
//                         className="block sm:hidden px-3 py-2 text-black"
//                         onClick={toggleMenu}
//                     >
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                         </svg>
//                     </button>
//                 </div>
//                 <div className={`flex flex-col sm:flex-row items-center w-full ${isOpen ? 'block' : 'hidden'} sm:flex`}>
//                     <div className="flex flex-col sm:flex-row sm:space-x-9 px-4">
//                         <Link
//                             href="#home"
//                             className="rounded-md px-3 py-2 text-lg font-medium text-blue-400 hover:text-gray-500 underline"
//                             aria-current="page"
//                         >
//                             Home
//                         </Link>
//                         <Link
//                             href="#find"
//                             className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500"
//                         >
//                             Services
//                         </Link>
//                         <Link
//                             href="#about-us"
//                             className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500"
//                         >
//                             About Us
//                         </Link>
//                         <Link
//                             href="#contact"
//                             className="rounded-md px-3 py-2 text-lg font-medium text-black hover:text-gray-500"
//                         >
//                             Contact
//                         </Link>
//                         <Link
//                             href={route('login')}
//                             className="rounded-md bg-blue-500 px-7 py-2 text-md font-medium text-white"
//                         >
//                             Log in
//                         </Link>
//                     </div>
//                 </div>
//             </nav>
//             <div className='flex justify-end fixed z-30 right-5' style={{ bottom: '30px' }}>
//                 <a href='tel:4464' className="bg-yellow-400 border-2 border-current px-8 py-3 font-bold uppercase text-black">
//                     Call: 4464
//                 </a> 
//             </div>
            
//             <div className="pt-5  mt-20"> 
//                 <GuestLayout>
//                     <Head title="Log in" />

//                     {/* Form */}
//                     <form onSubmit={submit} className="max-w-4xl mx-auto mt-20 py-4 px-9">
//                         <div>
//                             <InputLabel htmlFor="email" value="Email" />
//                             <TextInput
//                                 id="email"
//                                 type="email"
//                                 name="email"
//                                 value={data.email}
//                                 className="mt-1 block w-full"
//                                 autoComplete="username"
//                                 isFocused={true}
//                                 onChange={(e) => setData('email', e.target.value)}
//                             />
//                             <InputError message={errors.email} className="mt-2" />
//                         </div>

//                         <div className="mt-4">
//                             <InputLabel htmlFor="password" value="Password" />
//                             <TextInput
//                                 id="password"
//                                 type="password"
//                                 name="password"
//                                 value={data.password}
//                                 className="mt-1 block w-full"
//                                 autoComplete="current-password"
//                                 onChange={(e) => setData('password', e.target.value)}
//                             />
//                             <InputError message={errors.password} className="mt-2" />
//                         </div>

//                         <div className="block mt-4">
//                             <label className="flex items-center">
//                                 <Checkbox
//                                     name="remember"
//                                     checked={data.remember}
//                                     onChange={(e) => setData('remember', e.target.checked)}
//                                 />
//                                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
//                             </label>
//                         </div>

//                         <div className="flex items-center justify-end mt-4">
//                             {canResetPassword && (
//                                 <Link
//                                     href={route('password.request')}
//                                     className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                                 >
//                                     Forgot your password?
//                                 </Link>
//                             )}
//                             <PrimaryButton className="ml-4" disabled={processing}>
//                                 Log in
//                             </PrimaryButton>
//                         </div>
//                     </form>
//                 </GuestLayout>
//             </div>

//         </>
//     );
// }





