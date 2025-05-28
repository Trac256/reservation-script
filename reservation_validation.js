document.addEventListener("DOMContentLoaded", function () {
    const buttonTexts = {
        en: "Create reservation",
        el: "Δημιουργήστε κράτηση",
        de: "Erstellen Reservierung"
    };
    document.getElementById('reservation_full_name').setAttribute("pattern", "^[a-zA-ZΑ-Ωα-ω]{2,14}(?: [a-zA-ZΑ-Ωα-ω]{2,14}){0,1} [a-zA-ZΑ-Ωα-ω]{3,16}(?: [a-zA-ZΑ-Ωα-ω]{3,16}){0,1}$");
    document.getElementById('reservation_full_name').setAttribute("placeholder", "Μόνο γράμματα (Ελληνικά και Αγγλικά) και έως 2 ονόματα και 2 επώνυμα με 1 κενό ανάμεσά τους");
    document.getElementById('reservation_mobile').setAttribute("pattern", "^(0|0030|0049|69)[0-9]{8,12}$");
    document.getElementById('reservation_mobile').setAttribute("placeholder", "Εως 10 αριθμούς μετά το πρόθεμα");
    document.getElementById('reservation_field_2').setAttribute("pattern", "^[A-Za-z]{1,2}[0-9]{6,8}$");
    document.getElementById('reservation_field_2').setAttribute("placeholder", "1-2 γράμματα και 6-8 αριθμούς");
    document.getElementById('reservation_email').setAttribute("pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    document.getElementById('reservation_email').setAttribute("placeholder", "Εισάγετε έγκυρο email");
    const plzPattern = /^(55\d{3}|56\d{3}|6[0-4]\d{3}|3[4-7]\d{3}|6[5-8]\d{3})\s+[^\s]+\s+[^\s]+\s+\d+[a-zA-Z]?$/;
    const addressInput = document.getElementById('reservation_address');
    let submitButton = Array.from(document.querySelectorAll('button')).find(button => {
        return button.textContent.trim() === buttonTexts.en || 
               button.textContent.trim() === buttonTexts.el ||
               button.textContent.trim() === buttonTexts.de;
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
});
document.querySelector("form").addEventListener("submit", function (e) {
    const addressInput = document.getElementById('reservation_address');
    if (addressInput) {
        const address = addressInput.value.trim();
        const plzPattern = /^(55\d{3}|56\d{3}|6[0-4]\d{3}|3[4-7]\d{3}|6[5-8]\d{3})\s+[^\s]+\s+[^\s]+\s+\d+[a-zA-Z]?$/;
        if (!plzPattern.test(address)) {
            e.preventDefault();
            alert("Μη έγκυρη διεύθυνση! Χρησιμοποιήστε τη μορφή: [PLZ] [Πόλη] [Διεύθυνση] [Αριθμός]\n\nΠαράδειγμα: 55123 Mainz Kaiserstr. 12\nΕπιτρεπόμενοι ταχυδρομικοί κώδικες:\n• Ρηνανία-Παλατινάτο: 55000-55999, 56000-56999, 65000-68999\n• Έσση: 34000-37999, 60000-64999\n• Σάαρλαντ: 66000-66999");
            return false;
        }
    }
});
console.log("✅ reservation_validation.js loaded successfully!");
