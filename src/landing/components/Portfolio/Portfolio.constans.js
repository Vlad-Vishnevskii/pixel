import { getAssetsPath } from '../../helpers';

export const PORTFOLIO_LIST = [
  {
    portfolio: getAssetsPath(
      '/images/landingContent/portfolio/portfolio-1.png'
    ),
    avatar: getAssetsPath('/images/landingContent/portfolio/student.jpg'),
    name: 'Яна Гусева',
  },
];

export const INITIAL_SHOW_COUNT = 1;
export const ITERATION_SHOW_COUNT = 1;
