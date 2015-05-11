#!/usr/bin/env python
# -*- encoding: utf-8 -*-

from os.path import join

from setuptools import setup, find_packages
import project_name

# Odd hack to get 'python setup.py test' working on py2.7
try:
    import multiprocessing
    import logging
except ImportError:
    pass

setup(
    name=project_name.__name__,
    version=project_name.__version__,
    author=project_name.__author__,
    author_email=project_name.__email__,
    url='https://lapinlabs.com/',
    description='PROJECT DESCRIPTION',
    long_description=open('README.rst').read(),
    license='Proprietary',
    packages=find_packages(exclude=['*tests*']),
    test_suite='nose.collector',
    tests_require=[
        'nose',
        'mock',
    ],
    install_requires=map(str.strip, open(join('requirements', 'base.txt'))),
    include_package_data=True,
    classifiers=(
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        'License :: OSI Approved :: Proprietary',
        'Operating System :: OS Independent',
        'Development Status :: 2 - Pre-Alpha',
        'Intended Audience :: Developers',
    ),
)