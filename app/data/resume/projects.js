
const projects = [
  {
    company: 'TripElf - Interactive Map with Neighborhood-Level Airbnb Review Summarization',
    position: 'NU',
    link: '',
    daterange: 'January 2018 - June 2018',
    points: [
      'Proposed and developed an application to help travelers pick their favorite short-term rental neighborhoods before traveling by demonstrating the machine-generated overviews of the neighborhoods.',
      'Explored and applied various text models, such as KL-Sum, LDA-Sum and ELMo, to summarize Airbnb reviews and generate neighborhood overview from travelers’ viewpoint.',
      'Implemented an interactive map web app in React and Mapbox GL JS for data visualization, drawing travelers an vivid picture of NYC neighborhoods, including descriptive statistics such as entertainment, expense, transit, noise and safety.',
    ],
  }, {
    company: 'Feedback Collection Fullstack Web App',
    position: 'NU',
    link: '',
    daterange: 'September 2016 - Present',
    points: [
      'Developed a web app with MERN stack that serves for startup owner’s app/service by sending customer an email requesting feedback and tabulating survey results to the user.',
      'Handled authentication, payment and automated emails with RESTful APIs in Express and Node.js back-end.',
      'Designed and programmed an interactive React and Redux front-end utilizing AJAX technology.',
    ],
  }, {
    company: 'Parallel Matrix Multiplication in MapReduce',
    position: 'NU',
    link: '',
    daterange: 'September 2016 - Present',
    points: [
      'Studied and implemented the different parallelization mechanisms for large matrix multiplication in MapReduce, including Horizontal-Vertical Partitioning and Vertical-Horizontal Partitioning for synthetic dense and sparse matrices.',
      'Measured and compared speedup and scalability performance for the two intelligent partitioning methods on Amazon EMR and S3 with different settings of the cluster.',
    ],
  }, {
    company: 'Business-Neighborhood Interaction on Yelp and Census Data',
    position: 'NU',
    link: '',
    daterange: 'September 2016 - Present',
    points: [
      'Extracted representative neighborhood-level features of business dynamics from Yelp dataset.',
      'Employed K-Means and GMM clustering at both the Zillow Neighborhood and Census Tract level to identify clusters based on population characteristics and socioeconomic metrics.',
      'Investigated the relationship between local business dynamics and neighborhood characteristics.',
    ],
  }
];

export default projects;
