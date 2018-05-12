<img src="https://i2.wp.com/www.womensweb.in/wp-content/uploads/2012/04/Kamaladevi-Chattopadhaya.png?resize=856%2C354" />

# Kamaladevi
A champion for uplifment of women, her participation in independence movement, and her lead in rehabiliating the refugees post partition are few of the feathers in her cap. She promoted arts and crafts extensively to create local jobs and preserve our culture. She will continue to inspire us and million others.

This repository which we call Kamaladevi is the front-end for SARAL developed using React.

## SARAL - NavGurukul's eLearning Platform
Saral is our eLearning platform which is meant to provide higher education to students in vernacular languages.

## Project setup

1. Touch a `.env` file in the root of the project and add environment variables to it. These values are available via
`process.env` object in the javascript and via `%Variable_name%` in the `index.html`

	To pass the variables to the `index.html` file being used by react append the variable name with `REACT_APP_`.

	Eg: 
`REACT_APP_TITLE=KamalaDevi`

	```html
	<title>%REACT_APP_TITLE%</title>
	```

2. To add any images to the project create a folder `src/img` and import them by `import ./src/img/file.jpeg` inside the components code.

	**Note:-** Do not commit images to the github repository. It increases the size 	of the future pulls. Hence, added `src/img` to `.gitignore`. 

3. Run the project by executing - 

	```javascript
	npm install
	npm start
	```

