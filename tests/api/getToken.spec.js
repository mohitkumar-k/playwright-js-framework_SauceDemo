
const {test, except} = require('@playwright/test');

test("Auth - CreateToken",async({request})=>{
    const response= await request.post("https://restful-booker.herokuapp.com/auth",{
        data:{
                "username" : "admin",
                "password" : "password123"
            },
        headers:{
            "Content-Type": 'application/json'
        }
        
    });
    const responseJson = await response.json();

    console.log((await response).status());
    console.log(responseJson);
})