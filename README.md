# MitiojimmyWebPage
Angular v15

## Pasos para arrancar el proyecto:

### 1. Instalar dependencias

Este paso sólo hay que hacerlo si se cumple alguna de estas opciones:
  1. Es la primera vez que se descarga el proyecto
  2. Se ha borrado la carpeta node_modules
  3. Si se ha incluido una nueva librería
  4. Si se han cambiado versiones de librerías en el fichero package.json

  Se tiene que ejecutar en la raíz del proyecto (donde se encuentra el fichero package.json)

  ```bash
  npm install
  ```

### 2. Arrancar el proyecto

Se tiene que ejecutar en la raíz del proyecto (donde se encuentra el fichero package.json)

```bash
npm start
```

## Publicar cambios en la web

Una vez que se ha hecho commit de los cambios (recomendable también subir los cambios al repositorio con git push) ejecutar el comando

```bash
npm run deploy
```

Esto hará el build del proyecto y subirá los ficheros a la rama de despliegue gh-pages.
