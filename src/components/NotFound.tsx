import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='mb-4 text-4xl font-bold'>404 - Page Not Found</h1>
      <p className='text-lg text-gray-600'>
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
