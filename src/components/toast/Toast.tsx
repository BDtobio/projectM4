import Swal from "sweetalert2";

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: 'white', 
    color: 'black', 
    iconColor: 'black',
    customClass: {
        popup: 'animated-toast', 
    },
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer); 
        toast.addEventListener('mouseleave', Swal.resumeTimer); 
    },
});