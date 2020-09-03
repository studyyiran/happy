// 检测
export function getFromStorage(key, isLocalStorage = true) {
  try {
    let data;
    if (isLocalStorage) {
      data = window.localStorage.getItem(key);
    } else {
      data = window.sessionStorage.getItem(key);
    }
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }
}

export function saveIntoStorage(key, obj, isLocalStorage = true) {
  try {
    if (isLocalStorage) {
      window.localStorage.setItem(key, JSON.stringify(obj));
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(obj));
    }
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
