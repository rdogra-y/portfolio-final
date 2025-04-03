# Rakshita Dogra - Portfolio Website (Assignment 14)

This is my **Component Library Portfolio Project (Assignment 14)** for the Full Stack Web Development program.

## Features

- React (Create React App)
- Material UI for components
- Dockerized production build running on **localhost:5575**
- Five main sections: BasicInfo, Work, Skills, Resources, Developer Setup
- Prettier + Husky pre-commit hook for clean commits
- Tests written using React Testing Library & Jest

## Step-by-Step Setup Instructions

### 1. Create React App

```bash
npx create-react-app portfolio
cd portfolio
```

### 2. Install Component Library (Material UI)

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### 3. Set Up Component Folder Structure

```bash
mkdir -p src/components/BasicInfo src/components/Work src/components/Skills src/components/Resources src/components/DeveloperSetup
```

Create `.jsx` files in each folder like: `BasicInfo.jsx`, `Work.jsx`, etc.

### 4. Install Testing Tools (Already Included in CRA)

You already have Jest and React Testing Library via Create React App.

To test all files:

```bash
npm test -- --watchAll=false
```

### 5. Set Up Prettier and Husky

```bash
npm install --save-dev prettier husky
npx husky install
npm set-script prepare "husky install"
npm run prepare
npx husky add .husky/pre-commit "npx prettier --write ."
```

Example `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 100
}
```

Example `.prettierignore`:

```
node_modules
build
dist
```

### 6. Add Basic Tests

Example for `BasicInfo.test.js`:

```js
import { render, screen } from '@testing-library/react';
import BasicInfo from './BasicInfo';

test('renders Rakshita Dogra name', () => {
  render(<BasicInfo />);
  const nameElement = screen.getByText(/Rakshita Dogra/i);
  expect(nameElement).toBeInTheDocument();
});
```

Repeat for other components like `Work`, `Skills`, etc.

---

## Docker Setup Instructions

This project includes a `Dockerfile` that creates a production-ready container of your portfolio website.

### Dockerfile Requirements Fulfilled

✅ The Docker container is named:

```
dogra_rakshita_coding_assignment14
```

✅ The working directory inside the container is:

```
/dogra_rakshita_final_site
```

✅ The app is built and served using `nginx`.

---

### Dockerfile Content

```Dockerfile
# Stage 1: Build the React app
FROM node:18-alpine as build
WORKDIR /dogra_rakshita_final_site
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:alpine
COPY --from=build /dogra_rakshita_final_site/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

### Run with Docker (No Docker Compose)

To build the image:

```bash
docker build -t dogra_rakshita_coding_assignment14 .
```

To run the container:

```bash
docker run -d -p 5575:80 --name dogra_rakshita_coding_assignment14 dogra_rakshita_coding_assignment14
```

Open your browser and visit:

```
http://localhost:5575
```

---

## Submission

- Submit `.zip` file of your `portfolio` project folder
- Submit GitHub link: https://github.com/rdogra-y/portfolio

---

## 👩‍💻 Author Info

- **Name**: Rakshita Dogra
- **Program**: Full Stack Web Development
- **Location**: Chandigarh, India
- **GitHub**: [@rdogra-y](https://github.com/rdogra-y)
