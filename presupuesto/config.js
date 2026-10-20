// Configuración del proyecto de Firebase del presupuesto.
// Estos valores no son secretos: lo que protege los datos es el login
// y las reglas de Firestore (ver firestore.rules en esta carpeta).
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyC-7p6HZeBQ0dbBgs8aFSI98aM_H7CXCSE",
  authDomain: "presupuesto-boda-7d5fe.firebaseapp.com",
  projectId: "presupuesto-boda-7d5fe",
  storageBucket: "presupuesto-boda-7d5fe.firebasestorage.app",
  messagingSenderId: "236614839964",
  appId: "1:236614839964:web:072c0b4898387d01a14759",
  // Los usuarios entran con "jose" u "oarda"; en Firebase son jose@<userDomain>, oarda@<userDomain>
  userDomain: "boda-jose-oarda.app"
};
