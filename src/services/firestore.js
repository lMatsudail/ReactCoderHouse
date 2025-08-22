import { collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const q = query(collection(db, "products"), where("category", "==", categoryId));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error obteniendo productos por categoría:", error);
    return [];
  }
};

export const getProductById = async (productId) => {
  try {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No se encontró el producto");
      return null;
    }
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return null;
  }
};

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...order,
      date: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creando orden:", error);
    throw error;
  }
};
