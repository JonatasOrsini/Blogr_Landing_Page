
    //  TODO:.
    //  TODO:.
    //  TODO:.

//  -codetitle: Submenu expander (at mobile menu).
//  -codedescription: This code is responsible for expanding each mobile submenu by touch on each mobile menu item.
//  -sectionstart: Submenu expander start.

// Grabbing each menu mobile item to set up expansion.
const submenuexpand_connect = document.querySelector(".connect-mb-li");
const submenuexpand_product = document.querySelector(".product-mb-li");
const submenuexpand_company = document.querySelector(".company-mb-li");

// Grabbing each submenu (ul), from each mobile menu item.
const submenu_connect = document.querySelector(".submenu-connect-mb");
const submenu_company = document.querySelector(".submenu-company-mb");
const submenu_product = document.querySelector(".submenu-product-mb");

// Grabbing each submenu word from each submenu, only to, change opacity when touched.
const connect_anchor = document.querySelector(".connect-anchor");
const company_anchor = document.querySelector(".company-anchor");
const product_anchor = document.querySelector(".product-anchor");

// Grabbing each arrow icon from each submenu.
const arrowicon_connect = document.querySelector(".arrow-icon-connect");
const arrowicon_company = document.querySelector(".arrow-icon-company");
const arrowicon_product = document.querySelector(".arrow-icon-product");

// When touching the menu mobile item "product".
submenuexpand_product.addEventListener("touchstart", function () {

    // Checking if the "company" submenu is expanded and colapse it.
    if (submenu_company.hasAttribute('id', "submenu-expand")) {
        submenu_company.removeAttribute('id', "submenuexpand");
        submenuexpand_company.removeAttribute('id', "on-submenu-expansion");
        arrowicon_company.removeAttribute("id", "arrow-icon-reversed");
        company_anchor.classList.remove("active-opacity");
    }

    // Checking if the "connect" submenu is expanded and colapse it.
    if (submenu_connect.hasAttribute('id', "submenu-expand")) {
        submenu_connect.removeAttribute('id', "submenuexpand");
        submenuexpand_connect.removeAttribute('id', "on-submenu-expansion");
        arrowicon_connect.removeAttribute("id", "arrow-icon-reversed");
        connect_anchor.classList.remove("active-opacity");
    }

    // Checking if the currently touched submenu is expanded already, and colapses it.
    if (submenu_product.hasAttribute('id', "submenu-expand")) {
        submenu_product.removeAttribute('id', "submenuexpand");
        submenuexpand_product.removeAttribute('id', "on-submenu-expansion");
        arrowicon_product.removeAttribute("id", "arrow-icon-reversed");
        product_anchor.classList.remove("active-opacity");
    }

    // Expands the submenu touched "product".
    else{
        product_anchor.classList.add("active-opacity");
        submenu_product.setAttribute('id', "submenu-expand");
        submenuexpand_product.setAttribute('id', "on-submenu-expansion");
        submenu_product.setAttribute('class', "submenu");
        arrowicon_product.setAttribute("id", "arrow-icon-reversed");
    }
});

// When touching the menu mobile item "company".
submenuexpand_company.addEventListener("touchstart", function () {

    // Checking if the "product" submenu is expanded and colapse it.
    if (submenu_product.hasAttribute('id', "submenu-expand")) {
        submenu_product.removeAttribute('id', "submenuexpand");
        submenuexpand_product.removeAttribute('id', "on-submenu-expansion");
        arrowicon_product.removeAttribute("id", "arrow-icon-reversed");
        product_anchor.classList.remove("active-opacity");
    }

    // Checking if the "connect" submenu is expanded and colapse it.
    if (submenu_connect.hasAttribute('id', "submenu-expand")) {
        submenu_connect.removeAttribute('id', "submenuexpand");
        submenuexpand_connect.removeAttribute('id', "on-submenu-expansion");
        arrowicon_connect.removeAttribute("id", "arrow-icon-reversed");
        connect_anchor.classList.remove("active-opacity");
    }

    // Checking if the currently touched submenu is expanded already, and colapses it.
    if (submenu_company.hasAttribute('id', "submenu-expand")) {
        submenu_company.removeAttribute('id', "submenuexpand");
        submenuexpand_company.removeAttribute('id', "on-submenu-expansion");
        arrowicon_company.removeAttribute("id", "arrow-icon-reversed");
        company_anchor.classList.remove("active-opacity");
    }

    // Expands the submenu touched "company".
    else{
        company_anchor.classList.add("active-opacity");
        submenu_company.setAttribute('id', "submenu-expand");
        submenuexpand_company.setAttribute('id', "on-submenu-expansion");
        submenu_company.setAttribute('class', "submenu");
        arrowicon_company.setAttribute("id", "arrow-icon-reversed");
    }
});

