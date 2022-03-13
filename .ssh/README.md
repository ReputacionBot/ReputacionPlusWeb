
# Claves `ssh` para la autenticacion del bot

Para solicitar datos de los usuarios de Telegram Passport, habra que asifnar un juegod e llaves de cifrado al bot.

## generacion de claves
Primero, se genera la clave privada:

```bash
openssl genrsa 2048 > .bot_rsa.key
```

>**ATENCION!!!**: mantener la clave privada en SECRETO! 

Luego se genera la clave publica

```bash
openssl rsa -in .bot_rsa.key -pubout > .bot_rsa.pub
```

Conecte esta clave publica con el bot (de desarrollo) mediante el comando `/setpublickey` de `@BotFather`

> **NOTA**: se pueden nombrar y almacenar las claves como desee el dererrollador. Se recomienda almacenar las clave como `<project_dir>/.ssh/.bot_rsa.key` y `<project_dir>/.ssh/.bot_rsa.pub`. 
> 
> De esta forma las claves quedan almacenanas en el proyecto local y no se suben git porque esta configurado en el `.gitignore`

## Variables de entorno
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

>**NOTA**: para trabajar localmente se setean ambas variables en el `.env` file, este fichero esta en el gitignore




