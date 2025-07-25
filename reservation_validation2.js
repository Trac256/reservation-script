document.addEventListener("DOMContentLoaded", function () {
    const buttonTexts = {
        en: "Create reservation",
        el: "Δημιουργήστε κράτηση",
        de: "Erstellen Reservierung"
    };

    const fullNameInput = document.getElementById('reservation_full_name');
    const mobileInput = document.getElementById('reservation_mobile');
    const field2Input = document.getElementById('reservation_field_2');
    const emailInput = document.getElementById('reservation_email');
    const addressInput = document.getElementById('reservation_address');

    if (fullNameInput) {
        fullNameInput.setAttribute("pattern", "^[a-zA-ZΑ-Ωα-ω]{2,14}(?: [a-zA-ZΑ-Ωα-ω]{2,14}){0,1} [a-zA-ZΑ-Ωα-ω]{3,16}(?: [a-zA-ZΑ-Ωα-ω]{3,16}){0,1}$");
        fullNameInput.setAttribute("placeholder", "Μόνο γράμματα (Ελληνικά και Αγγλικά) και έως 2 ονόματα και 2 επώνυμα με 1 κενό ανάμεσά τους");
    }

    if (mobileInput) {
        mobileInput.setAttribute("pattern", "^(0|0030|0049|69)[0-9]{8,12}$");
        mobileInput.setAttribute("placeholder", "Έως 10 αριθμούς μετά το πρόθεμα");
    }

    if (field2Input) {
        field2Input.setAttribute("pattern", "^[A-Za-z]{1,2}[0-9]{6,8}$");
        field2Input.setAttribute("placeholder", "1-2 γράμματα και 6-8 αριθμούς");
    }

    if (emailInput) {
        emailInput.setAttribute("pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
        emailInput.setAttribute("placeholder", "Εισάγετε έγκυρο email");
    }

    const plzPattern = /^(55\d{3}|56\d{3}|6[0-4]\d{3}|3[4-7]\d{3}|6[5-8]\d{3})\s+[^\s]+\s+[^\s]+\s+\d+[a-zA-Z]?$/;

    let submitButton = Array.from(document.querySelectorAll('input[type="submit"], button')).find(el => {
        const text = el.value || el.textContent.trim();
        return Object.values(buttonTexts).includes(text);
    });

    if (addressInput && submitButton) {
        addressInput.setAttribute("pattern", plzPattern.source);
        addressInput.setAttribute("placeholder", "π.χ. 55123 Mainz Kaiserstr. 12 (μόνο Ρηνανία-Παλατινάτο, Έσση, Σάαρλαντ)");
        addressInput.setAttribute("required", "true");

        submitButton.disabled = true;

        addressInput.addEventListener("input", function () {
            submitButton.disabled = !plzPattern.test(this.value.trim());
        });
    }

    const form = document.querySelector("form");
    if (form && addressInput) {
        form.addEventListener("submit", function (e) {
            const address = addressInput.value.trim();
            if (!plzPattern.test(address)) {
                e.preventDefault();
                alert("Μη έγκυρη διεύθυνση! Χρησιμοποιήστε τη μορφή: [PLZ] [Πόλη] [Διεύθυνση] [Αριθμός]\n\nΠαράδειγμα: 55123 Mainz Kaiserstr. 12\nΕπιτρεπόμενοι ταχυδρομικοί κώδικες:\n• Ρηνανία-Παλατινάτο: 55000-55999, 56000-56999, 65000-68999\n• Έσση: 34000-37999, 60000-64999\n• Σάαρλαντ: 66000-66999");
                return false;
            }
        });
    }

    console.log("✅ reservation_validation.js loaded successfully!");
});

document.addEventListener("load", function () {
    setTimeout(function () {
        const addressInput = document.getElementById('reservation_address');
        const plzPattern = /^(55\d{3}|56\d{3}|6[0-4]\d{3}|3[4-7]\d{3}|6[5-8]\d{3})\s+[^\s]+\s+[^\s]+\s+\d+[a-zA-Z]?$/;
        const submitButton = Array.from(document.querySelectorAll('input[type="submit"], button')).find(el => {
            const text = el.value || el.textContent.trim();
            return Object.values({
                en: "Create reservation",
                el: "Δημιουργήστε κράτηση",
                de: "Erstellen Reservierung"
            }).includes(text);
        });

        if (addressInput && submitButton) {
            addressInput.setAttribute("pattern", plzPattern.source);
            addressInput.setAttribute("placeholder", "π.χ. 55123 Mainz Kaiserstr. 12 (μόνο Ρηνανία-Παλατινάτο, Έσση, Σάαρλαντ)");
            submitButton.disabled = !plzPattern.test(addressInput.value.trim());
        }
    }, 1000);
}, true);
