import React from 'react';
import { useForm } from '@inertiajs/react';

const Registration = () => {
  const { data, setData, post, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
  });

  const register = () => {
    post(route('registration'), {
      onSuccess: () => {
        reset();
        this.$inertia.visit('/login');
      },
    });
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={register}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            id="password_confirmation"
            type="password"
            value={data.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={data.role}
            onChange={(e) => setData('role', e.target.value)}
            required
          >
            <option value="">Select a role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
          </select>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      {errors && (
        <div>
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error[0]}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Registration;