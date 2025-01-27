export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "🛩️",
    people: "1",
  },

  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2 People",
  },

  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏠",
    people: "3 to 5 People",
  },

  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "👬",
    people: "5 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "cheap",
    desc: "Stay conscious of costs",
    icon: "🪙",
  },

  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "💵",
  },
];

export const AI_Prompt ="Generate a travel plan for the location: {location}, for {totalDays} days for {traveler} with a {budget} budget. Provide a list of hotel options including the hotel name, hotel address, price, hotel image URL, geo coordinates, rating, and descriptions. Then, suggest an itinerary with the following details for each day in an array format:- day (as a number from 1 to {totalDays}),- activities (as an array of objects for each activity),- each activity should contain:- placeName- placeDetails- placeImageUrl- geoCoordinates (latitude and longitude)- ticketPricing- timeTravel (from the previous activity or starting point)- bestTimeToVisit for each day.Return the data in JSON format with itinerary as an array, where each day is an object in the array";