// When touching the menu mobile item "connect".
submenuexpand_connect.addEventListener("touchstart", function () {

    // Checking if product submenu is expanded and colapse it.
    if (submenu_product.hasAttribute('id', "submenu-expand")) {
        submenu_product.removeAttribute('id', "submenuexpand");
        submenuexpand_product.removeAttribute('id', "on-submenu-expansion");
        arrowicon_product.removeAttribute("id", "arrow-icon-reversed");
        product_anchor.classList.remove("active-opacity");
    }

    // Checking if company submenu is expanded and colapse it.
    if (submenu_company.hasAttribute('id', "submenu-expand")) {
        submenu_company.removeAttribute('id', "submenuexpand");
        submenuexpand_company.removeAttribute('id', "on-submenu-expansion");
        arrowicon_company.removeAttribute("id", "arrow-icon-reversed");
        company_anchor.classList.remove("active-opacity");
    }

    // Checking if the currently touched submenu is expanded already, and colapses it.
    if (submenu_connect.hasAttribute('id', "submenu-expand")) {
        submenu_connect.removeAttribute('id', "submenuexpand");
        submenuexpand_connect.removeAttribute('id', "on-submenu-expansion");
        arrowicon_connect.removeAttribute("id", "arrow-icon-reversed");
        connect_anchor.classList.remove("active-opacity");
    }

    // Expands the submenu touched "connect".
    else{
        connect_anchor.classList.add("active-opacity");
        submenu_connect.setAttribute('id', "submenu-expand");
        submenuexpand_connect.setAttribute('id', "on-submenu-expansion");
        submenu_connect.setAttribute('class', "submenu");
        arrowicon_connect.setAttribute("id", "arrow-icon-reversed");
    }
});

//  -sectionend: Submenu expand end.

//  -codetitle: Menu mobile spawner.
//  -codedescription: This code is responsible for spawning the mobile menu when the hamburger menu icon is touched. And, after spawned, the code then destroys the mobile menu when  anything in the background is touched.
//  -sectionstart: Menu mobile spawn start.

// Mobile menu spawn -codeStart
    // This code is responsible for: spawning the mobile menu by touching the hamburger menu icon. And, after spawned, the code destroys the mobile menu by touching the background.

const menubackground = document.querySelector(".menu-background");
const menucontainer = document.querySelector(".menu-mobile-div");
const menuhamburger = document.querySelector(".menu-hamburger");
const menuhamburger1child = document.querySelector(".menu-hamburger1child");
const menuhamburger2child = document.querySelector(".menu-hamburger2child");
const menuhamburger3child = document.querySelector(".menu-hamburger3child");

