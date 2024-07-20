import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const programs = [
    { name: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { name: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
];

const ReferralBenefits = () => {
    const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Ensure number is sent as a number, not a string
      const formattedData = {
        ...data,
        number: parseInt(data.number, 10)
      };

      console.log(formattedData);

      await axios.post('http://localhost:5000/submit-referral', formattedData);
      alert('Form submitted successfully!');
      reset(); // Clear form fields after submission
      setShowPopup(false); // Close form popup after submission
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
    return (

        <div className="flex p-8 bg-gray-100 min-h-screen">
            <div className="w-1/4 pr-4">
                <div className="bg-white rounded shadow-lg">
                    <div className="p-4 border-b">
                        <button className="w-full text-left font-semibold">ALL PROGRAMS</button>
                    </div>
                    <div className="p-4">
                        <ul className="space-y-2">
                            <li><button className="w-full text-left">Product Management</button></li>
                            <li><button className="w-full text-left">Strategy & Leadership</button></li>
                            <li><button className="w-full text-left">Business Management</button></li>
                            <li><button className="w-full text-left">Fintech</button></li>
                            <li><button className="w-full text-left">Senior Management</button></li>
                            <li><button className="w-full text-left">Data Science</button></li>
                            <li><button className="w-full text-left">Digital Transformation</button></li>
                            <li><button className="w-full text-left">Business Analytics</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-3/4 pl-4">
                <div className="bg-white rounded shadow-lg">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h2 className="text-xl font-bold">What Are The <span className="text-blue-600">Referral Benefits?</span></h2>
                        <div className="flex items-center">
                            <span className="mr-2">Enrolled</span>
                            <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></span>
                            </label>
                        </div>
                    </div>
                    <div className="p-4">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Programs</th>
                                    <th className="px-4 py-2 text-left">Referrer Bonus</th>
                                    <th className="px-4 py-2 text-left">Referee Bonus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {programs.map((program, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="border px-4 py-2">{program.name}</td>
                                        <td className="border px-4 py-2">{program.referrerBonus}</td>
                                        <td className="border px-4 py-2">{program.refereeBonus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-4 flex justify-between items-center">
                            <button className="refer-button bg-blue-500 text-white py-2 px-6 rounded-lg mt-4" onClick={togglePopup}>Refer Now</button>
                            {showPopup && (
                                <div className="popup fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                                    <div className="popup-inner w-[400px] bg-white p-8 rounded-lg shadow-lg">
                                        <h2 className="text-2xl font-bold mb-4 text-center">Refer Form</h2>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                                <input
                                                    type="text"
                                                    {...register('name', { required: 'Name is required' })}
                                                    className="mt-1 block w-full border-gray-300 bg-gray-400 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">City</label>
                                                <input
                                                    type="text"
                                                    {...register('city', { required: 'City is required' })}
                                                    className="mt-1 block w-full border-gray-300 bg-gray-400 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                                <input
                                                    type="email"
                                                    {...register('email', { required: 'Email is required' })}
                                                    className="mt-1 block w-full border-gray-300 bg-gray-400 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Number</label>
                                                <input
                                                    type="text"
                                                    {...register('number', {
                                                        required: 'Number is required',
                                                        pattern: {
                                                            value: /^\d+$/,
                                                            message: 'Number must be an integer',
                                                        },
                                                        minLength: {
                                                            value: 10,
                                                            message: 'Number must be exactly 10 digits',
                                                        },
                                                        maxLength: {
                                                            value: 10,
                                                            message: 'Number must be exactly 10 digits',
                                                        },
                                                    })}
                                                    className="mt-1 block w-full border-gray-300 bg-gray-400 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                                {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
                                            </div>
                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? <div className="spinner"></div> : 'Submit'}
                                                </button>
                                                <button type="button" className="ml-2 text-gray-600" onClick={togglePopup}>Cancel</button>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                            <button className="text-blue-600">Show More <span>&#x25BC;</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReferralBenefits;
