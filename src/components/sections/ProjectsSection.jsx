import React, { useState } from 'react';

// Import local images from assets folder
import underwaterImg from '../../assets/underwater.png';
import cabHiringImg from '../../assets/cab-hiring.png';
import glaucomaImg from '../../assets/glaucoma.png';
import resumeScoringImg from '../../assets/resume-scoring.png';
import boneDeformityImg from '../../assets/boneDeformity.png';

const ProjectsSection = ({ setActiveTab }) => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All Projects', 'AI / ML', 'Automation', 'Web', 'Cloud'];

  const projects = [
    {
      id: 1,
      title: 'Underwater Image Detection',
      category: 'AI / ML',
      tag: 'AI / ML',
      description:
        'Built a marine-life detection system using YOLOv8 for underwater species identification. Performed dataset annotation, preprocessing and trained the model with augmentation techniques for low-visibility environments.',
      image: underwaterImg,
      metrics: [
        { label: 'mAP@50 76.2%', icon: '🎯' },
        { label: 'Latency 1.3ms', icon: '⚡' },
        { label: '23 Classes', icon: '🐠' }
      ],
      techStack: ['YOLOv8', 'PyTorch', 'Roboflow', 'OpenCV', 'Google Colab', 'Python'],
      details: {
        problemStatement:
          'Underwater environments pose severe computer vision challenges due to color distortion, light scattering, and low visibility. Traditional multi-pass CNNs struggle to localize and classify overlapping aquatic species in real-time.',
        architectureHighlights:
          'YOLOv8 Single-Pass Network (168 layers, 11.1M parameters, 28.7 GFLOPs) vs. Baseline CNN Models (32x32 & 64x64)',
        keyFeatures: [
          'Annotated and preprocessed a Roboflow marine dataset spanning 23 distinct underwater animal classes (Dolphins, Seals, Sharks, Starfish, Jellyfish, etc.).',
          'Trained and fine-tuned a 168-layer YOLOv8 architecture (11.1M parameters, 28.7 GFLOPs), drastically outperforming traditional multi-pass CNN classifiers in multi-object aquatic environments.',
          'Applied automated bounding box coordinate normalization and CLAHE image preprocessing to counter underwater light scattering and blur.',
          'Benchmarked inference speed down to an ultra-fast 1.3ms per frame, making the pipeline suitable for real-time edge deployment on marine vehicles.',
          'Achieved an overall mAP@50 of 76.2%, with exceptional per-class precision on complex objects—highlighted by 97% precision on Starfish detection.'
        ],
        projectStatus: 'Research & Model Evaluated'
      }
    },
    {
      id: 2,
      title: 'Bone Deformity Detection',
      category: 'AI / ML',
      tag: 'AI / ML',
      description:
        'Developed an automated orthopedic diagnostic system evaluating YOLOv9, YOLOv8, VGG16, MobileNetv3, and EfficientNet for identifying bone fractures and deformities in grayscale X-ray images.',
      image: boneDeformityImg,
      metrics: [
        { label: 'mAP@50 77.0%', icon: '🎯' },
        { label: 'Latency 2.0ms', icon: '⚡' },
        { label: '4,083 X-Rays', icon: '🦴' }
      ],
      techStack: ['YOLOv9', 'YOLOv8', 'EfficientNet B0', 'VGG16', 'MobileNetv3', 'PyTorch', 'Python'],
      details: {
        problemStatement:
          'Rapid and accurate localization of bone fractures in low-contrast, noisy X-ray images is vital for emergency orthopedics. Traditional manual readings and standard CNN classifiers can suffer from latency and poor generalization across diverse anatomical regions.',
        architectureHighlights:
          'YOLOv9 Deep Detection Architecture (621 layers, 25.4M parameters, 103.2 GFLOPs) vs. Benchmark Classifiers (CNN, VGG16, MobileNetv3, EfficientNet B0)',
        keyFeatures: [
          'Preprocessed a curated medical dataset of 4,083 bone X-rays (717 fractured, 3,366 non-fractured) with automated bounding box annotations.',
          'Benchmarked multiple deep learning architectures, comparing classification baselines like EfficientNet B0 (97% accuracy) and VGG16 against single-pass YOLO object detectors.',
          'Implemented YOLOv9 (gelan-c architecture, 621 layers, 103.2 GFLOPs), achieving a 77% mAP@50 for precise fracture bounding-box localization.',
          'Optimized real-time inference latency down to 2.0ms per X-ray image, making the model clinical-ready for real-time triage assistance.',
          'Evaluated loss functions (train/box_loss, cls_loss, dfl_loss) across 100 training epochs to prevent overfitting on low-contrast grayscale imagery.'
        ],
        projectStatus: 'Clinical Dataset Evaluated'
      }
    },
    {
      id: 3,
      title: 'Glaucoma Detection',
      category: 'AI / ML',
      tag: 'AI / ML',
      description:
        'Developed deep learning models (CNN, VGG16, LSTM, Bi-LSTM) to detect glaucoma from fundus images. Applied preprocessing and normalization to improve accuracy and model performance.',
      image: glaucomaImg,
      metrics: [
        { label: 'Accuracy 92%', icon: '📈' },
        { label: 'Sensitivity 91%', icon: '📊' },
        { label: 'F1-score 0.91', icon: '⏱️' }
      ],
      techStack: ['Python', 'TensorFlow', 'Keras', 'VGG16', 'LSTM', 'Bi-LSTM', 'OpenCV'],
      details: {
        problemStatement:
          'Glaucoma is a leading cause of irreversible blindness worldwide. Manual diagnosis from retinal fundus images requires specialist expertise and is prone to human oversight in early stages.',
        architectureHighlights:
          'Transfer Learning (VGG16) + Sequential Feature Extractor (Hybrid CNN + Bidirectional LSTM)',
        keyFeatures: [
          'Preprocessed retinal fundus image datasets using OpenCV for noise reduction, CLAHE contrast tuning, and optic disc cropping.',
          'Built and evaluated multiple deep learning pipelines including baseline CNNs, pre-trained VGG16 networks, and hybrid CNN + Bi-LSTM sequential feature architectures.',
          'Leveraged Bidirectional LSTM layers to capture spatial gradient relationships across retinal cup-to-disc ratio boundaries.',
          'Achieved 92% classification accuracy, 91% sensitivity, and a 0.91 F1-score on clinical evaluation sets, significantly minimizing false-negative diagnostic risks.',
          'Optimized training batch sizes and learning rate schedulers in Keras/TensorFlow to stabilize loss convergence across high-resolution fundus scans.'
        ],
        projectStatus: 'Research & Model Benchmarked'
      }
    },
    {
      id: 4,
      title: 'Cloud-Based Cab Hiring System',
      category: 'Cloud',
      tag: 'Web / Cloud',
      description:
        'Developed a complete cab-booking platform with user authentication, booking flow, fare calculation and ride status. Deployed on AWS EC2 with S3 storage and IAM for secure role management.',
      image: cabHiringImg,
      metrics: [
        { label: 'User Auth', icon: '👤' },
        { label: 'Booking Flow', icon: '🔄' },
        { label: 'Ride Tracking', icon: '📍' },
        { label: 'Payments', icon: '💳' }
      ],
      techStack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'AWS EC2', 'AWS S3', 'AWS IAM'],
      details: {
        problemStatement:
          'Designing a simple, reliable cab booking application hosted on scalable cloud infrastructure to manage bookings, fare estimation, and media storage.',
        architectureHighlights:
          'LAMP Stack Web Application + AWS Elastic Compute Cloud (EC2) + AWS S3 Storage',
        keyFeatures: [
          'Built the web platform using PHP, HTML, CSS, and JavaScript for seamless user booking and trip history tracking.',
          'Created automated fare calculation logic based on distance metrics and ride type options.',
          'Deployed the web server on an AWS EC2 instance and configured security group firewall rules.',
          'Set up Amazon S3 buckets for storing user profile pictures and ride receipt documents securely.',
          'Configured AWS IAM users and roles to enforce safe access controls for cloud resources.'
        ],
        projectStatus: 'Deployed on AWS'
      }
    },
    {
      id: 5,
      title: 'Resume Scoring System',
      category: 'Automation',
      tag: 'NLP / Automation',
      description:
        'Built an intelligent resume scoring system using FastAPI, NLP and embeddings. Extracts key information and provides structured scoring based on skills, experience and job relevance.',
      image: resumeScoringImg,
      metrics: [
        { label: 'NLP Parsing', icon: '🔍' },
        { label: 'Embeddings', icon: '🧬' },
        { label: 'Scoring Engine', icon: '⚙️' },
        { label: 'REST API', icon: '🔗' }
      ],
      techStack: ['FastAPI', 'Python', 'PostgreSQL', 'pgVector', 'Sentence Transformers', 'NLP'],
      details: {
        problemStatement:
          'Manual candidate screening creates hiring bottlenecks. Keyword-matching systems fail to evaluate candidate experience contextually against job descriptions.',
        architectureHighlights:
          'Asynchronous FastAPI Microservice + Semantic Vector Embedding Engine + PostgreSQL (pgVector)',
        keyFeatures: [
          'Developed automated NLP document parsers to extract candidate skills, experience duration, and education background from multi-format PDFs.',
          'Implemented Sentence Transformers to convert resumes and job descriptions into high-dimensional semantic vector embeddings.',
          'Utilized PostgreSQL with the pgVector extension to execute cosine-similarity searches for contextual candidate-to-job matching.',
          'Designed a custom multi-factor scoring engine that weighs semantic keyword proximity, technical skill overlap, and domain relevance.',
          'Exposed high-throughput asynchronous REST API endpoints via FastAPI with structured JSON output for recruiter dashboard integration.'
        ],
        projectStatus: 'Production Ready Architecture'
      }
    }
  ];

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeFilter ||
            p.tag.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section id="projects" className="py-6 space-y-8 relative overflow-visible px-2 sm:px-4">
      {/* Background Soft Glow Spotlights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 relative z-10">
        <button 
          onClick={() => setActiveTab && setActiveTab('home')} 
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>›</span>
        <span className="text-blue-600 dark:text-blue-400 font-medium">Projects</span>
      </div>

      {/* Header with Gradient Accent Line */}
      <div className="space-y-2 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
          My Projects
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-1 font-normal">
          A collection of real-world projects that showcase my skills in AI, automation, backend development, and cloud technologies.
        </p>
      </div>

      {/* Filter Category Pills with Inset Padding */}
      <div className="flex flex-wrap items-center gap-2.5 relative z-10 py-1 pl-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
              activeFilter === cat
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 scale-105'
                : 'bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-300 border border-slate-200/80 dark:border-slate-700/80 hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards List */}
      <div className="space-y-6 relative z-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/50 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center cursor-pointer"
          >
            {/* Mid-Lighter Hover Shimmer Reflection Pass */}
            <div className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12 -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-1000 ease-out pointer-events-none"></div>

            {/* Accent Gradient Top Bar on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Image Container with Hover Pill Overlay Triggered on Card Hover */}
            <div className="lg:col-span-4 relative overflow-hidden rounded-2xl h-52 sm:h-60 w-full border border-slate-200/60 dark:border-slate-700/60 shadow-xs bg-slate-100 dark:bg-slate-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full flex-col items-center justify-center bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 p-4 text-center">
                <span className="text-3xl mb-1">💻</span>
                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{project.title}</span>
              </div>

              {/* Hover Pill Button Overlay - Shows when hovering ANYWHERE on the card */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="bg-blue-600 text-white font-bold text-xs px-4 py-2.5 rounded-2xl shadow-lg shadow-blue-600/40 flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Details</span>
                  <span className="text-sm">➔</span>
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug">
                  {project.title}
                </h3>
                <span className="bg-blue-50 dark:bg-slate-700/70 text-blue-600 dark:text-blue-300 text-[11px] font-semibold px-3 py-0.5 rounded-full border border-blue-100 dark:border-slate-600/60 shadow-2xs">
                  {project.tag}
                </span>
              </div>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-normal leading-relaxed">
                {project.description}
              </p>

              {/* Metrics Highlights Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {project.metrics.map((metric, idx) => (
                  <span
                    key={idx}
                    className="flex items-center space-x-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-slate-700/60 border border-blue-100 dark:border-slate-600/60 px-3 py-1 rounded-xl shadow-2xs group-hover:scale-105 transition-transform duration-200"
                  >
                    <span>{metric.icon}</span>
                    <span>{metric.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack Column */}
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-700/80 pt-4 lg:pt-0 lg:pl-6 space-y-3">
              <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>Tech Stack</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100/90 dark:bg-slate-700/70 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-1 rounded-xl border border-slate-200/60 dark:border-slate-600/60 group-hover:border-blue-300 dark:group-hover:border-blue-500/50 transition-colors duration-200 cursor-default"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recruiter-Ready Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center font-bold text-base cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Title & Category */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center space-x-3">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <span className="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 dark:border-slate-700">
                  {selectedProject.tag}
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800/80 px-3 py-1 rounded-lg">
                <span>STATUS:</span>
                <span>{selectedProject.details.projectStatus}</span>
              </div>
            </div>

            {/* Image Preview */}
            <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Problem Statement */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                📌 Problem Statement & Objective
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                {selectedProject.details.problemStatement}
              </p>
            </div>

            {/* System Architecture */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                🏗️ System Architecture
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                {selectedProject.details.architectureHighlights}
              </p>
            </div>

            {/* Key Accomplishments */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                ⚡ Key Engineering Accomplishments
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-normal">
                {selectedProject.details.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                🛠️ Technologies & Libraries
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 text-gray-800 dark:text-gray-200">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Close Button */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;