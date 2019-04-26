import * as controller from '../controllers';

export default (app) => {
  app.get('/profile/portfolios', controller.getPortfolios);
  app.get('/profile/portfolio/:id', controller.getPortfolioById);
  app.get('/profile/workportfolios', controller.getWorkPortfolios);
  app.get('/profile/workportfolio/:id', controller.getWorkPortfolioById);
  app.get('/profile/personalprojects', controller.getPersonalProjects);
  app.get('/profile/personalproject/:id', controller.getPersonalProjectById);

  app.use('/', (req, res) => {
    res.send('hello  😀');
  });
};
