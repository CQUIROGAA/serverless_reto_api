import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async(event, context) => {
    const params = {
        TableName: process.env.tableName,
        // 'KeyConditionExpression' defines the condition for the query
        // - 'codigo = :codigo': only return items with matching 'codigo'
        //   partition key
        KeyConditionExpression: "codigo = :codigo",
        // 'ExpressionAttributeValues' defines the value in the condition
        // - ':codigo': defines 'codigo' to be the id of the vehicle
        ExpressionAttributeValues: {
            ":codigo": "123",
        },
    };

    const result = await dynamoDb.query(params);

    // Return the matching list of items in response body
    return result.Items;
});