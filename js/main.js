document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  });

  loadFeatures('article-mains', 'mains.csv');
  loadFeatures('article-training', 'training.csv');
  loadFeatures('article-at-least-once', 'at_least_one.csv');

  loadProjects('article-projects-in-operation', 'projects_in_operation.csv');
  loadProjects('article-projects-closed', 'projects_closed.csv');
  loadProjects('article-toy-projects', 'toy_projects.csv');
  loadProjects('article-other-projects', 'other_projects.csv');
});
