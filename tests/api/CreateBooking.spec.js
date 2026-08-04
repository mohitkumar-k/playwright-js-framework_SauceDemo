const { test, expect } = require('@playwright/test');

test('Create Booking', async ({ request }) => {

    const response = await request.post(
        "https://restful-booker.herokuapp.com/booking",
        {
            data: {
                firstname: "Mohit",
                lastname: "Brown",
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: "2018-01-01",
                    checkout: "2019-01-01"
                },
                additionalneeds: "Breakfast"
            }
        }
    );

    expect(response.status()).toBe(200);

    const responseJson = await response.json();

    console.log("Status Code :", response.status());
    console.log("Status Text :", response.statusText());
    console.log("Response :", responseJson);

    expect(responseJson.bookingid).toBeDefined();
    expect(responseJson.booking.firstname).toBe("Mohit");
    expect(responseJson.booking.lastname).toBe("Brown");
});