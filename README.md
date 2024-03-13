# Thon-product-card

este es mi paquete de pruebas para subir a NPM.

## Tabla de Contenidos

- [Visión general](#visión-general)
  - [Proyecto](#proyecto)
- [Mi Proceso](#mi-proceso)
  - [Desarrollado con](#desarrollado-con)
  - [Instalación](#instalación)
- [Autor](#autor)

## Visión general

### Proyecto

En este Proyecto usamos React + TypeScript  para construir una seria de componentes reutilizables, también aplicamos testing y patrones de componentes.


### Codigo de Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'thon-product-card';
```

```
    <ProductCard
        product={product}
        initialValues={initialValues}
    >
        {
            () => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
    </ProductCard>
```

## Mi Proceso

### Desarrollado con

- JavaScript
- TypeScript
- React
- Vite
- HTML5
- CSS
- Flexbox
- CSS Grid
- TSDX

### Instalación

#### Clonar este repositorio

`git clone https://github.com/eternum-dev/thon-proyect-card`

#### Acceder al archivo Nombre Proyecto

`cd ./thon-proyect-card`


### Scripts del proyecto

#### Instalar Dependencias

`npm install`

#### Iniciar el proyecto

`npm start`

#### Construir para producción

`npm run build`

## Autor

### Alejandro Thon.

- Linkedin - [Linkedin - Alejandro Thon](www.linkedin.com/in/alejandrothon/)
- Email - alejandro.thon.j@gmail.com
