import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    // Perform login logic here

    // Navigate to the home page
    navigate('../Home.jsx');
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-gray-900">
            Sign in to your account
          </h2>

          <form className="mt-10 space-y-6" onSubmit={handleSignIn}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2.5 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full px-3 py-2.5 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex items-center justify-center w-full px-4 py-2.5 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
