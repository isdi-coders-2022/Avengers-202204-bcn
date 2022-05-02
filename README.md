# BeComics

## Components

- ### App
  -
- ### Comic
  - Renderize an image, label, title, info text RECEIVED and a bookmark depending on his state
  - Has an initial reactive state of selected false
  - Triggers an action toggle with useContext
- ### Info
  - Renderizes a text RECEIVED and a number of comics RECEIVED
- ### ButtonSubmit

  - Renderizes a button with a text RECEIVED
  - It invokes a function when an action is RECEIVED

- ### ButtonSubmit
  - Renderizes a button with a text RECEIVED
  - It invokes a function when an action is RECEIVED
- ### Review
  - Renderizes an image, name and text RECEIVED
- ### About (details page)
  - Renderizes info text, release date, price, creator and main character RECEIVED
- ### Pagination
  - Renderizes a button with a "Load More" text
  - Triggers an action of loading next list of comics
- ### Search
  - Renderize an icon
  - Has an inital active state false
  - when the icon is clicked his active state switcjes to true, and then it renders an input element
  - The input element invokes an action when submitted
- ### Navbar
  - Renderizes a nav menu, including home, search, add and wantlis anchors
- ### Form
  - Renderizes 4 inputs elements, a sumbit button, and a close (X) button
  - Triggers the actions of creating a comic
  - Triggers the actions of hiding the form
- ### Loading
  - Renderizes a spinner icon
- ### Error
  - Renderizes an error message when an error is cought
