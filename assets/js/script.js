"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggler = document.querySelector('#sidebarToggler');
    const sidebar = document.querySelector('.ai-wd-sidebar');
    const mainContent = document.querySelector('.ai-wd-main-content');

    sidebarToggler.addEventListener('click', function () {
        // Toggle .sidebar-full class on .ai-wd-sidebar and .ai-wd-main-content
        sidebar.classList.toggle('sidebar-full');
        mainContent.classList.toggle('sidebar-full');
    });
});


// eye toggler btn for eye hide/show
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('eyeToggle');

    toggleBtn.addEventListener('click', function () {
        // Toggle the 'toggled' class on the button itself
        toggleBtn.classList.toggle('eyeToggled');
    });
});

// filter section open/close
function initializeFiltering() {
    const filterBtn = document.getElementById('filterFiles');
    const fileCardsWrapper = document.getElementById('fileCardsWrapper');
    const filterWrapper = document.getElementById('filterWrapper');
    const closeFilterBtn = document.getElementById('closeFilter');

    filterBtn.addEventListener('click', function () {
        // Toggle the classes on the fileCardsWrapper
        if (fileCardsWrapper.classList.contains('col-xl-12')) {
            fileCardsWrapper.classList.remove('col-xl-12');
            fileCardsWrapper.classList.add('col-xl-9');
            filterBtn.classList.add('active');
            filterWrapper.classList.remove('d-none');
        } else {
            fileCardsWrapper.classList.remove('col-xl-9');
            fileCardsWrapper.classList.add('col-xl-12');
            filterBtn.classList.remove('active');
            filterWrapper.classList.add('d-none');
        }
    });

    closeFilterBtn.addEventListener('click', function () {
        // Toggle the classes on the fileCardsWrapper
        if (!fileCardsWrapper.classList.contains('col-xl-12')) {
            fileCardsWrapper.classList.remove('col-xl-9');
            fileCardsWrapper.classList.add('col-xl-12');
            filterBtn.classList.remove('active');
            filterWrapper.classList.add('d-none');
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeFiltering);


