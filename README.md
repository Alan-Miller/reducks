App that makes calls to database and outside API and stores values on Redux.

## reducks
App lets user route to different components, making API and database requests and changing values on Redux.

Details
* The intial value of the pokemon property on Redux is an array of two pokemon: Pikachu and Squirtle.
* The Home component subscribes to the pokemon Redux value and renders it. It has a Change Pokemon button that uses the getPokemon Redux action creator to change the value to a different array of two pokemon: Butterfree and Wigglytuff.
* The Pokemon component makes an automatic call to the pokemon outside API and gets the names of all 800+ pokemon available. The promise is handled in the component's componentDidMount method, and the array is stored on Redux with the getPokemon action creator. Routing back to the Home component will show this new (large) array of pokemon is displayed in both components.
* The Database component makes an automatic call to a database to get a user name and id based on an auth ID. In this case, the app grabs a hard-coded auth ID from the component's state object, but in real life this ID might come from a successful authentication using auth0 and then storing that value in a variable that is then passed to the axios request that fetches the user name and id.

<details>
<summary>Special instructions</summary>

* Make a yoozers table with data. I recommend adding a yoozers table to an existing database you already have. To create the table and insert some initial data into it, copy the SQL commands in the create_tables.sql file or copy the lines below:
  ```sql
    create table yoozers (
      id serial primary key,
      auth_id text,
      name varchar(40)
    );

    insert into yoozers 
    (auth_id, name)
    values
    ('secret_authID_321', 'Nathaniel'),
    ('special_authID_789', 'Jill');
  ```
* The .gitignore file ignores the config.js file, so make your own config.js file at the root of the project folder. Inside, export an object with a port value and a connection string like the one below:

  ``` js
    module.exports = {
      port: 3001, // pick a port number
      connection: 'yourConnectionStringHere' // your connection string
    }
  ```
</details>
<br/>

Tech:
* React 
* Redux
* axios
* massive
