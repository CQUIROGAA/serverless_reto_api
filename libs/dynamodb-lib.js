import AWS from "aws-sdk";

// AWS.config.update({ region: "my-region" }); Si la bd esta en otra region
const client = new AWS.DynamoDB.DocumentClient();

export default {
    get: (params) => client.get(params).promise(),
    put: (params) => client.put(params).promise(),
    query: (params) => client.query(params).promise(),
    update: (params) => client.update(params).promise(),
    delete: (params) => client.delete(params).promise(),
};