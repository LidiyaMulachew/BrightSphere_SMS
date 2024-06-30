import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { props } = usePage();

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Student Dashboard</h2>}
        >
            <Head title="Student Dashboard" />

        </AuthenticatedLayout>
    );
}