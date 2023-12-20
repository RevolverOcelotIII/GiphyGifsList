# More trending Gifs list table with Giphy's API 

This React webpage is created by consuming the free Giphy API, more specifically the "Trending" endpoint, and combining its data with the Kendo UI framework for displaying the GIFs in a table-style grid with relevant information about them. Since Kendo UI is being used, the table fields can be filtered and sorted, and the rows can redirect to the GIF's main page.

## Getting Started

Be sure to have [Node.js](https://nodejs.org/) installed in your machine before proceeding.

1. Clone the project's repository:

```bash
git clone [https://github.com/seu-usuario/seu-projeto.git](https://github.com/RevolverOcelotIII/GiphyGifsList.git)
```
2. Enter the project's root folder:
```bash
cd giphy-feed
```

3. Get Kendo UI license file:
Access [Kendo UI license page](https://www.telerik.com/kendo-react-ui/components/my-license/#toc-download-your-license-key) and download the kendo-ui-license.txt file.
Remember to put it in the project's root folder.

4. Install Node dependencies:
```bash
npm install
```
5. Activate your Kendo UI license:
In the root folder, execute the following command:
```bash
npx kendo-ui-license activate
```
6. Get Giphy API key
- Enter [Giphy's Docs website](https://developers.giphy.com/docs/api/endpoint) and login/create account;
- [Create an app on the website](https://developers.giphy.com/dashboard/?create=true);
- Copy the API key;

7. Create a .env file in the project's root folder with the following line.

```js
REACT_APP_GIPHY_API_KEY=["YOUR-GIPHY-API-KEY"]
```
Paste the API key on the correct location.  

7. After completing all the steps above, you can now start the project:
```bash
npm start
```
The server will start in http://localhost:3000/.

## Usage and Purpouse

The webpage's main feature its the list containing the more trending Giphy's Gifs, the list is aways up to date, and there you can see informations like the Gif's title and upload date, as well as some user info.  
The list is completely dynamic, and can be sorted and filtered, the filter in particular is pretty strong and can be used as a search tool, for example, if you were after "NBA" related gifs:
![Alt text](https://freeimage.host/i/JAcCwSp)
The main purpouse of the project it's to show how React and Kendo UI frameworks can be used in smart ways to produce interesting results. The main Kendo UI component being used is the Data Grid.

## Testing

For testing the webpage, two unit tests were made with Jest together with React Testing Library. The first one tests if the Giphy API's data reaches the application, by verifying the results count that is displayed by Kendo UI framework.   
The last one tests the filtering feature, by also verifying results count, but after the first filtering field (The Gif's title one) gets filled with text, the modified results count gets compared to the base one to check if there was a change in length.

- To run the Jest/React Testing Library unit tests, on the project's root folder run the following command:
```bash
npm test
```
