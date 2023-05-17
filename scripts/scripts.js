/* Banner Icon onclick */
var buttonOnClick = function (elementList, url) {
    for (var i = 0; i <= elementList.length; i++) {
        var icon = elementList.item(i);
        if (icon !== null) {
            icon.addEventListener('click', function (e) {
                window.open(url);
            });
        }
    }
};
var githubIcon = document.getElementsByClassName('github-icon');
var linkedinIcon = document.getElementsByClassName('linkedin-icon');
var youtubeIcon = document.getElementsByClassName('youtube-icon');
var mailIcon = document.getElementsByClassName('mail-icon');
buttonOnClick(githubIcon, 'https://github.com/CactusHydroxide');
buttonOnClick(linkedinIcon, 'https://www.linkedin.com/in/clement-loy-539584269/');
buttonOnClick(youtubeIcon, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
buttonOnClick(mailIcon, 'mailto:clementloyme@gmail.com');