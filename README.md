# complex-tracker

Client-side tracking library to log events, metrics, errors, and messages. Detects bots, incognito mode usage, screen dimensions and perform browser fingerprinting.

# Quick start

```javascript
<script type="text/javascript" src="https://raw.githubusercontent.com/liberium/complex-tracker/main/dist/main.js"></script>
<script>
  // initialize tracker endpoint and settings
  tracker.push({
    endpoint: '/endpoint', // Endpoint to send tracking data to
    attachClientContext: true, // Attach various client context, such as useragent, platform, and page url
  });
</script>
```
