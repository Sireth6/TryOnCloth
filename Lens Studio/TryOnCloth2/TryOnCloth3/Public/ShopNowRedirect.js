// @input string url

// Function to open the URL
function openURL() 
{
    global.openURL(script.url);
}

// Add an event to the Screen Image
script.createEvent("TouchStartEvent").bind(function(eventData) 
{
    openURL();
});
