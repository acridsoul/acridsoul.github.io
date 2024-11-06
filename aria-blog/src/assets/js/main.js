import { bubbleCursor, fairyDustCursor, ghostCursor } from "cursor-effects";

// Initialize the ghost cursor effect for the whole page
window.addEventListener("load", () => {
    new fairyDustCursor(); // No element parameter, applies to the whole body
});


window.darkMode = false;

const stickyClasses = ["fixed", "h-14"];
const unstickyClasses = ["absolute", "h-20"];
const stickyClassesContainer = [
	"border-neutral-300/50",
	"bg-white/80",
	"dark:border-neutral-600/40",
	"dark:bg-neutral-900/60",
	"backdrop-blur-2xl",
];
const unstickyClassesContainer = ["border-transparent"];
let headerElement = null;

document.addEventListener("DOMContentLoaded", () => {
	headerElement = document.getElementById("header");

	if (
		localStorage.getItem("dark_mode") &&
		localStorage.getItem("dark_mode") === "true"
	) {
		window.darkMode = true;
		showNight();
	} else {
		showDay();
	}
	stickyHeaderFuncionality();
	applyMenuItemClasses();
	evaluateHeaderPosition();
	mobileMenuFunctionality();
});

// window.toggleDarkMode = function(){
//     document.documentElement.classList.toggle('dark');
//     if(document.documentElement.classList.contains('dark')){
//         localStorage.setItem('dark_mode', true);
//         window.darkMode = true;
//     } else {
//         window.darkMode = false;
//         localStorage.setItem('dark_mode', false);
//     }
// }

window.stickyHeaderFuncionality = () => {
	window.addEventListener("scroll", () => {
		evaluateHeaderPosition();
	});
};

window.evaluateHeaderPosition = () => {
	if (window.scrollY > 16) {
		headerElement.firstElementChild.classList.add(...stickyClassesContainer);
		headerElement.firstElementChild.classList.remove(
			...unstickyClassesContainer,
		);
		headerElement.classList.add(...stickyClasses);
		headerElement.classList.remove(...unstickyClasses);
		document.getElementById("menu").classList.add("top-[56px]");
		document.getElementById("menu").classList.remove("top-[75px]");
	} else {
		headerElement.firstElementChild.classList.remove(...stickyClassesContainer);
		headerElement.firstElementChild.classList.add(...unstickyClassesContainer);
		headerElement.classList.add(...unstickyClasses);
		headerElement.classList.remove(...stickyClasses);
		document.getElementById("menu").classList.remove("top-[56px]");
		document.getElementById("menu").classList.add("top-[75px]");
	}
};

document.getElementById("darkToggle").addEventListener("click", () => {
	document.documentElement.classList.add("duration-300");

	if (document.documentElement.classList.contains("dark")) {
		localStorage.removeItem("dark_mode");
		showDay(true);
	} else {
		localStorage.setItem("dark_mode", true);
		showNight(true);
	}
});

function showDay(animate) {
	document.getElementById("sun").classList.remove("setting");
	document.getElementById("moon").classList.remove("rising");

	let timeout = 0;

	if (animate) {
		timeout = 500;

		document.getElementById("moon").classList.add("setting");
	}

	setTimeout(() => {
		document.getElementById("dayText").classList.remove("hidden");
		document.getElementById("nightText").classList.add("hidden");

		document.getElementById("moon").classList.add("hidden");
		document.getElementById("sun").classList.remove("hidden");

		if (animate) {
			document.documentElement.classList.remove("dark");
			document.getElementById("sun").classList.add("rising");
		}
	}, timeout);
}

function showNight(animate) {
	document.getElementById("moon").classList.remove("setting");
	document.getElementById("sun").classList.remove("rising");

	let timeout = 0;

	if (animate) {
		timeout = 500;

		document.getElementById("sun").classList.add("setting");
	}

	setTimeout(() => {
		document.getElementById("nightText").classList.remove("hidden");
		document.getElementById("dayText").classList.add("hidden");

		document.getElementById("sun").classList.add("hidden");
		document.getElementById("moon").classList.remove("hidden");

		if (animate) {
			document.documentElement.classList.add("dark");
			document.getElementById("moon").classList.add("rising");
		}
	}, timeout);
}

