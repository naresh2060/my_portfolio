const config = {
    header: {
        logo: "NARESH.K"
    },
    hero: {
        name: "Naresh\nKushawaha",
        title: "Full-Stack Developer &\nExploring Social Media Strategy \n& Content Creation",
        description: "Crafting digital growth through strategic content and modern technical solutions. Bridging the gap between creative storytelling and robust code.",
        buttons: {
            primary: { text: "VIEW WORK", link: "#projects" },
            secondary: { text: "CONTACT", link: "#contact" }
        },
        imageAlt: "Portfolio abstract digital art"
    },
    about: {
        title: "About",
        paragraphs: [
            "Based in Nepal. I am a Social Media Manager at Developers Guru Pvt. Ltd., specializing in real estate lead generation and comprehensive content strategy. Currently, I manage growth for The Impact Diaries podcast, tailoring content for the Nepali diaspora.",
            "Alongside my strategic marketing role, I am a 3rd-year BIT student at Bhaktapur Multiple Campus (Class of 2027), actively building a foundation in full-stack development to create end-to-end digital experiences."
        ]
    },
    expertise: {
        title: "Expertise",
        cards: [
            {
                title: "Content & Growth",
                icon: "trending-up",
                skills: [
                    "Social Media Strategy",
                    "Content Writing (Eng/Nep)",
                    "Script Writing",
                    "Video Strategy",
                    "Brand Growth",
                    "Lead Generation"
                ]
            },
            {
                title: "Technical Foundation",
                icon: "code",
                skills: [
                    "React.js",
                    "SQL",
                    "Node.js / Flask",
                    "AI/ML (Hugging Face)",
                    "Python / Pandas"
                ],
                footer: "freeCodeCamp Certified",
                footerIcon: "check-circle"
            }
        ]
    },
    projects: {
        title: "Projects",
        list: [
            // { title: "StrideX", description: "Production React e-commerce site", tags: ["React"], link: "data:image/jpeg;base64,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" },
            // { title: "Portfolio", description: "Trello-like task management app — React + Node + PHP backend, drag & drop", tags: ["React", "Node", "PHP"], localImage: "images/dummy.jpg" },
            { title: "Facebook Page Automation System", description: "Facebook Graph API integration, Zustand state management", tags: ["API", "Zustand"] , localImage: "images/dummy.jpg" },

            { title: "Taskoo", description: "Trello-like task management app — React + Node + PHP backend, drag & drop", tags: ["React", "Node", "PHP"] },
            // { title: "HiddenBitesNepal", description: "SEO-optimized food discovery site", tags: ["SEO"] },
            // { title: "AI + Data Projects", description: "Hugging Face Kronos model, Python + pandas, ML experimentation", tags: ["Python", "ML"] },
            { title: "Developers Guru blog system", description: "Deployment-ready HTML blog pages with embedded CSS/JS and AI-generated thumbnails", tags: ["HTML/CSS/JS"] },
            { title: "The Impact Diaries", description: "Social growth strategy + short-form video work", tags: ["Social Media"] }
        ]
    },
    contact: {
        title: "Let's Connect",
        buttonText: "MAIL ME",
        email: "mailto:nareshkushawaha8@gmail.com",
        phone: "+977 9866331461 ",
        socials: [
            { name: "LinkedIn", url: "https://linkedin.com/in/naresh-kushawaha-b9aa0b27b" },
            { name: "GitHub", url: "https://github.com/naresh2060" },
            // { name: "Twitter", url: "#" },
            { name: "Instagram", url: "#" },
            // { name: "Threads", url: "#" }
        ],
        footerText: "© 2024 Naresh Kushawaha. All rights reserved."
    }
};

window.portfolioConfig = config;
