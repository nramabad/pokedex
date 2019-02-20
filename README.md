## Pokédex

Pokédex is a web application designed to help players of the Pokemon games look up key information about the 151 classic Pokémon. Users can search Pokémon by name, type or ID and find useful categorical information and statistics such as I.D., types, height, weight and habitat.

### Technologies

React.js, Redux.js, Node.js, PokéAPI

### Features

Pokédex web app currently indexes the classics 151 Pokémon. However, the application is built to scale and handle more generations of Pokémon. Pokédex web app lends itself to quick and simple look-up of statistics for individual Pokémon with one solution fits all search bar.

Apart from scrolling through the Pokédex Index to find a Pokémon of interest, the user may simply search for a Pokémon with name, type or ID. Pokédex search bar supports partial queries of names and types and complete queries of IDs.

### Running on localhost:3000

#### 1) `unzip pokedex && cd pokedex`

Uncompresses pokedex zip folder and enters the pokedex directory. Once, in the project directory, you can run:

#### 2) `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### Debug: `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Design Decisions

The PokéAPI enables the use of a simple, lightweight node backend. All Pokémon data come directly from API calls in the frontend API Utils due to PokéAPI's default Cross Origin Resource Sharing (CORS) capability. However, PokéAPI does limit an IP Address to 100 API calls/minute which did influence the design direction.

Upon load, the applications calls the Pokémon API for the index of Pokémon types and the index of 151 Pokémon and stores them in the state. The latter allows the application to search by name or ID but in order to search by type, the application maps over each type in the index with an API call with information categorizing Pokémon by type. The application pulls Pokémon type information quickly and seemlessly without hitting the API call limit since the number of types (18) will always be less than the number of Pokémon (151). This design choice also generalizes the scheme if the application ever needs to scale to pull more types for more generations of Pokémon.

Finally to ensure simplicity and ease of use, the Pokémon details always render on the left and Pokémon index always render on the right. The search bar's location in line with the Pokémon index on the navbar allows it to fall naturally to the user's eye. Nearly all interactions with the application occur through the search bar or the Pokémon index.
