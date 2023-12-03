# React + Vite

# Green Choice App

![Green Choice App Logo](./public/heartplant.svg)

## Table of Contents
- [React + Vite](#react--vite)
- [Green Choice App](#green-choice-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Please Note](#please-note)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Components](#components)



## Introduction

Welcome to the Green Choice App, a sustainable shopping assistant! This application helps users make eco-friendly choices by providing information about the environmental impact of various products. Users can filter and sort products based on different criteria, making it easier to find products that align with their sustainability goals.

## Please Note
- **1:** Number next to the product name in product listing is environmental impact score of the product. Environmental scores range from 1 to 5, where 1 is the best score a product can have and 5 is the worst.
- **2:** To mimic fetching data from API, product-data.json file is placed in public folder. Please note I couldn't find an API to get the required information for this assessment from.
- **3:** I have used Vite for this assessment, instead of create-react-app
- **4:** Used only css for styling

## Features

- **Product Listing:** View a list of products with details such as name, manufacturer, department, product ID, and environmental impact.
- **Filtering:** Filter products based on department to narrow down your choices.
- **Sorting:** Sort products by environmental impact in ascending or descending order.
- **Search:** Search for specific products based on their name in all the departments.


## Getting Started

### Installation

1. Clone the repository: `git clone https://github.com/simi360/cano.git`
2. Navigate to the project directory: `cd cano`
3. Install dependencies: `npm install`

### Usage

1. Start the development server: `npm start dev`
2. Open your browser and go to [http://localhost:5173](http://localhost:5173)

## Components

The application is structured into the following components:

- **App:** The main application component responsible for managing state and rendering other components.
- **ProductList:** Displays a list of products based on applied filters and sorting.
- **Product:** Showcases formatting of a single product.
- **DepartmentFilter:** Provides options to filter products based on departments.
- **Sorter:** Allows users to sort products by environmental impact.
- **SearchInputBox:** Accepts user input for searching specific products.



