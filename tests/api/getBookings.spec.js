const {test , except} = require('@playwright/test');

test("GetBookingIds", async({request})=>{
    const response = await request.get("https://restful-booker.herokuapp.com"+"/booking");
    const responseJson= await response.json();
    console.log(response.status());
    
    console.log(responseJson);

})
test("get bookingId1", async({request}) => {
    const resp = await request.get("https://restful-booker.herokuapp.com/booking/2132");

    const respJson = await resp.json();
    console.log(respJson);
    
})