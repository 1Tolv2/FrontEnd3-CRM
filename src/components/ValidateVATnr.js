export function ValidateVATnr(VATnr) {
  String(VATnr);
  const regex = /^SE[0-9]{10}$/; //First is SE followed by 10 numbers between 0-9
  return regex.test(VATnr);
}
