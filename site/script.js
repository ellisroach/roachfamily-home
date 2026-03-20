const services = [
    "https://media.roachfamily.net",
    "https://photos.roachfamily.net",
    "https://notes.roachfamily.net",
    "https://meals.roachfamily.net",
    "https://ai.roachfamily.net",
    "https://mind.roachfamily.net"
];

async function checkStatus() {
    let online = 0;

    await Promise.all(
        services.map(async (url) => {
            try {
                await fetch(url, { mode: "no-cors" });
                online++;
            } catch (e) {}
        })
    );

    const status = document.getElementById("status");
    status.textContent = `System status: ${online}/${services.length} services reachable`;
}

checkStatus();
