function loadFeatures(targetId, csvFileName) {
  /*
    Structure of each feature icon

    <div class="icon feature-icon">
      <img src="img/Icon.png">
      <div class="icon-hover-overlay">
        <div>
          <!-- Put Feature Title Here -->
        </div>
      </div>
    </div>
  */
  
  const target = document.getElementById(targetId);
  if (target) {
    fetch(`feature_data/${csvFileName}`)
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split(/\n|\r\n/);
        lines.forEach((item) => {
          const [desc, imgSrc] = item.split(',');
          const newChild = document.createElement('div');
          newChild.className = 'icon feature-icon';
          // Title
          const overlay = document.createElement('div');
          overlay.className = 'icon-hover-overlay';
          const ovlTitle = document.createElement('div');
          ovlTitle.textContent = desc;
          overlay.appendChild(ovlTitle);
          // Icon image
          const icon = document.createElement('img');
          icon.src = imgSrc;
          // Combination
          newChild.appendChild(icon);
          newChild.appendChild(overlay);
          target.appendChild(newChild);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function loadProjects(targetId, csvFileName) {
  /*
    Structure of each feature icon

    <div class="icon project-icon">
      <img src="img/Icon.png">
      <div class="icon-hover-overlay">
        <div>
          <!-- Put Feature Title Here -->
        </div>
      </div>
    </div>

    TODO: Add onclick event as well - COMPLETE
  */
  console.log(`loading ${csvFileName}`);
  
  const target = document.getElementById(targetId);
  if (target) {
    fetch(`project_data/${csvFileName}`)
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split(/\n|\r\n/);
        lines.forEach((item) => {
          console.log(item);
          const [prjName, stacks, desc, rpsLink, prjLink, imgSrc] = item.split(',');
          const newChild = document.createElement('div');
          newChild.className = 'icon project-icon';
          // Title
          const overlay = document.createElement('div');
          overlay.className = 'icon-hover-overlay';
          const ovlTitle = document.createElement('div');
          ovlTitle.textContent = prjName;
          overlay.appendChild(ovlTitle);
          // Icon image
          const icon = document.createElement('img');
          icon.src = imgSrc;
          // Event listener
          newChild.addEventListener('click', () => {
            setModalProjectContent(prjName, stacks.split(' '), desc, rpsLink, prjLink);
            showModal();
          });
          // Combination
          newChild.appendChild(icon);
          newChild.appendChild(overlay);
          target.appendChild(newChild);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
