document.addEventListener('DOMContentLoaded', function() {

    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }


    const input = document.getElementById('personsInput');
    const minus = document.getElementById('personsMinus');
    const plus  = document.getElementById('personsPlus');
    if (input && minus && plus) {
        minus.addEventListener('click', () => {
          const min = parseInt(input.min || '1', 10);
          input.value = Math.max(min, Math.min(parseInt(input.max || '10', 10), parseInt(input.value || '1', 10) - 1));
        });
        plus.addEventListener('click', () => {
          const max = parseInt(input.max || '10', 10);
          input.value = Math.max(parseInt(input.min || '1', 10), Math.min(max, parseInt(input.value || '1', 10) + 1));
        });
    }

  
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    if (localStorage.getItem('saved-theme') === 'dark') {
        body.classList.add('dark-theme');
        if (themeBtn) themeBtn.textContent = "Light";
    }
    if (themeBtn) {
        themeBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            body.classList.toggle('dark-theme');
            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('saved-theme', 'dark');
                themeBtn.textContent = "Light";
            } else {
                localStorage.setItem('saved-theme', 'light');
                themeBtn.textContent = "Theme";
            }
        });
    }

  
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = "Today is: " + new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreText = document.getElementById('more-text');
    if (readMoreBtn && moreText) {
        readMoreBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            if (moreText.style.display === "none") {
                moreText.style.display = "inline";
                readMoreBtn.textContent = "READ LESS";
            } else {
                moreText.style.display = "none";
                readMoreBtn.textContent = "READ MORE";
            }
        });
    }

    const allForms = document.querySelectorAll('form');

    if (allForms.length > 0) {
        allForms.forEach(form => {
            form.addEventListener('submit', function(event) {
             
                event.preventDefault();
                
                
                clearValidation(form);

                let isFormValid = true;

           
                const nameInput = form.querySelector('input[name="name"]') || form.querySelector('input[type="text"]');
                const emailInput = form.querySelector('input[name="email"]') || form.querySelector('input[type="email"]');
                const messageInput = form.querySelector('textarea');

                
                if (nameInput) {
                    if (nameInput.value.trim().length < 3) {
                        setError(nameInput, "Name must be at least 3 characters long");
                        isFormValid = false;
                    } else {
                        setSuccess(nameInput);
                    }
                }

                
                if (emailInput) {
                    const emailValue = emailInput.value.trim();
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(emailValue)) {
                        setError(emailInput, "Please enter a valid email (e.g., user@mail.com)");
                        isFormValid = false;
                    } else {
                        setSuccess(emailInput);
                    }
                }

               
                if (messageInput) {
                    if (messageInput.value.trim().length < 10) {
                        setError(messageInput, "Message is too short (min 10 characters)");
                        isFormValid = false;
                    } else {
                        setSuccess(messageInput);
                    }
                }

               
                if (isFormValid) {
                    const userName = nameInput ? nameInput.value : 'Guest';
                    
                   
                    const formData = new FormData(form);
                    const dataObject = {};
                    formData.forEach((value, key) => { dataObject[key] = value; });
                    
                    console.group('✅ Form Submitted Successfully');
                    console.log('Data:', dataObject);
                    console.groupEnd();

                
                    if (nameInput) localStorage.setItem('user_name', nameInput.value);

                  
                    alert(`Form successfully sent!\nThank you, ${userName}.`);
                    
                    form.reset(); 
                    setTimeout(() => clearValidation(form), 2000); 
                } else {
                    console.warn('❌ Form validation failed');
                }
            });
        });
    }

   
    function setError(input, message) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-text';
        errorDiv.innerText = message;
        if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-text')) {
             input.parentElement.appendChild(errorDiv);
        }
    }

    function setSuccess(input) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }

    function clearValidation(form) {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.classList.remove('valid', 'invalid');
        });
        const errors = form.querySelectorAll('.error-text');
        errors.forEach(error => error.remove());
    }

    
    const nameFields = document.querySelectorAll('input[name="name"]');
    const savedName = localStorage.getItem('user_name');
    if (savedName) {
        nameFields.forEach(field => { field.value = savedName; });
    }
});
