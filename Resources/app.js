Ti.include('feedback.js');
Ti.include('about.js');
Ti.include('menuItem.js');
Ti.include('login.js');
Ti.include('map.js');



Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup({
	barColor:'#d9bd61', 
	tabsBackgroundColor:'#f4f4f4', 
	activeTabIconTint:'#292929'
});



var win1 = Titanium.UI.createWindow({
	title:'Vandal Dining', background:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'fork.png', title:'List of Venues',
    window:win1
});


var win2 = Titanium.UI.createWindow({  
    title:'Map View', backgroundColor:'#FFFFFF'
});
var tab2 = Titanium.UI.createTab({  
    icon:'location.png', title:'Map',
    window:win2
});


var win3 = Ti.UI.createWindow({
	title:'My Dining Plan', backgroundColor:'#FFFFFF'
});
var tab3 = Titanium.UI.createTab({
	icon:'money.png', title:'Dining Plan',
	window: win3
});

var win4 = Ti.UI.createWindow({
	title:'About This App', backgroundColor:'#FFFFFF' 
});
var tab4 = Titanium.UI.createTab({
	icon:'about.png', title:'About',
	window: win4
});

//win1.add(diningList);

/*
 * Map
 */
win2.add(moscowView);
win2.add(mapview);


/*
 * Nutrition Info
win2.add(nameLabel);
win2.add(infoLabel);
win2.add(numberLabel);
 *
 */




//"Submit" button on feedback page

submitBtn.addEventListener('click', function() {
		var dialog = Ti.UI.createAlertDialog({
			message:'Thank you! We have recieved your feedback.',
			ok: 'Return to Venue Profile', //change the prase?
			title: 'Feedback Recieved'
		});
		dialog.addEventListener('click', function(e){
   			//win4.open(); //still need to work on this
   			tab3.open(win3);
  		});
		dialog.show();
});
var winFeedback = Ti.UI.createWindow({
	backgroundColor: '#FFFFFF',
	rightNavButton: submitBtn
});
winFeedback.add(feedbackMsg);
winFeedback.add(emailField);
winFeedback.add(commentArea);


//Dining Plan Profile Sign In
win3.add(topLabel);
win3.add(ulabel);
win3.add(username);
win3.add(plabel);
win3.add(password);
win3.add(signin);

//"About the App"
win4.add(appInfo);
win4.add(diningInfo);
win4.add(mealplanInfo);


//
//  add tabs
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);

// open tab group
tabGroup.open();


/* ------------------------------------------------------------------------------ */

//Vandal Dining App
//Jessica G. Greene

