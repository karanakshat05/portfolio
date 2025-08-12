import React from "react";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4qe-TiNdb7kONl0a1C3a1R3H9TPWKSJeGg&s" },
        { name: "BootStrap", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqwnOIkb9q-b1M5qgAtaBhfUzkinUA2MSuA&s" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
            name: "Django",
            icon: "https://datascientest.com/en/files/2023/05/django1.jpg",
          },
          {
              name: "Flask",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
            },
          {
            name: "SQL",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY96BPkBqp2Z_gQdUVHpNh38YPdgP28F00yg&s",
          },
          {
            name: "Python",
            icon:
              "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
          },
          {
            name: "MySQL",
            icon:
              "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
          },
      ],
    },
    {
      category: "Machine Learning",
      skills: [
        { name: "Pytorch", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBwo70v-oZ0qGHyoUni1RLYCWg4REUz7znw&s" },
        { name: "Tensorflow", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOYXGizfi4kGTV5dpLRgJwHh-YcY18pEYlw&s" },
        { name: "Keras", icon: "https://victorzhou.com/static/c309c4c6a7bbdb43cf1f290786ce47ab/39600/keras-logo.png" },
        { name: "Scikit-learn", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6yrOw84wR4bNZNJWdKrY6VDMfn_FrAOBJw&s" },
        { name: "Pandas", icon: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png" }, 
        { name: "Numpy", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRC2C9EVtvZjW_wQ3f9bEP2Fgla230C3kVYQ&s" },
        { name: "OpenCv", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cV6JpoCif27ekKZfeQVOkdLFZBEyNes4cw&s" }
      ],
    },
    {
        category: "Others",
        skills: [
            {
                name: "Git",
                icon:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlNcQUZyQR5rJ4gHKUUuvWw_68oqmXdz89w&s",
              },
              {
                name: "GitHub",
                icon:
                  "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
              },
              {
                name: "Docker",
                icon:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
              },
              {
                name: "Matlab",
                icon:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjv2R2xE23DOq6C9EZkgvLeyGWrdZUEm8tw&s",
              },
              {
              name: "AWS",
              icon:
                "https://miro.medium.com/v2/resize:fit:500/1*2STZmGfuaBZEACgUTTJzeg.png",
            },
              
        ],
      },
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-16 lg:px-32">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <p className="text-center text-lg mb-16">
          Here are some of my skills on which I have been working on for the past 3 years.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:rotate-2 hover:shadow-2xl"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-center mb-6">{category.category}</h3>
              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-700 p-4 rounded shadow-md hover:bg-gray-600 transition-all"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                    <p className="text-xs mt-2 text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
               