## Creating a Carousel with React.js using an API to generate random images from Reddit
This is a simple React application that creates a carousel of random wallpapers fetched from Reddit API. This application uses the following components:
* [App.js](https://github.com/Nightburnn/React-projects/blob/main/image-slider/App.js): This file contains the main logic of the application, including the fetchWallpapers() function that fetches the images from the API and sets them in the state using the useState() hook. The nextSlide() and prevSlide() functions are responsible for navigating the carousel. The images are displayed using the map() function.

* [styles.css](https://github.com/Nightburnn/React-projects/blob/main/image-slider/styles.css): This file contains the styles used in the application, including the positioning of the arrows and the size of the images.

* [index.js](https://github.com/Nightburnn/React-projects/blob/main/image-slider/index.js): This file creates the root element and renders the App component using the createRoot() method.
To run the application, you can follow these steps:
1. Clone the repository to your local machine.

2. Navigate to the project directory.

3. Install dependencies by running npm install.

4. Run the application using npm start.

5. The application will open in your browser at http://localhost:3000/

You should now see a carousel of random wallpapers fetched from the Reddit API. You can use the arrows to navigate through the images. Enjoy!
