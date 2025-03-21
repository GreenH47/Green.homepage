import {Github, Linkedin, Mail, PhoneCall} from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoSkillsAws from '/public/images/skills-logo/logo-aws.svg';
import LogoSkillsCsharp from '/public/images/skills-logo/logo-csharp.svg';
import LogoSkillsPython from '/public/images/skills-logo/logo-python.svg';
import LogoSkillsKubernetes from '/public/images/skills-logo/logo-kubernetes.svg';
import LogoSkillsDocker from '/public/images/skills-logo/logo-docker.svg';
import LogoSkillsWordpress from '/public/images/skills-logo/logo-wordpress.svg';
import LogoSkillsShopify from '/public/images/skills-logo/logo-shopify.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import LogoWorkRans from '/public/images/work-logo/rans.png';
import LogoWorkOzworld from '/public/images/work-logo/ozworld.jpg';
import LogoWorkJinhuan from '/public/images/work-logo/jinhuan.png';
import LogoWorkNaton from '/public/images/work-logo/naton.jpg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import Avator_Jingsheng_Chang from '/public/images/reference-logo/jingsheng-chang.jpg';
import Avator_Daniel_Miao from '/public/images/reference-logo/daniel-miao.jpg';
import Avator_Raj from '/public/images/reference-logo/raj-sachdev.jpg';


import {
    ExperienceDetails,
    ProjectDetails,
    TechDetails,
    TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
    GITHUB: 'https://github.com/GreenH47',
    GITHUB_REPO: 'https://github.com/GreenH47/Green.homepage',
    TWITTER: 'https://twitter.com/backup1722127',
    FIGMA: 'https://www.figma.com',
    FIGMA_FILE:
        'https://www.figma.com/file/tvVJgZsqa7u0nwJ7vIDxfI/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)-(Copy)?type=design&node-id=327%3A868&mode=design&t=9pxJ4m4V1Dd9a7is-1',
};

export const NAV_LINKS = [
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Work',
        href: '#employment',
    },
    // {
    //     label: 'Projects',
    //     href: '#projects',
    // },
    {
        label: 'Skills',
        href: '#Skills',
    },
    {
        label: 'References',
        href: '#references',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
];

export const SOCIAL_LINKS = [
    {
        icon: Github,
        url: 'https://github.com/GreenH47',
    },
    {
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/greenhuang/',
    },
    {
        icon: Mail,
        url: 'mailto:greenhuang47@gmail.com',
    },
    {
        icon: PhoneCall,
        url: 'tel:+61478395855',
    },
];

export const TECHNOLOGIES: TechDetails[] = [
    {
        label: 'Javascript',
        logo: LogoJavascript,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        label: 'Typescript',
        logo: LogoTypescript,
        url: 'https://www.typescriptlang.org/',
    },
    {
        label: 'React',
        logo: LogoReact,
        url: 'https://react.dev/',
    },
    {
        label: 'Next.js',
        logo: LogoNextjs,
        url: 'https://nextjs.org/',
    },
    {
        label: 'Node.js',
        logo: LogoNodejs,
        url: 'https://nodejs.org/en',
    },

    {
        label: 'PostgreSQL',
        logo: LogoPostgreSQL,
        url: 'https://www.postgresql.org/',
    },
    {
        label: 'MongoDB',
        logo: LogoMongoDB,
        url: 'https://www.mongodb.com/',
    },

    {
        label: 'Tailwindcss',
        logo: LogoTailwindcss,
        url: 'https://tailwindcss.com/',
    },


    {
        label: 'Git',
        logo: LogoGit,
        url: 'https://github.com/GreenH47',
    },

    {
        label: 'AWS',
        logo: LogoSkillsAws,
        url: 'https://aws.amazon.com/',
    },

    {
        label: 'C#',
        logo: LogoSkillsCsharp,
        url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },

    {
        label: 'Python',
        logo: LogoSkillsPython,
        url: 'https://www.python.org/',
    },

    {
        label: 'Kubernetes',
        logo: LogoSkillsKubernetes,
        url: 'https://kubernetes.io/',
    },

    {
        label: 'Docker',
        logo: LogoSkillsDocker,
        url: 'https://www.docker.com/',
    },

    {
        label: 'Wordpress',
        logo: LogoSkillsWordpress,
        url: 'https://wordpress.com/',
    },

    {
        label: 'Shopify',
        logo: LogoSkillsShopify,
        url: 'https://www.shopify.com/',
    },


];

