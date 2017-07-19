## Setup
We need python:

```
$ brew install python
```

We need virtualenv

```
$ (sudo) pip install virtualenv
```

We need node

```
$ brew install nvm
$ nvm install 6
$ nvm use 6
```

We need python deps

```
$ virtualenv python_modules
$ . ./python_modules/bin/activate
$ pip install autobahn twisted
```

We need node deps

```
$ npm install
```

## Running

In one shell, execute the following:

```
$ npm start
```

In another shell, execute the following:

```
$ python client.py
```
