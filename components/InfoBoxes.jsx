import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading='Discover New Worlds'
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
            AI Buildings only possible in dreams.
          </InfoBox>
          <InfoBox
            heading='Create New AI Properties'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: 'Add Property',
              link: '/properties/add',
              backgroundColor: 'bg-blue-500',
            }}
          >
            Use your creativity and make a new fantasy AI Property.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
