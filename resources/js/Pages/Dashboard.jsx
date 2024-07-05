import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin</h2>}
        >
            <Head title="Dashboard" />


        </AuthenticatedLayout>
    );
}

























// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { usePage } from '@inertiajs/react';
// import { Head } from '@inertiajs/react';
// import StudentDashboard from './Student/Dashboard';
// import TeacherDashboard from './Teacher/Dashboard';

// export default function Dashboard({ auth }) {
//     const { user } = usePage().props;

//     let dashboardComponent;
//     if (user.role === 'STUDENT') {
//         dashboardComponent = <StudentDashboard auth={auth} />;
    
//     } else if (user.role === 'TEACHER') {
//         dashboardComponent = <TeacherDashboard auth={auth} />;
//     }

//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin</h2>}
//         >
//             <Head title="Dashboard" />
//             {dashboardComponent}
//         </AuthenticatedLayout>
//     );
// }
