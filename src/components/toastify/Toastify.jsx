import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const notifyDownload = () => toast.success('Resume Downloaded!', {
//     position: "bottom-left",
//     autoClose: 1000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
// });

export const ToastSuccess = () => toast.success('Message Sent Successfully!', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

export const emailError = () => toast.error('Failed To Send Message!', {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});


export const notifyToast = () => toast.info('Theme Changed!', {
    position: "bottom-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});