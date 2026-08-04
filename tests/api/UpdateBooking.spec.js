const {test, expect} = require('@playwright/test');


test('Update Booking', async({request})=>{
    const createToken = await request.post('https://restful-booker.herokuapp.com/auth',{
        headers:{
                'Content-Type': 'application/json'
        },data:{
             "username" : "admin",
            "password" : "password123"
        }
    })
    const createTokenJson= await createToken.json();
    const token = createTokenJson.token;



    const newBooking = await request.post('https://restful-booker.herokuapp.com/booking',{
        data:{
                 "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
        },
        headers:{
            'Content-Type': 'application/json'
        }
    });

    const newBookingJson = await newBooking.json();
    console.log(newBookingJson);
    
    const bookingId = newBookingJson.bookingid;


    const resp = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`,{
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`


        },data:{
                "firstname" : "Mohit",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
    })
    const respJson = await resp.json();
    console.log(respJson);

    const getUpdatedResp = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);
    const getUpdatedRespJson = await getUpdatedResp.json();
    console.log(getUpdatedRespJson);
    
    

})