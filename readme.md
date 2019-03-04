# XML 2 JSON

## This is a simple service that converts XML feeds into JSON on the fly.

Sometimes you need to access XML in a JSON format, but don't want to download the data, convert, and push back up to some data source. XML 2 JSON allows you to pass in an XML resource via a query parameter, which will then convert that data and return as JSON.

### Instructions

Pass the URL of an XML resource as a query parameter.

```
Use the 'q' parameter
https://xml2jsonapi-fs3obw4bs.now.sh/?q=<URL>

Example
https://xml2jsonapi-fs3obw4bs.now.sh/?q=http://webapi.legistar.com/v1/denton-tx/matters
```

This service is currently hosted on Now.sh for anyone to use.
https://xml2jsonapi-fs3obw4bs.now.sh/?q=
