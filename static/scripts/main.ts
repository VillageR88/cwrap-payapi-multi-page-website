const mobileMenuButton = document.getElementById(
	"mobile-menu-button",
) as HTMLButtonElement;

mobileMenuButton.addEventListener("click", () =>
	mobileMenuButton.classList.toggle("open"),
);
