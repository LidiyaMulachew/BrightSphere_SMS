import { useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('student.login'));
    };

    return (
        <div>
            <form onSubmit={submit}>
                {/* Login form fields */}
            </form>
        </div>
    );
}