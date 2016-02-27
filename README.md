# HTML Tags Collector

## Overview

jQuery plugin that allows you to collect what type and how many HTML tags a piece of code contains.

## Demo

Demo <a href="http://joro.me/demos/html-tags-collector/" target="_blank">here</a>.

## Installation

1. Download the <a href="http://code.jquery.com/jquery-latest.min.js" target="_blank">latest jQuery</a> version.
2. Add the following code between the **head** tag or before the closing **body** tag. Replace "path-to" with the actual path to the file.

        <script src="path-to/jquery-latest.min.js"></script>

3. Download Backie and place **html-tags-collector.js** in a preferred folder in your project.
4. Right after you load jQuery add the following code. Replace "path-to" with actual path to the file.

        <script src="path-to/html-tags-collector.js"></script>

5. Next, add this piece of code.

        <script>
          $(document).ready( function() {
            $('html').HTMLTagsCollector()();
          });
        </script>
        
6. You're all set! Your final code should look like:

        <script type="text/javascript" src="path-to/jquery-latest.min.js"></script>
        <script type="text/javascript" src="path-to/html-tags-collector.js"></script>
        <script>
            $(document).ready( function() {
               $('html').HTMLTagsCollector();
            });
        </script>
        
## Configuration

Basically, the plugin is designed to work without any additional configuration, but in case you wanted to change something, here are a couple of default options and values.

        <script>
            $(document).ready( function() {
                $('html').HTMLTagsCollector({
                    backgroundColor: '#111', // Changes the background color.
                    textColor: '#fefefe',    // Changes the text color. 
                    width: '130px'           // Changes the width of the box.
                });
            });
        </script>
        
Here is an example how your final code should look like with some customizations.

        <script type="text/javascript" src="path-to/jquery-latest.min.js"></script>
        <script type="text/javascript" src="path-to/html-tags-collector.js"></script>
        <script>
            $(document).ready( function() {
                $('html').HTMLTagsCollector({
                    backgroundColor: '#f00'
                });
            });
        </script>
        
*Please Note: Basically, as you can see in the example above I attached the plugin to the <em>html element</em>, but you don't need to. You can actually put it to every element and the plugin will count items in it.*
        
## Changelog

**v1.0 (05 Oct, 2014)**
- Initial release.
