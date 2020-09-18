React.js
1. Application Pre-requisites
    - Node.js, can be installed from https://www.node.js.org 
        - Provide the 'npm' utility to install packages
    - Visual Studio Code (Recommendes)
        - Free IDE from Microsoft
        - https://code.visualstudio.com 
    - Electron, WebStorm, Eclipse JavaScript IDE      
1. Applcation From Scratch
    - package.json
        - dependencies for React Apps
    - webpack.config.js
        - Module loader for the JavaScript front-end apps
        - Bundle all respources together and deliver to the browser
            - https://www.webpack.js.org
    - .jshintrc
        - Manage the ES 6 Transpiler (?) for the React.js application
        -  .CS ---> C# Compiler  -----> Assembly (.dll/.exe)
        - .java ---? Java Compiler -----> Class file
        - .c ---> C Compiler -----> .exe
        - Modern JavaScript ---> JavaScript (High Level JS), TypeScript, Dart
            - ES 6, ES 7, ES 8, ES 9
            - Transpile the ES 6 into ES 3 (Browser Compatible JavaScript)
            - ES 6 -----> Transpiler -------> ES 3
            - Transpiler ---> Compiled Transformation aka Transformed Compilation
                - Babel, used by React Apps
                - TypeScript Transpiler, developed by Microsoft
                    - .ts ---> TypeScript Traspiler --> .js
    - .babelrc
        - Uses Babel Transpiler for Transpilations
            - @bable/core, actual transpiler
            - @bable/cli, command line tool for transpilation
            - @babel/preset-env, Provides methods from ES 6 to Convert into ES 3
            - @babel/preset-react, ES 6 method mapping of React into ES 3
2.  Using React.js CLI
    - create-react-app, used to generate the react application
    - Installing React CLI
        - npm install -g create-react-app      
    - Create React Application using CLI
        - create-react-app <APP_NAME>     
    - Installing Bootstrap
        - sudo npm install --save bootstrap          
3. The package.json
    - react, the React.json package containing the React Object Model (?)
    - react-dom, the package, the is used to manage the Virtual DOM in browser to load the react application in browser.
4. Components
    - A Component in Modern JS Apps means an Autonomous Object that has
        - UI
            - The HTML elements
        - Data
            - Data based on which HTML elements will be maniulated
        - Behavior    
            - Events and Logic for the component
5. JSX
    - XML Rule Set for JavaScript (DOM) programming
    - HTML Start-Tag must have End-Tag
        - e.g. <input type="text">, this will compile into error because there is not end-tag
        - corret way
            - e.g. <input type="text"/>
    - JSX HTML Attribute System
        - <input type="text" class="c1"/>
            - The 'class' is a keyword in ES 6, instaed use the 'className' of JSX
        - value --> value
        - for --> htmlFor
        - onClick -->onClick        
===================================================================================Programming with React.js
1. Components
    - Implemented as class derived from React.Component base class
        - Class Component
            - public method in it
            - constructor
            - the 'render()' method that returns DOM
    - Implemenetd as function from React 15.0+
        - Functional Component that returns DOM     
    - Component with State
        - The state means that the data used by component to define the DOM rendering             
            - Class Component
                - the 'state' JSON object, the data within the scope of the component.
                    - Once the component is unloaded the 'state' will be unloaded 
                    - The 'state' is always mutable
                - the 'props', the data that will be passed to the compnent from its parent.
                    - the 'props' is always immutable
        - The 'state' properties are bound to HTML elements using UniDirectional Binding (?)
            - UniDirectional Binding, data from state properties will be bound to HTML editable elements and make those elements as read-only by default 
    - Think of creating re-usable components if the same UI is repeating in React Application      


Day 1: Exercise 1
1.  CReate a separate table component that will display Products Information by dynamicaaly generating Rows and columns based on propeties of the Product. (Mandatory Today)
    - This component will accept the 'dataSource' property that will accept an array based on which Rows and columns must be geneated (Mandatory Today)
    - This component should have porperty 'canDelete', 'canSelectRow' which will accpts boolean value. If the value for canDelete is true, each row of the table should generate 'Delete' button to delete row from collection of parent component. If casSelectRow is true then the selected row value should be displayed in TextBoxes of parent component. (Mandatory Today)

    - This component should have properties of name 'IsSortable' and 'sortKey', if IsSortable is true then the table should show data in sorted order for the property name of 'sortKey'. E.g. is IsSortable=true and soryKey="ProductName", the table should show data sorted by Product Name   (Optional)          