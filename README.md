# API Embed Example
This repository contains examples on how to embed.

To use any of the examples, you must have [Configured your Panintelligence Dashboard for embedding](https://panintelligence.atlassian.net/wiki/spaces/PD/pages/181010582/Embedding+Dashboards+Charts).

This comes in two flavours of examples:
* Using just a frontend application with vanilla javascript (and some jQuery) - see [static_examples](./static_examples)
* Using a client-server application with Express for the backend and React for the frontend - see [client-server-app](./client-server-app)

## Post Message API
When embedding a full dashboard (as opposed to individual charts), you can use the post message functionality to control the Dashboard interface .

You can read detail on postmessage in general at: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

If you have a Dashboard embedded in an `iframe` you can send the following commands and you should see the actions reflected in the interface:

| message | action |
|--|--|
| `open-drawer:left` | Opens the left hand side drawer on the view |
| `open-drawer:right` | Opens the right hand side drawer on the view |
| `close-drawer:left` | Closes the left hand side drawer on the view |
| `close-drawer:right` | Closes the right hand side drawer on the view |
| `pin-drawer:left` | Pins the left hand side drawer on the view |
| `pin-drawer:right` | Pins the right hand side drawer on the view |
| `unpin-drawer:left` | Unpins the left hand side drawer on the view |
| `unpin-drawer:right` | Unpins the right hand side drawer on the view |