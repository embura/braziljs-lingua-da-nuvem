import { Handler } from "aws-lambda";
import config from "../config.json";

export const handler: Handler = async event => {
  return {
    body: `Olá BrazilJS, este é o seu path na URL: "${event.path}"`,
    headers: config.headers,
    statusCode: 200,
  };
};