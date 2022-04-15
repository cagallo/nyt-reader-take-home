# Breaking News with Chezzy

This project is a simple React application that utilizes the NYT Top Stories API to generate up-to-date stories from a variety of different categories. A user can filter for a certain category and visit the NYT website to view the rest of the story if interested. 

The application was a take-home challenged provided by the Turing School of Software and Design and took approximately 8 hours to complete.

- NYT Top Stories API Overview: [here](https://developer.nytimes.com/docs/top-stories-product/1/overview)
- Take-Home spec: [here](https://mod4.turing.edu/projects/take_home/take_home_fe)

## Technologies Used

- React
- React Router v6
- Cypress
- HTML5
- CSS3
- titleCase 

## Directions

- User is presented with 'Home' news stories on page load, they may scroll through those news stories, select a new category from the dropdown menu or click on a story for more information.

<img width="1440" alt="Screen Shot 2022-04-15 at 9 54 13 AM" src="https://user-images.githubusercontent.com/78453792/163592654-c3d4ac66-0c92-4a4e-90a9-54601ea50666.png">

On the single article page, the user can view a article's title, byline, photo, caption and/or abstract summary. They are able to click on the 'read more at NYTimes' button to read the full article.

<img width="1440" alt="Screen Shot 2022-04-15 at 9 54 03 AM" src="https://user-images.githubusercontent.com/78453792/163592782-9c89aeba-e14c-4cb3-bf41-a1d3c54cca80.png">

## Testing 

Cypress was used for E2E and integration testing. To test the application: run `npm run cypress` and you will have a window open that gives you the ability to click on each test and see whether they pass. Make sure you've run `npm start` in a separate terminal tab before you begin the testing. 

<img width="1131" alt="Screen Shot 2022-04-15 at 9 49 57 AM" src="https://user-images.githubusercontent.com/78453792/163592055-ae3897b3-d8dd-4b8b-9e3c-b55b0d1fa665.png">

## Future Iterations

- Responsive Design
- Better error handling
- Deployment
- Improve UI

## Accessibility

This project is 100 percent accessible according to Lighthouse Accessibility Audit:

<img width="1385" alt="Screen Shot 2022-04-15 at 10 01 45 AM" src="https://user-images.githubusercontent.com/78453792/163593300-3532c0c8-4f3c-4884-abed-cfaed31f7031.png">

## Author

- [Chez Gallo](https://github.com/cagallo)

