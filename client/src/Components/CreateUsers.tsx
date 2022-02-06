import React, {useState} from 'react';

import {useMutation} from "@apollo/client";

import {CREATE_USER} from '../GraphQL/Users/Mutation';

function CreateUsers() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUser] = useMutation(CREATE_USER);

  const saveUser = () => {
    createUser({
      variables: {
        username,
        email,
        password
      }
    }).then(r => {
      setUsername('');
      setEmail('');
      setPassword('');
      console.log(r);
    });
  }

  return (
    <div>
      <div className="App">
        <div className="max-w-sm mx-auto bg-white shadow py-5 px-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-slate-700">Username</label>
            <div className="mt-1">
              <input onChange={
                (event) => {
                  setUsername(event.target.value);
                }
              } type="text" name="username" id="username" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <div className="mt-1">
              <input onChange={
                (event) => {
                  setEmail(event.target.value);
                }
              }
                     type="email" name="email" id="email" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
            <div className="mt-1">
              <input onChange={
                (event) => {
                  setPassword(event.target.value);
                }
              }
                     type="password" name="password" id="password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
            </div>
          </div>
          <div className="mt-6 text-right">
            <button onClick={saveUser} className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUsers;