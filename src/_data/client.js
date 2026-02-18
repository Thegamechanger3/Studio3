module.exports = {
    name: "Studio 3",
    email: "houseofhairlu@gmail.com",
    phoneForTel: "621 411 909",
    phoneFormatted: "(+352) 621 411 909",
    address: {
        lineOne: "9 Rue de l'Alzette",
        city: "Esch-sur-Alzette",
        zip: "4011",
        country: "LU",
        mapLink: "https://maps.app.goo.gl/XKu6KcQQ4BVojKnr9",
    },
    socials: {
        facebook: "https://www.facebook.com/p/Studio-3-61575205494311/",
        instagram: "https://www.instagram.com/studio3.lu/",
        tiktok: "https://www.tiktok.com/@studio3.lu",
    },
    domain: "https://www.studio3.lu",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
