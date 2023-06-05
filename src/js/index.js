console.log("Hi! I`m Norbert - nice to meet you 😃");

fetch("https://api.github.com/users/NoriFe/repos")
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".projects-grid--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;
      const template = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src="../pictures/gitHubIcon.svg" alt="" />
          <h3 class="project__grid project__title">
            <span class="project__label">project:</span> 
            <span>${name}</span>
          </h3>
          <p class="project__grid project__grid--description">
            <span class="project__label">description:</span>
            <span>${description}</span>
          </p>
          <p class="project__grid">
            <span class="project__label">demo:</span>
            <span
              >&lt;<a
                target="_blank"                
                rel="noopener noreferrer"
                class="project__link"
                href="${homepage}"
                title="${name} - demo"
                >see_here</a
              >&gt;</span
            >
          </p>
          <p class="project__grid">
            <span class="project__label">github:</span>
            <span
              ><span
                >&lt;<a
                target="_blank"
                rel="noopener noreferrer"
                  class="project__link"
                  href="${html_url}"
                  title=""${name} - code"
                  >see_here</a
                >&gt;</span
              >
            </span>
          </p>
        </div>
      </article>`;
      if (description) {
        container.innerHTML += template;
      }
    }
    console.log(res);
  })
  .catch((e) => console.log(e));
  