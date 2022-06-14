import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://s3-us-west-2.amazonaws.com/cdn.panda-gossips.com/production/posts/eyecatches/000/005/789/original.jpg?1581084857"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    // if fallback true: others page not supported will be generated from the server
    // if fallback false: it means that we have declared all support paths
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://s3-us-west-2.amazonaws.com/cdn.panda-gossips.com/production/posts/eyecatches/000/005/789/original.jpg?1581084857",
        id: "m1",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "The meetup description",
      },
    },
  };
};

export default MeetupDetails;
