import { db } from '@/service/firebaseConfig';
import { collection, getDocs, where, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrips();
  }, []);

  // Fetch all user trips from Firestore
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigate('/');
      return;
    }

    const q = query(
      collection(db, 'AITrips'),
      where('userEmail', '==', user?.email)
    );
    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      setUserTrips((prevVal) => [...prevVal, { ...doc.data(), id: doc.id }]);
    });
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-10">
      <h2 className="font-bold text-3xl mb-6">My Trips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userTrips.length > 0
          ? userTrips.map((trip, index) => (
              <UserTripCardItem key={index} trip={trip} />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-[220px] w-full bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default MyTrips;
