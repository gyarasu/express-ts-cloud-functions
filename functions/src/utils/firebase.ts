import * as admin from 'firebase-admin';

export const initFirebase = () => {
  // NOTE: add service setting depends on your usecase. (i.e. firestore)
  return admin.initializeApp();
};

