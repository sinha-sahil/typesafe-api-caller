# Increment minor version in package.json (Adds version update commit)
npm version minor
# Build current code
tsc --build
# Copy package.json to package folder
cp package.json /package/
# Publish build directory
npm publish
