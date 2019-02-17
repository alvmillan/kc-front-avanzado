import './styles/detail.scss';
import api from './js/api';
import defaultImage from './images/default.png'

const { getBeerDetail, addLike } = api();

const detailTemplate = ({beerId, name, description, image, likes, firstBrewed, brewersTips, contributedBy}) => `
    <header id="${beerId}">
        <div class="title-section">
            <h1>${name}</h1>
        </div>
        <div class="image-container">
            <img src="${image ? image : defaultImage}">
        </div>
    </header>
    <div class="content">
        <div class="like-container">
            <button id="like-button" type="button" class="like-button">Give a like</button>
            <p> <span id="like-number">${likes}</span> total likes</p>
        </div>
        <h2>First Brewed</h2>
        <p>${firstBrewed}</p>
        <h2>Description</h2>
        <p>${description}</p>
        <h2>Tips</h2>
        <p>${brewersTips}</p>
        <h2>Contribution made by</h2>
        <p>${contributedBy}</p>
    </div>
`;

const renderDetail = async () => {
    try {
        const [, id] = window.location.search ? 
        window.location.search.split('=') : [];
        const beer = await getBeerDetail(id);
        const beerHTML = detailTemplate(beer);
        document.getElementById('detailSection').innerHTML = beerHTML;

        const likeButton = document.getElementById('like-button');
        likeButton.addEventListener('click', async(evt) => {
            evt.preventDefault();
            try {
                const [,id] = window.location.search ? 
                            window.location.search.split('=') : [];
                const like = await addLike(id);
                console.log(like);
                document.getElementById('like-number').innerHTML++;
            } catch (e) {
                console.error(e);
            }
        });

    } catch (e) {
        console.error(e);
    }
}

renderDetail();