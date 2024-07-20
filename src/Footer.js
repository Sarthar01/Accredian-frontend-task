import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-2">Programs</h3>
          <ul>
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program) => (
              <li key={program} className="py-1">
                <a href="#" className="text-white">
                  {program}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Contact Us</h3>
          <ul>
            <li className="py-1">Email us (For Data Science Queries): admissions@accredian.com</li>
            <li className="py-1">Email us (For Product Management Queries): pm@accredian.com</li>
            <li className="py-1">Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</li>
            <li className="py-1">Product Management Admission Helpline: +91 9625811095</li>
            <li className="py-1">Enrolled Student Helpline: +91 7969232507</li>
            <li className="py-1">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
          </ul>
          <h3 className="font-bold mt-4">Why Accredian</h3>
          <div className="flex space-x-2 mt-2">
            <a href="#" className="text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Accredian</h3>
          <ul>
            {[
              "About",
              "Career",
              "Blog",
              "Admission Policy",
              "Referral Policy",
              "Privacy Policy",
              "Terms Of Service",
              "Master FAQs",
            ].map((item) => (
              <li key={item} className="py-1">
                <a href="#" className="text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
