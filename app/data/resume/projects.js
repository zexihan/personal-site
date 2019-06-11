
const projects = [
  {
    company:
      "TripElf - Interactive Map with Neighborhood-Level Airbnb Review Summarization",
    position: "NU",
    link: "https://tripelf.herokuapp.com",
    daterange: "January 2019 - April 2019",
    points: [
      "Developed a web map application with React, Redux, JPA with Spring Boot, and MySQL stack.",
      "Developed the frontend with React, Mapbox GL JS, and D3.js; used Redux for centralized state management.",
      "Implemented the MVC backend with Spring data JPA and MySQL database for site activity storage",
      "Applied text models (KL-Sum, LDA-Sum and ELMo) for Airbnb reviews summarization with NLTK and PyTorch."
    ]
  },
  {
    company: "TuneS - Social Music Web App",
    position: "NU",
    link: "https://tunes-app.herokuapp.com",
    daterange: "January 2019 - April 2019",
    points: [
      "Developed a music themed SPA using Angular, Express, MongoDB, Node.js stack and Spotify Web API.",
      "Designed and developed the AJAX-based frontend with Angular for interactions (browse/comment/like/share/follow).",
      "Implemented the RESTful APIs with Express and MongoDB/mongoose; used Redis as web cache.",
      "Used Passport.js for both local and OAuth-based user authentication."
    ]
  },
  {
    company: "Parallel Matrix Multiplication in MapReduce",
    position: "NU",
    link: "/documents/Parallel_Matrix_Multiplication.pdf",
    daterange: "October 2018 - December 2018",
    points: [
      "Implemented the parallelization algorithms (Horizontal-Vertical Partitioning and Vertical-Horizontal Partitioning) for large synthetic dense and sparse matrix multiplication with Hadoop MapReduce in Java.",
      "Implemented the same algorithms using Spark Scala and tested their speedup and scalability performance.",
      "Deployed the programs onto Amazon EMR running with different settings of the cluster; stored the results to S3."
    ]
  },
  {
    company: "Magical Newspaper iOS App with ARKit and CreateML/CoreML",
    position: "",
    link: "",
    daterange: "June 2018 - September 2018",
    points: [
      "Created a mobile app in Swift using ARKit for detecting images and playing video in augmented reality.",
      "Used CreateML/CoreML for sentiment prediction of newspaper title by analyzing tweets fetched from Twitter API.",
      "Designed and developed abstract object model classes, storyboard views, and view controllers."
    ]
  }
];

export default projects;
