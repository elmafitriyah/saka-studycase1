import React from 'react';
import Breadcrumb from '../components/breadcrumbs/Breadcrumb'; // Adjust the path if needed
import Toasts from '../components/toasts/Toast'
import Modal from '../components/modals/Modal';
import Toast from '../components/toasts/Toast';

const Page = () => {
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/library', label: 'Product' },
    { label: 'T-Shirt' }
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      {/* Rest of your page content */}
      <h1>Library</h1>
      <p>Please Welcome</p>
      <Modal isOpen={undefined} onClose={undefined} title={undefined} children={undefined}></Modal>
      <Toast type={undefined} title={undefined} message={undefined} timeAgo={undefined} size={undefined}></Toast>
    </div>
  );
};

export default Page;