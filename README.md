# FullMordisco - E-commerce React

Proyecto de e-commerce desarrollado con React para el curso de CoderHouse.

## Descripción

Aplicación web de comida rápida "FullMordisco" donde los usuarios pueden:
- Ver categorías de productos
- Navegar por productos de cada categoría  
- Ver detalles de productos
- Agregar productos al carrito
- Finalizar compra con formulario

## Tecnologías

- React 18
- React Router DOM
- Firebase/Firestore
- Vite
- CSS modules

## Instalación

```bash
npm install
npm run dev
```

## Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
├── context/            # Context API para el carrito
├── hooks/              # Custom hooks
├── services/           # Conexión con Firebase
└── data/               # Datos de productos
```

## Funcionalidades

- **Home**: Muestra categorías principales
- **Categorías**: Lista productos por categoría
- **Detalle**: Información completa del producto
- **Carrito**: Gestión de productos seleccionados
- **Checkout**: Formulario para finalizar compra

## Base de datos

Los productos están almacenados en Firebase Firestore con las siguientes categorías:
- Pizzas (10 productos)
- Hamburguesas (3 productos)  
- Perros (2 productos)
- Platos Especiales (2 productos)
- Arepas Rellenas (3 productos)
- Salchipapa (1 producto)
- Adicionales (5 productos)

## Componentes principales

- `NavBar`: Navegación principal
- `ItemListContainer`: Contenedor de listas de productos
- `ItemDetail`: Detalle individual de producto
- `CartWidget`: Ícono del carrito con contador
- `Checkout`: Formulario de finalización de compra

## Autor

Proyecto desarrollado por Jose Luis Florez Casas como trabajo final del curso React JS en CoderHouse.
