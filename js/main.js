/**
 * PULDENG OFFICIAL LANDING PAGE - MAIN JAVASCRIPT
 * Interactive Logic: Stats Counters, WhatsApp Generator, Video Modals, FAQ, Filters
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Mobile Menu Toggle & Navigation Behavior
  // -------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      const isExpanded = navLinks.classList.contains('show');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when clicking a link
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }

  // Navbar scroll background change
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Active navigation highlight based on scroll position
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const currentNavLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (currentNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          currentNavLink.classList.add('active');
        } else {
          currentNavLink.classList.remove('active');
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 2. Animated Number Counters (Scroll Triggered)
  // -------------------------------------------------------------------------
  const counters = document.querySelectorAll('.counter');
  let hasCounted = false;

  const runCounters = () => {
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 2000; // ms
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = target * easeProgress;

        if (isDecimal) {
          counter.innerText = currentValue.toFixed(1);
        } else {
          counter.innerText = Math.floor(currentValue).toLocaleString();
        }

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = isDecimal ? target.toFixed(1) : target.toLocaleString();
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  // Observe when stats section comes into viewport
  const statsSection = document.getElementById('stats');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasCounted) {
          runCounters();
          hasCounted = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    statsObserver.observe(statsSection);
  } else {
    // Fallback if no intersection observer
    runCounters();
  }

  // -------------------------------------------------------------------------
  // 3. Portfolio Category Filter
  // -------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const campaignCards = document.querySelectorAll('.campaign-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      campaignCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 4. Rate Card Package Selection -> Auto-fill Booking Form
  // -------------------------------------------------------------------------
  const selectPkgBtns = document.querySelectorAll('.select-pkg-btn');
  const selectedPackageSelect = document.getElementById('selectedPackage');
  const bookingSection = document.getElementById('booking');

  selectPkgBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const packageName = btn.getAttribute('data-package');

      if (selectedPackageSelect) {
        // Find matching option or add custom
        let matched = false;
        for (let i = 0; i < selectedPackageSelect.options.length; i++) {
          if (selectedPackageSelect.options[i].value.includes(packageName) || packageName.includes(selectedPackageSelect.options[i].value)) {
            selectedPackageSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched && selectedPackageSelect.options.length > 0) {
          selectedPackageSelect.value = selectedPackageSelect.options[0].value;
        }

        // Trigger preview update
        updateWaPreview();
      }

      // Smooth scroll to booking section
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // -------------------------------------------------------------------------
  // 5. Smart WhatsApp Message Generator & Form Handling
  // -------------------------------------------------------------------------
  const waForm = document.getElementById('waBookingForm');
  const brandNameInput = document.getElementById('brandName');
  const picNameInput = document.getElementById('picName');
  const categorySelect = document.getElementById('productCategory');
  const packageSelect = document.getElementById('selectedPackage');
  const briefTextarea = document.getElementById('campaignBrief');
  const adminPhoneInput = document.getElementById('adminPhone');
  const waPreviewText = document.getElementById('waPreviewText');

  const generateWaMessage = () => {
    const brand = brandNameInput?.value.trim() || '[Nama Brand]';
    const pic = picNameInput?.value.trim() || '[Nama PIC]';
    const category = categorySelect?.value || 'Fashion & Lifestyle';
    const pkg = packageSelect?.value || 'Viral Growth Bundle';
    const brief = briefTextarea?.value.trim() || 'Mohon info ketersediaan slot endorsement & proposal kerja sama resmi.';

    return `Halo Tim Manajemen Puldeng,

Saya *${pic}* dari *${brand}* (Kategori: ${category}).

Kami tertarik untuk berkolaborasi dan mengajukan penawaran endorsement bersama Puldeng (Celana Totol Hitam):
📦 *Pilihan Paket:* ${pkg}
📝 *Catatan Brief / Timeline:* ${brief}

Mohon info ketersediaan jadwal slot dan prosedur MoUs/invoicing resmi. Terima kasih! 🐆🔥`;
  };

  const updateWaPreview = () => {
    if (waPreviewText) {
      waPreviewText.innerText = generateWaMessage();
    }
  };

  // Real-time preview updates on input
  [brandNameInput, picNameInput, categorySelect, packageSelect, briefTextarea].forEach(elem => {
    if (elem) {
      elem.addEventListener('input', updateWaPreview);
      elem.addEventListener('change', updateWaPreview);
    }
  });

  // Initialize preview
  updateWaPreview();

  // Form Submit -> Open WhatsApp Web / App
  if (waForm) {
    waForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let phoneNumber = adminPhoneInput?.value.trim() || '6281234567890';
      // Clean phone number from non-numeric chars
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '');

      // Ensure international 62 format
      if (phoneNumber.startsWith('0')) {
        phoneNumber = '62' + phoneNumber.substring(1);
      }

      const message = generateWaMessage();
      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;

      // Open WhatsApp in a new tab
      window.open(waUrl, '_blank');
    });
  }

  // -------------------------------------------------------------------------
  // 6. Interactive Video Preview Modal
  // -------------------------------------------------------------------------
  const videoModal = document.getElementById('videoModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const playButtons = document.querySelectorAll('.btn-play-trigger');

  const modalTitle = document.getElementById('modalTitle');
  const modalBrand = document.getElementById('modalBrand');
  const modalViews = document.getElementById('modalViews');
  const modalER = document.getElementById('modalER');
  const modalDesc = document.getElementById('modalDesc');

  const openModal = (data) => {
    if (modalTitle) modalTitle.innerText = data.title;
    if (modalBrand) modalBrand.innerText = data.brand;
    if (modalViews) modalViews.innerHTML = `<i class="fa-solid fa-eye text-primary"></i> ${data.views}`;
    if (modalER) modalER.innerHTML = `<i class="fa-solid fa-bolt text-warning"></i> ${data.er} ER`;
    if (modalDesc) modalDesc.innerText = data.desc;

    videoModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    videoModal.classList.remove('show');
    document.body.style.overflow = 'auto';
  };

  playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const data = {
        title: btn.getAttribute('data-title'),
        brand: btn.getAttribute('data-brand'),
        views: btn.getAttribute('data-views'),
        er: btn.getAttribute('data-er'),
        desc: btn.getAttribute('data-desc')
      };
      openModal(data);
    });
  });

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('show')) {
      closeModal();
    }
  });

  // -------------------------------------------------------------------------
  // 7. FAQ Accordion Toggle
  // -------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerDiv = item.querySelector('.faq-answer');

    if (questionBtn && answerDiv) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
          }
        });

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
          answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
        } else {
          item.classList.remove('active');
          answerDiv.style.maxHeight = null;
        }
      });
    }
  });
});
