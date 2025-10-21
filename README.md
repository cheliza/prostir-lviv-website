# Prostir Lviv Website

A single-page Django web application for **Prostir Lviv** — a creative and cultural hub in Lviv.  
The website serves as a digital business card and event showcase, providing visitors with information about events, movies, the cafe menu, and contact details.

---

## Project Overview

**Prostir Lviv** is designed as a Django-based web platform with modular structure.  
The backend manages data such as events, movies, and menu items, while the frontend will later display them in an elegant, modern UI.

---

## Tech Stack  

- **Backend:** Django (Python 3.12)  
- **Database:** SQLite  
- **Dependency Management:** Poetry  
- **Frontend (planned):** React  
- **Version Control:** Git + GitHub

---

## Installation & Setup
```bash
git clone https://github.com/cheliza/prostir-lviv-website.git
cd prostir-lviv-website/backend
poetry install
poetry run python manage.py migrate
poetry run python manage.py runserver
```
Then open http://127.0.0.1:8000
