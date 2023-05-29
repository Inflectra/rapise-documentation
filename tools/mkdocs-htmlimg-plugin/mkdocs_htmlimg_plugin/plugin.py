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

    def on_page_content(self, html, page, config, files):
        html = html.replace("<img ", "<img processed ");
        return html

    def on_page_context(self, context, page, config, nav):
        return context

    def on_post_page(self, output_content, page, config):
        return output_content