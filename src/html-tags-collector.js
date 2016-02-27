/*
* HTML Tags Collector
* by Georgi Kalaydzhiev, Web Designer & Front-end Developer http://joro.me/
* 
* Copyright (c) 2014.
* Licensed under the MIT License http://www.opensource.org/licenses/mit-license.php
*
* Description: Simple jQuery plugin that checks how many and what HTML elements you have on the page. 
* URL: http://joro.me/lab/html-tags-collector/
* Version: 1.0, Oct 05, 2014
*/

(function($) {
	$.fn.HTMLTagsCollector = function(userSettings) {
		var tagNames = [];
		var allItems = [];
		var i = 0;
		var sumOfAllElements = 0;
		
		var defaultSettings = { backgroundColor: '#111', textColor: '#fefefe', width: '130px' };
		var settings = $.extend({}, defaultSettings, userSettings);
		
		var statsyStyle = {
			'position' : 'fixed',
			'top' : '10px',
			'right' : '10px',
			'zIndex' : '10000',
			'width' : settings.width,
			'padding' : '0',
			'color' : settings.textColor,
			'font' : '400 12px/20px Arial, Tahoma, sans-serif',
			'background' : settings.backgroundColor,
			'borderRadius' : '5px',
			'boxShadow' : '2px 2px 2px rgba(0,0,0,.2)'
		};
		
		var statsyStyleH3 = 'margin: 4px; padding: 4px; text-align: center; cursor: pointer';
		var statsyStyleP = 'margin: 0; padding: 1px 10px';
		var statsyStyleLastP = 'margin: 8px 0 0; padding: 0 10px 10px';
		var statsyStyleSpan = 'float: right';
		
		function singleElement(tag, count) {
			this.tag = tag;
			this.count = count;
		}
		
		function searchElements(element) {
			return $('html').andSelf().find(element).length;
		}
		
		this.find('*').andSelf().each( function(){
			elementName = this.tagName.toLowerCase();

			if (!($.inArray(elementName, tagNames) > -1)) {
				tagNames.push(elementName);
				allItems[i] = new singleElement(elementName, searchElements(elementName));
				i++;
			}
		});
		
		$('<div class="html-tags-collector"><h3 style="' + statsyStyleH3 + '">HTML TC</h3></div>').css(statsyStyle).appendTo('body');
		var listContainer = $('<div class="listContainer"></div>');
		listContainer.appendTo('.html-tags-collector');
		
		for (row in allItems) {
			listContainer.append('<p style="' + statsyStyleP + '">' + allItems[row].tag.toUpperCase() + '<span style="' + statsyStyleSpan + '">' + allItems[row].count + '</span></p>');
			sumOfAllElements += allItems[row].count;
		}
		listContainer.append('<p style="' + statsyStyleLastP + '"># ' + tagNames.length + '<span style="' + statsyStyleSpan + '"># ' +  sumOfAllElements + '</span>');
		
		$('.html-tags-collector h3').on('click', function(){
			$(this).next().slideToggle(100);
		});
	};
}(jQuery));