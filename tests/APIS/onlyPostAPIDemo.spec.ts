import { test, expect } from '@playwright/test';

test('Simple POST request', async ({ request }) => {
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'Playwright',
                body: 'API testing',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(201);
});

test('POST with headers', async ({ request }) => {
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: {
                name: 'Bhavin',
                role: 'QA'
            }
        }
    );

    console.log(response.status())
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    console.log(body)
    console.log(JSON.stringify(body, null, 2))
});

test('POST with Bearer token', async ({ request }) => {
    const token = 'jwt_token_here';

    const response = await request.post(
        'https://api.example.com/orders',
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                productId: 10,
                quantity: 2
            }
        }
    );

    expect(response.status()).toBe(201);
});

import path from 'path';

test('POST with multipart form-data', async ({ request }) => {
    const response = await request.post(
        'https://api.example.com/upload',
        {
            multipart: {
                file: path.resolve('test-data/sample.pdf'),
                description: 'Test file'
            }
        }
    );

    expect(response.status()).toBe(200);
});

test('POST with cookies', async ({ request }) => {
    const response = await request.post(
        'https://api.example.com/action',
        {
            headers: {
                Cookie: 'sessionId=abc123'
            },
            data: { action: 'submit' }
        }
    );

    expect(response.status()).toBe(200);
});

test('POST - 400 Bad Request', async ({ request }) => {
    const response = await request.post(
        'https://reqres.in/api/users',
        {
            data: {} // missing required fields
        }
    );


    console.log(response.status())
    expect(response.status()).toBe(400);
});


