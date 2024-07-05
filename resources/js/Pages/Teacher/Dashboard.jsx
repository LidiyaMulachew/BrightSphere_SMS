import TeacherLayout from '@/Layouts/TeacherLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { props } = usePage();

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teacher Dashboard</h2>}
        >
            <Head title="Teacher Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold">Hello, teachers!</h1>
                        </div>
                    </div>
                </div>
            </div>

        </TeacherLayout>
    );
}