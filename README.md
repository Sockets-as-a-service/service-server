# Sockets as a Service
Does it look like the worst thing ever? Sockets in your own programming language? no control over external parties what they do with your data?
solution: host it your self!

## service server
The node based api server

## how does it work?
Simply, when your user opens your application, you make sure they get connected to your socket server, the server returns some id gibbrish and you can add the user to groups or specific targets,
note that when using one of our libraries things like platform are included, so you can target on those.
sounds great huh!


 ```
 Client -> socketsServiceLibrary -> socketid -> client -> your server
 ```
 From there on you can do what the heck you like, you can even skip the server part and just put it in the database, and send push notifications from a different database application!
 sounds great huh


### Setup

npm install, everything.
start up mongodb
change env-defaults.json
digidydone

### Requirements
Well it looks al great and stuff, but you kinda need some stuff to get this working..

 - mongodb
 - node server




