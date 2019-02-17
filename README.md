# Beerflix

## Consideraciones previas

**Esta aplicación no está lista para ponerse en producción.**

**Todos las historias de usuario están completas.**

La aplicación funciona con WDS, por motivos de tiempo me ha sido imposible arreglar el webpack para que generase un dist con las imagenes responsive puestas con  `srcset`.

## Desarrollo

Archivo de configuración en `webpack.config.js`.

Inicializar el proyecto con el comando

```
npm install
```

Ejecutar entorno de desarrollo de WDS con el comando

```
npm start
```

## Producción

Archivo de configuración en `webpack.production.js`

Hace falta arreglar el http-loader para que cargue las imagenes responsive de los srcset debidamente.

Para generar el fichero dist productivo, ejecutar:

```
npm run prod
```

