document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check local storage for theme preference, or use system preference
    const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply the initial theme
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        let theme = 'light';
        if (document.documentElement.getAttribute('data-theme') !== 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            theme = 'dark';
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
    });
    
    // 2. Mobile Menu Management
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
    
    // 3. Render Content from Config
    if (window.portfolioConfig) {
        const c = window.portfolioConfig;
        
        // Header
        document.getElementById('nav-logo').textContent = c.header.logo;
        document.getElementById('footer-logo').textContent = c.header.logo;
        
        // Hero
        document.getElementById('hero-name').textContent = c.hero.name;
        document.getElementById('hero-title').textContent = c.hero.title;
        document.getElementById('hero-description').textContent = c.hero.description;
        
        const btnPrimary = document.getElementById('hero-btn-primary');
        btnPrimary.textContent = c.hero.buttons.primary.text;
        btnPrimary.href = c.hero.buttons.primary.link;
        
        const btnSecondary = document.getElementById('hero-btn-secondary');
        btnSecondary.textContent = c.hero.buttons.secondary.text;
        btnSecondary.href = c.hero.buttons.secondary.link;
        
        // About
        document.getElementById('about-title').textContent = c.about.title;
        const aboutContent = document.getElementById('about-content');
        c.about.paragraphs.forEach(p => {
            const pEl = document.createElement('p');
            // Support simple bolding for links or highlights if needed, but for now just textContent
            pEl.innerHTML = p.replace('The Impact Diaries', '<a href="#" style="color:var(--accent-color)">The Impact Diaries</a>');
            aboutContent.appendChild(pEl);
        });
        
        // Expertise
        document.getElementById('expertise-title').textContent = c.expertise.title;
        const expertiseCards = document.getElementById('expertise-cards');
        
        c.expertise.cards.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'expertise-card';
            
            let html = `
                <div class="expertise-card-header">
                    <i data-feather="${card.icon}"></i>
                    <h3>${card.title}</h3>
                </div>
                <div class="skills-wrapper">
            `;
            
            card.skills.forEach(skill => {
                html += `<span class="skill-badge">${skill}</span>`;
            });
            
            html += `</div>`;
            
            if (card.footer) {
                html += `
                    <div class="expertise-card-footer">
                        <i data-feather="${card.footerIcon || 'info'}" width="16" height="16"></i>
                        <span>${card.footer}</span>
                    </div>
                `;
            }
            
            cardEl.innerHTML = html;
            expertiseCards.appendChild(cardEl);
        });
        
        // Projects
        document.getElementById('projects-title').textContent = c.projects.title;
        const projectsList = document.getElementById('projects-list');
        
        c.projects.list.forEach(project => {
            const pEl = document.createElement('div');
            pEl.className = 'project-card';
            
            let tagsHtml = project.tags.map(tag => `<span class="skill-badge" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">${tag}</span>`).join('');
            
            let imageHtml = '';
            if (project.link || project.localImage) {
                const imgSrc = project.link ? project.link : project.localImage;
                const fallbackAttr = (project.link && project.localImage) ? `onerror="this.onerror=null;this.src='${project.localImage}';"` : '';
                imageHtml = `<img src="${imgSrc}" alt="${project.title} preview" class="project-image" ${fallbackAttr}>`;
            }

            pEl.innerHTML = `
                ${imageHtml}
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="skills-wrapper" style="gap: 0.5rem; margin-top: 1rem;">
                    ${tagsHtml}
                </div>
            `;
            projectsList.appendChild(pEl);
        });
        
        // Contact
        document.getElementById('contact-title').textContent = c.contact.title;
        const contactBtn = document.getElementById('contact-btn');
        contactBtn.textContent = c.contact.buttonText;
        contactBtn.href = c.contact.email;
        
        const contactPhone = document.getElementById('contact-phone');
        if (c.contact.phone) {
            contactPhone.textContent = c.contact.phone;
            contactPhone.href = `tel:${c.contact.phone.replace(/[\s-]/g, '')}`;
            contactPhone.style.display = 'inline-block';
        } else {
            contactPhone.style.display = 'none';
        }
        
        // Footer Socials
        const footerSocials = document.getElementById('footer-socials');
        c.contact.socials.forEach(social => {
            const a = document.createElement('a');
            a.href = social.url;
            a.textContent = social.name;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            footerSocials.appendChild(a);
        });
        
        document.getElementById('footer-copyright').textContent = c.contact.footerText;
        
        // Initialize Feather Icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
});
