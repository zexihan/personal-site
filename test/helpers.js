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
    route: '/projects',
    title: 'Projects | Zexi Han',
    heading: 'PROJECTS',
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
