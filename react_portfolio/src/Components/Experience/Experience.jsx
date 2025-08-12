import React from "react";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div>
        {/* TestAIng Solutions */}
        <div className="flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all">
          <img
            src="https://media.licdn.com/dms/image/v2/C510BAQExe5Cr2XEgmQ/company-logo_200_200/company-logo_200_200/0/1630565934368/testaing_logo?e=2147483647&v=beta&t=-s884AAxQGtTXIbjW_4voEwv8EJl6tf-XS5S-qRypSY"
            alt="TestAIng Logo"
            className="w-12 h-12 object-contain rounded-md" // Reduced size
          />
          <span className="text-white">
            <h2 className="leading-tight">TestAIng Solutions Pvt Ltd</h2>
            <p className="text-sm leading-tight font-thin">Jun 2024 - Aug 2024</p>
            <ul className="text-sm p-2">
              <li>- Worked as Machine Learning Engineer Intern</li>
              <li>- Conducted in-depth analysis of dimension tables to identify primary and foreign key columns in fact tables by calculating unique ratios, leveraging Pearson correlation, cosine similarity (for numerical data), and Jaccard similarity and Chi-square statistics (for categorical data), optimizing schema design. </li>
              <li>- Acquired expertise in CTGAN, TVAE, and Variational Autoencoders (VAE) for generating high-quality synthetic tabular data, performing correlation analysis, and ensuring comparable model accuracy with real datasets. Integrated VAE with GANs, reducing training time by 15% and improving performance on tabular data.</li>
            </ul>
          </span>
        </div>

        {/* IIT Bhilai */}
        <div className="flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/61/IIT_Bhilai_logo.png"
            alt="IIT Bhilai Logo"
            className="w-12 h-12 object-contain rounded-md" // Reduced size
          />
          <span className="text-white">
            <h2 className="leading-tight">Indian Institute of Technology, Bhilai</h2>
            <p className="text-sm leading-tight font-thin">Jun 2024 - Jul 2024</p>
            <ul className="text-sm p-2">
              <li>- Worked on ML Research Internship</li>
              <li>- Developed a deep learning framework for road anomaly detection using semantic segmentation, uncertainty estimation, and dissimilarity detection. Optimized model parameters through data analysis, improving detection accuracy by 10% across various road surfaces.
              </li>
            </ul>
          </span>
        </div>

        {/* North East Renewable Energy Research Lab */}
        <div className="flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7A_l0KSZiFZXD8BnzCEGKSPxceU0rXYmcw&s"
            alt="nererl logo"
            className="w-12 h-12 object-contain rounded-md" // Reduced size
          />
          <span className="text-white">
            <h2 className="leading-tight">NORTH EAST RENEWABLE ENERGY RESEARCH LAB</h2>
            <p className="text-sm leading-tight font-thin">Dec 2023 - Jan 2024</p>
            <ul className="text-sm p-2">
              <li>- Worked on ML Research Internship</li>
             
              <li>- Designed and developed an advanced underwater ROV (Remotely Operated Vehicle) tailored for efficient garbage collection in aquatic environments, addressing environmental cleanup challenges in submerged ecosystems.</li>
              <li>- Integrated state-of-the-art imaging and sensing technologies, enabling the ROV to navigate complex underwater terrains with precision, avoid obstacles intelligently, and ensure effective and targeted waste collection.</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
