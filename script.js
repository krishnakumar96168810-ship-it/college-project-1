/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


/* ================= POWER CALCULATOR ================= */

function calculatePower() {

    // Get input values

    const windSpeed =
        Number(document.getElementById("windSpeed").value);

    const radius =
        Number(document.getElementById("radius").value);

    const density =
        Number(document.getElementById("density").value);

    const cp =
        Number(document.getElementById("cp").value);

    const efficiency =
        Number(document.getElementById("efficiency").value);


    // Validate inputs

    if (
        windSpeed <= 0 ||
        radius <= 0 ||
        density <= 0 ||
        cp < 0 ||
        cp > 0.59 ||
        efficiency < 0 ||
        efficiency > 1
    ) {

        alert(
            "Please enter valid values for all parameters."
        );

        return;
    }


    /*
        Formula 1:

        Swept Area

        A = πr²
    */

    const area =
        Math.PI * Math.pow(radius, 2);


    /*
        Formula 2:

        Available Wind Power

        P = 1/2 × ρ × A × V³
    */

    const windPower =
        0.5 *
        density *
        area *
        Math.pow(windSpeed, 3);


    /*
        Formula 3:

        Electrical Power

        P = Wind Power × Cp × η
    */

    const electricalPower =
        windPower *
        cp *
        efficiency;


    // Display results

    document.getElementById("areaResult")
        .textContent =
        area.toFixed(3) + " m²";


    document.getElementById("windPowerResult")
        .textContent =
        windPower.toFixed(2) + " W";


    document.getElementById("electricPowerResult")
        .textContent =
        electricalPower.toFixed(2) + " W";


    document.getElementById("electricPower")
        .textContent =
        electricalPower.toFixed(2);

}
/* ================= EXPERIMENTAL PERFORMANCE ================= */

function calculateExperimentalPerformance() {

    // Get prototype measurements

    const windSpeed =
        Number(
            document.getElementById("expWindSpeed").value
        );

    const radius =
        Number(
            document.getElementById("expRadius").value
        );

    const density =
        Number(
            document.getElementById("expDensity").value
        );

    const cp =
        Number(
            document.getElementById("expCp").value
        );

    const voltage =
        Number(
            document.getElementById("measuredVoltage").value
        );

    const current =
        Number(
            document.getElementById("measuredCurrent").value
        );


    // Validate values

    if (
        windSpeed <= 0 ||
        radius <= 0 ||
        density <= 0 ||
        cp < 0 ||
        cp > 0.59 ||
        voltage < 0 ||
        current < 0
    ) {

        alert(
            "Please enter valid measurement values."
        );

        return;
    }


    /*
        STEP 1
        Calculate swept area

        A = πr²
    */

    const area =
        Math.PI * Math.pow(radius, 2);


    /*
        STEP 2
        Calculate available wind power

        P = 1/2 × ρ × A × V³
    */

    const windPower =
        0.5 *
        density *
        area *
        Math.pow(windSpeed, 3);


    /*
        STEP 3
        Calculate theoretical mechanical power

        Pmechanical = Pwind × Cp
    */

    const mechanicalPower =
        windPower * cp;


    /*
        STEP 4
        Calculate actual electrical power

        P = V × I
    */

    const actualPower =
        voltage * current;


    /*
        STEP 5
        Calculate overall experimental efficiency

        Efficiency =
        Actual Output / Available Wind Power × 100
    */

    const efficiency =
        (actualPower / windPower) * 100;


    /*
        STEP 6
        Energy generated in one hour

        Energy = Power × Time

        For 1 hour:

        Energy = Power × 1
    */

    const hourEnergy =
        actualPower;


    /*
        STEP 7
        Energy generated in 24 hours

        Energy = Power × 24
    */

    const dayEnergy =
        actualPower * 24;


    // Display results

    document.getElementById("actualPower")
        .textContent =
        actualPower.toFixed(2);


    document.getElementById("expWindPower")
        .textContent =
        windPower.toFixed(2) + " W";


    document.getElementById("mechanicalPower")
        .textContent =
        mechanicalPower.toFixed(2) + " W";


    document.getElementById("measuredPower")
        .textContent =
        actualPower.toFixed(2) + " W";


    document.getElementById("overallEfficiency")
        .textContent =
        efficiency.toFixed(2) + " %";


    document.getElementById("hourEnergy")
        .textContent =
        hourEnergy.toFixed(2) + " Wh";


    document.getElementById("dayEnergy")
        .textContent =
        dayEnergy.toFixed(2) + " Wh";
}


/* ================= INITIAL CALCULATION ================= */

window.addEventListener(
    "load",
    calculatePower
);