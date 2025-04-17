<script>
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('reservation_full_name').setAttribute("pattern", "^[a-zA-ZΑ-Ωα-ω]{2,14}(?: [a-zA-ZΑ-Ωα-ω]{2,14}){0,1} [a-zA-ZΑ-Ωα-ω]{3,16}(?: [a-zA-ZΑ-Ωα-ω]{3,16}){0,1}$");
    document.getElementById('reservation_full_name').setAttribute("placeholder", "Μόνο γράμματα (Ελληνικά και Αγγλικά) και έως 2 ονόματα και 2 επώνυμα με 1 κενό ανάμεσά τους");
    document.getElementById('reservation_mobile').setAttribute("pattern", "^(0|0030|0049|69)[0-9]{8,12}$");
    document.getElementById('reservation_mobile').setAttribute("placeholder", "Εως 10 αριθμούς μετά το πρόθεμα");
    document.getElementById('reservation_field_2').setAttribute("pattern", "^[A-Za-z]{1,2}[0-9]{6,8}$");
    document.getElementById('reservation_field_2').setAttribute("placeholder", "1-2 γράμματα και 6-8 αριθμούς");
    document.getElementById('reservation_email').setAttribute("pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    document.getElementById('reservation_email').setAttribute("placeholder", "Εισάγετε έγκυρο email");  
const plzPattern = /^(55\d{3}|56\d{3}|6[0-4]\d{3}|3[4-7]\d{3}|6[5-8]\d{3})\s+[^\s]+\s+[^\s]+\s+\d+[a-zA-Z]?$/;
document.getElementById('reservation_address').setAttribute("pattern", plzPattern.source);
document.getElementById('reservation_address').setAttribute("placeholder", "Χρησιμοποιήστε: [PLZ] [Πόλη] [Διεύθυνση] [Αριθμός] (μόνο για Ρηνανία-Παλατινάτο, Έσση, Σάαρλαντ)"); });
document.querySelector("form").addEventListener("submit", function(e) {
  const address = document.getElementById('reservation_address').value;
  const plz = address.substring(0, 5);
  const isPLZValid = /^55\d{3}$/.test(plz) ||  // 55000-55999 (RP)
                    /^56\d{3}$/.test(plz) ||  // 56000-56999 (RP)
                    /^6[0-4]\d{3}$/.test(plz) ||  // 60000-64999 (HE)
                    /^3[4-7]\d{3}$/.test(plz) ||  // 34000-37999 (HE)
                    /^6[5-8]\d{3}$/.test(plz);   // 65000-68999 (RP+SL)
  if (!isPLZValid) {
    e.preventDefault();
    alert("Λάθος PLZ! Επιτρέπονται μόνο:\n\n" +
          "• Ρηνανία-Παλατινάτο: 55xxx, 56xxx, 65xxx-68xxx\n" +
          "• Έσση: 34xxx-37xxx, 60xxx-64xxx\n" +
          "• Σάαρλαντ: 66xxx");
    return false;
  }
});
</script>
</p>

</script>
