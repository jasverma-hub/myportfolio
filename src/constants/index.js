import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    sql,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    aws,
    college,
    neurosecdata,
    seadnxt,
    hcltech,
    youtube,
    uber,
    blockchain,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Engineer/Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Engineer",
      company_name: "Neurosecdata",
      icon: neurosecdata,
      iconBg: "#E6DEDD",
      date: "April 2024 - Present",
      points: [
        "Developing, maintaining, and enhancing software applications and solutions.",
        "Collaborating with cross-functional teams to design and implement software solutions that meet client requirements.",
        "Participating in code reviews and providing constructive feedback to peers.",
        "Keeping abreast of the latest trends and best practices in Python/ReactJS development.",
      ],
    },
    {
      title: "Technical Manager",
      company_name: "SeadNXT",
      icon: seadnxt,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Apr 2024",
      points: [
        "Led Seadnxt Android app development, prioritizing seamless user experience and broad device compatibility.",
        "Collaborated with Android developers and UI/UX designers, achieving 25% higher user engagement and 20% better app performance.",
        "Conducted rigorous testing for compatibility across Android OS versions and devices, ensuring smooth functionality.",
        "Managed all aspects of app content, balancing both theoretical and technical components.",
        "Ensured content alignment with app objectives, enhancing user understanding and engagement.",
      ],
    },
    {
      title: "Technical Analyst",
      company_name: "HCLTech",
      icon: hcltech,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Nov 2023",
      points: [
        "Implemented an automated email chaser system for the Change Management Cycle using Python and SMTP protocol.",
        "Created scripts for report generation using Python which were used for internal auditing and compliance.",
        "Designed and implemented a Tableau dashboard for real-time monitoring of training completed by new joiners.",
        "Upgraded multiple PHP legacy applications to modern Django-based systems with additional functionalities.",
      ],
    },
    {
      title: "Software Research Intern",
      company_name: "SSJCET",
      icon: college,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2022",
      points: [
        "Designed a comprehensive pipeline employing WGAN architecture to classify genuine and counterfeit photos.",
        "Attained a remarkable 93% precision in distinguishing authentic from forged images via an innovative integration of CNN and discriminator models.",
        "Collaborated with a cross-functional team to streamline the pipeline, fine-tuning hyperparameters, and venture into uncharted territories to expand the realm of image generation and classification.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Youtube Analysis",
      description:
        "This project aims to securely manage, streamline, and perform analysis on the structured and semi-structured YouTube videos data based on the video categories and the trending metrics.",
      tags: [
        {
          name: "python",
          color: "yellow-blue-gradient",
        },
        {
          name: "sql",
          color: "green-gradient",
        },
        {
          name: "aws",
          color: "orange-black-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/jasverma-hub/Youtube_Analysis_DataEngineering_Project",
    },
    {
      name: "Uber Data Analytics",
      description:
        "The goal of this project is to perform data analytics on Uber data using various tools and technologies, including GCP Storage, Python, Compute Instance, Mage Data Pipeline Tool, BigQuery, and Looker Studio.",
      tags: [
        {
          name: "python",
          color: "yellow-blue-gradient",
        },
        {
          name: "mageAI",
          color: "green-pink-gradient",
        },
        {
          name: "gcp",
          color: "red-blue-yellow-gradient",
        },
      ],
      image: uber,
      source_code_link: "https://github.com/jasverma-hub/Uber_Etl_Pipeline_End_to_End_Data_Engineering_Project",
    },
    {
      name: "Blockchain Services",
      description:
        "The goal of this project is to develop a blockchain-based system for secure cloud computing services and implementing a transparent and secure system for recording digital asset transactions.",
      tags: [
        {
          name: "java",
          color: "red-blue-gradient",
        },
        {
          name: "web3",
          color: "violet-gradient",
        },
        {
          name: "javascript",
          color: "yellow-gradient",
        },
      ],
      image: blockchain,
      source_code_link: "https://github.com/jasverma-hub/Blockchain_as_a_Platform_for_Cloud_Computing_Services",
    },
  ];
  
  export { services, technologies, experiences, projects };