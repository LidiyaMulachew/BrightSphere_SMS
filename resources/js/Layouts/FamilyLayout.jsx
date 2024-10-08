import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { usePage } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const {auth}=usePage().props;
    // const {user,setUser}=useState[auth.user];
    var user=auth.user;

            // Extract initials from the user's name
            const getInitials = (name) => {
                const names = name.split(' ');
                const initials = names.map(name => name.charAt(0)).join('');
                return initials;
            };
        
            const avatarUrl = `https://ui-avatars.com/api/?name=${getInitials(user.name)}&background=0D8ABC&color=fff`;
    
    return (
        

        <>
                       <div className="flex min-h-screen bg-gray-100">
                       <div className="w-64 bg-white border-r">


        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <a href="#" title="home">
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.softwareadvice.com%2Fhr%2Fschool-managment-system-software-profile%2F&psig=AOvVaw0davXuscxdcqEZiaQsxTog&ust=1719395530577000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCEpLO99oYDFQAAAAAdAAAAABAJ" className="w-32" alt="" />
                    </a>
                </div>

                <div className="mt-8 text-center">
            <img 
                src={avatarUrl} 
                alt="User Avatar" 
                className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" 
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{user.name}</h5>
            <span className="hidden text-gray-400 lg:block">Parent</span>
        </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    <li>
                        <a href="dashboard" aria-label="dashboard" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-sky-500 hover:text-white">
                        
                            <span className="-mr-1 font-medium">Dashboard</span>
                        </a>
                    </li>

                    <li>
                        <a href={route('parent.children')}  className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-sky-500 hover:text-white">
                 
                            <span className="-mr-1 font-medium">Children</span>
                        </a>
                    </li>

                </ul>
            </div>
        </aside>
        </div>
        <div className="flex-1 p-6">
        <div className="min-h-screen bg-gray-100 ">
                <nav className="bg-white border-b border-gray-100 rounded-lg w-[94%] mx-auto">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                        <div className="flex justify-between h-16">
                            <div className="flex">
          

                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                        Parent
                                    </NavLink>
                                </div>
                            </div>


                            <h5 style={{ marginTop: '1rem' }}>
                                <span style={{ color: 'orange', fontFamily: 'Arial', fontSize: '1.2em' }}>BrightSphere</span>{' '}
                                <span style={{ color: '#007bff', fontFamily: 'Arial', fontSize: '1.2em' }}>School Management System</span>
                            </h5>
                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>


                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                        <path
                                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>



                    <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">{user.name}</div>
                                <div className="font-medium text-sm text-gray-500">{user.email}</div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                                <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* {header && (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
        </header>
    )} */}

                <main>{children}</main>
            </div> 
            </div></div>
             </>
             
    );
}
