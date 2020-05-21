Portfolio
------------------------------------
This is my updated portfolio.

Currently live at: https://lucio-afonso-portfolio.herokuapp.com/

Tech used: ReactJS, GatsbyJS, graphql, scss...

Getting Started
------------------
This program was created under Windows 10 (x64) Operative System using ReactJS 16.13.1,
  GatsbyJS 2.19.23, NodeJS 12.16.3 and npm 6.14.4. Additionally GraphQL.JS 15 and SCSS.

Prerequisites
---------------
In order to use this program it is highly necessary to have an *internet connection* and install:

	- NodeJS v12.16+ (includes npm v6.14+)

  i) Installing NodeJS v12.16+
    It is possible that NodeJS has been already installed, to check use the following code in the command line:

    $ node --version
    [v12.16.3]

    If errors occured or NodeJS has not yet been installed please visit their
    website http://nodejs.org/en/download/ and follow the instructions there.

    1) Installing npm v6.14+
      npm comes bundled with a successful NodeJS installation,
      to check use the following code in the command line:

      $ npm --version
      [v6.14.4]

  ii) Testing
    In order to test the program it's necessary to run the app and check if no errors were presented.
    The most common errors could be:

    1) NodeJS port error
      This happens when the program tries to run on a busy port,
      if that happens please free the port 8000. Where 8000 is the default port used by the program.

    2) Any possible error
      Could be on the computer's end. Bad installation or wrong configuration.

      Aside from the error mentioned above everything should be working normally.

Deployment
--------------
Please link all npm dependencies:

  ~/RentAcar> npm ln
  [*installation warnings*]

  [154 packages are looking for funding]


In order to start the NodeJS server, execute:

  ~/RentAcar> npm start
  [...]
  [success Building development bundle - 4.605s]

Then opening the (default) website on **Google Chrome**(*):

  localhost:8000

Files
------
/Portfolio:
  .gitignore - git file that helps ignoring other files
  app.json - heroku config app file
  gatsby-config.js - self explanatory
  gatsby-node.js - node path WebpackConfig file
  LICENSE - license
  package.json - npm config file
  package-lock.json
  README.md - this readme
  static.json - self explanatory

/Portfolio/content:
  content for Porfolio, Hero and Testimonials pages

/Portfolio/src:
  source code for all images, pages, content, component, scss

/Portfolio/static:
  page icon, navigation logo and robot

/Portfolio/.cache:
/Portfolio/node_modules:
/Portfolio/public:
	folders generated after a successufully "npm ln && npm start" run

Versioning
------------
Version 2.0 - Current version

Version 4.5(TBA) - MySQL Support

Author
---------
Lucio Afonso

License
---------
This project is licensed under the GPL License - see the LICENSE.md file for details

Acknowledgments
----------------------
Official sites:

	http://gatsbyjs.org/

  http://reactjs.org/

	http://nodejs.org/
