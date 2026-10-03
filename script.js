/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });

});


/* =========================
   MODAL CONTENT
========================= */

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");


const details = {

    sales: `
        <h2>📱 Mobile Sales</h2>

        <p>
            Ratan Communication Mobile par different requirements
            aur budgets ke according smartphones available hain.
        </p>

        <h3>Hum kya provide karte hain?</h3>

        <ul>
            <li>New smartphones</li>
            <li>Different price ranges</li>
            <li>Phone selection assistance</li>
            <li>Basic phone setup assistance</li>
            <li>Accessories</li>
        </ul>

        <h3>Phone lene ka process</h3>

        <ol>
            <li>Aapki requirement samajhna</li>
            <li>Available phones batana</li>
            <li>Features aur price compare karna</li>
            <li>Phone select karna</li>
            <li>Basic checking aur setup</li>
            <li>Humare yaha second hand mobile bhi milta hai!!
        </ol>
    `,


    repair: `
        <h2>🔧 Mobile Repairing</h2>

        <p>
            Mobile mein hardware ya software problem hone par
            checking aur repair assistance available hai.
        </p>

        <h3>Common repair services</h3>

        <ul>
            <li>Charging problem</li>
            <li>Speaker problem</li>
            <li>Microphone problem</li>
            <li>Camera problem</li>
            <li>Network related problems</li>
            <li>Software problems</li>
            <li>Phone not turning on</li>
        </ul>

        <h3>Repair process</h3>

        <ol>
            <li>Phone ki problem check</li>
            <li>Problem aur required repair batana</li>
            <li>Repair/service</li>
            <li>Testing</li>
            <li>Customer ko phone handover</li>
        </ol>
    `,


    battery: `
        <h2>🔋 Battery Replacement</h2>

        <p>
            Agar phone ki battery jaldi discharge hoti hai ya
            battery performance weak ho gayi hai, battery replacement
            service available hai.
        </p>

        <h3>Battery problem ke common signs</h3>

        <ul>
            <li>Battery bahut jaldi khatam hona</li>
            <li>Phone properly charge na hona</li>
            <li>Battery performance weak hona</li>
            <li>Phone unexpected shutdown hona</li>
        </ul>

        <h3>Replacement process</h3>

        <ol>
            <li>Battery condition check</li>
            <li>Compatible battery identify</li>
            <li>Battery replacement</li>
            <li>Charging aur phone testing</li>
        </ol>
    `,


    screen: `
        <h2>📱 Screen Repair</h2>

        <p>
            Broken display, touch problem aur display-related
            issues ke liye repair assistance.
        </p>

        <h3>Common problems</h3>

        <ul>
            <li>Broken screen</li>
            <li>Touch not working</li>
            <li>Display lines</li>
            <li>Black display</li>
            <li>Display damage</li>
        </ul>

        <h3>Service process</h3>

        <ol>
            <li>Display condition check</li>
            <li>Compatible display identify</li>
            <li>Display replacement</li>
            <li>Touch aur display testing</li>
        </ol>
    `,


    protection: `
        <h2>🛡️ Mobile Protection</h2>

        <p>
            Phone ko daily use ke damage se protect karne ke liye
            different protection accessories available hain.
        </p>

        <ul>
            <li>Tempered glass</li>
            <li>Mobile covers</li>
            <li>Screen protection</li>
            <li>Mobile cleaning</li>
            <li>Protection accessories</li>
        </ul>

        <h3>Special Offer</h3>

        <p>
            Selected services aur products par special offers
            available hain.
        </p>
    `,


    software: `
        <h2>💻 Software Service</h2>

        <p>
            Basic smartphone software setup aur assistance.
        </p>

        <ul>
            <li>Software update assistance</li>
            <li>Basic phone setup</li>
            <li>App installation assistance</li>
            <li>Account setup assistance</li>
            <li>Basic software troubleshooting</li>
        </ul>
    `,


    phones: `
        <h2>📱 Smartphones</h2>

        <p>
            Different requirements aur budgets ke liye
            smartphones available hain.
        </p>

        <h3>Phone choose karte waqt</h3>

        <ul>
            <li>Budget</li>
            <li>Camera</li>
            <li>Battery</li>
            <li>Performance</li>
            <li>Storage</li>
            <li>Display</li>
        </ul>

        <p>
            Apni requirement batakar suitable phone ke baare mein
            information le sakte hain.
        </p>
    `,


    headphones: `
        <h2>🎧 Headphones & Neckbands</h2>

        <p>
            Music, calling aur daily use ke liye audio accessories.
        </p>

        <ul>
            <li>Headphones</li>
            <li>Neckbands</li>
            <li>Bluetooth audio accessories</li>
        </ul>
    `,


    covers: `
        <h2>📱 Mobile Covers</h2>

        <p>
            Different smartphone models ke liye mobile covers.
        </p>

        <ul>
            <li>Different designs</li>
            <li>Protection covers</li>
            <li>Different phone models</li>
        </ul>
    `,


    accessories: `
        <h2>🔌 Mobile Accessories</h2>

        <p>
            Smartphone ke daily use ke liye useful accessories.
        </p>

        <ul>
            <li>Charging accessories</li>
            <li>Headphones</li>
            <li>Neckbands</li>
            <li>Mobile covers</li>
            <li>Tempered glass</li>
            <li>Other mobile accessories</li>
        </ul>
    `

};


/* =========================
   OPEN MODAL
========================= */

function openModal(type) {

    modalContent.innerHTML = details[type];

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


/* =========================
   CLOSE WHEN CLICK OUTSIDE
========================= */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeModal();
    }

});


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


console.log("Ratan Communication Mobile website loaded successfully.");