var foodList = function () {

//array of venue names
var Venues = ['Bob\'s Place', 'Denny\'s AllNighter', 'The Grid Community Store', 
	'Sisters\' Brew','Stover\'s', 'Einstein\'s Bagels', 'I of the Commons', 
	'Mein Bowl', 'Subconnections',	'Chorizos Mexican Grill', 'Jamba Juice',
	'Paradise Creek Pizza and Grill' ];
	
//array of venue images. Needs to align with matching venue in order.
var rowColor = ['fdfcf8', 'faf6ea', 'f7f0dc', 'f3ebcf', 'f0e5c1', 'eddfb3',
	'e9daa5', 'e6d498', 'e3ce8a', 'e0c87c', 'dcc36f','d9bd61'];
	
	
var allRows = [];
var theVenues = Titanium.UI.createTableView({});
var theRow;

for (var i=0; i <Venues.length; i++) {
	
	theLabel = Titanium.UI.createLabel({
		text:Venues[i],
		textAlign: 'right',
		textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT
	});
	theRow = Titanium.UI.createTableViewRow({backgroundColor:
	rowColor[i], height:50, title:Venues[i],VenueSelection:Venues[i]});//title:Venues[i],
	//theRow.add(theLabel);
	allRows.push(theRow);
}

theVenues.setData(allRows);
win1.add(theVenues);

function getVerdict(venue) {
	//Set all venue information based on selected row.
	Ti.API.info('processing verdict');
	Ti.API.info('venue:'+venue);
	var indicator  = venue.charAt(0);
	Ti.API.info('indicator:'+indicator);
	var VenueName= venue;
	var LargeImage;
	var VenueHours;
	var VenueLocation;
	var MenuItems = [];
	var VenueInfo = [];
	//var venuNamex = 'Testx';
	// 
	switch (indicator) {
		case 'B': //Bob's Place		
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Meal Plan',' N/A']; 
			break;
		case 'D': // Denny's AllNighter
			LargeImage = 'Hungry.png';
			VenueHours = 'Sunday - Thursday: 10:00am - Midnight, '+
				'Friday - Saturday: 10:00am - 2:00am'; 
			VenueLocation = '6th Street Market at the LLC';
			MenuItems = ['Breakfast Skillet','$6.99',
						 'Country Scramble','$7.49',
						 'Breakfast Croissant','$5.99',
						 'Ham and Cheese Sandwich','$7.99']; 
			break;
		case 'T': //The Grid
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Some Cool Item','$6.99',
						 'Country Scramble','$7.49',
						 'Breakfast Croissant','$5.99',
						 'Something You Need','$7.99'];  
			break;
		case 'S': 
			var indicator2 = venue.charAt(1);
			switch(indicator2){
			case 'i': //Sisters'Brew
				
				LargeImage = 'Hungry.png';
				VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
					'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
					'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
					'Dinner: 4:30pm - 7:30pm'; 
				VenueLocation = 'Wallace Complex';
				MenuItems = ['Vanilla Latte','$3.99',
						 'Cappuccino','$4.49',
						 'Brave\' Mocha','$5.99',
						 'Danish','$3.99']; 
				break;
			case 't': //Stovers
				
				LargeImage = 'stoversImage.jpg';
				VenueHours = 'Monday - Friday: 8:00am - 3:00pm, ';
				VenueLocation = 'J.A. Albertson Building';
				MenuItems = ['New England Clam Chowder','$4.99',
						 'Classic Tomato Soup','$4.49',
						 'Chicken Noodle Soup','$4.99',
						 'Vegetable Beef Soup','$4.99',
						 'Beef Pita','$6.99',
						 'Turkey Pita','$6.99',
						 'Ham Pita','$6.99',
						 'Chicken Pita','$6.99',
						 'Bacon Pita','$6.99',
						 'Veggie Pita','$6.99',
						 'Hummus Pita','$6.99',
						 'Breakfast Burrito','$5.99'];  
				break;
					
			case 'u'://Subconnection
				LargeImage = 'Hungry.png';
				VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
					'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
					'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
					'Dinner: 4:30pm - 7:30pm'; 
				VenueLocation = 'Wallace Complex';
				MenuItems = ['Tastey Sub','$6.99',
						 'Super Sub','$7.49',
						 'Veggie Sub','$5.99',
						 'Nuclear Sub','$7.99']; 
				break;
			}
			break;
		case 'E': //Einstein Bros
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Breakfast Ham and Cheese Bagel','$5.99',
						 'The Club Bagel','$7.49',
						 'E=MC^2 Bagel','$7.99',
						 'Everything Bagel','$7.99']; 
			break;
		case 'I': //I of Commons
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Breakfast Skillet','$6.99',
						 'Country Scramble','$7.49',
						 'Breakfast Croissant','$5.99',
						 'Ham and Cheese Sandwich','$7.99'];  
			break;
		case 'M': //Mein Bowl
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Petite Bowl O\' Noodles','$5.99',
						 'Medium Bowl O\' Noodles','$7.49',
						 'Manchurian Bowl O\' Noodles','$9.99',
						 'Some Other Option','$17.99'];  
			break;		
		case 'C': // Cobrizo Mexican Grill
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Breakfast Burrito','$6.99',
						 '3 Tacos and Rice','$5.49',
						 'Enchilada Platter','$6.99',
						 'El Hombre Hamburger','$8.99']; 
			break;
		case 'J': //Jamba Juice
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Tropical Delight','$4.99',
						 'Powerful Punch','$4.49',
						 'Something Good','$5.99',
						 'Something Bad','$7.99'];  
			break;
	}
	VenueInfo = [VenueName,LargeImage,VenueHours,VenueLocation,MenuItems];
	return VenueInfo;
}