window.applyMenuItemClasses = () => {
	const menuItems = document.querySelectorAll("#menu a");
	for (let i = 0; i < menuItems.length; i++) {
		if (menuItems[i].pathname === window.location.pathname) {
			menuItems[i].classList.add("text-neutral-900", "dark:text-white");
		}
	}
	//:class="{ 'text-neutral-900 dark:text-white': window.location.pathname == '{menu.url}', 'text-neutral-700 dark:text-neutral-400': window.location.pathname != '{menu.url}' }"
};

function mobileMenuFunctionality() {
	document.getElementById("openMenu").addEventListener("click", () => {
		openMobileMenu();
	});

	document.getElementById("closeMenu").addEventListener("click", () => {
		closeMobileMenu();
	});
}

window.openMobileMenu = () => {
	document.getElementById("openMenu").classList.add("hidden");
	document.getElementById("closeMenu").classList.remove("hidden");
	document.getElementById("menu").classList.remove("hidden");
	document.getElementById("mobileMenuBackground").classList.add("opacity-0");
	document.getElementById("mobileMenuBackground").classList.remove("hidden");

	setTimeout(() => {
		document
			.getElementById("mobileMenuBackground")
			.classList.remove("opacity-0");
	}, 1);
};

window.closeMobileMenu = () => {
	document.getElementById("closeMenu").classList.add("hidden");
	document.getElementById("openMenu").classList.remove("hidden");
	document.getElementById("menu").classList.add("hidden");
	document.getElementById("mobileMenuBackground").classList.add("hidden");
};


// Typing effect
var i = 0;
var txt = 'Hello, I am Awestin';

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("acrisoul").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 200)
  } 
  // else {
  //   i = 0;
  //   document.getElementById("acrisoul").textContent = '';
  //   setTimeout(typeWriter, 200);
  // }
}
typeWriter()


// js for the clock
setInterval(myClock, 0);
function myClock() {
  const date = new Date();
  document.getElementById("digital-clock").textContent = date.toLocaleTimeString();
}

// js for the os info

function getOSInfo() {
	var userAgent = window.navigator.userAgent;
	var os = "Unknown";

	if (userAgent.indexOf('Win') !== -1) {
		os = 'Windows';
	} else if (userAgent.indexOf('Mac') !== -1) {
		os = 'MacOS';
	} else if (userAgent.indexOf('Linux') !== -1) {
		os = 'Linux';
	} else if (userAgent.indexOf('Android') !== -1) {
		os = 'Android';
	} else if (userAgent.indexOf('like Mac') !== -1) {
		os = 'iOS';
	}

	return os;
}

function getBrowserName() {
	var userAgent = navigator.userAgent;
	var browserName = "Unknown";

	if (userAgent.indexOf("Firefox") > -1) {
		browserName = "Mozilla Firefox";
	} else if (userAgent.indexOf("SamsungBrowser") > -1) {
		browserName = "Samsung Internet";
	} else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
		browserName = "Opera";
	} else if (userAgent.indexOf("Trident") > -1) {
		browserName = "Microsoft Internet Explorer";
	} else if (userAgent.indexOf("Edg") > -1) {
		browserName = "Microsoft Edge";
	} else if (userAgent.indexOf("Chrome") > -1) {
		browserName = "Google Chrome";
	} else if (userAgent.indexOf("Safari") > -1) {
		browserName = "Apple Safari";
	}

	return browserName;
}

document.getElementById('os-info').innerText = 'Your Operating System: ' + getOSInfo();
document.getElementById('browser-info').innerText = 'Browser Name: ' + getBrowserName();
document.getElementById('platform').innerText = 'Platform: ' + getOSInfo(); // Using getOSInfo() instead of navigator.platform
document.getElementById('language').innerText = 'Language: ' + navigator.language;


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chatbot-icon").addEventListener("click", toggleChatbot);
    document.getElementById("close-btn").addEventListener("click", toggleChatbot);
});

function toggleChatbot() {
    const chatbotContainer = document.getElementById("chatbot-container");
    chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "block" : "none";
    console.log('Chatbot toggled');
}