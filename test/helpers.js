const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Zexi Han',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Zexi Han',
    heading: 'ABOUT ME',
  },
  {
    route: '/portfolio',
    title: 'Portfolio | Zexi Han',
    heading: 'PORTFOLIO',
  },
  {
    route: '/photograph',
    title: 'Photograph | Zexi Han',
    heading: 'PHOTOGRAPH',
  },
  {
    route: '/stats',
    title: 'Stats | Zexi Han',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Zexi Han',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
