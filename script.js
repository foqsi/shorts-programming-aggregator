import { APIKEY } from "./key.js";

const key = `&key=${APIKEY}`;
const baseLink = 'https://www.googleapis.com/youtube/v3/search?part=snippet&';
const channelPrimeagen = 'channelId=UCUyeluBRhGPCW4rPe_UvBZQ';
const channelPirateSoftware = 'channelId=UCMnULQ6F6kLDAHxofDWIbrw';
const short = '&type=video&videoDuration=short';

function getChannelInfo() {
    const getPirateSoftware = `${baseLink}${channelPirateSoftware}${short}${key}`;
    const getPrimagen = `${baseLink}${channelPrimeagen}${short}${key}`;

    fetch(getPirateSoftware)
        .then(response => response.json())
        .then(data => {
            const items = data.items;
            const mainWrapper = document.getElementsByClassName('left')[0];

            items.forEach((item) => {
                const videoId = item.id.videoId;
                const iframe = document.createElement('iframe');
                iframe.setAttribute('width', '400');
                iframe.setAttribute('height', '600');
                iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', true);

                mainWrapper.appendChild(iframe);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    fetch(getPrimagen)
        .then(response => response.json())
        .then(data => {
            const items = data.items;
            const mainWrapper = document.getElementsByClassName('right')[0];

            items.forEach((item) => {
                const videoId = item.id.videoId;
                const iframe = document.createElement('iframe');
                iframe.setAttribute('width', '400');
                iframe.setAttribute('height', '600');
                iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', true);

                mainWrapper.appendChild(iframe);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

getChannelInfo();
