# TODO

## Dependances

récuperer les dependances externes tels que
* Leaflet,
* GpPluginLeaflet
* ...

Le téléchargement peut être realisé avec les utilitaires, si les dependances ont
été publiées :
* bower
* npm
* cdn
* ...

## Yeoman

(cf. mini-projet : test-yeoman-leaflet/)

L'utilisation de Yeoman permet de creer un exemple clef en main (simple).
L'utilisateur a la possibilité de choisir/modifier les options :
* clef API : "jhyvi0fgmnuxvfv0zjzorvdn"
* extensions : []
* liste des couches (par défaut) : []
* ...

### References

generator-leaflet (https://www.npmjs.com/package/generator-leaflet)
yo (http://yeoman.io/)


### Installation

installation au préalable de :
- generator-leaflet : npm install -g generator-leaflet
- yo : npm install -g yo

### Usage

On utilise le generateur Leaflet (generator-leaflet).
Ce dernier met à disposition une application simple.
L'execution du generateur se fait via l'utilitaire 'yo' :

> yo leaflet
      _              _   _
   \_|_)            | | | |
     |     _   __,  | | | |  _ _|_
    _|    |/  /  |  |/  |/  |/  |
   (/\___/|__/\_/|_/|__/|__/|__/|_/
                    |\
                    |/

  You're using the fantastic Leaflet generator.
  ? What's the name of your application? Map Application
  ? Do you want to display a header above the map? Yes
  ? Do you want to add TopoJSON support? No
  ? Do you want to include jQuery? No
     create gulpfile.js
     create app/index.html
     create app/styles/main.css
     create app/scripts/main.js
   conflict package.json
  ? Overwrite package.json? overwrite
      force package.json
     create bower.json
     create .bowerrc
     create .gitignore
     create .jshintrc
     create app/robots.txt

  I'm all done. Running bower install & npm install for you to install the required dependencies.
  If this fails, try running the command yourself.
