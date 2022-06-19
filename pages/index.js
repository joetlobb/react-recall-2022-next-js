import { MongoClient } from "mongodb";
import { mongoUser, mongoPassword } from "./api/mongodb";
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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// this is Static Generation, async is allow, nextjs will look for this func
// with this reserved name to fetch data before return this component
// only allowed in pages component (inside pages folder)
// client will not see but the server will provide since production build process
export const getStaticProps = async () => {
  // fetch data from a server, the code inside getStaticProps will not be exposed to user
  // it is safe to put credentials here but for github, the code is store in seperate file.

  const client = await MongoClient.connect(
    `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.gdiyk.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // this property will regenerate this page in seconds,
    // so this page will never be older than 1 second
    revalidate: 1,
  };
};

// // another approach is Server Side Rendering SSR, this will generate the page
// // in every request, it also provide request and respond for authentication
// // it is a disadvantage if we do not require such feature because it will be
// // slower than SSG
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from server
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// };

export default HomePage;
