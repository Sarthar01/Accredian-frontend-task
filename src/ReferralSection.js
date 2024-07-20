import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function ReferralSection() {
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
    <section className="bg-white py-16">
      <style>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #000;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="container mx-auto">
        <div className="referral-section text-center">
          <h2 className="text-3xl font-bold mb-8">How Do I <span className="text-blue-500">Refer?</span></h2>
          <div className="steps-container flex justify-center items-center space-x-8">
            <div className="step">
              <img src="./images/add.png" alt="Submit Referrals" className="mx-auto" />
              <p className="mt-4">Submit referrals easily via our website's referral section.</p>
            </div>
            <div className="step">
              <img src="./images/write.png" alt="Earn Rewards" className="mx-auto" />
              <p className="mt-4">Earn rewards once your referral joins an Accredian program.</p>
            </div>
            <div className="step">
              <img src="./images/calender.png" alt="Receive Bonus" className="mx-auto" />
              <p className="mt-4">Both parties receive a bonus 30 days after program enrollment.</p>
            </div>
          </div>
        </div>
        <div className="button-container text-center mt-8">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg" onClick={togglePopup}>Refer Now</button>
        </div>
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
      </div>
    </section>
  );
}

export default ReferralSection;
