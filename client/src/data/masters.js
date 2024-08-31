const masters = [
    {
      title: "Master of Science in Computer Science (MSCS)",
      description: "Advanced studies in computer science, including algorithms, machine learning, and artificial intelligence.",
      image: "https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1677625697/ComputerScience.org/computer-science-organizations-for-asian-americans/computer-science-organizations-for-asian-americans.jpg?_i=AA", // Replace with actual image path
      link: "/programs/computer-science-mscs",
      courseList: [
        "Advanced Algorithms",
        "Machine Learning",
        "Artificial Intelligence",
        "Data Structures",
        "Software Engineering"
      ]
    },
    {
      title: "Master of Information Technology (MIT)",
      description: "Focuses on advanced IT management, system architecture, and networking.",
      image: "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1081869346.jpg?itok=aBlpXTJR", // Replace with actual image path
      link: "/programs/information-technology-mit",
      courseList: [
        "IT Management",
        "System Architecture",
        "Networking",
        "Database Systems",
        "IT Project Management"
      ]
    },
    {
      title: "Master of Data Science (MDS)",
      description: "Advanced data analysis, machine learning, and big data technologies.",
      image: "https://onlinedegrees.sandiego.edu/wp-content/uploads/2022/08/Data-Science-vs.-Software-Engineering-scaled.jpg", // Replace with actual image path
      link: "/programs/data-science-mds",
      courseList: [
        "Data Analysis",
        "Big Data Technologies",
        "Machine Learning",
        "Statistical Analysis",
        "Data Visualization"
      ]
    },
    {
      title: "Master of Software Engineering (MSWE)",
      description: "Focuses on software development methodologies, software project management, and system design.",
      image: "https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds", // Replace with actual image path
      link: "/programs/software-engineering-mswe",
      courseList: [
        "Software Development Methodologies",
        "Software Project Management",
        "System Design",
        "Software Quality Assurance",
        "Agile Development"
      ]
    },
    {
      title: "Master of Mathematics (MMath)",
      description: "Advanced studies in mathematical theory, applications, and research.",
      image: "https://www.kdnuggets.com/wp-content/uploads/math-chalkboard-header-scaled.jpg", // Replace with actual image path
      link: "/programs/mathematics-mmath",
      courseList: [
        "Advanced Algebra",
        "Complex Analysis",
        "Mathematical Research",
        "Numerical Methods",
        "Differential Equations"
      ]
    },
    {
      title: "Master of Physics (MPhys)",
      description: "Focuses on advanced topics in physics, such as quantum mechanics and relativity.",
      image: "https://media.istockphoto.com/id/936903524/vector/blackboard-inscribed-with-scientific-formulas-and-calculations-in-physics-and-mathematics-can.jpg?s=612x612&w=0&k=20&c=sRLsJbHUVOYvZ_M16hti4fF9NM0RysfjAPUQrCJ8o4U=", // Replace with actual image path
      link: "/programs/physics-mphys",
      courseList: [
        "Quantum Mechanics",
        "Relativity",
        "Statistical Mechanics",
        "Particle Physics",
        "Experimental Physics"
      ]
    },
    {
      title: "Master of Electrical Engineering (MSEE)",
      description: "Advanced study in electrical engineering, focusing on areas like power systems, telecommunications, and control systems.",
      image: "https://importanceoftechnology.net/wp-content/uploads/2021/05/Importance-Of-Technology-In-Electrical-Engineering.jpg", // Replace with actual image path
      link: "/programs/electrical-engineering-msee",
      courseList: [
        "Power Systems",
        "Telecommunications",
        "Control Systems",
        "Signal Processing",
        "Microelectronics"
      ]
    },
    {
      title: "Master of Mechanical Engineering (MSME)",
      description: "Advanced study in mechanical engineering, focusing on robotics, thermal systems, and materials science.",
      image: "https://media.licdn.com/dms/image/D4D12AQEX7UIsfWeeSQ/article-cover_image-shrink_720_1280/0/1676291348686?e=2147483647&v=beta&t=FAXQPYUkYNuOSaEJ3NQlGFBv70T7mIv87zWKQvq6ONw", // Replace with actual image path
      link: "/programs/mechanical-engineering-msme",
      courseList: [
        "Robotics",
        "Thermal Systems",
        "Materials Science",
        "Mechanical Design",
        "Manufacturing Processes"
      ]
    },
    {
      title: "Master of Biotechnology (MBiotech)",
      description: "Advanced study in biotechnology applications, including genetic engineering and bioinformatics.",
      image: "https://cdn.ourcrowd.com/wp-content/uploads/2023/11/What-is-Biotechnology-652x369.png", // Replace with actual image path
      link: "/programs/biotechnology-mbiotech",
      courseList: [
        "Genetic Engineering",
        "Bioinformatics",
        "Biotechnology Applications",
        "Molecular Biology",
        "Pharmaceutical Biotechnology"
      ]
    },
    {
      title: "Master of Environmental Science (MES)",
      description: "Advanced study in environmental policy, sustainability, and ecological research.",
      image: "https://www.northcentralcollege.edu/sites/default/files/styles/full_image_large/public/2021-07/environmental-studies-banner-2.jpg?h=a1e1a043&itok=VVrlnK0p", // Replace with actual image path
      link: "/programs/environmental-science-mes",
      courseList: [
        "Environmental Policy",
        "Sustainability",
        "Ecological Research",
        "Climate Change",
        "Environmental Impact Assessment"
      ]
    },
    {
      title: "Master of Chemistry (MScChem)",
      description: "Focuses on advanced chemical research, materials science, and chemical engineering.",
      image: "https://cdn.mos.cms.futurecdn.net/hWwaGzycL8ir7bN9qNNWn4.jpg", // Replace with actual image path
      link: "/programs/chemistry-mscchem",
      courseList: [
        "Materials Science",
        "Chemical Engineering",
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Chemical Research"
      ]
    },
    {
      title: "Master of Information Systems (MIS)",
      description: "Advanced study in the management of information systems, IT strategy, and business process management.",
      image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3AmsNeMmdIUytvhtu8ePPX/92e66e4f3ec1ed931a4d4ecaec27b029/GettyImages-551986071.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000", // Replace with actual image path
      link: "/programs/information-systems-mis",
      courseList: [
        "IT Strategy",
        "Business Process Management",
        "Systems Management",
        "Data Management",
        "Enterprise Architecture"
      ]
    },
    {
      title: "Master of Applied Mathematics (MAppMath)",
      description: "Advanced studies in the application of mathematical models and techniques to solve complex problems.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyk_YjJetScFhKUZZ-BATL0G15TFdCiwT50Q&usqp=CAU", // Replace with actual image path
      link: "/programs/applied-mathematics-mappmath",
      courseList: [
        "Mathematical Modeling",
        "Optimization Techniques",
        "Applied Statistics",
        "Computational Mathematics",
        "Operations Research"
      ]
    },
    {
      title: "Master of Cybersecurity (MScCyber)",
      description: "Focuses on advanced cybersecurity principles, risk management, and cyber threat analysis.",
      image: "https://valenta.io/wp-content/uploads/2022/05/Cyber-Security-Engineer.png", // Replace with actual image path
      link: "/programs/cybersecurity-msccyber",
      courseList: [
        "Cyber Threat Analysis",
        "Risk Management",
        "Cryptography",
        "Network Security",
        "Ethical Hacking"
      ]
    },
    {
      title: "Master of Robotics Engineering (MRobotics)",
      description: "Advanced study in the design and development of robotic systems, AI, and automation.",
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_To_Become_A_Robotics_Engineer.jpg", // Replace with actual image path
      link: "/programs/robotics-engineering-mrobotics",
      courseList: [
        "Robotic Systems Design",
        "Artificial Intelligence",
        "Automation",
        "Control Systems",
        "Human-Robot Interaction"
      ]
    }
  ];
  
  export default masters;
  