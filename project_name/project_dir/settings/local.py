from project_dir.settings.default import *

DEBUG = True
TEMPLATE_DEBUG = True

ALLOWED_HOSTS = [
    '.local.project_name.lapinlabs.com',
]

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'ou7-bo+5zjsrgwdu4-qnz8w-0$lko5f7()a)&j@mk$*2gp1@ag'

# Mail settings
EMAIL_HOST = 'localhost'
EMAIL_PORT = 25
EMAIL_USE_TLS = False
EMAIL_HOST_USER = 'my@gmail.com'
EMAIL_HOST_PASSWORD = 'my_emails_password'

# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

# AUTOLOAD_SITECONF = 'dbindexes'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../../../db.sqlite3'),
    },
    # 'default': {
    #     'ENGINE': 'dbindexer',
    #     'TARGET': 'mongo'
    # },
    #'mongo': {
    #    'ENGINE': 'django_mongodb_engine',
    #    'NAME': 'sdc',
    #    'USER': '',
    #    'PASSWORD': '',
    #    'HOST': 'localhost',
    #    'PORT': 27017,
    #}
}

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

STATIC_ROOT = "/srv/www/PROJECT_NAME/static/"

STATICFILES_DIRS = (
    os.path.normpath(os.path.join(BASE_DIR, "../static")),
)

# https://developers.facebook.com/apps/778869328872849/settings/basic/
SOCIAL_AUTH_FACEBOOK_KEY = "778869328872849"
SOCIAL_AUTH_FACEBOOK_SECRET = "d834f09d6f5ce28760e1fdb2fdb3d993"

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = "68817794705-t0seieii8h1786cds5np2fbej4d8o24a.apps.googleusercontent.com"
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = "JjQff1kGvZ9-2JeqNoUKC7vi"
