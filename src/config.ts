import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  jwt: {
    secret: process.env.JWT_SECRET,
    accessExpiration: "5m",
    refreshTokenExpiration: "1d",
  },
};

export default config;
