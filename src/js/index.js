import '../scss/main.scss';

fetch('https://api.github.com/users/adrian-gabor/repos?sort=created&direction=asc')
    .then(resp => resp.json())
    .then(resp => {
        const container = document.querySelector('.projects-grid--js');
        console.log(resp)
        for (let repo of resp) {
            const { name, description, homepage, html_url } = repo;
            const myTemplate = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src="img/github.svg">
          <h3 class="project__title project__grid">
            <span class="project__label">project:</span>
            <span class="project__title-special">${name}</span>
          </h3>
          <p class="project__grid project__grid-descripion">
            <span class="project__label">description:</span>
            <span>${description}</span>
          </p>
          <p class="project__grid">
            <span class="project__label">demo:</span>
            <span>&lt;<a class="project__link" href="${homepage}">see_here</a>&gt;</span>
          </p>
          <p class="project__grid">
            <span class="project__label">github:</span>
            <span>&lt;<a class="project__link" href="${html_url}">source_code</a>&gt;</span>
          </p>
        </div>
      </article>`;
            if (description) {
                container.innerHTML += myTemplate;
            }
        }
    })
    .catch(error => {
        console.log('nie udało się pobrać')
    })