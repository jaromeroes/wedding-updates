// Configuración del proyecto de Firebase del presupuesto.
// Estos valores no son secretos: lo que protege los datos es el login
// y las reglas de Firestore (ver firestore.rules en esta carpeta).
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  // Los usuarios entran con "jose" u "oarda"; en Firebase son jose@<userDomain>, oarda@<userDomain>
  userDomain: "boda-jose-oarda.app"
};
