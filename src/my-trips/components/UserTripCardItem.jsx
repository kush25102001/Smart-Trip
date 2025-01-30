import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        '{NAME}',
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link to={'/view-trip/' + trip?.id} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out overflow-hidden">
        <img
          src={photoUrl || '/placeholder.jpg'}
          alt={trip?.userSelection?.location?.label || 'Trip Image'}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-black font-semibold text-lg truncate">
            {trip?.userSelection?.location?.label}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {trip?.userSelection?.noOfDays} Days trip with{' '}
            {trip?.userSelection?.budget} Budget
          </p>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
