# URL Shortener

A backend-focused URL Shortener built to practice **scalable system design** and modern backend engineering concepts. The project began as a simple URL shortening service and gradually evolved into a system designed using production-inspired architecture capable of handling high traffic scenarios.

The primary goal of this project was **learning how large-scale backend systems are designed**, rather than deploying a real production system.

---

# What I Learned

This project helped me gain hands-on experience with:

* Designing scalable REST APIs
* Database schema design
* SQL query optimization
* Database indexing
* Redis caching
* Cache-Aside Pattern
* Connection pooling
* URL generation strategies (Base62/NanoID)
* Rate limiting
* Asynchronous processing
* Docker containerization
* Reverse Proxy using Nginx
* AWS EC2 deployment
* System Design fundamentals
* Performance optimization
* Scalable backend architecture

---

# Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* PostgreSQL
* Redis

### Infrastructure

* Docker
* Docker Compose
* Nginx
* AWS EC2

---

# Project Features

* Shorten long URLs
* Custom short codes
* Fast URL redirection
* Click analytics
* URL expiration
* Rate limiting
* Health check endpoint
* Dockerized development environment

---

# Scalability Concepts Practiced

Rather than building only for local development, I redesigned the application by applying common system design techniques used in large-scale applications.

## Database Optimization

* Proper database normalization
* Indexing frequently queried columns
* Optimized SQL queries
* Connection pooling
* Efficient table relationships

These changes reduce query time and improve performance under heavy traffic.

---

## Redis Caching

To minimize unnecessary database queries, Redis is used as a cache.

**Flow**

```text
Client Request
      │
      ▼
Check Redis Cache
      │
 ┌────┴────┐
 │         │
Hit       Miss
 │         │
 ▼         ▼
Return   Query PostgreSQL
              │
              ▼
      Store in Redis
              │
              ▼
      Return Response
```

This helped me understand:

* Cache-Aside Pattern
* Cache invalidation
* Reducing database load
* Improving response times

---

## URL Generation

I explored different approaches for generating unique short URLs, including:

* Base62 Encoding
* NanoID
* Random ID generation
* Collision checking

This helped me understand how large URL shortening services generate compact, unique identifiers.

---

## Performance Optimizations

To improve throughput, I implemented and studied:

* Database indexing
* Connection pooling
* Non-blocking asynchronous APIs
* Reduced database round trips
* Efficient query execution

---

## System Design Concepts Explored

While building this project, I studied and practiced concepts such as:

* Horizontal Scaling
* Stateless API Design
* Load balancing (conceptually)
* Caching strategies
* Database bottlenecks
* High availability concepts
* Scalability trade-offs

Although the application runs on a single server for development, the architecture was intentionally designed so it could be extended to multiple application instances in the future.

---

# Development & Deployment

The application is containerized using Docker, making local development consistent and easy to set up.

For deployment practice, the project was hosted on an AWS EC2 instance with Nginx acting as a reverse proxy.

This gave me practical experience with:

* Linux server management
* SSH
* Docker deployment
* Environment variables
* Reverse proxy configuration
* Basic cloud deployment

---

# APIs

```http
POST /api/v1/shorten
```

Create a short URL.

```http
GET /:shortCode
```

Redirect to the original URL.

```http
GET /api/v1/analytics/:shortCode
```

Retrieve analytics for a shortened URL.

```http
GET /health
```

Health check endpoint.

---

# Future Improvements

Some improvements I plan to explore in future versions include:

* Background workers for analytics
* Message queues (RabbitMQ/Kafka)
* Read replicas
* Database partitioning
* Distributed Redis
* CDN support
* Authentication and user dashboard

---

# Key Takeaways

This project was primarily a learning exercise in backend engineering and scalable system design. Instead of focusing only on building features, I explored how real-world systems improve performance, reduce latency, and prepare for increased traffic through caching, optimized databases, clean architecture, and cloud deployment.

It strengthened my understanding of how production-grade backend applications are designed while giving me practical experience implementing many of these concepts in a working project.