menuhamburger.addEventListener("touchstart", function () {
    if (menubackground.hasAttribute("menudisappear")) {
        menubackground.removeAttribute('id', "menudisappear");
        menubackground.setAttribute('id', "menuappear");
        menucontainer.removeAttribute('id', "menudisappear");
        menucontainer.setAttribute('id', "menuappear");
        menuhamburger1child.setAttribute('id', "menu-hamburger-touched-child1");
        menuhamburger2child.setAttribute('id', "menu-hamburger-touched-child2");
        menuhamburger3child.setAttribute('id', "menu-hamburger-touched-child3");
    }
    if (menubackground.hasAttribute("menuappear")) {
        menubackground.removeAttribute('id', "menuappear");
        menubackground.setAttribute('id', "menudisappear");
        menucontainer.removeAttribute('id', "menuappear");
        menucontainer.setAttribute('id', "menudisappear");
    }
    else {
        menubackground.setAttribute('id', "menuappear");
        menucontainer.setAttribute('id', "menuappear");
        menuhamburger1child.setAttribute('id', "menu-hamburger-touched-child1");
        menuhamburger2child.setAttribute('id', "menu-hamburger-touched-child2");
        menuhamburger3child.setAttribute('id', "menu-hamburger-touched-child3");
    }

});

menubackground.addEventListener("touchstart", function () {
    menubackground.removeAttribute('id', "menuappear");
    menubackground.setAttribute('id', "menudisappear");
    menucontainer.removeAttribute('id', "menuappear");
    menucontainer.setAttribute('id', "menudisappear");
    if (submenu_connect.hasAttribute('id', "submenu-expand")) {
        submenu_connect.removeAttribute('id', "submenu-expand");
    }
    if (submenu_company.hasAttribute('id', "submenu-expand")) {
        submenu_company.removeAttribute('id', "submenu-expand");
    }
    if (submenu_product.hasAttribute('id', "submenu-expand")) {
        submenu_product.removeAttribute('id', "submenu-expand");
    }
    if (menuhamburger1child.hasAttribute('id', "menu-hamburger-touched-child1")) {
        menuhamburger1child.removeAttribute('id', "menu-hamburger-touched-child1");
        menuhamburger2child.removeAttribute('id', "menu-hamburger-touched-child2");
        menuhamburger3child.removeAttribute('id', "menu-hamburger-touched-child3");
    }
    if (connect_anchor.hasAttribute("class", "active-opacity")) {
        connect_anchor.classList.remove("active-opacity");
    }
    if (company_anchor.hasAttribute("class", "active-opacity")) {
        company_anchor.classList.remove("active-opacity");
    }
    if (product_anchor.hasAttribute("class", "active-opacity")) {
        product_anchor.classList.remove("active-opacity");
    }

});
// Mobile menu spawn -codeEnd

// Navigation bar transformations -codeStart
    // This code is responsible for shrinking the navigation bar on scroll and switching it's background from transparant to a color gradient. Intended for mobile only.

const h1 = document.querySelector(".nav-trigger");
const nav = document.querySelector("nav");
const navflexleft = document.querySelector(".nav-flex-left");
const navflexright = document.querySelector(".nav-flex-right");

const navOptions = {
    rootMargin: "0px 0px 0px 0px"
};

const navObserver = new IntersectionObserver(function (entries, navObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.remove("nav-bg-animation-out");
            nav.classList.add("nav-bg-animation-in");
            navflexleft.classList.remove("shrink-nav-flex-out");
            navflexright.classList.remove("shrink-nav-flex-out");
            navflexleft.classList.add("shrink-nav-flex-in");
            navflexright.classList.add("shrink-nav-flex-in");
        }
        else {
            nav.classList.remove("nav-bg-animation-in");
            nav.classList.add("nav-bg-animation-out");
            navflexleft.classList.remove("shrink-nav-flex-in");
            navflexright.classList.remove("shrink-nav-flex-in");
            navflexleft.classList.add("shrink-nav-flex-out");
            navflexright.classList.add("shrink-nav-flex-out");
        }
    })
},
    navOptions);

navObserver.observe(h1);

//  -sectionend: Navigation bar transformations end.

//  -codetitle: Navigation Bar submenu DESKTOP
//  -codedescription: This code implements the following functionalities to the navigation bar in desktop mode. Submenu expansion on hover and Styles for each menu while hovered.
//  -sectionstart:  Navigation Bar submenu DESKTOP start.

