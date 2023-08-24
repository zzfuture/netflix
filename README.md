## NETFLIX TIER SUB

This project was made with the purpose of practicing with **Bootstrap**, and the target was [Netflix's plans pages](https://www.netflix.com/signup/planform?locale=en-US). Almost every changes I did in the template ***Trainer Miguel*** gave us has been in the html file; only few lines of code has been written in the css file.

#### Changes in the HTML

##### Header-Changes

Separating the navbar with the information below, the navbar is able to take all the screen-width, making the navbar as the *NETFLIX navbar*.

```html
<div class="container py-3">
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
          <img class="netflixlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="logo">
        </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a class="py-2 link-body-emphasis text-decoration-none" href="#">Sign In</a>
        </nav>
      </div>

      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal text-body-emphasis">Pricing</h1>
        <p class="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with
          this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.
        </p>
      </div>
    </header>
```

​		

##### Bootstrap Classes

Most of the classes that has been used in this project, were:

- padding (x,y)
- d-flex (flex-column, justify, align)
- text(center, danger, primary, dark)
- margin(start, end)
- font(size, weight)

##### Changes in CSS

```css
@media (min-width: 768px) {
  .my-md-5 {
    margin-bottom: 0rem !important;
}
body {
  overflow-x: hidden;
}

a img { /*NETFLIX LOGO NAVBAR*/
  width: 160px;
}

.card-header {
  background-color: #ef6b71 !important;
  color: white;
}

.text-bg-danger {
  background-color: #e50914 !important;
}

footer {
  background-color: #f3f3f3;
} 
```