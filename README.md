# Thon-product-card

este es mi paquete de pruebas para subir a NPM

## Tabla de Contenidos

- [Visión general](#visión-general)
  - [Proyecto](#proyecto)
  - [Capturas de pantalla](#capturas-de-pantalla)
    - [Escritorio](#escritorio)
- [Mi Proceso](#mi-proceso)
  - [Desarrollado con](#desarrollado-con)
  - [Instalación](#instalación)
- [Autor](#autor)

## Visión general

### Proyecto

Los usuarios deberían poder:

- Acortar cualquier URL válida
- Ver una lista de sus enlaces acortados, incluso después de actualizar el navegador
- Copiar el enlace acortado al portapapeles con un solo clic
- Recibir un mensaje de error cuando se envía el formulario si:
  - El campo de entrada está vacío
  - La URl no es valida
- Ver el diseño óptimo para la interfaz según el tamaño de la pantalla de su dispositivo
- Ver estados de desplazamiento y enfoque para todos los elementos interactivos en la página.

### Capturas de pantalla

#### Escritorio

<image src="src\assets\images\nameImage.png" alt="nameImage">

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

### Instalación

#### Clonar este repositorio

`git clone https://github.com/eternum-dev/shorter-url-api`

#### Acceder al archivo Nombre Proyecto

`cd ./nombreProyecto`

#### Instalar Dependencias

`npm install`

### Configuración de Variables de Entorno

1. Crea un archivo llamado `.env` en la raíz del proyecto.
2. Copia el contenido del archivo `env.template` y completa las variables requeridas según las instrucciones proporcionadas.
3. Incluye variables para el dominio y la clave API obtenidos.

### Scripts del proyecto

#### Iniciar el proyecto

`npm run dev`

#### Construir para producción

`npm run build`

## Autor

### Alejandro Thon

- Linkedin - [Linkedin - Alejandro Thon](www.linkedin.com/in/alejandrothon/)
- Email - alejandro.thon.j@gmail.com
