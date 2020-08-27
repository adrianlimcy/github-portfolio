# Creating a PWA using React

# install react
npm install -g create-react-app

# auto populate the folders and react stuff
npm create-react-app github-portfolio

# start the dev server
npm start

# create the build
npm run build
npm install -g serve
server -s build

# create the necessary directories and move the files
mkdir src/components
mkdir src/containers
mv src/App.js src/containers/App.js
mv src/App.css src/containers/App.css
mkdir src/components/Header
touch src/components/Header/Header.css
touch src/components/Header/Header.js
mkdir src/components/Link
touch src/components/Link/Link.js
touch src/components/Link/Link.css
touch src/containers/Profile.js
touch src/containers/Profile.css
mkdir src/components/List
touch src/components/List/List.js

# install styled-components
npm install styled-components