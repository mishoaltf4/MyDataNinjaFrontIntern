function scrollToSection(e, id){
	e.preventDefault();
	const section = document.getElementById(id);
	if(section){
		section.scrollIntoView({behavior: 'smooth'});
	}
}

function toggleMobileNav() {
	const mobileNav = document.getElementById('mobile-nav');
	mobileNav.classList.toggle('hidden');
}