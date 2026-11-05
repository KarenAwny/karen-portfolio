// ============================================================================
// KAREN AWNY — PORTFOLIO DATA & BILINGUAL TRANSLATIONS (EN / AR)
// ============================================================================
// Tip: To add your real profile photo or project screenshots later, place the
// image files inside `public/images/` and update `profilePhoto` or the project
// `screenshots` `src` fields below (e.g., "/images/my-photo.jpg").
// ============================================================================

export const personalInfo = {
  email: 'kokyawny226@gmail.com',
  whatsapp: '01284041118',
  whatsappUrl: 'https://wa.me/201284041118',
  linkedin: 'https://www.linkedin.com/in/karen-awny-7758b2309/',
  profilePhoto: '/images/profile-photo.jpg',
};

export const portfolioData = {
  en: {
    lang: 'en',
    dir: 'ltr',
    meta: {
      name: 'Karen Awny',
      firstName: 'Karen',
      lastName: 'Awny',
      role: 'Junior Flutter Developer',
      education: 'Modern Academy, Graduate – 2026',
      statusBadge: 'Open to Junior Opportunities',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact',
      langToggle: 'العربية',
      langLabel: 'Switch language to Arabic',
      hireMe: 'Contact Me',
    },
    hero: {
      badge: 'Open to Junior Opportunities',
      headingMain: 'Turning Ideas Into',
      headingHighlight: 'Reality.',
      subtitle:
        "I'm Karen Awny, a Junior Flutter Developer passionate about building mobile applications and creating meaningful digital experiences.",
      viewProjectsBtn: 'View My Projects',
      contactMeBtn: 'Contact Me',
      photoPlaceholderTitle: 'Karen Awny',
      photoPlaceholderSubtitle: 'Profile Photo Placeholder',
      photoPlaceholderHint: 'Add your photo in public/images/',
      floatingTag1: 'Flutter & Dart',
      floatingTag2: 'Firebase Integration',
      floatingTag3: 'UI / UX Focused',
    },
    about: {
      sectionTag: 'Get To Know Me',
      title: 'About Me',
      subtitle: 'Passionate about crafting clean, user-friendly mobile experiences.',
      paragraphs: [
        "I'm Karen Awny, a Junior Flutter Developer and a 2026 graduate of Modern Academy.",
        "I'm passionate about building mobile applications, creating user-friendly interfaces, and solving real-world problems through technology.",
        'I have been developing my skills in Flutter, Dart, and Firebase through training and practical projects. I enjoy exploring new technologies, improving my development skills, and turning creative ideas into practical digital solutions.',
        'My goal is to grow as a Flutter Developer and contribute to building meaningful applications.',
      ],
      infoCards: {
        educationTitle: 'Education',
        educationValue: 'Modern Academy',
        educationSub: 'Graduate – 2026',
        roleTitle: 'Specialization',
        roleValue: 'Junior Flutter Developer',
        roleSub: 'Cross-Platform Mobile Apps',
        languagesTitle: 'Languages',
        languagesList: [
          { name: 'English', level: 'B1' },
          { name: 'Spanish', level: 'A1' },
        ],
      },
    },
    skills: {
      sectionTag: 'Technical Toolkit',
      title: 'Skills & Technologies',
      subtitle:
        'Technologies and tools I work with to build modern mobile and web applications.',
      levelNote:
        'Honest skill indicators reflecting my current journey as a Junior Developer:',
      legend: [
        { label: 'Practical Experience', type: 'practical' },
        { label: 'Familiar With', type: 'familiar' },
        { label: 'Learning', type: 'learning' },
      ],
      categories: [
        {
          id: 'mobile',
          title: 'Mobile Development',
          description: 'Building cross-platform applications with responsive UI.',
          icon: 'mobile',
          skills: [
            {
              name: 'Flutter',
              level: 'Practical Experience',
              levelType: 'practical',
              icon: 'flutter',
              detail: 'Widget trees, state management basics, responsive layouts & bilingual UI',
            },
            {
              name: 'Dart',
              level: 'Practical Experience',
              levelType: 'practical',
              icon: 'dart',
              detail: 'Object-oriented programming, async/await & clean data handling',
            },
          ],
        },
        {
          id: 'backend',
          title: 'Backend & Database',
          description: 'Cloud services for user authentication and real-time data storage.',
          icon: 'database',
          skills: [
            {
              name: 'Firebase Authentication',
              level: 'Practical Experience',
              levelType: 'practical',
              icon: 'firebase',
              detail: 'User sign-up, login workflows & session management',
            },
            {
              name: 'Cloud Firestore',
              level: 'Practical Experience',
              levelType: 'practical',
              icon: 'firestore',
              detail: 'Storing user profiles, assessment results & structured collections',
            },
          ],
        },
        {
          id: 'web',
          title: 'Web Development',
          description: 'Core web technologies for responsive interfaces and layouts.',
          icon: 'web',
          skills: [
            {
              name: 'HTML',
              level: 'Practical Experience',
              levelType: 'practical',
              icon: 'html',
              detail: 'Semantic structure & accessible page layouts',
            },
            {
              name: 'CSS',
              level: 'Practical Experience',
              levelType: 'practical',
              icon: 'css',
              detail: 'Flexbox, Grid, animations & responsive styling',
            },
            {
              name: 'JavaScript',
              level: 'Familiar With',
              levelType: 'familiar',
              icon: 'javascript',
              detail: 'DOM manipulation, interactive logic & modern ES6 syntax',
            },
          ],
        },
        {
          id: 'tools',
          title: 'Tools',
          description: 'Development environment and AI-assisted coding workflows.',
          icon: 'tools',
          skills: [
            {
              name: 'Visual Studio Code',
              level: 'Practical Experience',
              levelType: 'practical',
              icon: 'vscode',
              detail: 'Primary code editor, debugging & Flutter extensions',
            },
            {
              name: 'Antigravity',
              level: 'Practical Experience',
              levelType: 'practical',
              icon: 'antigravity',
              detail: 'AI-assisted development, prototyping & workflow productivity',
            },
          ],
        },
      ],
    },
    projects: {
      sectionTag: 'Featured Work',
      title: 'Projects',
      subtitle:
        'Practical applications built with a focus on user experience and real-world value.',
      featuresLabel: 'Key Features',
      techLabel: 'Technologies Used',
      roleLabel: 'My Role',
      screenshotsLabel: 'Project Screenshots',
      viewProjectBtn: 'View Project',
      closeModalBtn: 'Close Preview',
      modalStatusNote:
        'Live deployment link and screenshots will be updated soon. Below is a full overview of the project architecture and features.',
      items: [
        {
          id: 'waypoint',
          name: 'Waypoint – Student Career Guidance Platform',
          type: 'Web Application & Mobile Application',
          description:
            'A bilingual student-focused platform that helps students discover suitable IT career paths through personality-based assessments and instant career recommendations.',
          role: 'Independently developed the project with AI assistance, working on its features, user experience, and Firebase integration.',
          features: [
            'User Registration & Login.',
            'Firebase Authentication.',
            'Personality-Based Assessment.',
            'Instant Career Recommendations.',
            'User Profile.',
            'Save Assessment Results.',
            'Arabic & English Language Support.',
          ],
          technologies: [
            'Flutter',
            'Dart',
            'Firebase Authentication',
            'Cloud Firestore',
            'HTML',
            'CSS',
            'JavaScript',
          ],
          // Set projectUrl to your live link or repo URL when available
          projectUrl: null,
          screenshots: [
            {
              id: 'waypoint-screen-1',
              src: null, // e.g. '/images/waypoint-1.png'
              title: 'Assessment & Career Recommendation Screen',
              subtitle: 'Screenshot Placeholder 1 — Easy to replace in portfolioData.js',
              aspect: 'mobile',
            },
            {
              id: 'waypoint-screen-2',
              src: null, // e.g. '/images/waypoint-2.png'
              title: 'Bilingual Student Dashboard & Profile',
              subtitle: 'Screenshot Placeholder 2 — Easy to replace in portfolioData.js',
              aspect: 'web',
            },
          ],
        },
      ],
    },
    certificates: {
      sectionTag: 'Continuous Learning',
      title: 'Certificates & Courses',
      subtitle:
        'Training programs, diplomas, and internships that shaped my technical foundation.',
      items: [
        {
          id: 'iti-flutter',
          organization: 'Information Technology Institute (ITI)',
          title: 'Cross-Platform Mobile Application Development (Flutter)',
          category: 'Mobile Development',
          icon: 'flutter',
        },
        {
          id: 'route-diploma',
          organization: 'Route Academy',
          title: 'Programming Fundamentals Diploma',
          category: 'Software Engineering',
          icon: 'code',
        },
        {
          id: 'coda-frontend',
          organization: 'CodaCast',
          title: 'Front-End Development Course',
          category: 'Web Development',
          icon: 'web',
        },
        {
          id: 'nti-cyber',
          organization: 'National Telecommunication Institute (NTI)',
          title: 'Cybersecurity',
          category: 'Security & Networks',
          icon: 'shield',
        },
        {
          id: 'cib-green-leap',
          organization: 'CIB',
          title: 'The Green Leap, as part of the CIB Summer Internship Program',
          date: 'September 2025',
          category: 'Summer Internship Program',
          icon: 'award',
        },
      ],
    },
    contact: {
      sectionTag: 'Get In Touch',
      title: "Let's Build Something Great Together.",
      subtitle:
        "I'm currently open to junior Flutter developer roles, internships, and collaborative projects. Feel free to reach out via email or connect with me on LinkedIn.",
      emailLabel: 'Email Address',
      whatsappLabel: 'WhatsApp',
      linkedinLabel: 'LinkedIn Profile',
      linkedinValue: 'Karen Awny on LinkedIn',
      sendEmailBtn: 'Send Me an Email',
      whatsappBtn: 'Chat on WhatsApp',
      copyEmailBtn: 'Copy Email',
      copiedText: 'Email Copied!',
      connectLinkedinBtn: 'Connect on LinkedIn',
      availabilityNote: 'Available for Junior Flutter Developer opportunities',
    },
    footer: {
      tagline: 'Junior Flutter Developer — Turning Ideas Into Reality.',
      quickLinks: 'Quick Navigation',
      connectTitle: 'Connect',
      rights: 'All rights reserved.',
      builtWith: 'Built with React.js & Vite',
    },
  },

  ar: {
    lang: 'ar',
    dir: 'rtl',
    meta: {
      name: 'كارين عوني',
      firstName: 'كارين',
      lastName: 'عوني',
      role: 'مطورة تطبيقات Flutter جونيور',
      education: 'الأكاديمية الحديثة (Modern Academy)، خريجة – 2026',
      statusBadge: 'متاحة لفرص العمل كـ Junior Developer',
    },
    nav: {
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      certificates: 'الشهادات',
      contact: 'تواصل معي',
      langToggle: 'English',
      langLabel: 'تغيير اللغة إلى الإنجليزية',
      hireMe: 'تواصل معي',
    },
    hero: {
      badge: 'متاحة لفرص العمل كـ Junior Developer',
      headingMain: 'تحويل الأفكار إلى',
      headingHighlight: 'واقع ملموس.',
      subtitle:
        'أنا كارين عوني، مطورة تطبيقات Flutter جونيور شغوفة ببناء تطبيقات الهواتف الذكية وابتكار تجارب رقمية هادفة ومميزة.',
      viewProjectsBtn: 'عرض مشاريعي',
      contactMeBtn: 'تواصل معي',
      photoPlaceholderTitle: 'كارين عوني',
      photoPlaceholderSubtitle: 'مكان مخصص للصورة الشخصية',
      photoPlaceholderHint: 'أضيفي صورتك داخل مجلد public/images/',
      floatingTag1: 'Flutter & Dart',
      floatingTag2: 'ربط خدمات Firebase',
      floatingTag3: 'واجهات مستخدم عصرية',
    },
    about: {
      sectionTag: 'تعرّف عليّ',
      title: 'نبذة عني',
      subtitle: 'شغوفة بتصميم وبناء تطبيقات هواتف ذكية سهلة الاستخدام وعالية الجودة.',
      paragraphs: [
        'أنا كارين عوني، مطورة تطبيقات Flutter جونيور وخريجة الأكاديمية الحديثة (Modern Academy) دفعة 2026.',
        'أمتلك شغفاً كبيراً ببناء تطبيقات الهواتف المحمولة، وتصميم واجهات سهلة الاستخدام، وحل المشكلات الواقعية من خلال التكنولوجيا.',
        'عملت على تطوير مهاراتي في Flutter و Dart و Firebase من خلال التدريب والمشاريع العملية. أستمتع باستكشاف التقنيات الحديثة، وتطوير مهاراتي البرمجية باستمرار، وتحويل الأفكار الإبداعية إلى حلول رقمية عملية.',
        'هدفي هو النمو والتطور كمطورة Flutter والمساهمة في بناء تطبيقات هادفة تترك أثراً إيجابياً.',
      ],
      infoCards: {
        educationTitle: 'التعليم',
        educationValue: 'الأكاديمية الحديثة (Modern Academy)',
        educationSub: 'خريجة – 2026',
        roleTitle: 'التخصص',
        roleValue: 'مطورة تطبيقات Flutter جونيور',
        roleSub: 'تطبيقات الهواتف متعددة المنصات',
        languagesTitle: 'اللغات',
        languagesList: [
          { name: 'الإنجليزية (English)', level: 'B1' },
          { name: 'الإسبانية (Spanish)', level: 'A1' },
        ],
      },
    },
    skills: {
      sectionTag: 'المهارات التقنية',
      title: 'المهارات والتقنيات',
      subtitle:
        'التقنيات والأدوات التي أستخدمها لبناء تطبيقات الهواتف والويب الحديثة.',
      levelNote:
        'مؤشرات صادقة تعكس مستواي الحالي في رحلتي كمطورة جونيور:',
      legend: [
        { label: 'خبرة عملية (Practical Experience)', type: 'practical' },
        { label: 'معرفة جيدة (Familiar With)', type: 'familiar' },
        { label: 'قيد التعلم (Learning)', type: 'learning' },
      ],
      categories: [
        {
          id: 'mobile',
          title: 'تطوير تطبيقات الهواتف',
          description: 'بناء تطبيقات متعددة المنصات بواجهات متجاوبة وسلسة.',
          icon: 'mobile',
          skills: [
            {
              name: 'Flutter',
              level: 'خبرة عملية',
              levelType: 'practical',
              icon: 'flutter',
              detail: 'بناء الواجهات، تصميم الشاشات المتجاوبة ودعم تعدد اللغات',
            },
            {
              name: 'Dart',
              level: 'خبرة عملية',
              levelType: 'practical',
              icon: 'dart',
              detail: 'البرمجة كائنية التوجه (OOP)، العمليات غير المتزامنة وإدارة البيانات',
            },
          ],
        },
        {
          id: 'backend',
          title: 'الخدمات السحابية وقواعد البيانات',
          description: 'خدمات سحابية لتسجيل المستخدمين وحفظ البيانات بشكل فوري.',
          icon: 'database',
          skills: [
            {
              name: 'Firebase Authentication',
              level: 'خبرة عملية',
              levelType: 'practical',
              icon: 'firebase',
              detail: 'تسجيل الحسابات، تسجيل الدخول وإدارة جلسات المستخدمين',
            },
            {
              name: 'Cloud Firestore',
              level: 'خبرة عملية',
              levelType: 'practical',
              icon: 'firestore',
              detail: 'حفظ ملفات المستخدمين ونتائج التقييمات في قواعد بيانات سحابية',
            },
          ],
        },
        {
          id: 'web',
          title: 'تطوير الويب',
          description: 'التقنيات الأساسية لبناء وتنسيق واجهات وصفحات الويب.',
          icon: 'web',
          skills: [
            {
              name: 'HTML',
              level: 'خبرة عملية',
              levelType: 'practical',
              icon: 'html',
              detail: 'بناء هيكل صفحات الويب بطريقة منظمة ومتوافقة مع المعايير',
            },
            {
              name: 'CSS',
              level: 'خبرة عملية',
              levelType: 'practical',
              icon: 'css',
              detail: 'تنسيق الواجهات باستخدام Flexbox و Grid والتصميم المتجاوب',
            },
            {
              name: 'JavaScript',
              level: 'معرفة جيدة',
              levelType: 'familiar',
              icon: 'javascript',
              detail: 'التفاعل مع عناصر الصفحة وكتابة المنطق البرمجي التفاعلي',
            },
          ],
        },
        {
          id: 'tools',
          title: 'بيئة العمل والأدوات',
          description: 'أدوات التطوير وبيئات العمل المدعومة بالذكاء الاصطناعي.',
          icon: 'tools',
          skills: [
            {
              name: 'Visual Studio Code',
              level: 'خبرة عملية',
              levelType: 'practical',
              icon: 'vscode',
              detail: 'محرر الأكواد الأساسي مع إضافات Flutter وأدوات التصحيح',
            },
            {
              name: 'Antigravity',
              level: 'خبرة عملية',
              levelType: 'practical',
              icon: 'antigravity',
              detail: 'التطوير بمساعدة الذكاء الاصطناعي وتسريع بناء المشاريع',
            },
          ],
        },
      ],
    },
    projects: {
      sectionTag: 'أبرز الأعمال',
      title: 'المشاريع',
      subtitle:
        'مشاريع عملية تم بناؤها بالتركيز على تجربة المستخدم وتقديم حلول حقيقية.',
      featuresLabel: 'المميزات الرئيسية',
      techLabel: 'التقنيات المستخدمة',
      roleLabel: 'دوري في المشروع',
      screenshotsLabel: 'لقطات من المشروع',
      viewProjectBtn: 'عرض المشروع',
      closeModalBtn: 'إغلاق المعاينة',
      modalStatusNote:
        'سيتم إضافة رابط المشروع المباشر ولقطات الشاشة الفعلية قريباً. فيما يلي استعراض شامل لتفاصيل ومميزات المشروع.',
      items: [
        {
          id: 'waypoint',
          name: 'Waypoint – منصة التوجيه المهني للطلاب',
          type: 'تطبيق ويب وتطبيق هاتف (Web & Mobile Application)',
          description:
            'منصة ثنائية اللغة موجهة للطلاب تساعدهم على اكتشاف المسارات المهنية المناسبة في مجال تكنولوجيا المعلومات من خلال تقييمات مبنية على الشخصية وتوصيات مهنية فورية.',
          role: 'قمت بتطوير المشروع بشكل مستقل بمساعدة الذكاء الاصطناعي، والعمل على بناء مميزاته، وتجربة المستخدم، وربطه بخدمات Firebase.',
          features: [
            'تسجيل حساب جديد وتسجيل الدخول.',
            'مصادقة المستخدمين عبر Firebase Authentication.',
            'تقييم مهني مبني على تحليل الشخصية.',
            'توصيات فورية بالمسارات المهنية المناسبة.',
            'ملف شخصي متكامل للمستخدم (User Profile).',
            'حفظ نتائج التقييم للرجوع إليها.',
            'دعم كامل للغتين العربية والإنجليزية.',
          ],
          technologies: [
            'Flutter',
            'Dart',
            'Firebase Authentication',
            'Cloud Firestore',
            'HTML',
            'CSS',
            'JavaScript',
          ],
          projectUrl: null,
          screenshots: [
            {
              id: 'waypoint-screen-1',
              src: null,
              title: 'شاشة التقييم والتوصيات المهنية',
              subtitle: 'مكان مخصص للقطة الشاشة 1 — سهل الاستبدال من ملف portfolioData.js',
              aspect: 'mobile',
            },
            {
              id: 'waypoint-screen-2',
              src: null,
              title: 'لوحة تحكم الطالب والملف الشخصي (ثنائي اللغة)',
              subtitle: 'مكان مخصص للقطة الشاشة 2 — سهل الاستبدال من ملف portfolioData.js',
              aspect: 'web',
            },
          ],
        },
      ],
    },
    certificates: {
      sectionTag: 'التعلم المستمر',
      title: 'الشهادات والدورات التدريبية',
      subtitle:
        'البرامج التدريبية والدبلومات والتدريبات الصيفية التي ساهمت في بناء أساسي التقني.',
      items: [
        {
          id: 'iti-flutter',
          organization: 'معهد تكنولوجيا المعلومات (ITI)',
          title: 'تطوير تطبيقات الهواتف متعددة المنصات (Flutter)',
          category: 'تطوير تطبيقات الهواتف',
          icon: 'flutter',
        },
        {
          id: 'route-diploma',
          organization: 'Route Academy',
          title: 'دبلومة أساسيات البرمجة (Programming Fundamentals Diploma)',
          category: 'أساسيات البرمجة',
          icon: 'code',
        },
        {
          id: 'coda-frontend',
          organization: 'CodaCast',
          title: 'دورة تطوير الواجهات الأمامية (Front-End Development Course)',
          category: 'تطوير الويب',
          icon: 'web',
        },
        {
          id: 'nti-cyber',
          organization: 'المعهد القومي للاتصالات (NTI)',
          title: 'الأمن السيبراني (Cybersecurity)',
          category: 'أمن المعلومات والشبكات',
          icon: 'shield',
        },
        {
          id: 'cib-green-leap',
          organization: 'البنك التجاري الدولي (CIB)',
          title: 'برنامج The Green Leap، ضمن برنامج التدريب الصيفي لبنك CIB',
          date: 'سبتمبر 2025',
          category: 'برنامج تدريب صيفي',
          icon: 'award',
        },
      ],
    },
    contact: {
      sectionTag: 'تواصل معي',
      title: 'لنقم ببناء شيء رائع معاً.',
      subtitle:
        'أنا متاحة حالياً لفرص العمل كمطورة Flutter جونيور، والتدريبات العملية، والمشاريع المشتركة. يسعدني تواصلك معي عبر البريد الإلكتروني أو عبر حسابي على LinkedIn.',
      emailLabel: 'البريد الإلكتروني',
      whatsappLabel: 'واتساب (WhatsApp)',
      linkedinLabel: 'حساب LinkedIn',
      linkedinValue: 'Karen Awny على LinkedIn',
      sendEmailBtn: 'أرسل لي بريداً إلكترونياً',
      whatsappBtn: 'تواصل عبر واتساب',
      copyEmailBtn: 'نسخ البريد الإلكتروني',
      copiedText: 'تم نسخ البريد!',
      connectLinkedinBtn: 'تواصل عبر LinkedIn',
      availabilityNote: 'متاحة لفرص العمل كـ Junior Flutter Developer',
    },
    footer: {
      tagline: 'مطورة تطبيقات Flutter جونيور — تحويل الأفكار إلى واقع ملموس.',
      quickLinks: 'روابط سريعة',
      connectTitle: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      builtWith: 'تم البناء باستخدام React.js و Vite',
    },
  },
};