export const EXPERIENCES: ExperienceDetails[] = [
    {
        logo: LogoWorkRans,
        logoAlt: 'Rans logo',
        position: 'RANS Australia - Website Development and Maintenance Intern',
        startDate: new Date(2025, 2),
        currentlyWorkHere: true,
        summary: [
            'Assisted in website maintenance and development, ensuring a visually appealing and user-friendly\n' +
            'interface',
            'Worked with tools like Canva, Shopify(https://www.thelinenden.com.au/ ), and\n' +
            'WooCommerce(https://www.rans.com.au/ ) to create and optimize web pages',
            'Ensured responsive design for various devices and screen sizes.\n' +
            'Suggested and implemented UI/UX improvements for better user experience.',
            'Conducted SEO research using Google Keyword Planner, Ahrefs, and SEMrush.\n' +
            'Optimized meta tags and headers and created SEO-friendly content for blogs, product descriptions,\n' +
            'and articles.'
        ],
    },
    {
        logo: LogoWorkOzworld,

        logoAlt: 'Ozworld logo',
        position: 'Ozworld Timber Flooring - Warehouse Assistant',
        startDate: new Date(2024, 4),
        endDate: new Date(2025, 2),
        summary: [
            'Managed customer inquiries, providing information on products and resolving issues',
            'Assisted in administration, including invoicing and budget reporting',
            'Maintained and updated the official website(https://ozworld.com.au/ ) and monitored daily records',
            'unloading and loading stock using a forklift, ensuring all stock is correctly placed and organized. ' +
            'Prioritized safety protocols to maintain a secure work environment and efficient operations'
        ],
    },

    {
        logo: LogoWorkJinhuan,

        logoAlt: 'Jinhuan logo',
        position: 'Jinhuan Construction Group - Executive Assistant to the Manager',
        startDate: new Date(2021, 10),
        endDate: new Date(2021, 3),
        summary: [
            'Created presentations, reports, and meeting minutes for the department.',
            'Distributed communications regarding important announcements and events.',
            'Collaborated with the admin team to ensure smooth departmental operations',
        ],
    },

    {
        logo: LogoWorkNaton,

        logoAlt: 'Naton logo',
        position: 'Beijing Naton Technology Group - Test Engineer of Biomechanics',
        startDate: new Date(2020, 9),
        endDate: new Date(2021, 1),
        summary: [
            'Reviewed specifications with the design team and conducted thorough testing',
            'Planned and executed testing phases and compiled final reports.',
            'Optimized design plans through component and design testing.',
        ],
    },

];

// uncomment WorkSection in src/app/page.tsx to display this section

// export const PROJECTS: ProjectDetails[] = [
//
//     {
//         name: 'Pepehousing',
//         description:
//             'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
//         url: 'https://pepehousing.com',
//         previewImage: ProjectPepehousing,
//         technologies: [
//             'React',
//             'Next.js',
//             'Typescript',
//             'Tailwindcss',
//             'Redux Toolkit',
//             'React Query',
//             'Storybook',
//         ],
//     },
// ];

export const TESTIMONIALS: TestimonialDetails[] = [
    {
        personName: 'jingsheng-chang',
        personAvatar: Avator_Jingsheng_Chang,
        link: 'https://www.linkedin.com/in/jingsheng-chang-2216381b4/',
        title: 'CoFounder - cpu-education',
        testimonial:
            'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Green and will rehire in the future for Frontend development.',
    },
    {
        personName: 'Daniel Miao',
        personAvatar: Avator_Daniel_Miao,
        link: 'https://www.linkedin.com/in/daniel-miao-4aa82515a/',
        title: 'Managing Director - Ozworld Timber Flooring',
        testimonial:
            'During this time, Shixin demonstrated excellent organizational skills, ' +
            'a strong work ethic, and an unwavering commitment to safety. ' +
            'They managed customer inquiries efficiently and provided clear product information, ' +
            'contributing significantly to positive customer experiences. ' +
            'Shixin also played a vital role in administrative tasks, ' +
            'including invoicing and budget reporting, and maintained our official website, ' +
            'ensuring that daily records were accurate and up-to-date.',
    },

    {
        personName: 'raj-sachdev',
        personAvatar: Avator_Raj,
        link: 'https://www.linkedin.com/in/raj-sachdev-9997b0120/',
        title: 'Business Development Manager - RANS Australia ',
        testimonial:
            'During their internship, Shixin consistently demonstrated strong technical skills in web development, ' +
            'UI/UX optimization, and troubleshooting. Their contributions to maintaining and enhancing our ' +
            'website have been both innovative and reliable, positively impacting our online presence.',
    },

];
