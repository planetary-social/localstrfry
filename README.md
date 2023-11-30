# localstrfry

localstrfry is an example project aimed at demonstrating how to set up and customize a local instance of the [strfry relay](https://github.com/hoytech/strfry) for the Nostr network using Docker. This project serves as a practical resource for developers and enthusiasts interested in exploring relay customization in a local environment, particularly for those involved with [Nostr](https://nostr.com/), a decentralized social network. The setup showcases the integration of Traefik and Nginx for effective service routing and redirection.

## Prerequisites

- Docker and Docker Compose installed on your machine.
- Basic familiarity with Docker concepts, and Traefik and Nginx configuration.

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
   - This command downloads necessary images and starts the services defined in the \`docker-compose.yml\` file.
   ```bash
   docker-compose up
   ```

4. **Accessing the Custom HTML Page**:
   - Visit \`http://localhost\` to access a custom HTML page, which differs from the default strfry relay page. This page is served by the \`redirect-service\`, demonstrating the usage of Nginx for content redirection.

## Adding SSL/TLS with Traefik

To secure your relay with SSL/TLS, follow the [Traefik HTTPS setup instructions](https://doc.traefik.io/traefik/https/overview/). This involves configuring Traefik with a certificate resolver for automatic SSL certificate generation and renewal, making your relay suitable for a more secure, production-oriented environment.

## Contributing

Contributions to localstrfry are welcome. If you have ideas for improvements or additional features, please follow the standard GitHub pull request process.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/planetary-social/localstrfry/blob/main/LICENSE) file for details.
