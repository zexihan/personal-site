
const projects = [
  {
    company:
      "TripElf - Interactive Map with Neighborhood-Level Airbnb Review Summarization (ongoing)",
    position: "NU",
    link: "https://tripelf.herokuapp.com",
    daterange: "January 2019 - April 2019",
    points: [
      "Proposed and developed an application to help travelers pick their favorite short-term rental neighborhoods before traveling by demonstrating the machine-generated overviews of the neighborhoods.",
      "Explored and applied various text models, such as KL-Sum, LDA-Sum and ELMo, to summarize Airbnb reviews and generate neighborhood overview from travelers’ point of view.",
      "Implemented an interactive-map web app in React and Mapbox GL JS for data visualization, drawing travelers a vivid picture of NYC neighborhoods from the aspect of recreation, transit, noise, safety, expense, and Airbnb host."
    ]
  },
  {
    company: "TuneS - Social Music Web App (ongoing)",
    position: "NU",
    link: "https://tunes-app.herokuapp.com",
    daterange: "January 2019 - April 2019",
    points: [
      "Developed a SPA using MERN stack and Spotify Web API that serves for music fans to engage with other music lovers and discover new songs and artists.",
      "Handled OAuth authorization, like/share/follow functions with a RESTful API built in Express and MongoDB back-end.",
      "Designed and wrote a responsive and interactive React front-end utilizing Bootstrap and AJAX techniques."
    ]
  },
  {
    company: "Parallel Matrix Multiplication in MapReduce",
    position: "NU",
    link: "/documents/Parallel_Matrix_Multiplication.pdf",
    daterange: "October 2018 - December 2018",
    points: [
      "Studied and implemented the different parallelization mechanisms for large matrix multiplication in MapReduce, including Horizontal-Vertical Partitioning and Vertical-Horizontal Partitioning for synthetic dense and sparse matrices.",
      "Measured and compared speedup and scalability performance for the two intelligent partitioning methods on Amazon EMR and S3 with different settings of the cluster."
    ]
  },
  {
    company: "Business-Neighborhood Interaction on Yelp and Census Data",
    position: "NU",
    link: "/documents/Project_Report_CS6220.pdf",
    daterange: "September 2017 - December 2017",
    points: [
      "Extracted representative neighborhood-level features of business dynamics from Yelp dataset.",
      "Employed K-Means and GMM clustering at both the Zillow Neighborhood and Census Tract level to identify clusters based on population characteristics and socioeconomic metrics.",
      "Investigated the relationship between local business dynamics and neighborhood characteristics."
    ]
  }
];

export default projects;
