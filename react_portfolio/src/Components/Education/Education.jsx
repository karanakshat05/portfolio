import React from "react";

const Education = () => {
  return (
    <div id="Education" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Education</h1>
      <div>
        {/* NIT Arunachal Pradesh */}
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all">
          <img
            src="https://www.nitap.ac.in/assets/logo_big.jpg"
            alt="NIT Arunachal Pradesh Logo"
            className="w-16 h-16 object-contain rounded-lg"
          />
          <span className="text-white">
            <h2 className="leading-tight">National Institute of Technology, Arunachal Pradesh</h2>
            <p className="text-sm leading-tight font-thin">B.Tech in Mechanical Engineering |   2022 - 2026 </p>
            <ul className="text-sm p-2">
              <li>- CGPA: 8.08</li>
            </ul>
          </span>
        </div>

        {/* XYZ High School */}
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all">
          <img
            src="https://yt3.ggpht.com/a/AATXAJzYDuxBfxfiXxVgUr-8dAs8XO9Bigvi1JxsIg=s900-c-k-c0xffffffff-no-rj-mo"
            alt="High School Logo"
            className="w-16 h-16 object-contain rounded-lg"
          />
          <span className="text-white">
            <h2 className="leading-tight">ROS PUBLIC SCHOOL, SITAMARHI</h2>
            <p className="text-sm leading-tight font-thin">Higher Secondary Education | 2019 - 2021</p>
            <ul className="text-sm p-2">
              <li>- AISSCE by CBSE</li>
              <li>- Achieved 78% in board examinations</li>
            </ul>
          </span>
        </div>

        {/* ABC Secondary School */}
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all">
          <img
            src="https://media.belurmath.org/wp-content/uploads/2018/12/Ramakrishna-Mission-Logo-Color-PNG-512-x-512.png"
            alt="Secondary School Logo"
            className="w-16 h-16 object-contain rounded-lg"
          />
          <span className="text-white">
            <h2 className="leading-tight">RAMAKRISHNA MISSION VIDYAPITH, DEOGHAR</h2>
            <p className="text-sm leading-tight font-thin">Secondary Education | 2017 - 2019 </p>
            <ul className="text-sm p-2">
              <li>- AISSE by CBSE</li>
              <li>- Achieved 93% in board examinations</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
