function getSync() {
    console.log("Trying to fetch leksypooh....");

    let fiveSecondFromNow = new Date().getTime() + 5000;
    while (fiveSecondFromNow > new Date().getTime()) {}

    console.log("Fetch Completed");
    console.log({
        url: "https://www.leksypooh.com",
        data: {
            motto: "Anger is the way"
        }
    });
}