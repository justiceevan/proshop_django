# Proshop Ecommerce Web App

- This is a simple ecommerce web application running on Django backend, React frontend and a PostgreSQL database.

- Click [here](https://pro-eshop.herokuapp.com) to open a live demo of the app.

- To run the app in development mode, you need to have Python 3.6 or higher installed on your machine.

- Follow the steps below to run the app in development mode:

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

5. Create a .env file in the root directory and add the following environment variables

   ```
   SECRET_KEY=your_secret_key
   ALLOWED_HOSTS=localhost
   DEVELOPEMENT_MODE=True
   DEBUG=True
   DATABASE_URL=postgres://user:password@localhost:5432/proshop
   ```

   ```
   NB: The app uses sqlite3 database when DEVELOPEMENT_MODE is set to True
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