function showVenuePage(_args) {
	var VenuePage = Ti.UI.createWindow({layout:'vertical'});
	var VenueView = Ti.UI.createView({
		top:0,
		width: '100%',
		height: '50%',
		backgroundColor: '#1C1C1C'
	});
	
	var MenuView = Ti.UI.createView({
		top:10,
		width: '95%',
		height: '30%'
	});
	
	var VenueInfo = [];

	VenuePage.backgroundColor = '#DDDDDD';
	VenueInfo = getVerdict(_args);
	var VenueName = VenueInfo[0];
	var LargeImage = VenueInfo[1];
	var VenueHours = VenueInfo[2];
	var VenueLocation = VenueInfo[3];
	var MenuItems = VenueInfo[4];
	var MenuRowView;
	
	//var testlabel = Titanium.UI.createLabel();
	var venueLabel = Ti.UI.createLabel
	({text: VenueName, color: 'yellow',top:'0%'});
	VenueView.add(venueLabel);
	var venueImage = Ti.UI.createImageView({
		top: 25,
		image: LargeImage
	});
	VenueView.add(venueImage);
	var venueHoursLabel = Ti.UI.createLabel	({
		text: 'Hours: '+VenueHours, 
		color: 'yellow' ,
		top:'57%',
		width: '80%',
		font:{fontSize: '14'}
	});
	
	var venueLocationLabel = Ti.UI.createLabel	({
		text: 'Location: '+VenueLocation,
		color: 'yellow' ,
		top:'88%',
		font:{fontSize: '14'}
	});

	VenueView.add(venueHoursLabel);
	VenueView.add(venueLocationLabel);

	
	VenuePage.add(VenueView);

//

//


	var FeedbackButton = Titanium.UI.createButton ({
		title: 'Give Us Feedback!',
		top:1,
		//left:10,
		height: 30,
		backgroundColor: '#e9daa5'	
	});
	FeedbackButton.addEventListener('click', function()
	{
		VenuePage.close();
		//release the resources
		VenuePage = null;
		tab1.open(winFeedback);
	});
	VenuePage.add(FeedbackButton);	
	
	
	var menuInfoBtn = Ti.UI.createButton({
		title:'Menu Item Nutrition Info',
		top:10,
		height: 30,
		backgroundColor: '#e9daa5'
	});
	
	var win6 = Ti.UI.createWindow({
		backgroundColor:'#FFFFFF'
	});
	win6.add(nameLabel);
	win6.add(infoLabel);
	win6.add(numberLabel);
	menuInfoBtn.addEventListener('click', function()
	{
		VenuePage.close();
		//release the resources
		VenuePage = null;
		tab1.open(win6);
	});
	VenuePage.add(menuInfoBtn);
	//
	//
	//TableView for Venue Profile
	//
	//
	var venueListView = Ti.UI.createView({
		backgroundColor:'#FFFFFF'
	});
	venueListView.add(theMenuItems);
	var venueListSection = Ti.UI.createTableViewSection({});
	venueListSection.add(theRow);
	//
	var allRows = [];
	var theMenuItems = Titanium.UI.createTableView({});
	var theMenuRow;
	var theFoodLabel, thePriceLabel;
	
	//THIS IS IT??
//	theRow = Titanium.UI.createTableViewRow({
	//		height:20, color: 'black',title:'Menu:'});
	theRow = Titanium.UI.createTableViewRow({
			height:20, color: 'black',title:'Menu:'});
			
	
	allRows.push(theRow);
	for (var i=0; i < MenuItems.length ; i++){//
		Ti.API.info('counting:'+i);//MenuItems[i]');
		theFoodLabel = Titanium.UI.createLabel({
			text: MenuItems[i],
			color:'black',
			textAlign: 'left',
			width: '%50'
		});
		i++;
		thePriceLabel = Titanium.UI.createLabel({
			text: MenuItems[i],
			//textAlign: 'left',
			width: '%50',
			left:'230px'
		});
		//MenuRowView = Titanium.UI.createView({layout: 'horizontal'});
		theRow = Titanium.UI.createTableViewRow({
			//height:20, color: 'black'});//title:MenuItems[i]});
			height:20, color: 'black'});//title:MenuItems[i]});
		theRow.add(theFoodLabel);
		theRow.add(thePriceLabel);
		//MenuRowView.add(theMenuRow);
		allRows.push(theRow);
		//allRows.push(MenuRowView);
	}
	theMenuItems.setData(allRows);

	
	var close = Ti.UI.createButton({
		title:'Venue List Page', 
		color: 'black',
		bottom: 0,
	  	//top: 15,
	  	height:30,
	  	backgroundColor: '#FFFF99'
	 });
	
	close.addEventListener('click', function()
	{
			Ti.API.info('User Clicked Venue List Page button');
			VenuePage.close();
			//release the resources
			VenuePage = null;
	});
	
	//MenuView.add(close);
	MenuView.add(theMenuItems);
	VenuePage.add(MenuView);
	VenuePage.add(close);
	Ti.API.info('VenueName:'+VenueName);
	VenuePage.add(venueLabel);
	VenuePage.add(close);
	VenuePage.open();
}

theVenues.addEventListener('click', function(e)
	{showVenuePage(e.source.VenueSelection);});

};

foodList();

	