import { test, expect } from '@playwright/test'

//200 – OK
//201 – Created, New resource created
//204 – No Content, Success but no response body

//400 – Bad Request, Request is malformed/invalid, Wrong JSON format, Missing required field, Invalid data type
//401 – Unauthorized.
//403 – Forbidden, Auth is valid, but permission denied.
//404 - The server is reachable, but the requested resource does not exist.

//405 - Method Not Allowed, HTTP method not supported on endpoint
//409 – Conflict, 409 occurs when request conflicts with existing resource.
//415 – Unsupported Media Type, 415 happens when server doesn’t support the request content type.
//422 – Unprocessable Entity, Validation error.


//429 – Too Many Requests, Rate limit exceeded, Too many API calls in short time.

//500 – Internal Server Error, 500 indicates server error even though request was valid.
//501 - Not Implemented.
//502 - Bad Gateway.
//503 - Service Unavailable.
//599 - Network Timeout.



let demofirstname = 'Bhavin'
let demolastname = 'Dalsaniya'
let bookingID = 0;
let token: string;

test('Post Request', async({ request }) => {

    let response = await request.post('https://restful-booker.herokuapp.com/booking',
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

            data: {
                firstname: demofirstname,
                lastname: demolastname,
                totalprice: 150,
                depositpaid: true,
                bookingdates: {
                    checkin: "2025-12-20",
                    checkout: "2025-12-25"
                },
                additionalneeds: "Breakfast"
            }
        }
    );


    let responsecode = response.status();
    console.log('Response status code : '+responsecode)

    let fullbody = await response.json();
    console.log(JSON.stringify(fullbody,null,2))
})

//In Get Body not required. Header or Para 
test('Get API', async ({ request }) => {
    let response = await request.get("https://restful-booker.herokuapp.com/booking",
        {
            headers: {
                'Authorization': 'Bearer your_token_here',
                'Accept': 'application/jsonhjahssha',
                'Content-Type': 'application/jsonnn'
            },
            params: {
                firstname: demofirstname,
                lastname: demolastname
            }
        }
    );

    // 1️⃣ Status
    console.log('Status:', response.status());
    console.log('Status Text:', response.statusText());
    // 2️⃣ Headers
    //   console.log('Headers:', response.headers());
    let body = await response.json()
    //Here in bracket last para is space
    console.log(JSON.stringify(body, null, 1))

    let firstobject = body[0]; // { "bookingid": 8 }
    console.log('firstobject : ' + JSON.stringify(firstobject,null,2))

    let numberofkeys = Object.keys(firstobject).length;
    console.log('numberofkeys : ' + numberofkeys) //1

    let firstkeyfirstvalue = firstobject['bookingid']
    console.log('firstkeyfirstvalue : ' + firstkeyfirstvalue)

    bookingID= firstkeyfirstvalue

    console.log('bookingID : '+bookingID)
})

test('Token API',async({request})=>{

// 🔹 GENERATE TOKEN
  const authResponse = await request.post(
    'https://restful-booker.herokuapp.com/auth',
    {
      headers: { 'Content-Type': 'application/json' },
      data: {
        username: 'admin',
        password: 'password123'
      }
    }
  );

   let fullbody = await authResponse.json();
    console.log('authResponse',JSON.stringify(fullbody,null,2))

  token = (await authResponse.json()).token;
  console.log('token',token)

});


test('Delete API',async({request})=>{

    let urlofdelete = 'https://restful-booker.herokuapp.com/booking/'+bookingID

    console.log('urlofdelete',urlofdelete)

    let response = await request.delete(urlofdelete,{
      headers: {
        'Cookie': `token=${token}`
      }
    })
    let responsecode = response.status();
    console.log('responsecode',responsecode)
})