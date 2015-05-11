from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Account registration URLs
    url(r'^accounts/', include(
            'registration.backends.default.urls',
            namespace='accounts',
            app_name='accounts'
        ),
        name='registration_register',
    ),

    # Social Auth URLs
    url('s-auth/', include(
        'social.apps.django_app.urls',
        namespace='social'
    )),

    # Django Auth URLs
    url('auth/', include(
        'django.contrib.auth.urls',
        namespace='auth',
        app_name='auth'
    )),

    # Load the admin urls
    url(r'^admin/', include(admin.site.urls)),

    # Default to SDC urls
    url(r'', include(
        'app1.urls',
        namespace='app1',
        app_name='app1'
    )),
)
