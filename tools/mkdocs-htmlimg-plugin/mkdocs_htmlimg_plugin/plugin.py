import os
import sys
from mkdocs import utils as mkdocs_utils
from mkdocs.plugins import BasePlugin

class HtmlImgPlugin(BasePlugin):

    def __init__(self):
        self.enabled = True

    def on_page_markdown(self, markdown, page, config, files):
        markdown = markdown.replace("scaled src=\"./img", "scaled src=\"../img");
        return markdown
