# complex-tracker

Client-side tracking library to log events, metrics, errors, and messages. Detects bots, incognito mode usage, screen dimensions and perform browser fingerprinting.

## Quick start

```html
<script>
  const script = document.createElement("script");
  script.src = "BUNDLE_URL";
  script.onload = () => {
    initializeTrackerClientContext(() => {
      tracker.push({
        endpoint: "/endpoint", // Endpoint to send tracking data to
        attachClientContext: true, // Attach various client context, such as useragent, platform, and page url
      });
    });
  };
  document.head.appendChild(script);
</script>
```
