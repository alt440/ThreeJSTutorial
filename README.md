# ThreeJSTutorial
Three JS Tutorial: building a cube that interacts with mouse input movements

## To Get Started
`
npm install parcel -g
` To install the package on all your pc globally. (or --save-dev otherwise)

`
npm install three
` To install the package for Three.js

To start parcel, run the command:
`
parcel ./src/index.html
` If the command isn't working, (getting 'running scripts is disabled on this system' from Windows) go to Powershell. Execute the following command:
`
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
`
This will allow you to run parcel. You can change it anytime you like later on.

## IMPORTANT

Parcel might have some issues when you are updating your code. In that case, delete the content of .parcel-cache and the dist folder, and relaunch parcel. This should do the trick.