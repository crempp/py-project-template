from django.conf import settings # import the settings file

def minified_assets(request):
    """
    Should minified assets be used?

    :param request:
    :return:
    """
    return {'minified_assets': not settings.DEBUG}


def do_analytics(request):
    """
    Should minified assets be used?

    :param request:
    :return:
    """
    return {'do_analytics': not settings.DEBUG}