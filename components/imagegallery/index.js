var imagegallery = (function(){

	var self = new nModule();

	var essenses = {};

	var Essense = function(p){

		var primary = deep(p, 'history');

		var el,
			currentImage = null,
			num = 0,
			essenseData;

		var making;

		// Used to zoom images with mouse wheel or mobile gestures
		var zoomData = {
			current: {
				z: 1
			}
		};
		
		var actions = {

			swipe : function(phase, direction, distance){
				
				return;

				var tomode = null
				var prs = 0
				var c = 1

				if (phase == 'move'){

					if(direction == 'left' || direction == 'right'){
						prs = 100 * (distance / 500)

						if(direction == 'left') c = -1

						el.images.css({'transform' : 'translateX(' + (c * prs) + "%)"})

						return
					}
					
				}

				el.images.css({'transform' : 'translateX(0%)'})

				if(phase == 'end'){

					if(direction == 'right'){

						actions.back()

					}

					if(direction == 'left'){

						actions.next()

					}

					
				}

				if(phase == 'cancel'){
					if(direction == 'left' || direction == 'right'){

					}
				}
				
			},

			back : function(){

				if(essenseData.images.length > 1){
					actions.prepareImages();

					num--;

					if(num < 0) num = essenseData.images.length - 1;

					make()
				}


				
			},

			next : function(){
				if(essenseData.images.length > 1){
					actions.prepareImages();

					num ++;

					if(num >= essenseData.images.length) num = 0;

					make()
				}
			},

			initialValue : function(){

				actions.prepareImages();

				if(essenseData.initialValue)
				{
					num = findIndex(essenseData.images, function(image){

						var field = 'name';

						if (essenseData.idName) field = essenseData.idName;

						if (image[field] == essenseData.initialValue) return true;						

					})
				}
			},

			prepareImages : function(){
				if(essenseData.getImages)
				{
					essenseData.images = essenseData.getImages();
				}
			},

			prepareImage : function(image, clbk){
				if(essenseData.getImage)
				{
					essenseData.getImage(image, function(image){

						if (clbk)
							clbk(image)

					})
				}

				else
				{
					if (clbk)
						clbk(image)
				}
			}
		}

		var helpers = {
			resize : function(){

				helpers.bestFit(el.imagesWrapper.find(".image"), currentImage);				
			},
			bestFit : function(el, image){

				var abs = el.closest('.imagesAbsWrapper')
				var cnt = el.find('.imgWrapper')

				var w = image.naturalWidth || image.width;
				var h = image.naturalHeight || image.height;

				var c = h / w;

				el.css('padding-top',"0px");

				var W = el.width();
				var H = el.height();

				var mW =  abs.width();
				var mH =  abs.height();

				if(mW < W) W = mW;
				if(mH < H) H = mH; 


				if (w > W){
					w = W;
					h = w * c;
					
				}

				if (h >= H){

					h = H;
					w = h / c
				}

				var ptop = (H - h) / 2;

				// el.css('padding-top', ptop + "px");

				image.width = w;
				image.height = h;

				$(image).attr('data-camanwidth', w);
				$(image).attr('data-camanheight', h);

				$(image).animate({
					opacity : 1
				})		
				
				cnt.width(w);
				cnt.height(h);

			},
			nFormat : function(num){
				if(num < 10 ) num =  "0" + num;

				return num;
			},
			// ------------------------------------------
			// Image zoom functions
			// ------------------------------------------
			getRelativePosition : function(element, point, originalSize, scale) {
				var domCoords = helpers.getCoords(element);
				var elementX = point.x - domCoords.x;
				var elementY = point.y - domCoords.y;
				var relativeX = elementX / (originalSize.width * scale / 2) - 1;
				var relativeY = elementY / (originalSize.height * scale / 2) - 1;
				return { x: relativeX, y: relativeY }
			},
			getCoords : function(elem) {
				var box = elem.getBoundingClientRect();
				var body = document.body;
				var docEl = document.documentElement;
				var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
				var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
				var clientTop = docEl.clientTop || body.clientTop || 0;
				var clientLeft = docEl.clientLeft || body.clientLeft || 0;
				var top  = box.top +  scrollTop - clientTop;
				var left = box.left + scrollLeft - clientLeft;
				return { x: Math.round(left), y: Math.round(top) };
			},
			scaleFrom : function(zoomOrigin, currentScale, newScale) {
				var currentShift = helpers.getCoordinateShiftDueToScale(zoomData.originalSize, currentScale);
				var newShift = helpers.getCoordinateShiftDueToScale(zoomData.originalSize, newScale)
				var zoomDistance = newScale - currentScale
				var shift = {
					x: currentShift.x - newShift.x,
					y: currentShift.y - newShift.y,
				}
				var output = {
					x: zoomOrigin.x * shift.x,
					y: zoomOrigin.y * shift.y,
					z: zoomDistance
				}
				return output
			},
			getCoordinateShiftDueToScale : function(size, scale) {
				var newWidth = scale * size.width;
				var newHeight = scale * size.height;
				var dx = (newWidth - size.width) / 2
				var dy = (newHeight - size.height) / 2
				return {
					x: dx,
					y: dy
				}
			},
			// Update the element passed in parameter
			updateZoomedImage : function() {
				zoomData.current.height = zoomData.originalSize.height * zoomData.current.z;
				zoomData.current.width = zoomData.originalSize.width * zoomData.current.z;
				// Check limits
				var limitY = (zoomData.imageContainerParent.height() < zoomData.current.height) ? Math.abs((zoomData.current.height - zoomData.imageContainerParent.height()) / 2) : 0;
				var limitX = (zoomData.imageContainerParent.width() < zoomData.current.width) ? Math.abs((zoomData.current.width - zoomData.imageContainerParent.width()) / 2) : 0;
				if (zoomData.current.y > limitY)
					zoomData.current.y = zoomData.last.y = limitY;
				else if (zoomData.current.y < -limitY)
					zoomData.current.y = zoomData.last.y = -limitY;
				if (zoomData.current.x > limitX)
					zoomData.current.x = zoomData.last.x = limitX;
				else if (zoomData.current.x < -limitX)
					zoomData.current.x = zoomData.last.x = -limitX;
				zoomData.imageContainer.style.transform = "translate3d(" + zoomData.current.x + "px, " + zoomData.current.y + "px, 0) scale(" + zoomData.current.z + ")";
			}
		}

		var events = {
			arrows : function(){

				if(making) return;

				var action = $(this).attr('action');

				actions[action]();

				return false;
			},

			body : function(e){

				return;

				if(making || e.pageY < 80) return;

				action = 'next'

				if(e.pageX < $(window).width() / 2) action = 'back'

				actions[action]();
			}
		}

		var renders = {
			image : function(p){
				

				el.imageNavigation.find('.number').html(helpers.nFormat(num + 1));

				$(window).off('resize', helpers.resize)

				if(!p) p = {};

				self.shell({
					name :  'image',
					el :   el.images,
					inner : html,
					display : 'table',
					data : {
						data : essenseData,
						image : p.image
					},

				}, function(p){
					
					p.el.find('img').imagesLoaded(function(image){

						el.c.removeClass('loading')

						making = false;

						currentImage = deep(image, 'images.0.img');

						if (currentImage)
						{
							helpers.resize();

							$(window).on('resize', helpers.resize)
						}

						// Prepare the zoom feature
						// Get the image and its container
						var imageContainer = p.el.find('.imgWrapper')[0];
						var imageElement = p.el.find('img')[0];
						// Prepare our main zoom object
						zoomData = {
							imageContainerParent: $(imageContainer).parent(),
							imageContainer: imageContainer,
							imageElement: imageElement,
							minZoomAllowed: 1,
							maxZoomAllowed: 5,
							current: {
								x: 0,
								y: 0,
								z: 1,
								zooming: false,
								width: imageElement.width,
								height: imageElement.height
							},
							fixHammerjsDeltaIssue: undefined,
							pinchStart: {
								x: undefined,
								y: undefined
							},
							last: {
								x: 0,
								y: 0,
								z: 1
							},
							lastEvent: undefined,
							originalSize: {
								width: imageElement.width,
								height: imageElement.height,
								containerWidth: $(imageContainer).width(),
								containerHeight: $(imageContainer).height()
							},
							pinchZoomOrigin: undefined
						};
						// Instantiate hammer instance, and configure it
						var hammertime = new Hammer(zoomData.imageContainer);
						hammertime.get('pan').set({ threshold: 0 });
						hammertime.get('pinch').set({ enable: true });
						hammertime.get('tap').set({ taps: 2 });
						hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

						// Events for panning
						hammertime.on('pan', function(e) {
							zoomData.imageContainer.style.transition = "none";
							if (zoomData.lastEvent !== 'pan') {
								zoomData.fixHammerjsDeltaIssue = {
									x: e.deltaX,
									y: e.deltaY
								}
							}
							zoomData.current.x = zoomData.last.x + e.deltaX - zoomData.fixHammerjsDeltaIssue.x;
							zoomData.current.y = zoomData.last.y + e.deltaY - zoomData.fixHammerjsDeltaIssue.y;
							zoomData.lastEvent = 'pan';
							helpers.updateZoomedImage();
						});
						hammertime.on('panend', function(e) {
							zoomData.imageContainer.style.transition = "none";
							zoomData.last.x = zoomData.current.x;
							zoomData.last.y = zoomData.current.y;
							zoomData.lastEvent = 'panend';
						});

						// Event for zooming with doubletap
						hammertime.on('doubletap', function(e) {
							// How much we want to zoom when doubletapping
							var scaleFactor = (zoomData.current.z > 1) ? -zoomData.current.z + 1 : 2;
							// Check scale factor limits
							zoomData.imageContainer.style.transition = "0.3s";
							// setTimeout(function() {
							// 	zoomData.imageContainer.style.transition = "none";
							// }, 300)
							var zoomOrigin = helpers.getRelativePosition(zoomData.imageElement, { x: e.center.x, y: e.center.y }, zoomData.originalSize, zoomData.current.z);
							var d = helpers.scaleFrom(zoomOrigin, zoomData.current.z, zoomData.current.z + scaleFactor)
							zoomData.current.x += d.x;
							zoomData.current.y += d.y;
							zoomData.current.z += d.z;
							zoomData.last.x = zoomData.current.x;
							zoomData.last.y = zoomData.current.y;
							zoomData.last.z = zoomData.current.z;
							helpers.updateZoomedImage();
						});

						// Event for the swipe left and right
						hammertime.on('swipeleft swiperight', function(e) {
							// If we can pan horizontally, cancel the swipe
							if (zoomData.imageContainerParent.width() < zoomData.current.width) return;
							// Check if we need to go to previous or next image
							if (e.deltaX < 0)
								actions.next();
							else
								actions.back();
						});
						// Event for the swipe up and down
						hammertime.on('swipeup swipedown', function(e) {
							// If we can pan vertically, cancel the swipe
							if (zoomData.imageContainerParent.height() < zoomData.current.height) return;
							// Close the gallery
							self.closeContainer();
						});

						// Events for the pinch zoom
						hammertime.on('pinchstart', function(e) {
							zoomData.pinchStart.x = e.center.x;
							zoomData.pinchStart.y = e.center.y;
							zoomData.pinchZoomOrigin = helpers.getRelativePosition(zoomData.imageContainer, { x: zoomData.pinchStart.x, y: zoomData.pinchStart.y }, zoomData.originalSize, zoomData.current.z);
							zoomData.lastEvent = 'pinchstart';
						});
						hammertime.on('pinch', function(e) {
							var d = helpers.scaleFrom(zoomData.pinchZoomOrigin, zoomData.last.z, zoomData.last.z * e.scale);
							zoomData.current.x = d.x + zoomData.last.x + e.deltaX;
							zoomData.current.y = d.y + zoomData.last.y + e.deltaY;
							zoomData.current.z = d.z + zoomData.last.z;
							if (zoomData.current.z > zoomData.maxZoomAllowed)
								zoomData.current.z = zoomData.last.z = zoomData.maxZoomAllowed;
							if (zoomData.current.z < zoomData.minZoomAllowed)
								zoomData.current.z = zoomData.last.z = zoomData.minZoomAllowed;
							zoomData.lastEvent = 'pinch';
							helpers.updateZoomedImage();
						});
						hammertime.on('pinchend', function(e) {
							zoomData.last.x = zoomData.current.x;
							zoomData.last.y = zoomData.current.y;
							zoomData.last.z = zoomData.current.z;
							zoomData.lastEvent = 'pinchend';
						});

						// Event to zoom with mouse wheel
						zoomData.imageElement.addEventListener('wheel', e => {
							var scaleFactor = (e.deltaY > 0) ? -1 : 1;
							// Check zoom limit
							if (scaleFactor < 0 && (zoomData.current.z + scaleFactor) < zoomData.minZoomAllowed)
								return;
							if (scaleFactor > 0 && (zoomData.current.z + scaleFactor) > zoomData.maxZoomAllowed)
								return;
							zoomData.imageContainer.style.transition = "0.3s";
							// setTimeout(function() {
							// 	zoomData.imageContainer.style.transition = "none";
							// }, 300)
							var zoomOrigin = helpers.getRelativePosition(zoomData.imageElement, { x: e.x, y: e.y }, zoomData.originalSize, zoomData.current.z);
							var d = helpers.scaleFrom(zoomOrigin, zoomData.current.z, zoomData.current.z + scaleFactor)
							zoomData.current.x += d.x;
							zoomData.current.y += d.y;
							zoomData.current.z += d.z;
							zoomData.last.x = zoomData.current.x;
							zoomData.last.y = zoomData.current.y;
							zoomData.last.z = zoomData.current.z;
							helpers.updateZoomedImage();
						}, false);

					});

				})

			},

		}

		var state = {
			save : function(){

			},
			load : function(){
				
			}
		}

		var make = function(){

			el.c.addClass('loading')

			making = true;

			var image = essenseData.images[num] || essenseData.images[0];

			console.log(image, essenseData.images, num)

			
			self.app.nav.api.history.addParameters({
				num : num.toString()
			})


			actions.prepareImage(image, function(image){

				renders.image({
					image : image
				})

			})

			

		}

		var initEvents = function(){
			
			el.arrows.on('click', events.arrows);


			if(!isMobile() && !isTablet())
				el.c.on('click', events.body)

			var cc = el.c.find('.imagesTableWrapper').closest('.wnd')

			// Enable the swipe only if we have at least 2 images
			if (essenseData.images && essenseData.images.length > 1) {
				el.c.find('.imagesTableWrapper').swipe({
					allowPageScroll: "auto", 
					swipeStatus : function(e, phase, direction, distance){

						actions.swipe(phase, direction, distance)

						return true
					},
				})
			}
			

		}

		

		return {
			primary : primary,

			parametersHandler : function(){
				var _num = parameters().num;

				if(typeof _num != 'undefined'){
					num = Number(_num)
					actions.prepareImages();

					make()
				}

			},

			getdata : function(clbk){

				var data = {};

					clbk(data);
			},

			destroy : function(){

				currentImage = null;

				$(window).off('resize', helpers.resize);

				making = false;

				//self.app.nav.api.history.removeParameters(['i', 'num', 's', 'com'])
				//self.app.nav.api.history.removeParameters(['num'])

				el = {};

			},
			clearparameters : ['i', 'num', 's', 'com'],
			init : function(p){

				currentImage = null;
				making = false;

				essenseData = p.essenseData || {};

				state.load();

				actions.initialValue();

				el = {};
				el.c = p.el.find('#' + self.map.id);

				el.imagesWrapper = p.el.find('.imagesWrapper');
				el.images = p.el.find('.images');
				el.imageNavigation = p.el.find('.imageNavigation');
				el.arrows = el.imageNavigation.find('.arrow');

				make();

				initEvents();

				p.clbk(null, p);				
				
			},

			wnd : {			
				class : 'allscreen black withoutButtons imageGallery',
			}
		}
	};



	self.run = function(p){

		var essense = self.addEssense(essenses, Essense, p);

		self.init(essense, p);

	};

	self.stop = function(){

		_.each(essenses, function(essense){

			essense.destroy();

		})

	}

	return self;
})();


if(typeof module != "undefined")
{
	module.exports = imagegallery;
}
else{

	app.modules.imagegallery = {};
	app.modules.imagegallery.module = imagegallery;

}