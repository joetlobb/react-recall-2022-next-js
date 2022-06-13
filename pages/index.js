import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://s3-us-west-2.amazonaws.com/cdn.panda-gossips.com/production/posts/eyecatches/000/005/789/original.jpg?1581084857",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://s3-us-west-2.amazonaws.com/cdn.panda-gossips.com/production/posts/eyecatches/000/005/789/original.jpg?1581084857",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
