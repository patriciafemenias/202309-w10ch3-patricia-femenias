import mongoose from "mongoose";
import chalk from "chalk";

const connectToDataBase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    console.log(chalk.green("Connected to batabase"));
  } catch (error) {
    console.log(chalk.red("Imposible to connect to batabase"));
  }
};

export default connectToDataBase;
