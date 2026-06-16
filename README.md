# 🚀 Blog API — CI/CD Pipeline

![CI/CD Pipeline](https://github.com/preethikolla621/blog-cicd/actions/workflows/ci.yml/badge.svg)

A production-grade Node.js REST API with a fully automated CI/CD pipeline using GitHub Actions and AWS ECR.

## 🏗️ Architecture

## 🛠️ Tech Stack

- **Runtime:** Node.js + Express
- **Testing:** Jest + Supertest
- **Code Quality:** ESLint
- **Security:** Trivy vulnerability scanning
- **Containerization:** Docker
- **Registry:** AWS ECR
- **CI/CD:** GitHub Actions
- **Notifications:** Slack

## 🚀 Pipeline Jobs

| Job | Tool | Purpose |
|---|---|---|
| Lint | ESLint | Code quality check |
| Test | Jest | Run automated tests |
| Build & Push | Docker + AWS ECR | Build and push image |
| Security Scan | Trivy | Vulnerability scanning |
| Notify | Slack | Pipeline status alert |

## 📦 Run Locally

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linter
npm run lint

# Start server
npm start
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Health check |
| GET | /posts | Get all posts |
| POST | /posts | Create a post |

## 👩‍💻 Author

Preethi Kolla — [GitHub](https://github.com/preethikolla621) | [LinkedIn](https://linkedin.com/in/preethi-kolla-8b69a8277)
