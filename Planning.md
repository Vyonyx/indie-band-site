# Project Planning

The following is research and planning towards achieving the client's requirements. The app must have the potential to grow it's features for future ecommerce capabilities while being user friendly when editing content (without prior programming knowledge). Above all, the site must appeal to the client's particular aesthetic which involves creating and incorporating custom assets and animations.

## Project Requirements:

- CMS for content updates by client
- Custom animations on landing page
- Brand image that reflects band's aesthetic
- Creation of custom assets
- Potetial for Shopify integration (ecommerce)

---

## Architecture

The project uses containers to manage different services (web app, wordpress CMS, database) in a microservice architecture. In development I will be using Docker and Docker compose to quickly add and deploy new services to the local environment.

As the web app nears completion, I will look at integrating kubernetes for production deployment on AWS.

---

## Client App

NextJS (version 13) will be used to create the client app. This framework allows the use of server side rendering by default, as well as static site generation and client side rendering.

**Further testing and research will be required to determine which rendering method is suited for integration with the other services.**

### Requirements:

- Performant delivery of content despite animation heavy first load
- Ability for admin login through specific url
- Links to Spotify/SoundCloud and social media platforms
- Information on upcoming gigs
- Articles feed and link to pages
- Mobile first design

---

## CMS (Wordpress)

I have tested the use of Wordpress as a headless CMS for this project. The client must be able to add and update content (gig dates, blog posts, landing page content etc) in an easy to use admin dashboard with admin login credentials.

### Requirments:

- Multiple user types with varying permissions for content editing
- Easy interface for editing content
- Simple API as an interface for reading content from server or client app

---

## Database

The database must be MySQL for easy integration with Wordpress CMS. The database must be setup as specified by Wordpress in order to store and manipulate content via their admin dashboard.

Storage of admin user credentials will me managed by Wordpress CMS; manual database manipulation will not be required.
