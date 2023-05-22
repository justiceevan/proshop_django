# Proshop Ecommerce Web App

Proshop is a fake ecommerce web application built with Django and React. I repeat, it's a fake application so don't try buying anything using your real credit card.

The project was inspired by [Dennis Ivanov](https://www.dennisivy.com/) and [Brad Traversy](https://www.traversymedia.com/). I followed their tutorial on udemy [Django with React | An Ecommerce Website](https://www.udemy.com/course/django-with-react-an-ecommerce-website/) and added my own features to the project. Added features include:

- Improved the UI
- Add filter feature
- Add Hot categories - Most viewed products
- Add product pagination
- Improve user authentication - Email verification, Social authentication

(Ran out of credits on Azure so the app is currently down) The application is hosted on Azure and can be accessed through this [link](https://pro-eshop.azurewebsites.net/)

## Features

The application has most of the features you would expect to find in an ecommerce web application. Some of the features include:

- User authentication
- Product reviews and ratings
- Product search feature
- Hot categories - Most viewed products
- Product pagination
- Product filtering based on - Category, Price, Rating, Brand
- Shopping cart
- Checkout process (shipping, payment method, etc)
- Order history
- Admin product management
- Admin user management
- Admin order details page
- Mark orders as delivered option
- Checkout with PayPal

## Technologies

### Backend

- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Django REST Framework Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
- [Djoser](https://djoser.readthedocs.io/en/latest/)
- [social-auth-app-django](https://python-social-auth.readthedocs.io/en/latest/configuration/django.html)
- [PostgreSQL](https://www.postgresql.org/)

### Frontend

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## Usage

### Prerequisites

- [Python 3.6 or higher](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/) (optional) - You can use any other database of your choice

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/justicenyaga/proshop.git && cd proshop
   ```

2. Create a virtual environment

   ```bash
   virtualenv -p python3 venv
   ```

3. Activate the virtual environment

   ```bash
   source venv/bin/activate
   ```

4. Install the dependencies

   ```bash
   pip install -r requirements.txt
   ```

5. Add the environment variables

   #### option 1: create a .env file in the root directory and add the following environment variables

   ```
   SECRET_KEY=your_secret_key
   ```

   #### option 2: export the environment variables in your terminal

   ```bash
   export SECRET_KEY=your_secret_key
   ```

6. Run the migrations

   ```bash
   python manage.py migrate
   ```

7. Load the initial data

   ```bash
   python manage.py loaddata data.json
   ```

8. Create a superuser

   ```bash
   python manage.py createsuperuser
   ```

9. Run the app

   ```bash
   python manage.py runserver
   ```

- Open [http://localhost:8000](http://localhost:8000) on your browser to view the app.

  ```
  use the superuser credentials to login to the admin panel
  ```
