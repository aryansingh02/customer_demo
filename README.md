# SleekRepo - user_app

This customer facing web app allows users to choose between vendors, order an item, pay an optional surge fee, and pick it up, eliminating the need to wait in lines and boosting client revenues through an optional surge fee.

## Folder Structure

Description of the project files and directories.

```bash
├── public/                    # Files that will write to dist on build (images and gifs)
├── src/                       # All SleekRepo app source files
│   ├── components             # All react components
│   │   ├── event              # /event page to display header, slider, and all vendors
│   │   ├── payment            # /payment page to process payment with square & call lambda
│   │   ├── store              # /store page to purchase items and go to cart
│   │   ├── Home.jsx           # Displays home page with event background and options
│   │   ├── Loading.jsx        # Displays a loading gif used in several places in app
│   │   ├── Navbar.jsx         # The top navigation bar used on every screen
│   │   ├── OrderView.jsx      # Final order page with order number and confirmation
│   ├── data                   # JSON files with events data, also found in DynamoDB table
│   ├── model                  # Define flow types & redux information
│   ├── styles                 # Scss files with styling for each event
├── .env                       # Defines customer environment the app runs in
├── Dockerfile                 # Docker build file for user_app
├── .flowconfig                # Flow configuration
├── .gitignore                 # Files ignored by git
├── package.json               # Dependencies and additional information
├── package-lock.json          # Package lockfile
├── README.md
```
