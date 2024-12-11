

export function SetLocalstorage(key, value) {
    if (typeof (value) == 'object') {
        value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
}

export function GetLocalstorage(key) {
    localStorage.getItem(key)
}

export function removeLocalstorage (key) {
    localStorage.removeItem(key)
}