import {toast} from "react-toastify";

const showSuccess = (msg) => {
    toast.success(msg)
}

const showInfo = (msg) => {
    toast.info(msg);
}
 
const showWarning = (msg) => {
    toast.warning(msg);
}

const showError = (err) => {
    let errMsg = "Something went wrong";
    if(err && err.data && err.data.errMsg && err.data.errMsg.msg){
        errMsg = err.data.errMsg.msg;
    }
    toast.error(errMsg);
}
const notify = {
    showSuccess,
    showInfo,
    showWarning,
    showError
}

export default notify;