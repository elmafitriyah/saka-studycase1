import React from 'react';
import Breadcrumb from '../components/Breadcrumb'; // Adjust the path if the Breadcrumb component is in a different folder

const Page = () => {
  // Define breadcrumb items
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/library', label: 'Library' },
    { href: '/data', label: 'Data' },
  ];

  return (
    <div>
      {/* Include the Breadcrumb component and pass the items as a prop */}
      <Breadcrumb items={breadcrumbItems} size="medium" custom={true} type="medium" />

      {/* Rest of your page content */}
      <h1>Library</h1>
      <p>Please Welcome</p>
    </div>
  );
};

export default Page;
