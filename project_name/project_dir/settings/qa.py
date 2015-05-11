from project_dir.settings.default import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
TEMPLATE_DEBUG = True

ALLOWED_HOSTS = [
    '.qa.project_name.lapinlabs.com',
]

# SECURITY WARNING: keep the secret key used in production secret!
#
# To generate a key use this command:
#   $ python -c 'import random; import string; print
#     "".join([random.SystemRandom().choice(string.digits + string.letters +
#      string.punctuation) for i in range(100)])'
with open('/etc/app_secrets/secret_qa.txt') as f:
    SECRET_KEY = f.read().strip()

# Mail settings
EMAIL_HOST = 'in-v3.mailjet.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = '64b7ea92f6b6633db00e6b352d08b599'
EMAIL_HOST_PASSWORD = 'a1a078212c3e986e3987bc94a9ea6483'

# Notice! The from email must be registered with Mailjet
DEFAULT_FROM_EMAIL="crempp@gmail.com"

# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

# AUTOLOAD_SITECONF = 'dbindexes'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
	'NAME': os.path.join(os.path.dirname(BASE_DIR), 'db.sqlite3'),
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
    ('django.template.loaders.cached.Loader', (
        'django.template.loaders.filesystem.Loader',
        'django.template.loaders.app_directories.Loader',
    )),
)

# Static files served by Nginx
STATIC_ROOT = "/dev/null"
STATICFILES_DIRS = (
    "/dev/null",
)

# OAuth Settings
# https://developers.facebook.com/apps/778869328872849/settings/basic/
SOCIAL_AUTH_FACEBOOK_KEY = "778869328872849"
SOCIAL_AUTH_FACEBOOK_SECRET = "d834f09d6f5ce28760e1fdb2fdb3d993"

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = "68817794705-t0seieii8h1786cds5np2fbej4d8o24a.apps.googleusercontent.com"
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = "JjQff1kGvZ9-2JeqNoUKC7vi"
