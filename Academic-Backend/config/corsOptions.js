const allowedOrigins = [
  
  "https://college-academic-project-frontend.vercel.app/",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (
      allowedOrigins.indexOf(origin) !== -1
      //! comment out/remove in production
       || !origin
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
