<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:template match="/">
        <html>
            <head>
                <title>Sitemap for Interglobalmedianetwork's_Domain</title>
                <style>
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        background: #9eb3e6;
                        font-family: Arial, Helvetica, sans-serif;
                    }

                    h1 {
                        font-weight: 600;
                        margin-bottom: 1.5rem;
                        margin-left: 2.5rem;
                        margin-top: 2.5rem;
                    }


                    ul {
                        display: flex;
                        flex-direction: column;
                        list-style-type: none;
                        margin-bottom: 4rem;
                    }

                    li {
                        border-bottom: 1px solid #23272a;
                        color: #23272a;
                        line-height: 1.7;
                        margin: 0 auto;
                        padding-bottom: 1rem;
                        padding-left: 2rem;padding-right: 1rem;
                        padding-top: 1rem;
                        text-indent: -2rem;
                        width: 97.5%;
                    }

                    li:first-of-type {
                        border-top: 1px solid #23272a;
                    }

                    li::before {
                        color: #23272a;
                        content: '○';
                        margin-left: 1rem;
                        margin-right: 0.25rem;
                    }

                    li, li code {
                        font-size: 0.8rem;
                    }

                    code {
                        background: rgba(114, 137, 218, 0.3);
                        padding: 0.25rem;
                    }
                </style>
            </head>
            <body>
                <ul>
                    <h1>Sitemap</h1>
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                        <li>
                            <code>
                                <xsl:value-of select="sitemap:loc" />
                            </code>
                            - Last updated on
                            <xsl:value-of select="sitemap:lastmod" />
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>