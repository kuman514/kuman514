function setModalProjectContent(prjName, stacks, desc, repo, rel) {
  // prjName [string]: Project name
  // stacks [string[]]: Project name
  // desc [falsey | string]: Project name
  // repo [string]: Project name
  // rel [falsey | string]: Project name

  /*
    Structure of modal project content

    <h2>Project Name</h2>
    <div class="stacks">
      <span>TypeScript</span>
      <span>JavaScript</span>
      <span>Koishi</span>
    </div>

    <h3>Description</h3>
    <p>
      Lorem ipsum.
    </p>

    <h3>Repository</h3>
    <p>
      <a href="https://twitter.com/kumankoishi" target="_blank">
        Repository Link
      </a>
    </p>

    <h3>Release</h3>
    <p>
      <a href="https://twitter.com/kumankoishi" target="_blank">
        Try it
      </a>
    </p>
  */

  // Initialize
  const target = document.querySelector('.modal-content');
  while (target.firstChild) {
    target.firstChild.remove();
  }

  // Set project title
  const prjTitle = document.createElement('h2');
  prjTitle.textContent = prjName;
  target.appendChild(prjTitle);

  // Set stacks
  const stackList = document.createElement('div');
  stackList.className = 'stacks';
  stacks.forEach((item) => {
    const eachStack = document.createElement('span');
    eachStack.textContent = item;
    stackList.appendChild(eachStack);
  });
  target.appendChild(stackList);

  // Set description
  if (desc && desc.trim() !== '') {
    // Title
    const descTitle = document.createElement('h3');
    descTitle.textContent = 'Description';
    target.appendChild(descTitle);

    // Content
    const descContent = document.createElement('p');
    descContent.textContent = desc;
    target.appendChild(descContent);
  }

  // Set repository title
  const repoTitle = document.createElement('h3');
  repoTitle.textContent = 'Repository';
  target.appendChild(repoTitle);
  // Set repository content
  const repoContent = document.createElement('p');
  const repoLink = document.createElement('a');
  repoLink.href = repo;
  repoLink.target = '_blank';
  repoLink.textContent = 'Repository Link';
  repoContent.appendChild(repoLink);
  target.appendChild(repoContent);


  // Set release
  if (rel && rel.trim() !== '') {
    // Title
    const relTitle = document.createElement('h3');
    relTitle.textContent = 'Release';
    target.appendChild(relTitle);

    // Content
    const relContent = document.createElement('p');
    const relLink = document.createElement('a');
    relLink.href = rel;
    relLink.target = '_blank';
    relLink.textContent = 'Try it!';
    relContent.appendChild(relLink);
    target.appendChild(relContent);
  }
}

function showModal() {
  document.querySelector('.modal').classList.remove('modal-hidden');
}

function closeModal() {
  document.querySelector('.modal').classList.add('modal-hidden');
}