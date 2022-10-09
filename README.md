# Proshop Ecommerce Web App

- This is a simple ecommerce web application running on Django backend, React frontend and a PostgreSQL database.

- Click [here](https://pro-eshop.herokuapp.com) to open a live demo of the app.

- To run the app in development mode, you need to have Python 3.6 or higher installed on your machine.

- Follow the steps below to run the app in development mode:

1. Clone the repository

```bash
git clone git@github.com:justicenyaga/proshop.git && cd proshop
```

2. Create a virtual environment

```bash
python -m venv env
```

3. Activate the virtual environment

```bash
source env/bin/activate
```

4. Install the dependencies

```bash
pip install -r requirements.txt
```

5. Create a .env file in the root directory and add the following environment variables

```bash
SECRET_KEY=your_secret_key
DJANGO_ALLOWED_HOSTS=localhost
DJANGO_DEBUG=True
DJANGO_DATABASE_URL=postgres://user:password@localhost:5432/proshop
```

6. Create a superuser

```bash
python manage.py createsuperuser
```

7. Run the app

```bash
python manage.py runserver
```

8. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
