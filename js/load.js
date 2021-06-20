function loadFeatures(targetId, csvFileName) {
  const target = document.getElementById(targetId);
  if (target) {
    fetch(`feature_data/${csvFileName}`)
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split(/\n|\r\n/);
        lines.forEach((item) => {
          const [desc, imgSrc] = item.split(',');
          const newChild = document.createElement('div');
          // Description
          // Icon image
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function loadProjects(targetId, csvFileName) {
  const target = document.getElementById(targetId);
  if (target) {
    fetch(`feature_data/${csvFileName}`)
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split(/\n|\r\n/);
        lines.forEach((item) => {
          const [prjName, stacks, desc, rpsLink, prjLink, imgSrc] = item.split(',');
          const newChild = document.createElement('div');
          // Project name
          // Used stacks
          // Description
          // Repository link
          // Project link
          // Icon image
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
