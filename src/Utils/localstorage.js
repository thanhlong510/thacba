const LOCAL_STORAGE = {
  TOKEN: 'token',
  USER: 'user',
  ZONE_ID: 'zone_id',
  GROUP_ID: 'group_id',
}

/**
 * @param {string} key
 * @returns
 */
const GetLocalStorage = (key) => localStorage.getItem(key)

/**
 * @param {string} key
 * @param {string} value
 * @returns
 */
const SetLocalStorage = (key, value) => localStorage.setItem(key, value)

/**
 * @param {string} key
 * @returns
 */
const RemoveLocalStorage = (key) => localStorage.removeItem(key)

const ClearLocalStorage = () => localStorage.clear()

export {
  LOCAL_STORAGE,
  GetLocalStorage,
  SetLocalStorage,
  RemoveLocalStorage,
  ClearLocalStorage,
}
