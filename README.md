# MitiojimmyWebPage
Angular v15.2.0 || Node 18.10.0

## Preparación del entorno de desarrollo
Para poder ejecutar tareas de compilación, de arranque de proyecto o usar las herramientas cli de angular tendremos que preparar el entorno de desarrollo, para ello:

### 1. **Instalar nvm (node version manager)**

Normalmente puede trabajarse sobre más de un proyecto que funcionan bajo diferentes versiones de node y npm, por ello es bastante útil disponer de un gestión de versiones de node para que sea más fácil el cambiar de versión si lo necesitásemos e instalar diferentes versiones a través de la línea de comandos.

Existen dos gestores de versiones de node dependiendo del SO, para linux y mac utilizaremos el gestor desarrollado de [nvm-sh](https://github.com/nvm-sh/nvm) desarrollado en bash, y para windows utilizaremos [nvm-windows](https://github.com/coreybutler/nvm-windows) desarrollado en Go. Los comandos de ambos son muy similares y finalmente nos proporcionan el mismo servicio, gestionar las versiones de nvm.

#### **Instalación en windows**
1. Descargaremos el ejecutable (.exe) de la última versión disponible:
https://github.com/coreybutler/nvm-windows/releases

2. Seguiremos el wizard y finalizaremos la instalación

3. Una vez instalada abriremos la línea de comandos de windows y comprobaremos si está instalado el comando:

```bash
nvm -v
```

#### **Instalación en mac/linux**

1. Instalamos el gestor a través de curl en el termiminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

2. Cerramos el terminal y volvemos a abrirlo para usar un terminal con la configuración actualizada

3. Comprobamos si funciona ejecutando el comando: 

```bash
nvm -v
```

En caso de que diga que no encuentra el comando nvm revisar la solución de errores para [mac](https://github.com/nvm-sh/nvm#troubleshooting-on-macos) o [linux](https://github.com/nvm-sh/nvm#troubleshooting-on-linux)

### **2. Instalar node con nvm**

Utilizaremos los siguientes comandos:

```bash
nvm install 18.0.0

nvm use 18.0.0
```

Podremos comprobar si se ha instalado y la versión del mismo mediante el comando:

```bash
node -v
```

### **3. Instalar angular cli (opcional)**
Lo necesitaremos si queremos usar la línea de comandos para poder crear código base, componentes, módulos, servicios, etc, o bien vayamos a utilizar algún plugin para este fin, que igualmente requerirá tenerlo instalado.

Podremos instalarlo mediante el siguiente comando:

```bash
npm install -g @angular/cli
```

## Pasos para arrancar el proyecto:

### **1. Instalar dependencias**

Este paso sólo hay que hacerlo si se cumple alguna de estas opciones:
  1. Es la primera vez que se descarga el proyecto
  2. Se ha borrado la carpeta node_modules
  3. Si se ha incluido una nueva librería
  4. Si se han cambiado versiones de librerías en el fichero package.json

  Se tiene que ejecutar en la raíz del proyecto (donde se encuentra el fichero package.json)

  ```bash
  npm install
  ```

### **2. Arrancar el proyecto**

Se tiene que ejecutar en la raíz del proyecto (donde se encuentra el fichero package.json)

```bash
npm start
```

## Actualizar contenido

Para actualizar contenido sólo necesitamos modificar los ficheros de la ruta:

```bash
src/assets/data
```

Ya existen ejemplos en los que fijarse para añadir una nueva entrada de datos en cada uno de los ficheros, una vez añadida la nueva entrada de datos guardamos y procedemos a añadir los datos al histórico de git y posteriormente publicaremos los cambios en la web:

### Añadir los cambios al histórico de git

Primero añadiremos al índice los cambios que queremos incluir, para añadir todos los cambios realizados utilizaremos el comando:

```bash
git add .
```

Comprobaremos si todos los cambios han sido indexados correctamente, para ello usaremos el comando:

```bash
git status
```

Si todo está correctamente indexado haremos commit de los cambios indexados añadiendo un mensaje que describa los cambios realizados entre comillas dobles:

```bash
git commit -m "Mensaje descriptivo de los cambios"
```

Y por último subiremos los cambios al repositorio remoto de github:

```bash
git push
```

### Publicar cambios en la web

Una vez que se ha hecho commit de los cambios para publicar los cambios y que sean visibles en la web deberemos ejecutar el siguiente comando:

```bash
npm run deploy
```

Esto hará el build del proyecto y subirá los ficheros a la rama de despliegue gh-pages, podremos ver el avance de la publicación dentro de la pestaña del repositorio Actions.
