from setuptools import setup, find_packages


setup(
    name='mkdocs-htmlimg-plugin',
    version='0.1.0',
    description='A MkDocs plugin',
    long_description='',
    keywords='mkdocs',
    url='',
    author='Your Name',
    author_email='your email',
    license='MIT',
    python_requires='>=2.7',
    install_requires=[
        'mkdocs>=1.0.4'
    ],
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'Intended Audience :: Information Technology',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3 :: Only',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7'
    ],
    packages=find_packages(),
    entry_points={
        'mkdocs.plugins': [
            'htmlimg = mkdocs_htmlimg_plugin.plugin:HtmlImgPlugin'
        ]
    }
)
