
## .env is pushed as this is as example.

## Notes

- The restful API is built in Flask & SQLAlchemy
- This project uses a domain driven design, each feature in encapsulated in its own working directory.

## Reflection

### Design decisions
1. Each feature has its own sub-directory (app).
2. Features are not dependent on each other.

### App structure
1. api.py exports the API itself
2. models.py has the database models related to the app
3. service.py has the services that this app can do
4. dto.py to transform database objects to response friendly objects, usually called serializers in some frameworks.
5. common.py encapsulates common stuff, mainly the API errors
6. controllers encapsulates all the controllers

### Whole project
1. core/settings.py has the project settings
2. .env has the environment of the project
3. core/utils are shared utils, between features
4. uploads/ is the media directory

### Optimizations
1. The DMW loads some urls, currently I used `usePrevious` to check if the urls update, if they don't, we don't render.


### Comments
1. Something will take time, I intentionally put a TODO there to point them out.
