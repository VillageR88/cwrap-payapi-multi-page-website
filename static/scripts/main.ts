const mobileMenuButton = document.getElementById(
	"mobile-menu-button",
) as HTMLButtonElement;
const mobileSchedule = document.getElementById(
	"mobile-schedule",
) as HTMLAnchorElement;
const email2 = document.getElementById("email2") as HTMLInputElement;

mobileMenuButton.addEventListener("click", () =>
	mobileMenuButton.classList.toggle("open"),
);

mobileSchedule.addEventListener("click", () => {
	mobileMenuButton.classList.toggle("open");
	email2.scrollIntoView();
});
