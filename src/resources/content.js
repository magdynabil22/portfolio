import {
    Logo
} from "@once-ui-system/core";

const person = {
    firstName: "Magdy",
    lastName: "Nabil",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Frontend Developer and Software Engineer",
    avatar: "/images/avatar-professional.jpg",
    email: "magdy.nabil.wahba@gmail.com",
    phone: "+201279707819", // TODO: replace with your real phone number
    location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
    display: true,
    title: < > Subscribe to {
        person.firstName
    }
    's Newsletter</>,
    description: (
        <>
        I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.
        </>
    ),
};

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/magdynabil22",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/magdy-nabil-wahba/",
    },
    {
        name: "Threads",
        icon: "threads",
        link: "https://www.threads.com/@magdy_nabil22?igshid=NTc4MTIwNjQ2YQ%3D%3D",
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
    },
];

const home = {
    path: "/",
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: "Bringing products to life through thoughtful code",
    image: person.avatar,
    featured: {
        display: false,
        title: <> </>,
        href: "/work/building-once-ui-a-customizable-design-system",
    },
    subline: (
        <>
        I'm Magdy, a Software Engineer and Frontend Developer building scalable web, mobile, and cloud solutions, <br />
        I work with React, Flutter, JavaScript, Bootstrap, HTML, and CSS, and I explore AI and embedded systems in my spare time.
        </>
    ),
};

const about = {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: true,
        link: "https://cal.com/magdy_nabil/30min",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
            Magdy is a Cairo-based software engineer passionate about turning complex problems into robust, user-friendly applications. His work bridges web and mobile, blending Software development, Frontend development, and the latest in AI technologies.
            </>
        ),
    },
    work: {
        display: true, // set to false to hide this section
        title: "Work Experience",
        experiences: [{
                company: "National Telecommunication Institute (NTI)",
                timeframe: "June 2025 - Sept 2025",
                role: "Frontend Developer",
                achievements: [
                    <>
                    Developed real-world web applications projects and templates using HTML, CSS, JavaScript, React.js.
                    </>,
                ],
                images: [],
            },
            {
                company: "Talaat Mostafa Group (TMG)",
                timeframe: "August 2024 - October 2024",
                role: "Software Engineer",
                achievements: [
                    <>
                    Involved in web and mobile application development and testing.
                    </>,
                ],
                images: [],
            },
            {
                company: "Talaat Mostafa Group (TMG)",
                timeframe: "August 2023 - October 2023",
                role: "IT Network Engineer",
                achievements: [
                    <>
                    Gained practical experience in network configuration and system administration.
                    </>,
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "Studies",
        institutions: [{
                name: "Faculty of Engineering Ainshams University",
                description: (
                    <>
                    Bachelor of Science in Computer and Systems Engineering.
                    </>
                ),
            },
            {
                name: "Relevant Coursework",
                description: (
                    <>
                    Algorithms, Database, Advanced Database Systems, Machine Learning and Pattern Recognition, Design of Compilers, Artificial Intelligence, Operating Systems, Computer Networks, Big-Data Analytics, Software Design Patterns.
                    </>
                ),
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "Technical skills",
        skills: [{
                title: "Programming Languages",
                icon: "rocket",
                description: <>C, C++, Java, JavaScript, Dart, Python.</>,
                // optional: leave the array empty if you don't want to display images
                images: [{},
                    {
                        src: "/images/projects/project-01/cover-03.jpg",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                title: "FrameWorks",
                icon: "rocket",
                description: <>React, VueJs, Django, NodeJs, Flutter, ASP.Net</>,
                // optional: leave the array empty if you don't want to display images
                images: [],
            },
            {
                title: "Others",
                icon: "rocket",
                description: (
                    <>
                    HTML, CSS, Jquery, Bootstrap, Tailwind, SQL, MachineLearning, Data Science, Langchain, Langgraph.
                    </>
                ),
                // optional: leave the array empty if you don't want to display images
                images: [],
            },
            {
                title: "Concepts",
                icon: "rocket",
                description: (
                    <>
                    RESTful APIs, gRPC, Software Design Patterns, Object Oriented Programming, Data Structures.
                    </>
                ),
                images: [],
            },
        ],
    },
};

const blog = {
    path: "/blog",
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    path: "/work",
    label: "Work",
    title: `Projects – ${person.name}`,
    description: `Software engineering and AI projects by ${person.name} — building robust apps, smart systems, and seamless user experiences.`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    path: "/gallery",
    label: "Gallery",
    title: `Photo gallery – ${person.name}`,
    description: `A photo collection by ${person.name}`,
    // Images by https://lorant.one
    // These are placeholder images, replace with your own
    images: [{
            src: "/images/gallery/horizontal-1.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-2.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-3.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-4.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-1.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-2.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-3.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-4.jpg",
            alt: "image",
            orientation: "vertical",
        },
    ],
};

export {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery
};