const product_navigation_desktop = document.querySelector(".product-flex");
const company_navigation_desktop = document.querySelector(".company-flex");
const connect_navigation_desktop = document.querySelector(".connect-flex");
const login_navigation_desktop = document.querySelector(".login-flex");

const submenu_productdskt_appear = document.querySelector(".product-dskt");
const submenu_companydskt_appear = document.querySelector(".company-dskt");
const submenu_connectdskt_appear = document.querySelector(".connect-dskt");

const submenu_bg_product = document.querySelector(".submenu-bg-product");
const submenu_bg_company = document.querySelector(".submenu-bg-company");
const submenu_bg_connect = document.querySelector(".submenu-bg-connect");


product_navigation_desktop.addEventListener("mouseover", function () {
    product_navigation_desktop.setAttribute("id", "product-nav-desktop");
    submenu_productdskt_appear.setAttribute("id", "product-dskt-appear");
    submenu_bg_product.setAttribute("id", "mouse-out-submenu-bg-appear");
});

submenu_bg_product.addEventListener("mouseout", function () {
    product_navigation_desktop.removeAttribute("id", "product-nav-desktop");
    submenu_bg_product.removeAttribute("id", "mouse-out-submenu-bg-appear");
    submenu_productdskt_appear.removeAttribute("id", "product-dskt-appear");
});

submenu_productdskt_appear.addEventListener("mouseout", function () {
    product_navigation_desktop.removeAttribute("id", "product-nav-desktop");
    submenu_bg_product.removeAttribute("id", "mouse-out-submenu-bg-appear");
    submenu_productdskt_appear.removeAttribute("id", "product-dskt-appear");
});

company_navigation_desktop.addEventListener("mouseover", function () {
    company_navigation_desktop.setAttribute("id", "company-nav-desktop");
    submenu_companydskt_appear.setAttribute("id", "company-dskt-appear");
    submenu_bg_company.setAttribute("id", "mouse-out-submenu-bg-appear");

});

submenu_bg_company.addEventListener("mouseout", function () {
    company_navigation_desktop.removeAttribute("id", "company-nav-desktop");
    submenu_bg_company.removeAttribute("id", "mouse-out-submenu-bg-appear");
    submenu_companydskt_appear.removeAttribute("id", "company-dskt-appear");
});

submenu_companydskt_appear.addEventListener("mouseout", function () {
    company_navigation_desktop.removeAttribute("id", "product-nav-desktop");
    submenu_bg_company.removeAttribute("id", "mouse-out-submenu-bg-appear");
    submenu_companydskt_appear.removeAttribute("id", "company-dskt-appear");
});

connect_navigation_desktop.addEventListener("mouseover", function () {
    connect_navigation_desktop.setAttribute("id", "connect-nav-desktop");
    submenu_connectdskt_appear.setAttribute("id", "connect-dskt-appear");
    submenu_bg_connect.setAttribute("id", "mouse-out-submenu-bg-appear");
});

submenu_bg_connect.addEventListener("mouseout", function () {
    connect_navigation_desktop.removeAttribute("id", "connect-nav-desktop");
    submenu_bg_connect.removeAttribute("id", "mouse-out-submenu-bg-appear");
    submenu_connectdskt_appear.removeAttribute("id", "connect-dskt-appear");
});

submenu_connectdskt_appear.addEventListener("mouseout", function () {
    connect_navigation_desktop.removeAttribute("id", "connect-nav-desktop");
    submenu_bg_connect.removeAttribute("id", "mouse-out-submenu-bg-appear");
    submenu_connectdskt_appear.removeAttribute("id", "connect-dskt-appear");
});

login_navigation_desktop.addEventListener("mouseover", function () {
    login_navigation_desktop.setAttribute("id", "login-nav-desktop");
});

login_navigation_desktop.addEventListener("mouseout", function () {
    login_navigation_desktop.removeAttribute("id", "login-nav-desktop");
});

