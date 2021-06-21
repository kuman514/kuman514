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

  loadFeatures('mains', 'mains.csv');
  loadFeatures('training', 'training.csv');
  loadFeatures('at-least-once', 'at_least_one.csv');

  loadProjects('projects-in-operation', 'projects_in_operation.csv');
  loadProjects('projects-closed', 'projects_closed.csv');
  loadProjects('toy-projects', 'toy_projects.csv');
  loadProjects('other-projects', 'other_projects.csv');

  loadFeatures('contact-me', 'contact.csv');
});
