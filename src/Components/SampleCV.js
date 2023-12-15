import { v4 as uuidv4 } from "uuid";
import Image from "../Image/Daniel.JPG";

const CV = {
    color1: "rgb(91, 205, 188)",
    color2: "rgb(100, 277, 104)",
    firstName: "Daniel",
    lastName: "Mitchell",
    title: "Front-End Developer",
    image: Image,
    description: "Versatile, personable professional with a Bachelor of Science in IT from Central Washington University prepared to apply web development, project management, and client relations skills to a career in web design. Proven track record of identifying and addressing all unique project requirements to produce aesthetic deliverables and maximize customer satisfaction. Sought for superb analytical skills, able to engineer user-friendly, fully functional websites and software through iterative improvements. Out-of-the-box thinker comfortable working in teams or independently to ensure solutions consistently meet or exceed project goals. Demonstrative experience using a variety of technology tools, including WordPress, JavaScript, and React to deliver innovative results. Exceptionally dedicated professional with keen interpersonal, communication, and organizational skills.",
     school: "Central Washington Univeristy",
     degree: "Information Technology with a specilization in Web and Database Management.",
     skills: [
        {
        name: "React",
        id: uuidv4(),
        },
        {
         name: "Github",
         id: uuidv4(),
        },
        {
        name: "HTML5",
        id: uuidv4(),
        },
        {
         name: "CSS3",
         id: uuidv4(),
        },
       ],
        experience: [
      {
       id: uuidv4(),
       description: "",
       position: "Computer Science Teacher",
       company: "Yellow Wood Academy",
       startDate: "2023",
       endDate: "Present",
       responsibilities: "Taught HTML, CSS, jQuery, JavaScript, Python, Java, and Scratch to students from the ages of 12 to 18.	Responsible for developing interactive and interesting lesson plans based on the school’s approved curriculum. Consulted with Yellow Wood Academy to help redesign the school’s website, resulting in a 40 percent increase in website views.",
       school: "",
       degree: "",
      }, 
      {
       name: "",
       id: uuidv4(),
       position: "Full Stack Developer",
       company: "Microsoft offices located in Redmond",
       startDate: "2021",
       endDate: "2023",
       responsibilities: "Developed user interfaces with modern JavaScript frameworks, HTML5, CSS3, which improved user satisfaction by 30% Developed object-oriented code in TypeScript with 100% accordance to industry and company standards.Learned CSS frameworks to create accessible, responsive, and functional user interfaces to allow visitors on any device to have the same perfect user experience."

      }
     ],


     address: "423 Terry Avenue",
     email: "mitchelldaniel426@gmail.com",
     phone: "4254999165",
     link: "https://www.linkedin.com/in/daniel-f-mitchell/"
}

export default CV
