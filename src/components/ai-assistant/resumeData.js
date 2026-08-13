export const RESUME_DATA = {
  name: "DARAPUREDDY DEVENDRA KUMAR",

  phone: "+91 8341695598",

  email: "darapureddydevendra13579@gmail.com",

  linkedin: "LinkedIn",

  location: "India",

  summary:
    "AI Developer with 1+ year of experience designing and deploying intelligent automation and NLP-driven systems using Python, FastAPI, and modern AI frameworks. Hands-on experience building real-world solutions involving embeddings, resume intelligence, API-driven automation, computer vision, and deep learning. Strong foundation in Large Language Models (LLMs), including GPT-based architectures, with experience integrating AI into backend systems. Passionate about solving complex business problems through automation, AI, and data-driven solutions.",

  certifications: [
    {
      title: "IEEE SSL/TLS Technical Workshop",
      issuer: "IEEE Student Branch (2023)",
      details:
        "Comprehensive technical training on Secure Sockets Layer (SSL) and Transport Layer Security (TLS) cryptographic protocols, public key infrastructure, and secure network encryption."
    },

    {
      title: "Tech Triumph 1.0 Hackathon",
      issuer: "Department of Computer Science (2023)",
      details:
        "Participated in a high-intensity hackathon building rapid AI prototypes, developing backend logic, and presenting working software solutions under strict time constraints."
    },

    {
      title: "Python & Machine Learning Foundations",
      issuer: "Academic Certification (2023)",
      details:
        "Hands-on certification covering core Python programming, data manipulation with Pandas and NumPy, supervised learning models, and model evaluation metrics."
    },

    {
      title: "Business Analysis Internship Certification",
      issuer: "Outlook Publishing India Pvt. Ltd. (Apr 2024 - Jul 2024)",
      details:
        "Official certificate of internship completion from Outlook Publishing India Pvt. Ltd. Recognized for conducting market research, data visualization dashboards, and requirements analysis."
    }
  ],

  technicalSkills: {
    largeLanguageModels: [
      "GPT-3.5/4 (OpenAI APIs)",
      "OLLAMA",
      "LLM Integration",
      "Prompt Engineering"
    ],

    programming: [
      "Python",
      "Java",
      "C/C++",
      "HTML",
      "CSS"
    ],

    aiMl: [
      "NLP",
      "Machine Learning",
      "Deep Learning",
      "Embeddings",
      "Computer Vision"
    ],

    cloudAndDatabases: [
      "AWS (EC2, S3, IAM)",
      "PostgreSQL",
      "MySQL"
    ],

    tools: [
      "Git",
      "Postman",
      "Power BI",
      "Tableau",
      "VS Code",
      "PyTorch",
      "FastAPI",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn"
    ]
  },

  workExperience: [
    {
      role: "Associate Python Developer",
      company: "Infologitech",
      duration: "Nov 2024 - Present",
      location: "Hyderabad, India",

      bullets: [
        "Developed LinkedIn workflow automation with OAuth authentication, automated posting, and image uploading.",
        "Built an AI Resume Scoring System using FastAPI, NLP, semantic embeddings, and structured scoring logic.",
        "Implemented GitHub automation for repository creation, project uploads, and secure token-based operations.",
        "Performed Postman API testing to validate request flows and automation reliability.",
        "Improved backend architecture through better error handling, validation, and modular code structure.",
        "Worked on multi-vendor automation workflows with secure token management."
      ]
    },

    {
      role: "Business Analyst Intern",
      company: "Outlook Publishing India Pvt. Ltd.",
      duration: "Apr 2024 - Jul 2024",
      location: "Remote",

      bullets: [
        "Conducted detailed market research and competitive analysis to support business strategy and content planning.",
        "Created dashboards and analytical reports using Power BI, Tableau, and Excel.",
        "Worked on data cleaning, formatting, and insights extraction for editorial and marketing teams.",
        "Documented workflows, prepared requirement specifications, and participated in stakeholder discussions."
      ]
    }
  ],

  /*
   * IMPORTANT:
   * Keep all six major projects together here.
   * This gives the AI one authoritative project list.
   */
  projects: [
    {
      title: "Bone Deformity & Fracture Detection",
      subtitle: "YOLOv9 Deep Learning & Medical Image Detection",

      technologies: [
        "YOLOv9",
        "YOLOv8",
        "EfficientNet B0",
        "VGG16",
        "MobileNetv3",
        "PyTorch",
        "Python"
      ],

      bullets: [
        "Preprocessed a curated medical dataset of 4,083 bone X-rays consisting of fractured and non-fractured images.",
        "Benchmarked multiple deep learning architectures including EfficientNet B0 and VGG16 against YOLO object detection models.",
        "Implemented YOLOv9 using the gelan-c architecture with 621 layers, 25.4M parameters, and 103.2 GFLOPs.",
        "Achieved 77% mAP@50 for fracture bounding-box localization.",
        "Optimized inference latency to approximately 2.0ms per X-ray image.",
        "Evaluated training losses across 100 epochs to reduce overfitting on low-contrast grayscale medical imagery."
      ]
    },

    {
      title: "Glaucoma Detection",
      subtitle: "Deep Learning & Medical Image Classification",

      technologies: [
        "Python",
        "CNN",
        "VGG16",
        "LSTM",
        "Bi-LSTM",
        "TensorFlow",
        "PyTorch",
        "NumPy"
      ],

      bullets: [
        "Prepared glaucoma fundus image datasets using preprocessing and normalization techniques.",
        "Developed deep learning models including CNN, VGG16, LSTM, and Bi-LSTM for glaucoma disease classification.",
        "Trained and tuned deep learning models to improve classification performance.",
        "Evaluated model performance using F1-score.",
        "Used Python with TensorFlow, PyTorch, and NumPy throughout the machine learning workflow."
      ]
    },

    {
      title: "Underwater Image Detection",
      subtitle: "YOLOv8 Object Detection & Deep Learning",

      technologies: [
        "Python",
        "YOLOv8",
        "PyTorch",
        "TensorFlow",
        "NumPy",
        "Pandas",
        "Matplotlib"
      ],

      bullets: [
        "Built a marine-life detection system using YOLOv8 for underwater species identification.",
        "Performed dataset annotation, cleaning, and preprocessing for model training.",
        "Trained and fine-tuned the detection model using augmentation techniques for low-visibility underwater environments.",
        "Evaluated detection performance using mAP, IoU, precision, and recall metrics."
      ]
    },

    {
      title: "AI Resume Scoring System",
      subtitle: "FastAPI, NLP & Semantic Embeddings",

      technologies: [
        "Python",
        "FastAPI",
        "NLP",
        "Semantic Embeddings",
        "PostgreSQL"
      ],

      bullets: [
        "Built an AI-powered resume scoring system using FastAPI, NLP, and semantic embeddings.",
        "Implemented structured scoring logic for evaluating candidate information.",
        "Developed backend APIs for processing and scoring resume data.",
        "Worked with semantic representations to improve resume-to-requirement matching."
      ]
    },

    {
      title: "LinkedIn & GitHub Workflow Automation",
      subtitle: "Python Automation, OAuth & API Integration",

      technologies: [
        "Python",
        "OAuth",
        "REST APIs",
        "LinkedIn APIs",
        "GitHub APIs"
      ],

      bullets: [
        "Developed LinkedIn workflow automation using OAuth authentication.",
        "Automated LinkedIn posting and media uploads.",
        "Implemented GitHub automation for repository creation and project uploads.",
        "Built secure token-based automation workflows for external platform integrations."
      ]
    },

    {
      title: "Cloud-Based Cab Hiring System",
      subtitle: "AWS Cloud Deployment",

      technologies: [
        "HTML",
        "CSS",
        "PHP",
        "AWS EC2",
        "AWS S3",
        "AWS IAM"
      ],

      bullets: [
        "Developed a complete cab-booking platform with login, booking flow, and ride-status features.",
        "Built backend logic in PHP for fare calculation, booking workflows, and validation.",
        "Deployed the application using AWS EC2.",
        "Used AWS S3 for storage and AWS IAM for secure role management."
      ]
    }
  ],

  education: {
    degree: "B.Tech - Computer Science & Engineering",
    institution: "Amrita Vishwa Vidyapeetham",
    duration: "2020-2024"
  },

  achievements: [
    "Recognized for performance in 2025 during automation development at Infologitech."
  ]
};