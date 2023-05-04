var dropdownref = ''

const setDropdownRef = (ref) => {
    dropdownref = ref
}

const showSuccessAlert = (title: string, message: string) => {
    dropdownref.alertWithType('success', title, message);
}
const showErrorAlert = (title: string, message: string) => {
    dropdownref.alertWithType('error', title, message);
}
const showInfoAlert = (title: string, message: string) => {
    dropdownref.alertWithType('info', title, message);
}

const showWarningAlert = (title: string, message: string) => {
    dropdownref.alertWithType('warn', title, message);
}


export default {
    setDropdownRef,
    showSuccessAlert,
    showErrorAlert,
    showInfoAlert,
    showWarningAlert
}