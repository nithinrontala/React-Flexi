Blog Post Listing
Overview

In this challenge, you will build a component to display a list of blog posts. The component will show the title, summary, and publication date for each post, while also being responsive to different screen sizes. The layout will change based on the viewport (single column on mobile, multiple columns on desktop). The component should be built using React, React Router, and CSS Modules.
Features

    Title: A clickable link to the full post.

    Summary: A short preview of the post (50-100 words).

    Publication Date: Formatted as "Month Day, Year".

    Responsiveness: Adjusts layout for mobile, tablet, and desktop.

    Interactivity: Seamless navigation with React Router (SPA behavior).

    Accessibility: Uses semantic HTML and screen reader-friendly links.

Design Specifications
Content Display

Each blog post should include the following:

    Title: Displayed as a clickable link that redirects to the full post.

    Summary: A short excerpt of the post (50–100 words).

    Publication Date: Displayed in the format "Month Day, Year".

Responsiveness

The layout of the blog posts will adapt based on the screen size:

    Mobile (≤768px): 1-column layout.

    Tablet (769–1199px): 2-column layout.

    Desktop (≥1200px): 3-column layout.

There should be a 20px gap between blog post items, which adjusts dynamically based on the screen size.
Data Structure

Each blog post object will contain the following properties:

    id: (string/number) Unique identifier for each post.

    title: (string) The title of the post.

    summary: (string) A brief summary of the post.

    date: (ISO string or Date object) The publication date of the post.

    url: (string) The path to the full post.

Interactivity

    Use the <Link> component from react-router-dom for the clickable post titles.

    Ensure the navigation is handled without a full page reload to maintain SPA behavior.

Accessibility

    Use semantic HTML elements such as <h2> for titles and <p> for summaries.

    Ensure that the clickable title links are screen-reader friendly and properly accessible.

Styling

The styling should be based on the design specifications:

    Title: 24px, bold, color #333.

    Summary: 16px, regular, color #666.

    Date: 14px, regular, color #999.

    Padding: 20px for desktop, 15px for mobile.

    Borders: 1px solid #DDD.

    Background: White background for the blog post container.

Technologies Used

    React: For building the component.

    React Router DOM: For navigation without full-page reloads.

    CSS Modules: For scoped, modular CSS styling.

    Create React App: For project setup and bundling.

How to Run

To get started with the project, follow these steps:

    Install the required dependencies:

npm install

Start the development server:

    npm start

    The app will be available at http://localhost:3000.

Project Structure

Here’s an overview of the project structure:

/src
  /components
    /BlogPostList
      BlogPostList.js
      BlogPostList.module.css
    /BlogPostItem
      BlogPostItem.js
      BlogPostItem.module.css
  App.js
  index.js
  /assets
    /images
    /icons

BlogPostList: Displays the list of blog posts.

BlogPostItem: Represents a single blog post with a title, summary, and date.