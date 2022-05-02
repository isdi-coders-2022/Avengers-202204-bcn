# BeComics

## Contexts

- Comic Context
- API Context
- UI context (loading spin, error)

## Components

- ### App
  -
- ### Comic

  - STATE:

    - Has an initial reactive state of selected false
    - When the state changes to true the bookmark icon changes

  - Renderize an image, label, title, info text RECEIVED and a bookmark depending on his state
  - Triggers an action toggle with useContext

- ### Info

  - Renderizes a text RECEIVED and a number of comics RECEIVED from useContext

- ### ButtonSubmit

  - Renderizes a button with a text RECEIVED
  - It invokes a function when an action is RECEIVED

- ### ButtonIcon
  - Renderizes a button with an icon RECEIVED
  - It invokes a function when an action is RECEIVED
- ### Review
  - Renderizes an image, name and text RECEIVED
- ### About (details page)
  - Renderizes info text, release date, price, creator and main character RECEIVED
- ### Pagination
  - Renderizes a button with a "Load More" text
  - Triggers an action of loading next list of comics
- ### Search

  -STATE:

  - Has an inital active state false
  - When the icon is clicked his active state switches to true, and then it renders an input element

  - The input element invokes an action when submitted

- ### Navbar
  - Renderizes a nav menu, including home, search, add and wantlist anchors
- ### Form
  - Renderizes 4 inputs elements, a sumbit button, and a close (X) button
  - Triggers the actions of creating a comic
  - Triggers the actions of hiding the form
- ### Loading
- STATE:

  - initial state: isLoading: false

- Renderizes a spinner icon
- ### Error

  -STATE:

  - initial state: error: false

  - Renderizes an error message when an error is cought
