console.log("Succesvolle start");
const resultsSection = document.getElementById("results");

async function asyncFunc() {
    try {
        const response = await fetch("https://api.openf1.org/v1/session_result?session_key=latest");
        const data = await response.json();
        console.log(data);
        
        for (let i = 0; i < 5; i++) {
            const p = document.createElement("p");
            p.textContent = `Position: ${data[i].position} - Driver: ${data[i].driver_number}`;
            resultsSection.appendChild(p);
        }
    } 
    catch (error) {
        console.error(error);
    }
}

asyncFunc();