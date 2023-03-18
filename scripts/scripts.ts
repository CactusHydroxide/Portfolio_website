/* Banner Icon onclick */
const buttonOnClick: (elementList: HTMLCollectionOf<Element>, url: string) => void = (
	elementList,
	url
) => {
	for (let i: number = 0; i <= elementList.length; i++) {
		let icon = elementList.item(i);
		if (icon !== null) {
			icon.addEventListener('click', (e: Event) => {
				window.open(url);
			});
		}
	}
};

const githubIcon: HTMLCollectionOf<Element> = document.getElementsByClassName('github-icon');
const linkedinIcon: HTMLCollectionOf<Element> = document.getElementsByClassName('linkedin-icon');
const youtubeIcon: HTMLCollectionOf<Element> = document.getElementsByClassName('youtube-icon');
const mailIcon: HTMLCollectionOf<Element> = document.getElementsByClassName('mail-icon');

buttonOnClick(githubIcon, 'https://github.com/CactusHydroxide');
buttonOnClick(linkedinIcon, 'https://www.linkedin.com/in/clement-loy-539584269/');
buttonOnClick(youtubeIcon, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
buttonOnClick(mailIcon, 'lol');
