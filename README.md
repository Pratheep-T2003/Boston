# Boston Top Earners

This project processes a dataset of individuals from Boston to identify and display the top earners based on their salaries. It is implemented using JavaScript and utilizes the HTML DOM for displaying the results dynamically.

## Demo

You can view a live demo of the project [here](#).  
*(Replace the `#` with the URL to your hosted project, if available.)*

## Features

- Filters individuals with salaries greater than $200,000.
- Displays the names and salaries of the top earners.
- Sorts the top earners by salary in descending order.
- Dynamically updates the HTML content to display results.

## How It Works

1. The data is imported from a module called `boston.js`, which contains an array of individuals and their salary information.
2. The script filters out individuals with salaries over $200,000 and stores their names and salaries in an array.
3. The top earners are then sorted by salary, and the top 5 earners are selected for display.
4. The results are dynamically injected into the HTML DOM for user visibility.

### Main Concepts
- **Filtering**: Iterates through the dataset and checks for salaries greater than $200,000.
- **Sorting**: Sorts the filtered data in descending order based on salary.
- **DOM Manipulation**: Updates the HTML content to display the names and salaries of the top earners.

## Installation

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/boston-top-earners.git
   cd boston-top-earners
   open index.html
## Usage
Once you open the project in your browser, the script will automatically filter and display the top earners directly on the page.

Modifications:
You can adjust the salary threshold by changing the value in the filtering condition within the script.
Update the dataset in boston.js to include new individuals or modify existing data.

