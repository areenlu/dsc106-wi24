/* This file starts out empty; you will be adding to it in Lab 3 */
async function populate() {
    const requestURL = 'https://dsc106.com/resources/data/movies.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const movies = await response.json();
}
populate();
