import 'reflect-metadata';
import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
    const invokedAt = new Date();
    console.log('event: ' + JSON.stringify(event));

    return 'Test Lambda Invoked: ' + invokedAt
};
