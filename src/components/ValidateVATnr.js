export function ValidateVATnr(VATnr) {
  const regex = /^SE[0-9]{10}$/; //First is SE followed by 10 numbers between 0-9
  if (regex.test(VATnr)) {
    return VATnr;
  } else {
    alert(
      "Felaktigt format för Momsnummer. Vänligen ange i SExxxxxxxxxx (10 siffror)."
    );
  }
}
