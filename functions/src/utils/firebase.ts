import * as admin from 'firebase-admin';

export const initFirebase = (): void => {
  // NOTE: add service setting depends on your usecase. (i.e. firestore)
  admin.initializeApp();
};
