# LearnHub – Dynamic Single Page Application

A small-scale **Single Page Application (SPA)** developed using **HTML5, CSS3, and JavaScript**. The project demonstrates dynamic content loading, client-side routing, browser history management, responsive design, and smooth UI transitions.

---

## 📌 Project Overview

LearnHub SPA is a frontend web application that allows users to navigate between different sections without completely reloading the webpage.

The application contains:

- Home
- About
- Services
- Contact

JavaScript dynamically changes the content displayed in the main application container and manages navigation using the browser History API.

---

## 🎯 Project Objective

The main objective of this project is to understand and implement the basic concepts of a Single Page Application.

The project demonstrates:

- Dynamic content loading
- Client-side routing
- DOM manipulation
- Browser History API
- Back and Forward navigation
- Event handling
- Responsive web design
- CSS animations and transitions
- Basic error handling

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the application |
| CSS3 | Styling and responsive design |
| JavaScript ES6 | Routing and dynamic functionality |
| History API | Browser URL and history management |

---

## 📁 Project Structure

```text
LearnHub-SPA/
│
├── index.html
├── style.css
├── app.js
│
├── report/
│   └── technical-report.docx
│
└── README.md
```

### `index.html`

Contains the main structure of the application, including the header, navigation menu, main content container, and footer.

### `style.css`

Contains the complete styling of the application, including:

- Layout
- Colors
- Buttons
- Cards
- Responsive design
- Hover effects
- Animations
- Transitions

### `app.js`

Contains the application's main functionality, including:

- Client-side routing
- Dynamic content loading
- DOM manipulation
- Browser history management
- Navigation handling
- Active navigation highlighting
- Contact form handling
- 404 error handling

### `report/technical-report.docx`

Contains detailed documentation about the project, implementation approach, challenges, testing, and conclusion.

---

## 🚀 Features

### 1. Single Page Navigation

Users can navigate between different sections without completely reloading the webpage.

### 2. Dynamic Content

Content is dynamically inserted into the main application container using JavaScript.

```javascript
app.innerHTML = pages[route];
```

### 3. Client-Side Routing

The application supports the following routes:

```text
/home
/about
/services
/contact
```

### 4. Browser History

The History API is used to update the URL without refreshing the page.

```javascript
history.pushState()
```

### 5. Back and Forward Navigation

The `popstate` event is used to handle browser Back and Forward buttons.

```javascript
window.addEventListener("popstate", function() {
    // Handle navigation
});
```

### 6. Responsive Design

The application is designed to work on:

- Desktop
- Laptop
- Tablet
- Mobile devices

### 7. Smooth Animations

CSS transitions and animations are used to provide a better user experience.

### 8. Error Handling

Invalid routes display a simple 404 error page instead of leaving the content area blank.

### 9. Contact Form

The Contact section contains a simple form with client-side submission handling.

---

## 🧩 How It Works

The application starts with `index.html`.

The navigation links contain a `data-route` attribute:

```html
<a href="/about" data-route="/about">About</a>
```

When the user clicks the link, JavaScript prevents the default browser navigation:

```javascript
event.preventDefault();
```

The selected route is then passed to the routing function:

```javascript
loadPage(route);
```

The routing function finds the corresponding content and displays it:

```javascript
app.innerHTML = pages[route];
```

The URL is updated using:

```javascript
history.pushState(
    { page: route },
    "",
    route
);
```

Therefore, the content changes without a complete page reload.

---

## 🔄 Application Flow

```text
User clicks navigation
        ↓
JavaScript captures click
        ↓
Default page reload prevented
        ↓
Route identified
        ↓
Corresponding content selected
        ↓
DOM updated
        ↓
Browser URL updated
        ↓
Active navigation updated
```

---

## ⬅️ Browser Back/Forward Flow

```text
User presses Back / Forward
        ↓
popstate event triggered
        ↓
Current URL detected
        ↓
Route identified
        ↓
Corresponding content loaded
        ↓
Page updated without full reload
```

---

## 💻 How to Run the Project

### Method 1 – VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Open the application in your browser.

### Method 2 – Local Server

The project can also be run using any simple local web server.

---

## 🧪 Testing

The following functionality should be tested:

- Home navigation
- About navigation
- Services navigation
- Contact navigation
- Dynamic content loading
- Browser Back button
- Browser Forward button
- Invalid route handling
- Contact form submission
- Responsive layout
- Button and card hover effects

---

## 📱 Responsive Design

The application uses CSS media queries to adjust the layout according to the screen size.

On smaller screens:

- Navigation wraps appropriately.
- Service cards become a single-column layout.
- Font sizes are adjusted.
- Content padding is reduced.

---

## ⚠️ Important Note

This project demonstrates SPA routing using the browser History API.

When deploying to a static hosting service, direct navigation to routes such as `/about` may require server-side URL rewriting.

For static hosting platforms that do not provide route rewriting, hash-based routing such as:

```text
#/home
#/about
#/services
#/contact
```

can be used as an alternative.

---

## 🔮 Future Improvements

The application can be extended with:

- Backend API integration
- Database connectivity
- User authentication
- Real contact form submission
- Search functionality
- Loading indicators
- Advanced form validation
- Local Storage
- API-based content
- Improved routing
- Production deployment

---

## 📚 Learning Outcomes

This project helped demonstrate practical knowledge of:

- HTML5
- CSS3
- JavaScript ES6
- DOM manipulation
- Event handling
- Template literals
- Client-side routing
- History API
- `pushState()`
- `popstate`
- Responsive design
- CSS animations
- Form handling
- Error handling

---

## 👨‍💻 Author

**Vishwas**

B.Tech – Computer Science and Engineering

---

## 📄 License

This project was developed for educational and academic purposes.