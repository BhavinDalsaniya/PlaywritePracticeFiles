import {test,expect} from '@playwright/test'

test('1  Simple GET request', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});

test('GET with query params', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts',
    {
      params: {
        userId: 1
      },
      headers: {
        'Authorization': 'Bearer token123',
        'Accept': 'application/json'
      }
    }
  );

  expect(response.ok()).toBeTruthy();
});


test('GET with response validation', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const body = await response.json();
  console.log(body)
  console.log(JSON.stringify(body,null,2))
  expect(body).toHaveProperty('id');
  expect(body.userId).toBe(1);
});
