export const RESUME_DATA = {
  name: "DARAPUREDDY DEVENDRA KUMAR",
  title: "AI ENGINEER | PYTHON DEVELOPER | MACHINE LEARNING | NLP | AUTOMATION",
  email: "darapureddydevendra13579@gmail.com",
  phone: "+91 8341695598",
  location: "India",
  portfolio: "devendrakumar-portfolio.vercel.app",

  summary:
    "AI Developer / Python Developer with 1.5+ year of professional experience building AI-enabled automation, NLP solutions, and API-driven backend systems.[cite: 1] Hands-on experience with Python, FastAPI, REST APIs, LLM integration, GPT-based architectures, prompt engineering, embeddings, machine learning, deep learning, and workflow automation.[cite: 1] Experienced in developing business automation workflows with OAuth authentication, secure token management, API testing, validation, and modular backend design.[cite: 1] Strong project experience in computer vision and deep learning, including underwater marine-life detection and bone deformity detection, with practical model experimentation, dataset preparation, evaluation metrics, and performance analysis.[cite: 1] Business Analyst Intern experience with market research, competitive analysis, Power BI, Tableau, Excel, data cleaning, formatting, validation, insights extraction, workflow documentation, requirement specifications, and stakeholder discussions to support business strategy, content planning, data-driven decision-making, and process refinement.[cite: 1]",

  technicalSkills: {
    largeLanguageModels: [
      "Large Language Models (LLMs)", "GPT-3.5/4", "OpenAI APIs", "LLM Integration", "Prompt Engineering", "OLLAMA", "Embeddings"
    ],
    programming: ["Python", "Java", "C", "C++", "HTML", "CSS"],
    aiMl: [
      "NLP", "Machine Learning", "Deep Learning", "CNN", "VGG16", "LSTM", "Bi-LSTM", "Transfer Learning"
    ],
    computerVision: [
      "YOLOv8", "YOLOv9", "Object Detection", "Image Classification", "Image Preprocessing", "Data Augmentation"
    ],
    cloudAndDatabases: [
      "AWS EC2", "AWS S3", "AWS IAM", "PostgreSQL", "MySQL"
    ],
    tools: [
      "PyTorch", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Git", "Postman", "Power BI", "Tableau", "Excel", "VS Code"
    ]
  },

  workExperience: [
    {
      role: "Associate Python Developer",
      company: "Infologitech",
      duration: "Nov 2024 – Present",
      location: "Hyderabad, India",
      bullets: [
        "Built a Resume Scoring System using Python and FastAPI to automate resume processing and candidate evaluation against defined job-related criteria.[cite: 1]",
        "Implemented NLP and embedding-based processing to extract and represent resume information for semantic comparison and candidate matching.[cite: 1]",
        "Designed scoring logic to evaluate candidates across skills, experience, location, hourly rate, notice period, and visa status, producing structured candidate scores.[cite: 1]",
        "Developed REST APIs in FastAPI for resume processing, scoring, and integration with the application workflow.[cite: 1]",
        "Worked with PostgreSQL and vector embeddings to store candidate-related data and support similarity-based resume evaluation.[cite: 1]",
        "Integrated document-processing and text-extraction workflows to convert resume content into structured information used by the scoring pipeline.[cite: 1]",
        "Developed Python-based automation workflows to automate repetitive business operations across web applications and APIs, reducing manual data entry and improving process consistency.[cite: 1]",
        "Built and maintained LinkedIn automation that handled OAuth authentication, automated content posting, and image uploads as part of an end-to-end workflow.[cite: 1]",
        "Developed a resume scoring system using FastAPI, NLP, and embeddings to process resume information and evaluate candidates against defined scoring criteria.[cite: 1]",
        "Designed backend APIs with FastAPI to support resume processing, scoring, and integration with other application components.[cite: 1]",
        "Implemented GitHub automation to create repositories and upload projects programmatically, using secure token-based authentication for API access.[cite: 1]",
        "Performed API testing and troubleshooting with Postman by validating request parameters, authentication, response data, and end-to-end API workflows.[cite: 1]",
        "Worked on multi-vendor automation workflows that connected vendor information, authentication, API communication, and browser-based operations into repeatable business processes.[cite: 1]",
        "Worked with PostgreSQL and vector embeddings for AI/NLP-related backend workflows and supported data processing required for resume intelligence applications.[cite: 1]"
      ]
    },
    {
      role: "Business Analyst Intern",
      company: "Outlook Publishing India Pvt. Ltd.",
      duration: "Apr 2024 – Jul 2024",
      location: "Remote",
      bullets: [
        "Conducted market research and competitive analysis to support business strategy, content planning, and data-driven decision-making.[cite: 1]",
        "Created analytical dashboards and visual reports using Power BI, Tableau, and Excel to communicate business insights to stakeholders.[cite: 1]",
        "Performed data cleaning, formatting, validation, and insights extraction for editorial and marketing teams.[cite: 1]",
        "Documented workflows and prepared requirement specifications while participating in stakeholder discussions to clarify business needs and refine processes.[cite: 1]",
        "Analyzed market research and competitor information to identify relevant trends and summarize findings for business and content planning.[cite: 1]",
        "Collected and validated business data from multiple sources to prepare accurate information for analysis, reporting, and stakeholder presentations.[cite: 1]"
      ]
    }
  ],

  projects: [
    {
      title: "Underwater Image Detection for Marine Life Analysis",
      subtitle: "",
      technologies: ["YOLOv8", "CNN", "PyTorch", "TensorFlow", "NumPy", "Pandas", "Matplotlib"],
      bullets: [
        "Developed a deep learning-based marine-life detection system to identify and localize underwater objects in challenging low-visibility and distorted-lighting conditions.[cite: 1]",
        "Worked with an underwater animal dataset containing multiple marine-life classes; the project evaluated image classification and object detection approaches.[cite: 1]",
        "Applied dataset preparation and preprocessing techniques including image resizing/normalization, data augmentation, selective data cleaning, and model-ready dataset splitting.[cite: 1]",
        "Experimented with CNN-based classification at 32x32 and 64x64 input resolutions and analyzed precision, recall, F1-score, and accuracy across classes.[cite: 1]",
        "For YOLOv8, selected 8 classes from the larger dataset and prepared object-detection annotations by drawing bounding boxes and generating image coordinates.[cite: 1]",
        "Trained and evaluated YOLOv8 for multi-class real-time object detection using confusion matrices, precision-recall analysis, and loss curves.[cite: 1]",
        "Achieved 76% mAP50 in the project results, with an inference speed of 1.3 ms per image; the presentation identified Starfish as a strong-performing class and Seahorse as an area for further improvement.[cite: 1]",
        "Analyzed the trade-off between detection accuracy, inference speed, object localization, and computational efficiency for underwater computer-vision applications.[cite: 1]"
      ]
    },
    {
      title: "Bone Deformity Detection using Deep Learning",
      subtitle: "",
      technologies: ["YOLOv8", "YOLOv9", "CNN", "VGG16", "EfficientNetB0", "MobileNetV3", "PyTorch", "TensorFlow"],
      bullets: [
        "Developed a comparative deep learning system for automated detection of bone deformities/fractures in X-ray images and evaluated object-detection and image-classification approaches.[cite: 1]",
        "Worked with a fracture classification dataset containing 4,083 bone images, including 717 fractured and 3,366 non-fractured images.[cite: 1]",
        "Designed a preprocessing and model-training pipeline covering dataset preparation, train/test/validation splitting, model building, training, evaluation, and classification.[cite: 1]",
        "Experimented with MobileNetV3, CNN, VGG16, EfficientNetB0, YOLOv8, and YOLOv9 to compare classification and object-detection performance.[cite: 1]",
        "Implemented YOLO-based object detection to identify and localize bone deformities and analyzed confusion matrices and loss curves for model behavior.[cite: 1]",
        "YOLOv9 achieved 0.84 precision, 0.68 recall, and 0.77 mAP50 in the reported comparison, with inference speed of approximately 2.0 ms per image.[cite: 1]",
        "Compared model performance across precision, recall, F1-score, and mAP50 and identified opportunities for further fine-tuning and hyperparameter optimization.[cite: 1]"
      ]
    },
    {
      title: "Cloud-Based Cab Hiring System",
      subtitle: "",
      technologies: ["AWS EC2", "AWS S3", "AWS IAM", "PHP", "HTML", "CSS"],
      bullets: [
        "Developed a cloud-based cab-booking application with user login, booking workflow, ride-status tracking, fare calculation, and validation logic.[cite: 1]",
        "Implemented backend business logic in PHP for booking operations, fare calculation, input validation, and ride workflow management.[cite: 1]",
        "Deployed the application on AWS EC2 and used Amazon S3 for storage and IAM for role-based access and cloud resource management.[cite: 1]",
        "Worked across application and cloud-deployment layers to connect web functionality with AWS infrastructure.[cite: 1]"
      ]
    },
    {
      title: "Glaucoma Detection using Deep Learning",
      subtitle: "",
      technologies: ["CNN", "VGG16", "LSTM", "Bi-LSTM", "TensorFlow", "PyTorch", "NumPy"],
      bullets: [
        "Developed a deep learning-based glaucoma classification system using fundus image datasets.[cite: 1]",
        "Performed image preprocessing and normalization to prepare medical images for model training and evaluation.[cite: 1]",
        "Experimented with CNN, VGG16, LSTM, and Bi-LSTM architectures for disease classification and compared model behavior.[cite: 1]",
        "Trained and tuned models with emphasis on classification performance, sensitivity, specificity, and F1-score evaluation.[cite: 1]"
      ]
    }
  ],

  education: {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Amrita Vishwa Vidyapeetham",
    duration: "2020–2024"
  },

  certifications: [
    {
      title: "Safe and Secure Communication Using SSL/TLS",
      issuer: "IEEE",
      details: ""
    },
    {
      title: "Tech Triumph 1.0 Hackathon",
      issuer: "CodeChef ASEB",
      details: ""
    }
  ],

  achievements: [
    "Recognized for performance in 2025 during automation development at Infologitech[cite: 1]",
    "IEEE Certificate for Safe and Secure Communication Using SSL/TLS[cite: 1]",
    "Participated in Tech Triumph 1.0 Hackathon (CodeChef ASEB)[cite: 1]"
  ]
};