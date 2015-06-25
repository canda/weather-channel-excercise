**Weather Channel Excercise**

This project was made with a vagrant machine (you will need vagrant installed)


The vagrant machine will install gulp+sass+compass+breakpoint
http://docs.vagrantup.com/v2/installation/index.html

To start the project paste on the terminal

```
vagrant up #wait a while
vagrant ssh
sudo npm install -g bower
cd /opt/src/public && bower install #the first time you are asked to send data
cd /opt/src/ && gulp
```
TODO: install bower and bower files via the vagrant config

Then just access http://localhost:30000 on your browser.

You will see an angular app with sample usage of responsive design,
and angular best practices.

Tested on
IE9
Chrome 43.0.2357.130 
Safari 5.1
Firefox 38.0
Opera 30