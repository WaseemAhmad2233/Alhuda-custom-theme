  document.addEventListener('DOMContentLoaded', function() {
    const triggers = document.querySelectorAll('.custom-footer .cf-accordion-trigger');
    
    triggers.forEach(button => {
      button.addEventListener('click', function() {
        if (window.innerWidth < 768) {
          const parent = this.parentElement;
          const content = parent.querySelector('.cf-accordion-content');
          const isOpen = parent.classList.contains('is-open');

          document.querySelectorAll('.custom-footer .cf-block').forEach(block => {
            block.classList.remove('is-open');
            const c = block.querySelector('.cf-accordion-content');
            if(c) c.style.maxHeight = null;
          });

          if (!isOpen) {
            parent.classList.add('is-open');
            content.style.maxHeight = content.scrollHeight + "px";
            this.setAttribute('aria-expanded', 'true');
          } else {
             this.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  });