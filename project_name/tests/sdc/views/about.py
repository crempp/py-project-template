from django.test import TestCase, Client
from django.core.urlresolvers import reverse


class AboutViewTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_about_page_loads(self):
        """Animals that can speak are correctly identified"""
        response = self.client.get(reverse('sdc:about'))
        self.assertEqual(response.status_code, 200)
        #self.assertContains(response, "No polls are available.")