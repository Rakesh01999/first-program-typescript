Install:
Global:npm install –g typescript
	npm init -y
Local:npm install --save-dev typescript
Check installed or not:tsc –version

To run ts file : npx tsc index.ts 
	node index.js

•  Use npx to run the TypeScript compiler (tsc).
•  Compile the index.ts file.
•  Use the --watch flag to automatically recompile whenever there are changes to your TypeScript file.
	npx tsc index.ts --watch
