import GuessTheCountry from "../projects_images/guess-the-country.JPG";
import Photocation from "../projects_images/photocation.JPG";
import ProjectManagement from "../projects_images/project-management.JPG";
import RecipeFinder from "../projects_images/recipe-finder.JPG";
import Portfolio from "../projects_images/portfolio.JPG";
import Salvatorre from "../projects_images/salvatorre-el-briega.JPG";

const PROJECTS = [
  {
    title: "Project Management",
    description:
      "Designed and developed an application to help users organize and prioritize projects and tasks effectively. Incorporated features like deadline tracking, task description, and a to-do list mainly utilizing state management.",
    img: `${ProjectManagement}`,
    link: "https://project-management-two-rho.vercel.app/",
    gitlink: "https://github.com/aggellada/project-management",
  },
  {
    title: "PhotoCation",
    description:
      "Developed a front-end travel photography application enabling users to discover and share locations via interactive maps, markers, and popups using the Leaflet library. Integrated a Geocoding API to allow users to search for locations, seamlessly displaying them on the map.",
    img: `${Photocation}`,
    link: "https://photocation.vercel.app/",
    gitlink: "https://github.com/aggellada/photocation",
  },
  {
    title: "Recipe Finder",
    description:
      "A front-end web application for finding recipes. Used APIs to fetch recipe data, enabling users to filter their favorite meals and dishes.",
    img: `${RecipeFinder}`,
    link: "https://food-recipe-liard.vercel.app/",
    gitlink: "https://github.com/aggellada/food-recipe",
  },
  {
    title: "E-commerce Site",
    description:
      "Designed and developed the front-end of a dummy e-commerce website. Features include product listings, a shopping cart, and a checkout page. Focused on creating a user-friendly interface and responsive design to enhance the shopping experience. ",
    img: `${Salvatorre}`,
    link: "https://ecommerce-psi-pied.vercel.app/",
    gitlink: "https://github.com/aggellada/sample-ecommerce",
  },
  {
    title: "Guess the Country Game",
    description:
      "Created a two-player interactive game where both users guess the country based on provided flag images. Utilized React JS and data fetching for the front-end and implemented little animations, promoting user engagement and learning.",
    img: `${GuessTheCountry}`,
    link: "https://guess-the-country-livid.vercel.app/",
    gitlink: "https://github.com/aggellada/guess-the-country",
  },
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed my own personal portfolio showcasing my personal projects.",
    img: `${Portfolio}`,
    link: "",
  },
];

export default PROJECTS;
