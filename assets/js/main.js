 
        // Fade-in animation for sections
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Modal functionality
        const contactModal = document.getElementById('contactModal');
        const getStartedBtn = document.getElementById('getStartedBtn');
        const contactForm = document.getElementById('contactForm');
        
        function openModal() {
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Open modal on Get Started button click
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
        
        // Close modal when clicking outside the content
        contactModal.addEventListener('click', function(e) {
            if (e.target === contactModal) {
                closeModal();
            }
        });
        
        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            
            // In a real implementation, you would send this data to your server
            console.log('Form submitted:', { name, phone, email });
            
            // Show success message
            alert(`Thank you, ${name}! We'll contact you shortly at ${phone} or ${email}.`);
            
            // Close modal and reset form
            closeModal();
            contactForm.reset();
        });
        
        // Open WhatsApp
        function openWhatsApp() {
            const phone = '9315218918';
            const message = 'Hello Leonardsoft, I would like to get more information about your services.';
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
        
        // Open Email
        function openEmail() {
            const email = 'dkweb2025@gmail.com';
            const subject = 'Inquiry about Leonardsoft Services';
            const body = 'Hello Leonardsoft team,\n\nI would like to get more information about your services.\n\nBest regards,';
            const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = url;
        }
        
        // Show modal after 5 seconds
        setTimeout(() => {
            // Only show if user hasn't already interacted with the site
            if (!sessionStorage.getItem('modalShown')) {
                openModal();
                sessionStorage.setItem('modalShown', 'true');
            }
        }, 5000);
        
        // Portfolio filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
   