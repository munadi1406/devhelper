import { v4 as uuidv4, validate as validateUUID } from 'uuid';

export const generateUUID = ()=> {
  const storedUUID = localStorage.getItem('UUID');
  if (storedUUID && validateUUID(storedUUID)) {
    return storedUUID;
  } else {
    const newUUID = uuidv4();
    localStorage.setItem('UUID', newUUID);
    return newUUID;
  }
}; 