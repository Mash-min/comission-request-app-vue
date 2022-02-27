import Swal from "sweetalert2";

export default function showLoader(message) {
  Swal.fire({
    title: message,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false
  })
}