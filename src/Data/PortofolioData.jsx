import bookingImg from "../images/booking-app.png";
import dashboard from "../images/Dashboard.png";
import actorFinder from "../images/ActorFinder.png";
import socialMedia from "../images/socialMedia.png";

export const portfolios = [
  {
    id: 1,
    category: "CSS",
    image: bookingImg,
    link1: "https://github.com/ludinj/Boking-app",
    title: "Hotel Booking app",
    text: "Created with React.js, SASS and Express.js in the back end",
  },
  {
    id: 2,
    category: "JavaScript",
    image: dashboard,
    link1: "https://github.com/ludinj/Responsive-Dashboard",
    title: "Responsive Admin Dashboard",
    text: "A responsive dashboard build with React.js and SASS",
  },

  {
    id: 3,
    category: "Animation",
    image: actorFinder,
    link1: "https://github.com/ludinj/actor-finder",
    title: "App to find info about an Actor",
    text: "Upload an image of an actor an get his information",
  },

  {
    id: 4,
    category: "React JS",
    image: socialMedia,
    link1: "https://github.com/ludinj/Social-media-app",
    title: "Social Media app",
    text: "Created using React.js, SASS and Express.js",
  },
];
