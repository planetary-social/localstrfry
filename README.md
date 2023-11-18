# localstrfry

localstrfry is an example project aimed at demonstrating how to set up and customize a local instance of the strfry relay using Docker. It's a useful resource for those looking to experiment with different Nginx configurations in conjunction with strfry. This project is suitable for developers and enthusiasts wanting to explore relay customization in a local environment and experiment with Nginx setups.

## Features

- **Custom HTML Page**: Instructions on how to override the default HTML page of the strfry relay.
- **Nginx Configuration Flexibility**: Suitable for experimenting with various Nginx configurations behind the strfry relay.
- **Local Relay Setup for Learning**: Perfect for setting up the strfry relay in a local, non-production environment.
- **Simple Docker-Compose Setup**: Utilizes docker-compose for straightforward setup.

## Prerequisites

- Docker and Docker Compose installed on your machine.
- Familiarity with Docker concepts and Nginx configuration.

## Installation and Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/planetary-social/localstrfry.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd localstrfry
   ```
3. **Start the Relay using Docker Compose**:
   ```bash
   docker-compose up
   ```
4. **Accessing the Custom HTML Page**:
   - Visit `http://localhost:8080` to see your custom HTML page after the relay starts.

## Customization

- To change the default HTML page, edit `index.html` in the `html/relay_home` directory.
- Modify the Nginx configurations in the `nginx` directory to try out different setups.

## Additional Resources

- For setting up the strfry relay on a VPS with proper SSL, review [this guide](https://relayable.org/strfry-relay-howto.html). It's informative for running strfry in a more production-oriented environment, but doesn't include setting up `index.html`.

## Contributing

Contributions to localstrfry are welcome. Please follow the standard GitHub pull request process for any improvements or ideas.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/planetary-social/localstrfry/blob/main/LICENSE) file for details.
