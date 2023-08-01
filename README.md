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

| message | action | introduced |
|--|--|--|
| `open-drawer:left` | Opens the left hand side drawer on the view ||
| `open-drawer:right` | Opens the right hand side drawer on the view ||
| `close-drawer:left` | Closes the left hand side drawer on the view ||
| `close-drawer:right` | Closes the right hand side drawer on the view ||
| `pin-drawer:left` | Pins the left hand side drawer on the view ||
| `pin-drawer:right` | Pins the right hand side drawer on the view ||
| `unpin-drawer:left` | Unpins the left hand side drawer on the view ||
| `unpin-drawer:right` | Unpins the right hand side drawer on the view ||
| `refresh-category` | Refreshes the current category | August 2023 |
| `reset-to-default-view-of-category` | Resets to the default view of the category | August 2023 |
| `revert-to-default-layout` | Reverts to the default category layout  | August 2023 |


### Example
The code below would open the category list and pin it:
```javascript
targetWindow.postMessage("open-drawer:left");
targetWindow.postMessage("pin-drawer:left");
```

## Query Parameters
### Category Modes
You can pass a URL query parameter to control the "mode" the category is using. There are 4 modes:

| Query Parameter  | Mode Name                | Description |
|------------------|--------------------------|-------------|
| `categoryMode=0` | Normal                   | This will show the category exactly as it appears on the dashboard. |
| `categoryMode=1` | Headless Single Category | This will hide the category header and the category list. |
| `categoryMode=2` | Single Category          | This will show the category header options but will still hide the category list. |
| `categoryMode=3` | Headless Normal          | This will remove the header but keep the category list. |

### Filter Panel
You can also tell the dashboard to start with the filter panel open.

This is equivalent to using the Post Message API with:
```javascript
targetWindow.postMessage("open-drawer:right");
```

| Query Parameter                 | Description                            |
|---------------------------------|----------------------------------------|
| `enableDynamicFilterPanel=true` | Opens the Category Object Filter panel |
