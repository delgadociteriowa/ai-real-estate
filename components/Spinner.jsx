'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  dislay: 'block',
  margin: '100px auto',
};

const Spinner = () => {
  return (
    <ClipLoader
      color='#7FFFD4'
      cssOverride={override}
      size={150}
      aria-label='Loading Spinner'
    />
  );
};

export default Spinner;
