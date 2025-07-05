import React, { useState } from 'react';

const AdminSettingPage = () => {
  const [schoolData, setSchoolData] = useState({
    schoolName: 'School Management',
    adminName: 'Admin User',
    logo: null,
    email: 'admin@school.com',
    phone: ''
  });

  const [previewLogo, setPreviewLogo] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchoolData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSchoolData(prev => ({
        ...prev,
        logo: file
      }));
      setPreviewLogo(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement API call to save school settings
    console.log('School Data:', schoolData);
  };

  const handleChangePassword = () => {
    // TODO: Implement change password functionality
    console.log('Change password clicked');
  };

  return (
    <div className="p-6 ml-60">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">School Profile Settings</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* School Logo Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">School Logo</h2>
            <div className="flex items-center space-x-6">
              <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                {previewLogo ? (
                  <img src={previewLogo} alt="School Logo" className="w-full h-full object-contain" />
                ) : (
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Upload Logo</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block">
                  <span className="sr-only">Choose logo file</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                  />
                </label>
                <p className="mt-1 text-sm text-gray-500">
                  PNG, JPG or SVG (max. 2MB)
                </p>
              </div>
            </div>
          </div>

          {/* School Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">School Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  School Name
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={schoolData.schoolName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admin Name
                </label>
                <input
                  type="text"
                  name="adminName"
                  value={schoolData.adminName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={schoolData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={schoolData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleChangePassword}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Change Password
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSettingPage;
