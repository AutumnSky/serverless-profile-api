import Portfolio from '../models/Portfolio.model';
import WorkPortfolio from '../models/WorkPortfolio.model';
import PersonalProject from '../models/PersonalProject.model';

export const getPersonalProjects = async (req, res) => {
  const result = await PersonalProject.find({});
  res.json(result);
};

export const getPersonalProjectById = async (req, res) => {
  const { id } = req.params;
  const result = await PersonalProject.findOne({ _id: id });
  res.json(result);
};

export const getWorkPortfolios = async (req, res) => {
  const result = await WorkPortfolio.find({});
  res.json(result);
};

export const getWorkPortfolioById = async (req, res) => {
  const { id } = req.params;
  const result = await WorkPortfolio.findOne({ _id: id });
  res.json(result);
};

export const getPortfolios = async (req, res) => {
  const result = await Portfolio.find({});
  res.json(result);
};

export const getPortfolioById = async (req, res) => {
  const { id } = req.params;
  const result = await Portfolio.findOne({ _id: id });
  res.json(result);
};
