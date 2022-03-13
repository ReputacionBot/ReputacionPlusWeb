
Las claves se van a guardar como variables de entorno codificadas en `base64`

Comando para codificar a `base64`

```bash
cat .ssh/<key_filename> | base64 -w 0
```
Variables

```env
BOT_PUB_KEY_B64: Se almacena en el .env file correspondiente
BOT_PRV_KEY_B64: se almacena en los secrets de github y se inyecta en el .env file en el deploy
```

Nota: para trabajar localmente se setean ambas variables en el `.env` file, este fichero esta en el gitignore

Para generar pa pareja de claves correspondietes al bot local usar el comando:

```bash
ssh-keygen -t rsa 
```
se pueden nombrar y almacenar las claves como desee el dererrollador. Se recomienda almacenar la clave como `<project_dir>/.ssh/.bot_rsa`. Es lo que se pone cuando sale en el prompt: 

```bash
Enter file in which to save the key (/home/david/.ssh/id_rsa):
```

Haciendolo de esta forma las claves quedan almacenanas en el proyecto local y no se suben porque esta configurado en el `.gitignore`